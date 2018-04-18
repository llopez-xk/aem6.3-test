package com.latam.home.core.injectors.annotations;

import com.latam.home.core.injectors.enums.PropertiesContext;
import org.apache.sling.models.annotations.Source;
import org.apache.sling.models.spi.injectorspecific.InjectAnnotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@InjectAnnotation
@Source("deserialize-json")
public @interface DeserializeJSON {
    PropertiesContext context();
}
