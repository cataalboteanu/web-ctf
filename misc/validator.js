const {body, check, validationResult } = require('express-validator')


const blockedTags = ["<a",
"<a2",
"<abbr",
"<acronym",
"<address",
"<animate",
"<animatemotion",
"<animatetransform",
"<applet",
"<area",
"<article",
"<aside",
"<audio",
"<audio2",
"<b",
"<base",
"<basefont",
"<bdi",
"<bdo",
"<bgsound",
"<big",
"<blink",
"<blockquote",
"<body",
"<br",
"<button",
"<canvas",
"<caption",
"<center",
"<cite",
"<code",
"<col",
"<colgroup",
"<command",
"<content",
"<custom tags",
"<data",
"<datalist",
"<dd",
"<del",
"<details",
"<dfn",
"<dialog",
"<dir",
"<div",
"<dl",
"<dt",
"<element",
"<em",
"<embed",
"<fieldset",
"<figcaption",
"<figure",
"<font",
"<footer",
"<form",
"<frame",
"<frameset",
"<h1",
"<head",
"<header",
"<hgroup",
"<hr",
"<html",
"<i",
"<iframe",
"<iframe2",
"<image",
"<image2",
"<image3",
"<img",
"<img2",
"<input",
"<input2",
"<input3",
"<input4",
"<ins",
"<isindex",

"<keygen",
"<label",
"<legend",
"<li",
"<link",
"<listing",
"<main",
"<map",
"<mark",
"<marquee",
"<menu",
"<menuitem",
"<meta",
"<meter",
"<multicol",
"<nav",
"<nextid",
"<nobr",
"<noembed",
"<noframes",
"<noscript",
"<object",
"<ol",
"<optgroup",
"<option",
"<output",
"<p",
"<param",
"<picture",
"<plaintext",
"<pre",
"<progress",
"<q",
"<rb",
"<rp",
"<rt",
"<rtc",
"<ruby",
"<s",
"<samp",
"<script",
"<section",
"<select",
"<set",
"<shadow",
"<slot",
"<small",
"<source",
"<spacer",
"<span",
"<strike",
"<strong",
"<style",
"<sub",
"<summary",
"<sup",
"<svg",
"<table",
"<tbody",
"<td",
"<template",
"<textarea",
"<tfoot",
"<th",
"<thead",
"<time",
"<title",
"<tr",
"<track",
"<tt",
"<u",
"<ul",
"<var",
"<video",
"<video2",
"<wbr",
"<xmp"
]


blockedEvents = ["onactivate",
"onafterprint",
"onafterscriptexecute",
"onanimationcancel",
"onanimationend",
"onanimationiteration",
"onanimationstart",
"onauxclick",
"onbeforeactivate",
"onbeforecopy",
"onbeforecut",
"onbeforedeactivate",
"onbeforepaste",
"onbeforeprint",
"onbeforescriptexecute",
"onbeforeunload",
"onbegin",
"onblur",
"onbounce",
"oncanplay",
"oncanplaythrough",
"onchange",
"onclick",
"onclose",

"oncopy",
"oncuechange",
"oncut",
"ondblclick",
"ondeactivate",
"ondrag",
"ondragend",
"ondragenter",
"ondragleave",
"ondragover",
"ondragstart",
"ondrop",
"ondurationchange",
"onend",
"onended",
"onerror",
"onfinish",
"onfocus",
"onfocusin",
"onfocusout",
"onfullscreenchange",
"onhashchange",
"oninput",
"oninvalid",
"onkeydown",
"onkeypress",
"onkeyup",
"onload",
"onloadeddata",
"onloadedmetadata",
"onloadend",
"onloadstart",
"onmessage",
"onmousedown",
"onmouseenter",
"onmouseleave",
"onmousemove",
"onmouseout",
"onmouseover",
"onmouseup",
"onmousewheel",
"onmozfullscreenchange",
"onpagehide",
"onpageshow",
"onpaste",
"onpause",
"onplay",
"onplaying",
"onpointerdown",
"onpointerenter",
"onpointerleave",
"onpointermove",
"onpointerout",
"onpointerover",
"onpointerrawupdate",
"onpointerup",
"onpopstate",
"onprogress",
"onreadystatechange",
"onrepeat",
"onreset",
"onresize",
"onscroll",
"onsearch",
"onseeked",
"onseeking",
"onselect",
"onselectionchange",
"onselectstart",
"onshow",
"onstart",
"onsubmit",
"ontimeupdate",
"ontoggle",
"ontouchend",
"ontouchmove",
"ontouchstart",
"ontransitioncancel",
"ontransitionend",
"ontransitionrun",
"ontransitionstart",
"onunhandledrejection",
"onunload",
"onvolumechange",
"onwaiting",
"onwebkitanimationend",
"onwebkitanimationiteration",
"onwebkitanimationstart",
"onwebkittransitionend",
"onwheel",
]

exports.validateXSSlowSearch = 
                check('text').trim().not().isEmpty().withMessage('Search cannot be empty!')
                .bail().trim().escape().toLowerCase();

exports.validateXSSlowPost = 
                body('description').trim().not().contains('script').withMessage("Don't try running any scripts")
                .bail().not().isEmpty().withMessage('Description cannot be empty!');

exports.validateXSShigh = 
                check('text').trim().not().isEmpty().withMessage('Search cannot be empty!')
                .bail().trim().toLowerCase().not().custom(value =>{
                    if (blockedTags.some(v => value.includes(v))){
                        return true;
                    }
                    
                    return false;
                }).withMessage('Blocked Tag')
                .bail().trim().toLowerCase().not().custom(value =>{
                    if (blockedEvents.some(v => value.includes(v))){
                        return true;
                    }
                    
                    return false;
                }).withMessage('Blocked Event');
