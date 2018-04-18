Latam.authoring.facebookOption = {
    FIELD_TYPE_DIALOG: 'dialog',
    FACEBOOK_ID_OPTION: 'appID',

    hideField: function(field, isChecked) {
        var dialog = field.findParentByType(this.FIELD_TYPE_DIALOG);
        var appID = dialog.find('id', this.FACEBOOK_ID_OPTION)[0];
        if (isChecked) {
            appID.hide();
        } else {
            appID.show();
        }
    }
}