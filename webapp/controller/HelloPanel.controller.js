sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"

], function (Controller, MessageToast, Fragment) {
  'use strict';

  return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
    onShowHello: function () {
      // read msg ifrom i18n model
      const oBundle = this.getView().getModel("i18n").getResourceBundle();
      const sRecipient = this.getView().getModel().getProperty("/recipient/name");
      const sMsg = oBundle.getText("helloMsg", [sRecipient]);

      // Show a native or vanilla js alert
      MessageToast.show(sMsg);
    },
    onOpenDialog: function () {
      this.getOwnerComponent().openHelloDialog();
    }
  });
});