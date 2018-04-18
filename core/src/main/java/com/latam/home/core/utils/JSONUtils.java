package com.latam.home.core.utils;

import com.google.gson.Gson;
import com.google.gson.internal.Primitives;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * ----------------------------------------------------------------------------------------------------
 * JSON UTILS
 *
 * This class allows developers to define reusable methods related with JSON objects' manipulation. 
 *
 * CHANGE HISTORY
 * ----------------------------------------------------------------------------------------------------
 * Version  | Date          | Developer                    | Changes
 * 1.0      | Nov/27/2017   | Luis Lopez                   | Initial Creation
 * ----------------------------------------------------------------------------------------------------
 */
public final class JSONUtils {

    private static final Gson GSON = new Gson();

    /**
     * JSONUtils Constructor.
     */
    private JSONUtils() {

    }

    /**
     * Extract a Map from a JSON String.
     *
     * @param jsonString JSON String
     * @return returns the Map
     */
    public static Map<String, Object> getMapFromJson(final String jsonString) {
        final Map<String, Object> menuMap
                = (Map<String, Object>) GSON.fromJson(jsonString, HashMap.class);
        return menuMap;
    }

    /**
     * Extract an Object from a JSON String.
     *
     * @param jsonString JSON String
     * @param type JSON String
     * @param <T> type of class
     * @return returns the Map
     */
    public static <T> T getObjectFromJson(final String jsonString, final Class<T> type) {
        final Object object = GSON.fromJson(jsonString, type);
        T t = Primitives.wrap(type).cast(object);

        Map<String, Object> map = (Map) t;
        map.entrySet().stream().filter(e -> e.getValue() instanceof String && ((String)e.getValue()).startsWith("{"))
        .forEach(e -> map.put(e.getKey(), getObjectFromJson((String)e.getValue(), HashMap.class)));

        return t;
    }

    /**
     * Returns a list of Map objects from a String array.
     *
     * @param array the String array
     * @return a Map list
     */
    public static List<Map> getAsMapList(final String[] array) {
        final List<Map> mapList = new ArrayList<>();
        if (array != null) {
            Arrays.stream(array)
                    .filter(item -> StringUtils.isNotEmpty(item))
                    .forEach(item -> mapList.add(getObjectFromJson(item, Map.class)));
        }
        return mapList;
    }

}

