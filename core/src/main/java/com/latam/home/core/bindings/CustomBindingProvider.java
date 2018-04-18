package com.latam.home.core.bindings;

import javax.script.Bindings;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.scripting.api.BindingsValuesProvider;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMBindings;

@Component(immediate = true, service=BindingsValuesProvider.class,
        property={"javax.script.name=sightly", Constants.SERVICE_RANKING +":Integer=1001"})

public class CustomBindingProvider implements BindingsValuesProvider {

    private static Logger log = LoggerFactory.getLogger(CustomBindingProvider.class);

    private static final String DEFAULT_CONFIG_NODE_NAME = "latam.config";
    private static final String DEFAULT_CONFIG_CONTEXT_NAME = "config";

    @Override
    public void addBindings(Bindings bindings) {

        if ( bindings.containsKey(WCMBindings.COMPONENT)) {
            // Config context
            com.day.cq.wcm.api.components.Component component = (com.day.cq.wcm.api.components.Component)
                    bindings.get(WCMBindings.COMPONENT);
            Resource configResource = component.getLocalResource(DEFAULT_CONFIG_NODE_NAME);
            if (configResource != null) {
                bindings.put(DEFAULT_CONFIG_CONTEXT_NAME, configResource.adaptTo(ValueMap.class));
            }
        }
    }
}

