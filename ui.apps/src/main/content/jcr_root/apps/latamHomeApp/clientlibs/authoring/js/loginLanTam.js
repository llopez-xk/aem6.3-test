Latam.authoring.loginLanTam = {

    FIELD_TYPE_DIALOG: 'dialog',
    TAB_LOGIN_SERVICES_FIELDSET: "ID_loginConfigurations",
    TAB_LOGIN_TAM_SERVICES_FIELDSET: "ID_tamLoginConfigurations",
    TAB_LOGIN_PROFILE_ACTION_FIELDSET: "ID_profilesConfiguration",
    TAB_LOGIN_MODAL_LINKS_FIELDSET: "ID_modalLinksConfiguration",
    TAB_LOGIN_LATAM_SERVICES_FILDSET: "ID_latamLoginConfigurations",
    TAB_LOGIN_LATAM_PROFILE_ACTION_FILDSET: "ID_latamProfileConfiguration",

    handleHiddenFields: function (field, isChecked) {
        var dialog = field.findParentByType(this.FIELD_TYPE_DIALOG);

        var latamServices = dialog.find('id', this.TAB_LOGIN_LATAM_SERVICES_FILDSET)[0];
        var latamProfiles = dialog.find('id', this.TAB_LOGIN_LATAM_PROFILE_ACTION_FILDSET)[0];

        var loginServices = dialog.find('id', this.TAB_LOGIN_SERVICES_FIELDSET)[0];
        var tamServices = dialog.find('id', this.TAB_LOGIN_TAM_SERVICES_FIELDSET)[0];
        var profileAction = dialog.find('id', this.TAB_LOGIN_PROFILE_ACTION_FIELDSET)[0];
        var loginModalLinks = dialog.find('id', this.TAB_LOGIN_MODAL_LINKS_FIELDSET)[0];

        if (isChecked) {
            latamServices.show();
            latamProfiles.show();

            loginServices.hide();
            tamServices.hide();
            profileAction.hide();
            loginModalLinks.hide();

            latamServices.doLayout([true], [true]);
            latamProfiles.doLayout([true], [true]);
            loginServices.doLayout([true], [true]);
            tamServices.doLayout([true], [true]);
            profileAction.doLayout([true], [true]);
            loginModalLinks.doLayout([true], [true]);
        }
        else {
            latamServices.hide();
            latamProfiles.hide();

            loginServices.show();
            tamServices.show();
            profileAction.show();
            loginModalLinks.show();

            latamServices.doLayout([true], [true]);
            latamProfiles.doLayout([true], [true]);
            loginServices.doLayout([true], [true]);
            tamServices.doLayout([true], [true]);
            profileAction.doLayout([true], [true]);
            loginModalLinks.doLayout([true], [true]);
        }
    }
}
