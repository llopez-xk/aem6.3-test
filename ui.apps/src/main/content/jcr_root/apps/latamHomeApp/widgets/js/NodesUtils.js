/**
* @fileoverview Node utilities using CQ.HTTP.post to invoke SlingPostServlet
* @author Jorge Escobar
* @version 1.0
*/

Latam.authoring.NodesUtils = {

    /**
     *  Creates a new Node with a set of properties
     *  @param {String} path: page path
     *  @param {String} nodeName : Node name
     *  @param {JSON Object} nodeProperties : Object with the properties of node to create i.e {"myProp":"myValue"}.
     */
    createNode: function(path, nodeName, nodeProperties) {
        path = Latam.authoring.NodesUtils.validateJcrContent(path);
        CQ.HTTP.post(path + "/" + nodeName, null, nodeProperties);
    },

    /**
     *  Deletes a node
     *  @param {String} nodePath: Path of the Node to delete
     */
    deleteNode: function(nodePath) {
        var params = {};
        params[":operation"] = "delete";
        params[":applyTo"] = nodePath;
        CQ.HTTP.post(nodePath, null, params);
    },

    /**
     *  Copies a node
     *  @param {String} pathOrigin: Node origin path
     *  @param {String} pathDest: Node destiny path
     */
    copyNode: function(pathOrigin, pathDest) {
        var params = {};
        params[":operation"] = "copy";
        params[":replace"] = true;
        params[":dest"] = pathDest + "/";
        CQ.HTTP.post(pathOrigin + "/", null, params);
    },

    /**
     *  Moves a node from one path to another
     *  @param {String} pathOrigin: Node origin path
     *  @param {String} pathDest: New Node Path
     */
    moveNode: function(pathOrigin, pathDest) {
        var params = {};
        params[":operation"] = "move";
        params[":dest"] = pathDest+"/";
        CQ.HTTP.post(pathOrigin, null, params);
    },

    /**
     *  Renames a node
     *  @param {String} nodePath: Path of the Node
     *  @param {String} newName: New node name
    */
    renameNode: function(nodePath, newName) {
        var params = {};
        var nodePathArray = nodePath.split('/');
        var nodeName = nodePathArray[nodePathArray.length - 1];
        var newPath = nodePath.replace(nodeName, newName);
        params[":operation"] = "copy";
        params[":replace"] = true;
        params[":dest"] = newPath;
        CQ.HTTP.post(nodePath, null, params);
        Latam.authoring.NodesUtils.deleteNode(nodePath);
    },

    /**
     *   Creates a new property into a node
     *   @param {String} nodePath: Path of the Node
     *   @param {String} propertyName: Property name to create
     *   @param {String} propertyValue: Property value to create
     */
    createProperty: function(nodePath, propertyName, propertyValue) {
        var params = {};
        params[propertyName] = propertyValue;
        CQ.HTTP.post(nodePath, null, params);
    },

    /**
     *   Creates a set of properties into a node
     *   @param {String} nodePath: Path of the Node
     *   @param {String} nodeProperties: All set of properties to create in the Node in JSON Format i.e {"myProp":"myValue"...}.
     */
    createProperties: function(nodePath, nodeProperties) {
        CQ.HTTP.post(nodePath, null, nodeProperties);
    },

    /**
     *   Delete a single property from node
     *   @param {String} nodePath: Path of the Node
     *   @param {String} property: property to delete
     */
    deleteProperty: function(nodePath, property) {
        var params = {};
        params[property + "@Delete"] = null;
        params["_charset_"] = "utf-8";
        $CQ.post(nodePath, params, null);
    },

    /**
     *   Copy a single property into another node
     *   @param {String} nodePath: Path of the Node
     *   @param {String} property: Property of node
     *   @param {String} pathDestiny: Path of the node in which the property will copy.
     */
    copyProperty : function(nodePath,property,pathDestiny){
       var propertyValue = Latam.authoring.NodesUtils.getNodeProperty(nodePath,property);
       Latam.authoring.NodesUtils.createProperty(pathDestiny,property,propertyValue);
    },

    /**
     *   Gets all properties from a node
     *   @param {String} nodePath: Path of the Node
     */
    getNodeProperties: function(nodePath) {
        var response = CQ.HTTP.get(nodePath + ".json");
        return response["body"];
    },

    /**
     *   Gets a single property given a property name from a node
     *   @param {String} nodePath: Path of the Node
     *   @param {String} key: Property to get from the Node
     */
    getNodeProperty: function(nodePath, key) {
        var response = CQ.HTTP.get(nodePath + ".json");
        var jsonResponse = JSON.parse(response["body"]);
        return jsonResponse[key];
    },

    /**
     *   Helps to parse the /jcr:content format when it's given a simple cq:page
     *   @param {String} path: Path of the Node
     */
    validateJcrContent: function(path) {
        if (path.indexOf("jcr:content") == -1) {
            path = path + "/jcr:content";
            return path;
        } else {
            return path;
        }
    }
};