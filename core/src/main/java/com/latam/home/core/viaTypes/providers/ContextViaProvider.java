package com.latam.home.core.viaTypes.providers;

import com.latam.home.core.viaTypes.ContextProviderType;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.scripting.SlingBindings;
import org.apache.sling.models.annotations.ViaProviderType;
import org.apache.sling.models.spi.ViaProvider;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ContextViaProvider implements ViaProvider {

    private static final Logger log = LoggerFactory.getLogger(ContextViaProvider.class);

    @Override
    public Class<? extends ViaProviderType> getType() {
        return ContextProviderType.class;
    }

    @Override
    public Object getAdaptable(Object original, String value) {

        log.info("-------------- USING ContextViaProvider with value: " + value);
        if (original instanceof SlingHttpServletRequest) {
            SlingHttpServletRequest request = (SlingHttpServletRequest) original;
            return request.getAttribute(SlingBindings.class.getName());
        }

        return ViaProvider.ORIGINAL;
    }
}
