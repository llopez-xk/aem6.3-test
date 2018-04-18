package com.latam.home.core.services.impl;

import java.io.InputStream;
import java.util.Set;

import com.latam.home.core.services.ocd.LatamRatesServiceConfiguration;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.latam.home.core.services.LatamRatesService;

@Component(
        service = LatamRatesService.class,
        immediate = true)
@Designate(ocd = LatamRatesServiceConfiguration.class)
public class LatamRatesServiceImpl implements LatamRatesService {

    private Logger LOGGER = LoggerFactory.getLogger(LatamRatesServiceImpl.class);

    private LatamRatesServiceConfiguration config;

    @Activate
    public void activate(LatamRatesServiceConfiguration config) {
        this.config = config;
    }

    @Override
    public Set<String> getEncryptedRatesId(Set<String> ratesIds) {
        LOGGER.info("====== init getEncryptedRatesId: " + config.uriPropertyName());
        if(ratesIds.isEmpty()) {
            return null;
        }

        return null;

    }

}
