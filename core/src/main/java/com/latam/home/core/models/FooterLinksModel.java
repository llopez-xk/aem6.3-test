package com.latam.home.core.models;

import com.latam.home.core.injectors.annotations.DeserializeJSON;
import com.latam.home.core.injectors.enums.PropertiesContext;
import com.latam.home.core.services.LatamRatesService;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Path;
import org.apache.sling.models.annotations.Source;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.io.File;
import java.io.FileFilter;
import java.util.Collections;
import java.util.List;
import java.util.Map;


/**
 * ----------------------------------------------------------------------------------------------------
 * Footer Links Model
 *
 * This class retrieves a list of links to populate the footer's links
 * and uses a custom injector to do so.
 *
 * CHANGE HISTORY
 * ----------------------------------------------------------------------------------------------------
 * Version  | Date          | Developer                    | Changes
 * 1.0      | Nov/27/2017   | Luis Lopez                   | Initial Creation
 * ----------------------------------------------------------------------------------------------------
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class})
public class FooterLinksModel {

    private static final Logger LOGGER = LoggerFactory.getLogger(FooterLinksModel.class);

    //@DeserializeJSON(context = PropertiesContext.LOCAL)
    @DeserializeJSON(context = PropertiesContext.GLOBAL)
    //@Inject @Source("deserialize-json")
    //@Inject
    private List<Map> fieldsColumnA;

    @Inject
    //@SlingObject
    private Resource resource;

    @Inject
    ////@Inject @Source("script-bindings")
    private ValueMap config;

    @Inject
    //@ScriptVariable
    private ValueMap globalProperties;

    @Inject
    //@ScriptVariable
    private ValueMap mergedProperties;

    @ResourcePath @Path("/content/latam/en/jcr:content/content/mensajeria")
    private Resource anyResource;

    @Inject
    private LatamRatesService latamRatesService;



    private String[] linksGP = null;

    //@PostConstruct
    protected void init() {
        // some init code
    }

    /**
     * Returns a list of links from the first column.
     *
     * @return list of Maps
     */
    public List<Map> getFirstColumnList() {
        LOGGER.info("+++++++++++++++ SCRIPT BINDINGS (config): " + config.get("test", String.class));
        LOGGER.info("+++++++++++++++ SCRIPT BINDINGS (globalProperties): " + globalProperties.get("title", String.class));
        LOGGER.info("+++++++++++++++ SCRIPT BINDINGS (mergedProperties): " + mergedProperties.get("title", String.class));
        LOGGER.info("*************** RESOURCE PATH: " + resource.getPath());
        LOGGER.info("*************** ANY PATH: " + anyResource);
        LOGGER.info("*************** fieldsColumnA: " + fieldsColumnA);
        LOGGER.info("*************** LatamRatesService: " + latamRatesService.getEncryptedRatesId(Collections.emptySet()));
        //links.forEach(map -> map.forEach((k,v) -> LOGGER.info("key: " + k + ", value :" + v)));
        return fieldsColumnA;
    }

    public String[] getLinks() {
        return linksGP;
    }

}

