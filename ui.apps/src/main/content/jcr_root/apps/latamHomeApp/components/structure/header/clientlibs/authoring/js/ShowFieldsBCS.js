Latam.authoring.ShowFieldsBCS = {
  updateFields: function(field, value, showFields, containerName, itemId) {
    var panel = field.findParentByType(containerName);
    var fields = panel.getComponent(itemId);
    if (showFields) { fields.show(); }
    else { fields.hide(); }
  }
}
