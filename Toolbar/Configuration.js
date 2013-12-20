﻿/* File overview: configuration for the toolbar */
(function ($) {
    $.Arte.Toolbar = $.Arte.Toolbar || {};
    var buttonBase = $.Arte.Toolbar.Button;
    var buttonWithDropDown = $.Arte.Toolbar.ButtonWithDropDown;
    var commandAttrType = $.Arte.constants.commandAttrType;
    // Button Configuration
    $.Arte.Toolbar.configuration = {
        requireEditorFocus: false,
        buttons: {
            "bold": {
                js: buttonBase, // Button js to render and manage this button
                commandName: "bold", // Command to execute
                commandValue: { // command values for each command attribut type
                    "styleName": "bold",
                    "className": "arte-font-weight-bold"
                },
                tooltip: "Bold"
            },
            "italic": {
                js: buttonBase,
                commandName: "italic",
                commandValue: {
                    "styleName": "italic",
                    "className": "arte-font-style-italic"
                },
                tooltip: "Italic"
            },
            "underline": {
                js: buttonBase,
                commandName: "underline",
                commandValue: {
                    "styleName": "underline",
                    "className": "arte-text-decoration-underline"
                },
                tooltip: "Underline"
            },
            "blockquote": {
                js: buttonBase,
                commandName: "blockquote",
                tooltip: "Blockquote"
            },
            "textAlignLeft": {
                js: buttonBase,
                icon: "../content/Icons/icons/text_align_left.png",
                commandName: "textAlign",
                commandValue: {
                    "styleName": "left",
                    "className": "arte-text-align-left"
                },
                tooltip: "Text align left"
            },
            "textAlignCenter": {
                js: buttonBase,
                icon: "../content/Icons/icons/text_align_center.png",
                commandName: "textAlign",
                commandValue: {
                    "styleName": "center",
                    "className": "arte-text-align-center"
                },
                tooltip: "Text align center"
            },
            "textAlignRight": {
                js: buttonBase,
                icon: "../content/Icons/icons/text_align_right.png",
                commandName: "textAlign",
                commandValue: {
                    "styleName": "right",
                    "className": "arte-text-align-right"
                },
                tooltip: "Text align right"
            },
            "h1": {
                js: buttonBase,
                commandName: "h1",
                icon: "../content/Icons/icons/text_heading_1.png",
                tooltip: "H1"
            },
            "h2": {
                js: buttonBase,
                commandName: "h2",
                icon: "../content/Icons/icons/text_heading_2.png",
                tooltip: "H2"
            },
            "h3": {
                js: buttonBase,
                commandName: "h3",
                icon: "../content/Icons/icons/text_heading_3.png",
                tooltip: "H3"
            },
            "h4": {
                js: buttonBase,
                commandName: "h4",
                icon: "../content/Icons/icons/text_heading_4.png",
                tooltip: "H4"
            },
            "h5": {
                js: buttonBase,
                commandName: "h5",
                icon: "../content/Icons/icons/text_heading_5.png",
                tooltip: "H5"
            },
            "h6": {
                js: buttonBase,
                commandName: "h6",
                icon: "../content/Icons/icons/text_heading_6.png",
                tooltip: "H6"
            },
            "subscript": {
                js: buttonBase,
                commandName: "subscript",
                icon: "../content/Icons/icons/text_subscript.png",
                tooltip: "Subscript"
            },
            "superscript": {
                js: buttonBase,
                commandName: "superscript",
                icon: "../content/Icons/icons/text_superscript.png",
                tooltip: "Superscript"
            },
            "fontSize": {
                js: buttonWithDropDown,
                icon: null,
                commandName: "fontSize",
                options: ["", 8, 10, 12, 15, 20],
                /*
                Alternate way of specifying the options where the display is different that the actual values
                options: [
                    { display: "", value: "" },
                    { display: "Smaller", value: 8 },
                    { display: "Small", value: 10 },
                    { display: "Medium", value: 12 },
                    { display: "Large", value: 15 },
                    { display: "Larger", value: 20 }
                ],
                Another way of specifying the options where the display is different that the actual values
                options: [
                    { display: "", value: "" },
                    { display: "Smaller", value: "arte-font-weight-8" },
                    { display: "Small", value: "arte-font-weight-10" },
                    { display: "Medium", value: "arte-font-weight-12" },
                    { display: "Large", value: "arte-font-weight-15" },
                    { display: "Larger", value: "arte-font-weight-20" }
                ],
                */
                acceptsParams: true,
                tooltip: "Font size"
            },
            "fontFamily": {
                js: buttonWithDropDown,
                icon: null,
                commandName: "fontFamily",
                options: ["", "Arial", "curier new", "Georgia", "Times New Roman"],
                acceptsParams: true,
                tooltip: "Font family"
            },
            "color": {
                js: buttonWithDropDown,
                icon: null,
                commandName: "color",
                options: ["", "Black", "Blue", "Green", "Red"],
                acceptsParams: true,
                tooltip: "Color"
            },
            "unorderedList": {
                js: buttonBase,
                commandName: "unorderedList",
                tooltip: "Unordered list"
            },
            "orderedList": {
                js: buttonBase,
                commandName: "orderedList",
                tooltip: "Ordered list"
            },
            "backgroundColor": {
                acceptsParams: true,
                js: buttonWithDropDown,
                commandName: "backgroundColor",
                options: ["", "Black", "Blue", "Green", "Red"],
                tooltip: "Background Color"
            },
            "undo": {
                js: buttonBase,
                commandName: "undo",
                tooltip: "Undo"
            },
            "redo": {
                js: buttonBase,
                commandName: "redo",
                tooltip: "Redo"
            },
            "toolbarLineBreak": {
                // Inserts a line break into the toolbar.
                js: function () {
                    return {
                        render: function (parentElement) {
                            $("<div>").appendTo(parentElement);
                        },
                        refresh: function () {
                        }
                    };
                }
            },
            "insertLink": {
                commandName: "insert",
                js: $.Arte.Toolbar.InsertLink,
                tooltip: "Insert link"
            },
            "insertImage": {
                commandName: "insert",
                js: $.Arte.Toolbar.InsertImage,
                tooltip: "Insert Image"
            }
        },
        // Set of classes used to control the look-n-feel of the toolbar buttons
        classes: {
            "button": {
                "outer": "btn",
                "inner": "btn-inner",
                "disabled": "disabled",
                "selected": "selected"
            },
            "select": {
                "inner": "select"
            },
            "dialog": {
                "container": "inline-dialog",
                "button" : "btn",
                "insertLink":
                {
                    "button": "btn",
                    "label": "",
                    "input": ""
                },
                "insertImage":
                    {

                    }
            },
            "tooltip":
            {
                "container": "tooltip"
            }
        },
        // By default, this toolbar will apply rich text commands using styles
        commandAttrType: commandAttrType.styleName,
        commandConfig: {}
    };
})(jQuery);