/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';

    config.syntaxhighlight_lang = 'csharp';
    config.syntaxhighlight_hideControls = true;
    config.language = 'vi';
    config.filebrowserBrowseUrl = '/Assets/plugin/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/Assets/plugin/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = '/Assets/plugin/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl = '/Assets/plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    config.filebrowserImageUploadUrl = '/Assets/plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
     config.filebrowserFlashUploadUrl = '/Assets/plugin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
    CKFinder.setupCKEditor(null, '/Assets/plugin/ckfinder/');
    
        config.toolbarGroups = [            
                   
            //{ name: 'styles', groups: ['styles'] },
            //{ name: 'colors', groups: ['colors'] },
            //{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
            //{ name: 'links', groups: ['links'] },
            //{ name: 'tools', groups: ['tools'] },
            //{ name: 'insert', groups: ['insert'] },
            //{ name: 'others', groups: ['others'] },

             { name: 'document', groups: ['mode', 'document', 'doctools'] },
            { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
            { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
            { name: 'links' },
            { name: 'insert' },
            { name: 'styles' },
            { name: 'colors' },
            { name: 'tools' },
            { name: 'others' },
            { name: 'about' }

        ];


   
};
//CKEDITOR2.editorConfig = function (config) {
//    // Define changes to default configuration here. For example:
//    // config.language = 'fr';
//    // config.uiColor = '#AADC6E';

//    config.syntaxhighlight_lang = 'csharp';
//    config.syntaxhighlight_hideControls = true;
//    config.language = 'vi';
//    config.filebrowserBrowseUrl = '/Assets/plugin/ckfinder/ckfinder.html';
//    config.filebrowserImageBrowseUrl = '/Assets/plugin/ckfinder.html?Type=Images';
//    config.filebrowserFlashBrowseUrl = '/Assets/plugin/ckfinder.html?Type=Flash';
//    config.filebrowserUploadUrl = '/Assets/plugin/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
//    config.filebrowserImageUploadUrl = '/Data';
//    config.filebrowserFlashUploadUrl = '/Assets/plugin/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';

//    CKFinder.setupCKEditor(null, '/Assets/plugin/ckfinder/');

//    config.toolbarGroups = [

//        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
//        { name: 'links', groups: ['links'] },
//        { name: 'insert', groups: ['insert'] },
//        { name: 'styles', groups: ['styles'] },
//        { name: 'colors', groups: ['colors'] },
//        { name: 'tools', groups: ['tools'] },
//        { name: 'others', groups: ['others'] },

//    ];



//};
