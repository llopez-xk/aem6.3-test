/**
 * DESCRIPTION
 * -----------------------------------------------------------------------------
 *  This widget allows to add unlimited number of widgets, it would be used in
 *  the widget multifield provided by CQ.
 *  The way to use it is the following.
 *
 *
 *    -dialog [cq:Dialog]
 *      -items [cq:WidgetCollection]
 *        -items [cq:WidgetCollection]
 *          -tab1 [cq:Panel]
 *            -items [cq:WidgetCollection]
 *              -slides [cq:Widget, xtype = multifield]
 *                -fieldCofig [nt:unstructured, xtype = latammulticolumn]
 *                  -xpressmulticolumnitems [nt:unstructured](this node must to
 *                                                          have this name)
 *                     -text [nt:unstructured, xtype = textfield]
 *                     - add all yours fields here with node type
 *                       nt:unstructured.
 *
 *
 *  By Default it has only the xtype selection, pathfield and textfield. the
 *  default xtype is textfield. If you want to have more of them you can add
 *  these in the function 'getWidgetByConf' which is at the bottom of this file.
 * -----------------------------------------------------------------------------
 *
 * CHANGE HISTORY
 * -----------------------------------------------------------------------------
 * Version | Date        | Developer              | Changes
 * 1.0     | 04/22/2014  | Lesly Quiñonez         | Initial Creation
 * 1.1     | 05/06/2014  | Lesly Quiñonez         | Added datefield xtype.
 * -----------------------------------------------------------------------------
 */

Latam.Tamviagens.Widgets.Multicolumn = CQ.Ext.extend(CQ.form.CompositeField, {
    hiddenField: null,
    xtypes: null,
    optionsArrays: null,
    fields: null,
    xpressmulticolumnitems: null,
    names: null,

    constructor: function (config) {
        config = config || {};

        var defaults = {
            border: true,
            layout: "form"
        };

        this.fields = new Array();
        config = CQ.Util.applyDefaults(config, defaults);

        Latam.Tamviagens.Widgets.Multicolumn.superclass.constructor.call(this, config);
    },

    initComponent: function () {
        Latam.Tamviagens.Widgets.Multicolumn.superclass.initComponent.call(this);

        var that = this;
        var index = 0;
        $.each(this.xpressmulticolumnitems, function(key, value){
            if (key !== 'jcr:primaryType') {
                var field = getWidgetByConf(value,that);
                that.add(field);
                that.fields[index] = field;
                index++;
            }
        });

        this.hiddenField = new CQ.Ext.form.Hidden({
            name: this.name
        });
        this.add(this.hiddenField);

    },

    processInit: function (path, record) {
        $.each(this.fields, function(index, entry){
            entry.processInit(path, record);
        });
    },

    setValue: function (values) {
        var temp = JSON.parse(values);
        var that = this;
        $.each(this.fields, function(index, entry){
            if (entry.name) {
                var entryName = entry.name.replace('.\/', '');
                if (entry.xtype === 'datefield') {
                    var date = new Date(temp[entryName]);
                    entry.setValue(date);
                } else {
                    entry.setValue(temp[entryName]);
                }
            }
        });
        this.hiddenField.setValue(values);
    },

    getValue: function () {
        return this.getRawValue();
    },

    getRawValue: function () {

        var tmp = {};
        $.each(this.fields, function(index, entry){
            if (entry.name) {
                var entryName = entry.name.replace('.\/', '');
                tmp[entryName] = entry.getValue();
            }
        });
        return JSON.stringify(tmp);
    },

    updateHidden: function () {
        this.hiddenField.setValue(this.getValue());
    }
});

var getWidgetByConf = function (conf, that) {
    var field = null;
    if (conf.xtype === 'selection') {
        conf.listeners = {
            selectionchanged: {
                scope: that,
                fn: that.updateHidden
            }
        };
        if (!conf.width) {
            conf.width = 130;
        }
        field = new CQ.form.Selection(conf);
    } else if (conf.xtype === 'pathfield') {
        conf.listeners = {
            change: {
                scope: that,
                fn: that.updateHidden
            },
            dialogselect: {
                scope: that,
                fn: that.updateHidden
            }
        };
        if (!conf.width) {
            conf.width = 130;
        }
        field = new CQ.form.PathField(conf);
    }  else if (conf.xtype === 'datefield') {
        conf.listeners = {
            change: {
                scope: that,
                fn: that.updateHidden
            }
        };
        if (!conf.width) {
            conf.width = 130;
        }
        field = new CQ.Ext.form.DateField(conf);
    }  else if (conf.xtype === 'linkfield') {
        conf.listeners = {
            change: {
                scope: that,
                fn: that.updateHidden
            }
        };
        if (!conf.width) {
            conf.width = 350;
        }
        field = new Latam.Tamviagens.Widgets.Link(conf);
    }else if (conf.xtype === 'textArea') {
        conf.listeners = {
            change: {
                scope: that,
                fn: that.updateHidden
            }
        };
        if (!conf.width) {
            conf.width = 130;
        }
        field = new CQ.Ext.form.TextArea(conf);
    } else {
        conf.listeners = {
            change: {
                scope: that,
                fn: that.updateHidden
            }
        };
        if (!conf.width) {
            conf.width = 200;
        }
        field = new CQ.Ext.form.TextField(conf);
    }

    return field;
};

// register xtype
CQ.Ext.reg('latammulticolumn', Latam.Tamviagens.Widgets.Multicolumn);