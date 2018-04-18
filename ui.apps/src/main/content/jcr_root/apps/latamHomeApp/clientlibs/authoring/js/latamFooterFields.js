Latam.authoring.footerFields = {
  FIELD_TYPE_DIALOG: 'dialog',
  PN_LATAM_OPTION: 'latam',
  TAB_BOTTOM_FOOTER_PID_HTMLSTRING: 'ID_htmlStringField',
  TAB_BOTTOM_FOOTER_PID_AWARDS_MULTIFIELD: 'ID_awardsMultifield',
  TAB_BOTTOM_FOOTER_PN_FOOTER_LOGO: './footerLogo/file',
  TAB_BOTTOM_FOOTER_PN_LOGO_ALT: './logoAltAttribute',
  TAB_LOGIN_SERVICES_FIELDSET: "ID_loginConfigurations",
  TAB_LOGIN_TAM_SERVICES_FIELDSET: "ID_tamLoginConfigurations",
  TAB_LOGIN_PROFILE_ACTION_FIELDSET: "ID_profilesConfiguration",
  TAB_LOGIN_MODAL_LINKS_FIELDSET: "ID_modalLinksConfiguration",
  TAB_LOGIN_LATAM_SERVICES_FILDSET: "ID_latamLoginConfigurations",
  TAB_LOGIN_LATAM_PROFILE_ACTION_FILDSET: "ID_latamProfileConfiguration",
  TAB_LOGIN_ALTERNATIVE_LOGIN: "ID_alternativeLogin",



  handleHiddenFields: function(field) {
    var dialog = field.findParentByType(this.FIELD_TYPE_DIALOG);
    var opSelected = field.getValue();

    var htmlstringField = dialog.find('id', this.TAB_BOTTOM_FOOTER_PID_HTMLSTRING)[0];
    var awardsMultifield = dialog.find('id', this.TAB_BOTTOM_FOOTER_PID_AWARDS_MULTIFIELD)[0];
    var multifieldItems = awardsMultifield.items.items;
    var loginServices = dialog.find('id', this.TAB_LOGIN_SERVICES_FIELDSET)[0];
    var tamServices = dialog.find('id', this.TAB_LOGIN_TAM_SERVICES_FIELDSET)[0];
    var profileAction = dialog.find('id', this.TAB_LOGIN_PROFILE_ACTION_FIELDSET)[0];
    var loginModalLinks = dialog.find('id', this.TAB_LOGIN_MODAL_LINKS_FIELDSET)[0];
    var latamServices = dialog.find('id', this.TAB_LOGIN_LATAM_SERVICES_FILDSET)[0];
    var latamProfiles = dialog.find('id', this.TAB_LOGIN_LATAM_PROFILE_ACTION_FILDSET)[0];
    var alternativeLogin = dialog.find('id', this.TAB_LOGIN_ALTERNATIVE_LOGIN)[0];
    var loginLanTam = dialog.find('id', "ID_closedLogin")[0];
    var valueLoginLanTam = loginLanTam.getValue()[0];

    if (opSelected === this.PN_LATAM_OPTION) {
      latamServices.show();
      latamProfiles.show();
      loginServices.hide();
      tamServices.hide();
      profileAction.hide();
      loginModalLinks.hide();
      htmlstringField.hide();
      alternativeLogin.hide();
      this.handleLogoFieldRequiredFields(dialog, true);

      dialog.setSize(dialog.getSize().width + 1, dialog.getSize().height + 1);
      if (awardsMultifield.itemCt != undefined) {
        awardsMultifield.itemCt.setStyle('height', 'auto');
        awardsMultifield.itemCt.show();
      }

    } else {
        if (valueLoginLanTam) {
            latamServices.show();
            latamProfiles.show();
            loginServices.hide();
            tamServices.hide();
            profileAction.hide();
            loginModalLinks.hide();
            htmlstringField.hide();

        } else {
            latamServices.hide();
            latamProfiles.hide();
            loginServices.show();
            tamServices.show();
            profileAction.show();
            loginModalLinks.show();
            htmlstringField.show();
        }
        alternativeLogin.show();
      this.handleLogoFieldRequiredFields(dialog, false);

      for (i = 0; i < multifieldItems.length; i++) {
        if (multifieldItems[i].itemCt != undefined) {
          multifieldItems[i].itemCt.hide();
        }
      }
      if (awardsMultifield.itemCt != undefined) {
        awardsMultifield.itemCt.hide();
        awardsMultifield.itemCt.setStyle('height', '0');
      }
    }
  },

  handleLogoFieldRequiredFields: function(dialog, isHidden) {
    var image = dialog.getField(this.TAB_BOTTOM_FOOTER_PN_FOOTER_LOGO);
    var logoAlt = dialog.getField(this.TAB_BOTTOM_FOOTER_PN_LOGO_ALT);

    if (isHidden) {
      image.allowBlank = true;
      logoAlt.allowBlank = true;
      image.hide();
      logoAlt.hide();
    } else {
      image.allowBlank = false;
      logoAlt.allowBlank = false;
      image.show();
      logoAlt.show();
    }
  },

  handleLatamLink: function(comp, isChecked) {
    var panel = comp.findParentByType("panel");
    var link = panel.getComponent(3);

    if (isChecked) {
      if (link.path.getValue() === '*') {
        link.path.setValue('');
      }
      if (link.title.getValue() === '*') {
        link.title.setValue('');
      }
      if (link.itemCt !== undefined) {
        link.itemCt.setStyle('height', 'auto');
        link.itemCt.show();
      }
    } else {
      if (link.itemCt !== undefined) {
        link.itemCt.hide();
        link.itemCt.setStyle('height', '0');
      }
      if (link.path.getValue() === '' || link.path.getValue() === undefined) {
        link.path.setValue('*');
      }
      if (link.title.getValue() === '' || link.title.getValue() === undefined) {
        link.title.setValue('*');
      }
    }
  }
}