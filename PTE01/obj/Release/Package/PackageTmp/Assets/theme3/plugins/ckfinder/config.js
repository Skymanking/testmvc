/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see license.txt or http://cksource.com/ckfinder/license
*/

CKFinder.customConfig = function (config) {
    // Define changes to default configuration here.
    // For the list of available options, check:
    // http://docs.cksource.com/ckfinder_2.x_api/symbols/CKFinder.config.html

    // Sample configuration options:
    // config.uiColor = '#BDE31E';
    // config.language = 'fr';
    // config.removePlugins = 'basket';
    config.filebrowserBrowseUrl = '/Assets/Admin/plugins/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/Assets/Admin/plugins/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = '/Assets/Admin/plugins/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/Data';
    config.filebrowserFlashUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    config.language = 'en';

    
    //CKFinder.setupCKEditor(null, '/Assets/Admin/plugin/ckfinder/');

 
};

