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
    config.filebrowserBrowseUrl = '/Assets/Admin/plugins/ckfinder/ckfinder.html',
    config.filebrowserImageBrowseUrl = '/Assets/Admin/plugins/ckfinder/ckfinder.html?type=Images',
    config.filebrowserFlashBrowseUrl = '/Assets/Admin/plugins/ckfinder/ckfinder.html?type=Flash',
    config.filebrowserUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    config.filebrowserImageUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    config.filebrowserFlashUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
    CKFinder.setupCKEditor(null, '/Assets/Admin/plugins/ckfinder/');
    //config.allowedContent = true;
    
 //   config.toolbar = [
 //{ name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates'] },
 //{ name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
 //{ name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
 //{ name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
 //'/',
 //{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'] },
 //{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
 //{ name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
 //{ name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
 //'/',
 //{ name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
 //{ name: 'colors', items: ['TextColor', 'BGColor'] },
 //{ name: 'tools', items: ['Maximize', 'ShowBlocks'] },
 //{ name: 'others', items: ['-'] },
 //{ name: 'about', items: ['About'] }
 //   ];


   
};
//CKEDITOR2.editorConfig = function (config) {
//    // Define changes to default configuration here. For example:
//    // config.language = 'fr';
//    // config.uiColor = '#AADC6E';

//    config.syntaxhighlight_lang = 'csharp';
//    config.syntaxhighlight_hideControls = true;
//    config.language = 'vi';
//    config.filebrowserBrowseUrl = '/Assets/Admin/plugins/ckfinder/ckfinder.html';
//    config.filebrowserImageBrowseUrl = '/Assets/Admin/plugins/ckfinder.html?Type=Images';
//    config.filebrowserFlashBrowseUrl = '/Assets/Admin/plugins/ckfinder.html?Type=Flash';
//    config.filebrowserUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
//    config.filebrowserImageUploadUrl = '/Data';
//    config.filebrowserFlashUploadUrl = '/Assets/Admin/plugins/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';

//    CKFinder.setupCKEditor(null, '/Assets/Admin/plugins/ckfinder/');

//    config.toolbarGroups = [
//      { name: 'document', groups: ['source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates'] },
//        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
//        { name: 'links', groups: ['links'] },
//        { name: 'insert', groups: ['insert'] },
//        { name: 'styles', groups: ['styles'] },
//        { name: 'colors', groups: ['colors'] },
//        { name: 'tools', groups: ['tools'] },
//        { name: 'others', groups: ['others'] },

//    ];



//};
