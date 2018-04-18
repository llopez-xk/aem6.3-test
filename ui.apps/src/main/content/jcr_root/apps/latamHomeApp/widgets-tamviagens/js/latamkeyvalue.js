
/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class Ejst.CustomWidget
 * @extends CQ.form.CompositeField
 * This is a custom widget based on {@link CQ.form.CompositeField}.
 * @constructor
 * Creates a new CustomWidget.
 * @param {Object} config The config object
 */


var Ejst = {};

Ejst.x3 = {};

Ejst.x3.provideOptions = function(path, record) {
    //TODO use properties for the selector
    var pageInfomy = CQ.HTTP.eval(path + "."+this.selector);
    return pageInfomy;
};
Ejst.CustomWidget = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    hiddenField: null,

    /**
     * @private
     * @type CQ.Ext.form.ComboBox
     */
    allowField: null,

    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    otherField: null,

    fieldLabelSelection: null,
    fieldLabelTextField: null,
    selecto: null,

    constructor: function(config) {
        config = config || { };
        var defaults = {
            "border": false,
            "layout": "form",
            "columns":2
        };
        config = CQ.Util.applyDefaults(config, defaults);
        Ejst.CustomWidget.superclass.constructor.call(this, config);
    },

    // overriding CQ.Ext.Component#initComponent
    initComponent: function() {
        Ejst.CustomWidget.superclass.initComponent.call(this);

        this.hiddenField = new CQ.Ext.form.Hidden({
            name: this.name
        });
        this.add(this.hiddenField);

        this.allowField = new CQ.form.Selection({
            type:"select",
            cls:"ejst-customwidget-1",
            fieldLabel:this.fieldLabelSelection,
            selector:this.selector,
            listeners: {
                selectionchanged: {
                    scope:this,
                    fn: this.updateHidden
                }
            },
            optionsProvider: this.optionsProvider
        });
        this.add(this.allowField);

        this.otherField = new CQ.Ext.form.TextField({
            cls:"ejst-customwidget-2",
            fieldLabel:this.fieldLabelTextField,
            listeners: {
                change: {
                    scope:this,
                    fn:this.updateHidden
                }
            }
        });
        this.add(this.otherField);

    },

    // overriding CQ.form.CompositeField#processPath
    processPath: function(path) {
        this.options = path + this.selector;
        this.allowField.processPath(path);
    },

    // overriding CQ.form.CompositeField#processRecord
    processRecord: function(record, path) {
        this.allowField.processRecord(record, path);
    },

    // overriding CQ.form.CompositeField#setValue
    setValue: function(value) {
        var parts = value.split("/");
        this.allowField.setValue(parts[0].replace("||","/"));
        this.otherField.setValue(parts[1].replace("||","/"));
        this.hiddenField.setValue(value);
    },

    // overriding CQ.form.CompositeField#getValue
    getValue: function() {
        return this.getRawValue();
    },

    // overriding CQ.form.CompositeField#getRawValue
    getRawValue: function() {
        if (!this.allowField) {
            return null;
        }
        var otherFieldValue = this.otherField.getValue();
        if(otherFieldValue) {
            otherFieldValue = otherFieldValue.replace(/\//g,"||");
        }
        return this.allowField.getValue().replace("/","||") + "/" +
            otherFieldValue;
    },

    // private
    updateHidden: function() {
        this.hiddenField.setValue(this.getValue());
    }

});

// register xtype
CQ.Ext.reg('ejstcustom', Ejst.CustomWidget);
