package com.latam.home.core.injectors;

import com.latam.home.core.injectors.annotations.DeserializeJSON;
import com.latam.home.core.injectors.enums.PropertiesContext;
import com.latam.home.core.utils.JSONUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.scripting.SlingBindings;
import org.apache.sling.models.spi.DisposalCallbackRegistry;
import org.apache.sling.models.spi.Injector;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.AnnotatedElement;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

@Component(immediate = true, service = Injector.class, property = {Constants.SERVICE_RANKING + ":Integer=1001"})
public class DeserializeJSONInjector extends AbstractInjector implements Injector {

    private static Logger log = LoggerFactory.getLogger(DeserializeJSONInjector.class);

    public String getName() {
        return "deserialize-json";
    }

    @Override
    public Object getValue(Object o, String s, Type type, AnnotatedElement annotatedElement, DisposalCallbackRegistry disposalCallbackRegistry) {

        if (!isDeclaredTypeCollection(type)) {
            return null;
        }
        ParameterizedType parameterizedType = (ParameterizedType) type;
        Type[] params = parameterizedType.getActualTypeArguments();
        if (params.length == 0) {
            return null;
        }
        Class<?> paramClassType = (Class<?>) params[0];
        Class<?> rawClassType = (Class<?>) parameterizedType.getRawType();
        // the annotated element has to be of type List<Map>
        if (!(paramClassType == Map.class) && !(rawClassType == List.class)) {
            return null;
        }

        DeserializeJSON deserializeJSONAnnotation = annotatedElement.getAnnotation(DeserializeJSON.class);
        if (deserializeJSONAnnotation != null) {
            PropertiesContext context = deserializeJSONAnnotation.context();

            if (context.equals(PropertiesContext.SHARED) || context.equals(PropertiesContext.SHARED_PROPERTIES)) {
                // Deserialize JSON from shared properties
                String[] jsonArray = getJSONArrayFromBinding(o, "sharedProperties", s);
                return deserializeJSON(jsonArray);
            }
            if (context.equals(PropertiesContext.GLOBAL) || context.equals(PropertiesContext.GLOBAL_PROPERTIES)) {
                // Deserialize JSON from global properties
                String[] jsonArray = getJSONArrayFromBinding(o, "globalProperties", s);
                return deserializeJSON(jsonArray);
            }
            if (context.equals(PropertiesContext.MERGED) || context.equals(PropertiesContext.MERGED_PROPERTIES)) {
                // Deserialize JSON from merged properties
                String[] jsonArray = getJSONArrayFromBinding(o, "mergedProperties", s);
                return deserializeJSON(jsonArray);
            }
            if (context.equals(PropertiesContext.CONFIG) || context.equals(PropertiesContext.CONFIG_PROPERTIES)) {
                // Deserialize JSON from config properties
                String[] jsonArray = getJSONArrayFromBinding(o, "config", s);
                return deserializeJSON(jsonArray);
            }
        }


        if (o instanceof Resource || o instanceof SlingHttpServletRequest) {

            Resource resource = getResource(o);
            String[] jsonArray = getJSONArrayFromResource(resource, s);
            return deserializeJSON(jsonArray);

        }

       return null;
    }

    private String[] getJSONArrayFromResource(Resource resource, String property) {

        ValueMap vm = resource.adaptTo(ValueMap.class);
        return vm.get(property, new String[0]);
    }

    private String[] getJSONArrayFromBinding(Object adaptable, String binding, String property) {

        SlingBindings slingBindings = getBindings(adaptable);
        if (slingBindings != null) {
            Map bindingProperties = (Map)slingBindings.get(binding);
            if (bindingProperties != null) {
                Object prop = bindingProperties.get(property);
                if (prop instanceof String[] || prop instanceof String) {
                    return (String[]) bindingProperties.getOrDefault(property, new String[0]);
                }
            }
        }
        return new String[0];
    }

    private List<Map> deserializeJSON(String[] jsonArray) {
        return JSONUtils.getAsMapList(jsonArray);
    }

    private Resource getResource(Object adaptable) {

        if (adaptable instanceof SlingHttpServletRequest) {
            return ((SlingHttpServletRequest) adaptable).getResource();
        }
        if (adaptable instanceof Resource) {
            return (Resource) adaptable;
        }

        return null;
    }

    private SlingBindings getBindings(Object adaptable) {

        if (adaptable instanceof SlingBindings) {
            return (SlingBindings) adaptable;
        } else if (adaptable instanceof SlingHttpServletRequest) {
            SlingHttpServletRequest request = (SlingHttpServletRequest) adaptable;
            return (SlingBindings) request.getAttribute(SlingBindings.class.getName());
        }
        return null;
    }
}
