/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'tr';

    config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Styles,Anchor,Blockquote';

	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	config.plugins =
		'a11yhelp,' +
		'autogrow,' +
		'basicstyles,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'contextmenu,' +
		'divarea,' +
		'enterkey,' +
		'entities,' +
		'format,' +
		'horizontalrule,' +
		'html5video,' +
		'htmlwriter,' +
		'indentblock,' +
		'indentlist,' +
		'justify,' +
		'link,' +
		'list,' +
		'pastefromlibreoffice,' +
		'pastefromword,' +
		'pastetext,' +
		'removeformat,' +
		'showborders,' +
		'simage,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'toolbar,' +
		'undo';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
