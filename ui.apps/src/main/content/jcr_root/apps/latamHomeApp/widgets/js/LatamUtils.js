Latam.authoring.Utils = {


    /* Shows/hide a tab.
    * selectionField: field that triggers the event.
    * showTab: boolean that indicates if the tab will be shown or hidden. If you are using a checkbox field,
               this parameter should be the checkbox value.
    * tabID: id of the target tab. You have to set the property 'id' with the same value that you are sending
                            to this function on the target tab. Example:

                            //if the target tab has the property id=testTab, the listener on a checkbox for
                            //selectionchanged would be the following:
                            listeners: {
                                selectionchanged: function(field,value,isChecked){
                                            Latam.authoring.Utils.toggleTab(field,isChecked,'testTab');
                                }
                            }
    */
     toggleTab: function(selectionField, showTab, tabID) {
        var tabpanel = selectionField.findParentByType('tabpanel');
        var tab = tabpanel.getComponent(tabID);
        if (showTab) {
            tabpanel.unhideTabStripItem(tab);
        } else {
            tabpanel.hideTabStripItem(tab);
        }
     },

    /* Shows/hide a field.
    * selectionField: field that triggers the event.
    * showField: boolean that indicates if the field will be shown or hidden. If you are using a checkbox field,
               this parameter should be the checkbox value.
    * fieldID: id of the target field. You have to set the property 'id' with the same value that you are sending
                            to this function on the target field. Example:

                            //if the target field has the property id=testField, the listener on a checkbox for
                            //selectionchanged would be the following:
                            listeners: {
                                selectionchanged: function(field,value,isChecked){
                                            Latam.authoring.Utils.toggleField(field,isChecked,'testField');
                                }
                            }
    */
     toggleField: function(selectionField, showField, fieldID) {
        var dialog = selectionField.findParentByType('dialog');
        var field = dialog.find('id', fieldID);

        if (field[0].hidden && (showField === true || showField === "true")) {
            if (field[0].xtype === 'latamlink') {
              field[0].path.setValue("");
              field[0].title.setValue("");
              field[0].alt.setValue("");
            }
            field[0].show();
            dialog.doLayout([true],[true]);
        } else if (!field[0].hidden && (showField === false || showField === "false")) {
            field[0].hide();
            if (field[0].xtype === 'latamlink') {
              field[0].path.setValue("*");
              field[0].title.setValue("*");
              field[0].alt.setValue("*");
            }
        }
     },

    /* Shows/hide a field given a field's name attribute.
    * selectionField: field that triggers the event.
    * showField: boolean that indicates if the field will be shown or hidden. If you are using a checkbox field,
               this parameter should be the checkbox value.
    * fieldName: name attribute of of the target field. Example:

    //if the target field has the attribute name=./testField, the listener on a checkbox for
    //selectionchanged would be the following:
    listeners: {
        selectionchanged: function(field,value,isChecked){
                    Latam.authoring.Utils.toggleField(field,isChecked,'./testField');
        }
    }
    */
     toggleFieldByName: function(selectionField, showField, fieldName){
         var dialog = selectionField.findParentByType('dialog');
         var field = dialog.getField(fieldName);
         if (showField) {
             field.show();
         } else {
             field.hide();
         }
      },


    /*
      Shows/Hides a field within a multifield when a checkbox is ticked.
        In your dialog structure add a listener nt:unstructured node with 2 properties as follow:
      check: function(comp, val, isChecked) { Latam.authoring.Utils.toggleFieldInMultifield(comp,val,isChecked); }
      selectionchanged: function(comp, val, isChecked) { Latam.authoring.Utils.toggleFieldInMultifield(comp,val,isChecked); }
    */
    toggleFieldInMultifield: function(comp, val, isChecked) {
        var panel = comp.findParentByType("panel");
        var link = panel.getComponent(1);
        var text = panel.getComponent(2);

        if(comp.checked) {
            text.allowBlank= false;
            text.show();
            link.hide();
            link.path.setValue("*");
            link.title.setValue("*");
            link.alt.setValue("*");
        }else {
            text.hide();
            text.allowBlank= true;
            link.path.setValue("");
            link.title.setValue("");
            link.alt.setValue("");
            link.show();
        }
    },

    setActiveTab: function(field, tabID) {
        var tabpanel = field.findParentByType('tabpanel');
        tabpanel.setActiveTab(tabID);
     },
};
