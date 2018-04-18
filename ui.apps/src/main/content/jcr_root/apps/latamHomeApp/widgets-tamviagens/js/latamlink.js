Latam.Tamviagens.Widgets.Link = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @private
     * @type CQ.Ext.form.Hidden
     */
    hiddenField: null,

    /**
     * @private
     * @type CQ.form.DialogFieldSet
     */
    container: null,

    /**
     * @private
     * @type CQ.Ext.form.PathField
     */
    path: null,

    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    alt: null,

    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    title: null,

    /**
     * @private
     * @type CQ.form.Selection
     */
    target: null,

    constructor: function(config) {
        config = config || { };
        var defaults = {
            "border": false,
            "columns": 4,
            "fieldsWidth" : 200
        };
        // default table widths
        if (config.layout == 'table'){
            defaults["fieldsWidth"] = 125;
        }
        config = CQ.Util.applyDefaults(config, defaults);
        // default widths
        this.rootPath = config.rootPath;
        this.pathWidth = config.fieldsWidth;
        this.titleWidth = config.fieldsWidth;
        this.altWidth = config.fieldsWidth;
        this.targetWidth = config.fieldsWidth;
        this.pathAllowBlank = config.pathAllowBlank;
        this.textAllowBlank = config.textAllowBlank;
        this.titleAllowBlank = config.titleAllowBlank;
        if (config.pathAllowBlank === undefined) {
            this.pathAllowBlank = true;
        }
        if (config.textAllowBlank === undefined) {
            this.textAllowBlank = true;
        }
        if (config.titleAllowBlank === undefined) {
            this.titleAllowBlank = true;
        }


        if (config.rootPath === undefined) {
            this.rootPath = "/content/latam";
        }

        // specific widths
        if (config.pathWidth){
            this.pathWidth = config.pathWidth;
        }
        if (config.titleWidth){
            this.titleWidth = config.titleWidth;
        }
        if (config.altWidth){
            this.altWidth = config.altWidth;
        }
        if (config.targetWidth){
            this.targetWidth = config.targetWidth;
        }

        Latam.Tamviagens.Widgets.Link.superclass.constructor.call(this, config);
    },

    // overriding CQ.Ext.Component#initComponent
    initComponent: function() {
        Latam.Tamviagens.Widgets.Link.superclass.initComponent.call(this);

        this.hiddenField = new CQ.Ext.form.Hidden({
            name: this.name
        });
        this.add(this.hiddenField);

        this.path = new CQ.form.PathField({
            fieldLabel: CQ.I18n.getMessage("Link"),
            fieldDescription: CQ.I18n.getMessage("Link page"),
            rootPath: this.rootPath,
            allowBlank: this.pathAllowBlank,
            listeners:{
                blur: {
                    scope: this,
                    fn: this.pathValidator
                },
                dialogselect: {
                    scope: this,
                    fn: this.checkPathExtension
                }
            },
            name: this.name + "Path",
            width: this.pathWidth
        });

        this.add(this.path);
        //Label only for tamviagens
        this.title = new CQ.Ext.form.TextField({
            emptyText: CQ.I18n.getMessage("Text"),
            fieldLabel: CQ.I18n.getMessage("Text"),
            fieldDescription: CQ.I18n.getMessage("Link text"),
            allowBlank: this.textAllowBlank,
            listeners: {
                change: {
                    scope: this,
                    fn: this.updateHidden
                }
            },
            name: this.name + "Title",
            width: this.titleWidth
        });
        this.add(this.title);
        //Label only for tamviagens
        this.alt = new CQ.Ext.form.TextField({
            emptyText: CQ.I18n.getMessage("Title"),
            fieldLabel: CQ.I18n.getMessage("Title"),
            fieldDescription: CQ.I18n.getMessage("Link tooltip"),
            allowBlank: this.titleAllowBlank,
            listeners: {
                change: {
                    scope: this,
                    fn: this.updateHidden
                }
            },
            name: this.name + "Alttext",
            width: this.altWidth
        });
        this.add(this.alt);


        this.target = new CQ.form.Selection({
            type: "checkbox",
            options: this.getCheckboxValue(),
            listeners: {
                selectionchanged: {
                    scope: this,
                    fn: this.updateHidden
                }
            },
            margins:{top:0, right:0, bottom:-39, left:0},
            name: this.name + "Target",
            width: this.targetWidth
        });
        this.add(this.target);
    },

    // overriding CQ.form.CompositeField#processPath
    processPath: function(path) {
        this.path.processPath(path);
        this.title.processPath(path);
        this.alt.processPath(path);
        this.target.processPath(path);
        this.hiddenField.processPath(path);
    },

    // overriding CQ.form.CompositeField#processRecord
    processRecord: function(record, path) {
        this.path.processRecord(record, path);
        this.title.processRecord(record, path);
        this.alt.processRecord(record, path);
        this.target.processRecord(record, path);
        this.hiddenField.processRecord(record,path);
    },

    setValue: function (values) {
        var result = JSON.parse(values);
        this.path.setValue(result['path']);
        this.title.setValue(result['title']);
        this.alt.setValue(result['alttext']);
        this.target.setValue(result['target']);
        this.hiddenField.setValue(values);
    },

    getValue: function () {
        return this.getRawValue();
    },

    getCheckboxValue: function()
    {
        return [{
            "text": "&nbsp&nbsp&nbsp&nbsp" + CQ.I18n.getMessage("Open in a new window"),
            "value":"_blank"

        }]
    },

    getRawValue: function () {
        var result = {};
        result['path'] = this.path.getValue();
        result['title'] = this.title.getValue();
        result['alttext'] = this.alt.getValue();
        result['target'] = this.target.getValue();
        var obj = JSON.stringify(this.target.getValue());
        if (obj == "[]") {
            result['target'] = "_self";
        } else {
            result['target'] = "_blank";
        }
        return JSON.stringify(result);
    },

    // private
    updateHidden: function () {
        this.hiddenField.setValue(this.getValue());
    },

    // private
    checkPathExtension : function(){
        // Add .html if it's an internal path from content.
        if (this.path.getValue().indexOf("/content/") == 0 && this.path.getValue().indexOf(".html") == -1) {
            this.path.setValue(this.path.getValue()+".html");
        }
        this.updateHidden();
    },

    // private
    pathValidator : function(){
        if (this.path.getValue().indexOf("/content/") != 0 && this.path.getValue().indexOf("http://") != 0 && this.path.getValue().indexOf("https://") != 0){
            //TODO: This message needs to be i18n
            this.path.markInvalid("El URL externo debe iniciar con http:// o https://");
        } else {
            this.checkPathExtension();
        }
    }
});

// register xtype
CQ.Ext.reg('linkfield', Latam.Tamviagens.Widgets.Link);
