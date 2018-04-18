Latam.authoring.Widgets.Link = CQ.Ext.extend(CQ.form.CompositeField, {

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
        this.pathHidden = config.pathHidden;
        this.titleHidden = config.titleHidden;
        this.textHidden = config.textHidden;
        this.targetHidden = config.targetHidden;
        if (config.pathAllowBlank === undefined) {
            this.pathAllowBlank = true;
        }
        if (config.textAllowBlank === undefined) {
            this.textAllowBlank = true;
        }
        if (config.titleAllowBlank === undefined) {
            this.titleAllowBlank = true;
        }
        if (config.pathHidden=== undefined) {
            this.pathHidden = false;
        }
        if (config.textHidden=== undefined) {
            this.textHidden = false;
        }
        if (config.titleHidden=== undefined) {
            this.titleHidden = false;
        }
        if (config.targetHidden === undefined) {
            this.targetHidden = false;
        }

        if (config.rootPath === undefined) {
            this.rootPath = "/content/latam";
        }

        if (config.textMaxLength) {
            this.textMaxLength = config.textMaxLength;
        } else {
            this.textMaxLength = Number.MAX_VALUE;
        }

        if (config.titleMaxLength) {
            this.titleMaxLength = config.titleMaxLength;
        } else {
            this.titleMaxLength = Number.MAX_VALUE;
        }

        if (config.pathDescription) {
            this.pathDescription= config.pathDescription;
        } else {
            this.pathDescription = "Path or URL of the page";
        }

        if (config.textDescription) {
            this.textDescription= config.textDescription;
        } else {
            this.textDescription = "Text for the link";
        }

        if (config.titleDescription) {
            this.titleDescription= config.titleDescription;
        } else {
            this.titleDescription = "Title for the link tooltip";
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

        //default Values
        this.defaultPath = "";
        this.defaultTitle = "";
        this.defaultAlt = "";
        if (config.defaultPath) {
            this.defaultPath = config.defaultPath;
        }
        if (config.defaultTitle) {
            this.defaultTitle = config.defaultTitle;
        }
        if (config.defaultAlt) {
            this.defaultAlt = config.defaultAlt;
        }

        //used to hide the latamlink
        if(config.hiddenLatamLink){

                this.pathHidden = true;
                this.titleHidden = true;
                this.textHidden = true;
                this.targetHidden = true;
        }

        Latam.authoring.Widgets.Link.superclass.constructor.call(this, config);
    },

    // overriding CQ.Ext.Component#initComponent
    initComponent: function() {
        Latam.authoring.Widgets.Link.superclass.initComponent.call(this);

        this.hiddenField = new CQ.Ext.form.Hidden({
            name: this.name
        });
        this.add(this.hiddenField);

        this.path = new CQ.form.PathField({
            fieldLabel: CQ.I18n.getMessage("Link"),
            fieldDescription: CQ.I18n.getMessage(this.pathDescription),
            rootPath: this.rootPath,
            allowBlank: this.pathAllowBlank,
            hidden: this.pathHidden,
            defaultValue : this.defaultPath,
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
        if (this.pathHidden) {
            if (!this.pathAllowBlank) {
                this.path.allowBlank = true;
            }
        }
        this.add(this.path);

        this.title = new CQ.Ext.form.TextField({
            emptyText: CQ.I18n.getMessage("Text"),
            fieldLabel: CQ.I18n.getMessage("Text"),
            fieldDescription: CQ.I18n.getMessage(this.textDescription),
            allowBlank: this.textAllowBlank,
            hidden: this.textHidden,
            maxLength: this.textMaxLength,
            defaultValue : this.defaultTitle,
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
        if (this.textHidden) {
            if (!this.textAllowBlank) {
                this.title.allowBlank = true;
            }
        }

        this.alt = new CQ.Ext.form.TextField({
            emptyText: "Title",
            fieldLabel: "Title",
            fieldDescription: CQ.I18n.getMessage(this.titleDescription),
            allowBlank: this.titleAllowBlank,
            hidden: this.titleHidden,
            maxLength: this.titleMaxLength,
            defaultValue : this.defaultAlt,
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
        if (this.titleHidden) {
            if (!this.titleAllowBlank) {
                this.alt.allowBlank = true;
            }
        }


        this.target = new CQ.form.Selection({
            type: "checkbox",
            options: this.getCheckboxValue(),
            hidden: this.targetHidden,
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
        if (this.path.getValue().indexOf("/content/") != 0 && this.path.getValue().indexOf("http://") != 0 && this.path.getValue().indexOf("https://") != 0 && this.path.getValue().indexOf("tel:") != 0){
            //TODO: This message needs to be i18n
            var invalidMessage = CQ.I18n.getMessage("The external URL should contain http://, https:// or tel: in the case of telephone numbers");
            this.path.markInvalid(invalidMessage);            
        } else {
            this.checkPathExtension();
        }
    }    
});

// register xtype
CQ.Ext.reg('latamlink', Latam.authoring.Widgets.Link);
