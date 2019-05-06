function redcap_field_help_em_fieldHelpExplainPopup() {
    const content = '<p>To add a help text that can be toggled on or off, add a clickable element (e.g. an anchor tag &lt;a&gt; or a &lt;button&gt;) with the attribute <i>data-toggle-toggle</i> and optionally specifying a value that represents the name of the target (when no value is given, targets are assumed to be within the same table row as the  toggling element) to the field label.</p><p>Then, in the same field label (or anywhere else when using names), add an element (e.g. &lt;span&gt; or &lt;div&gt;) with the attribute <i>data-toggle-target</i> (again with an optional value that represents the name and corresponds to a value used in a toggle element) and the attribute <i>data-toggle-hidden</i> (alternatively <i>hidden</i>) if the element should be hidden initially. When using <i>hidden</i>, the element will be hidden at design-time as well.</p><p>Note that for links to be clickable, the <i>href</i> attribute has to be present.</p><p><i class="far fa-arrow-alt-circle-right"></i> <a href="javascript:;" onclick="redcap_field_help_em_insertTemplate();return false;">Insert a template into the field label</a></p>'
    simpleDialog(content, '<i class="far fa-question-circle"></i> How to use Field Help ', 'field_help_em_explain_popup',400)
    fitDialog($('#field_help_em_explain_popup'))
}
function redcap_field_help_em_insertTemplate() {
    const ta = $('textarea#field_label')
    const template = '<a href="#" data-toggle-toggle="">Help Toggle</a><div data-toggle-hidden data-toggle-target="">Insert help text here.</div>'
    ta.val(ta.val() + ' ' + template)
    $('#field_help_em_explain_popup').dialog("close")
}
$(document).ajaxSuccess(function() {
    if ($('textarea#field_label').length == 1) {
        const div = $('textarea#field_label').parent().parent().find('div:first-child')
        if(div[0].hasAttribute('data-field-help-em')) return false
        div.attr('data-field-help-em', 'set')
        div.append('<div style="font-weight:normal;float:right;padding-right:27px"><a onclick="redcap_field_help_em_fieldHelpExplainPopup();return false;" href="javascript:;" style="font-size:11px;color:#3089D4;"><i class="far fa-question-circle"></i> How to use Field Help</a></div>')
    }
})