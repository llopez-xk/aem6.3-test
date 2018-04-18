Latam.Tamviagens.Widgets.LatamMultifield = CQ.Ext.extend(CQ.form.MultiField, {

    constructor: function(config) {
        var list = this;

        if (typeof config.orderable === "undefined") {
            config.orderable = true;
        }

        if (!config.fieldConfig) {
            config.fieldConfig = {};
        }
        if (!config.fieldConfig.xtype) {
            config.fieldConfig.xtype = "textfield";
        }
        config.fieldConfig.name = config.name;
        config.fieldConfig.ownerCt = this;
//        config.fieldConfig.style = "width:95%;";
        config.fieldConfig.orderable = config.orderable;
        config.fieldConfig.dragDropMode = config.dragDropMode;
        if (!config.addItemLabel) {
            config.addItemLabel = CQ.I18n.getMessage("Add Item");
        }

        if (!config.fieldConfig.limit) {
            config.fieldConfig.limit = "0";
        }

        var items = new Array();

        if(config.readOnly) {
            //if component is defined as readOnly, apply this to all items
            config.fieldConfig.readOnly = true;
        } else {
            items.push({
                xtype: "toolbar",
                cls: "cq-multifield-toolbar",
                items: [
                    "->",
                    {
                        xtype: "textbutton",
                        text: config.addItemLabel,
                        style: "padding-right:6px",
                        handler:function() {
                            if(config.fieldConfig.limit == 0 || list.items.getCount() <= config.fieldConfig.limit) {
                                list.addItem();
                            } else {
                                CQ.Ext.Msg.show({
                                    title: 'Limite alcanzado',
                                    msg: 'Solo tiene permitido agregar hasta ' + config.fieldConfig.limit +
                                        ' items en este dialogo.',
                                    icon:CQ.Ext.MessageBox.WARNING,
                                    buttons: CQ.Ext.Msg.OK
                                });
                            }
                        }
                    },
                    {
                        xtype: "button",
                        iconCls: "cq-multifield-add",
                        template: new CQ.Ext.Template('<span><button class="x-btn" type="{0}"></button></span>'),
                        handler: function() {
                            if(config.fieldConfig.limit == 0 || list.items.getCount() <= config.fieldConfig.limit) {
                                list.addItem();
                            } else {
                                CQ.Ext.Msg.show({
                                    title: 'Limite alcanzado',
                                    msg: 'Solo tiene permitido agregar hasta ' + config.fieldConfig.limit +
                                        ' items en este dialogo.',
                                    icon:CQ.Ext.MessageBox.WARNING,
                                    buttons: CQ.Ext.Msg.OK
                                });
                            }
                        }
                    }
                ]
            });
        }

        this.hiddenDeleteField = new CQ.Ext.form.Hidden({
            "name":config.name + CQ.Sling.DELETE_SUFFIX
        });
        items.push(this.hiddenDeleteField);

        if (config.typeHint) {
            this.typeHintField = new CQ.Ext.form.Hidden({
                name: config.name + CQ.Sling.TYPEHINT_SUFFIX,
                value: config.typeHint + "[]"
            });
            items.push(this.typeHintField);
        }

        config = CQ.Util.applyDefaults(config, {
            "defaults":{
                "xtype":"multifielditem",
                "fieldConfig":config.fieldConfig
            },
            "items":[
                {
                    "xtype":"panel",
                    "border":false,
                    "bodyStyle":"padding:" + this.bodyPadding + "px",
                    "items":items
                }
            ]
        });
        CQ.form.MultiField.superclass.constructor.call(this,config);
        if (this.defaults.fieldConfig.regex) {
            // somehow regex get broken in this.defaults, so fix it
            this.defaults.fieldConfig.regex = config.fieldConfig.regex;
        }
        this.addEvents(
            /**
             * @event change
             * Fires when the value is changed.
             * @param {CQ.form.MultiField} this
             * @param {Mixed} newValue The new value
             * @param {Mixed} oldValue The original value
             */
            "change",
            /**
             * @event removeditem
             * Fires when an item is removed.
             * @param {CQ.form.MultiField} this
             */
            "removeditem"
        );
    }

});
// register xtype
CQ.Ext.reg('latammultifield', Latam.Tamviagens.Widgets.LatamMultifield);