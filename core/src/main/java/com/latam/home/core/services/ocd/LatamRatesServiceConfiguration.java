package com.latam.home.core.services.ocd;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Latam Rates Service Configuration", description = "Latam Rates Service Configuration")
public @interface LatamRatesServiceConfiguration {

    @AttributeDefinition(name = "URI Property Name", description = "Configuration value", defaultValue = "https://www.lan.com/ws/api/dynamic-pricing/v1/encryption/search")
    String uriPropertyName();
}
