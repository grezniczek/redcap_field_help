function redcap_field_help_em_fieldHelpExplainPopup() {
    var rt = $('#field_label_rich_text_checkbox').prop("checked") == true
    var insertDisplay = rt ? 'display:none;' : 'display:block;'
    var noteDisplay = rt ? 'display:block' : 'display:none;' 
    var content = '<p>To add a help text that can be toggled on or off, add a clickable element (e.g. an anchor tag &lt;a&gt; or a &lt;button&gt;) with the attribute <i>data-toggle-toggle</i> and optionally specifying a value that represents the name of the target (when no value is given, targets are assumed to be within the same table row as the  toggling element) to the field label.</p><p>Then, in the same field label (or anywhere else when using names), add an element (e.g. &lt;span&gt; or &lt;div&gt;) with the attribute <i>data-toggle-target</i> (again with an optional value that represents the name and corresponds to a value used in a toggle element) and the attribute <i>data-toggle-hidden</i> (alternatively <i>hidden</i>) if the element should be hidden initially. When using <i>hidden</i>, the element will be hidden at design-time as well.</p><p>Note that for links to be clickable, the <i>href</i> attribute has to be present.</p><div style="' + insertDisplay + '">Insert a template into the field label:<div class="input-group" style="margin-top:5px;"><input class="form-control" id="field-help-em-name" type="text" placeholder="Enter a Toggle ID"><div class="input-group-append"><button class="btn btn-primary" onclick="redcap_field_help_em_insertTemplate();return false;"><i class="far fa-arrow-alt-circle-right"></i></button></div></div></div><div style="color:red;' + noteDisplay + '">Note, in order to effectively add the markup necessary for <i>Field Help</i>, the <b>Rich Text Editor</b> must be turned off.</div>'
    simpleDialog(content, '<i class="far fa-question-circle"></i> How to use Field Help Editor ', 'field-help-em-explain-popup',400)
    fitDialog($('#field_help_em_explain_popup'))
}
function redcap_field_help_em_insertTemplate() {
    var ta = $('textarea#field_label')
    var id = $('#field-help-em-name').val()
    var template = '<a href="#" data-toggle-toggle="' + id + '">Help Toggle</a><div data-toggle-hidden data-toggle-target="' + id + '">Insert help text here.</div>'
    ta.val(ta.val() + ' ' + template)
    $('#field-help-em-explain-popup').dialog("close")
}
$(function() {
    $('#field_label').after('<div style="font-weight:normal;padding-right:27px"><a onclick="redcap_field_help_em_fieldHelpExplainPopup();return false;" href="javascript:;" style="font-size:11px;color:#3089D4;"><i class="far fa-question-circle"></i> How to use Field Help</a></div>')
})