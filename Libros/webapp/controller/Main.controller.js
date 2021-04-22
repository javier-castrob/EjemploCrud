sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "Libros/Libros/util/Services",
            "sap/ui/model/json/JSONModel",

	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Services, JSONModel) {
		"use strict";

		return Controller.extend("Libros.Libros.controller.Main", {
			onInit: function () {
                this.getProductos();
            },
            getProductos: async function () {
                const oComponent = this.getOwnerComponent();
                try {
                    const oProductos = await Services.getLibros();
                    const oLibros = await Services.postLibros();

                    const oProductosModel = new JSONModel(oProductos[0]);
                    oComponent.setModel(oProductosModel, "Libros");
                   
                } catch (oError) {
                    console.log(oError);
                }
            },
		});
	});