function redcap_field_help_em_fieldHelpExplainPopup() {
    const content = '<p>To add a help text that can be toggled on or off, add a clickable element (e.g. an anchor tag <code>&lt;a&gt;</code> or a <code>&lt;button&gt;</code>) with the attribute <i>data-toggle-toggle</i> and optionally specifying a value that represents the name of the target (when no value is given, targets are assumed to be within the same table row as the  toggling element) to the field label. Optionally, the <i>data-toggle-mode</i> attribute can be added for <b>named</b> targets only. Mode can be either <i>inline</i> (default behavior) or <i>tooltip-placement</i>, where <i>placement</i> is one of <i>top</i>, <i>bottom</i>, <i>left</i>, or <i>right</i>, to show the help content as a tooltip next to its trigger.</p> \
    <p>As a container for the help content, then, in the same field label (or anywhere else when using names), add an element (e.g. &lt;span&gt; or &lt;div&gt;) with the attribute <i>data-toggle-target</i> (again with an optional value that represents the name and corresponds to a value used in a toggle element) and the attribute <i>data-toggle-hidden</i> (alternatively <i>hidden</i>) if the element should be hidden initially. When using <i>hidden</i>, the element will be hidden at design-time as well.</p><p>Note that for links to be clickable, the <i>href</i> attribute has to be present.</p> \
    <div>Insert a template into the field label:<div class="input-group mt-1"> \
      <button class="btn btn-success" onclick="redcap_field_help_em_insertTemplate();return false;">Add</button> \
      <input class="form-control" id="field-help-em-name" type="text" placeholder="Enter a Toggle ID"> \
        <select class="form-select" id="mode-tooltip-placement"> \
            <option selected value="inline">Inline</option> \
            <option value="tooltip-top">Tooltip, Top</option> \
            <option value="tooltip-bottom">Tooltip, Bottom</option> \
            <option value="tooltip-left">Tooltip, Left</option> \
            <option value="tooltip-right">Tooltip, Right</option> \
        </select> \
    </div>';
    simpleDialog(content, '<i class="far fa-question-circle"></i> How to use Field Help Editor ', 'field-help-em-explain-popup', 600);
    fitDialog($('#field_help_em_explain_popup'));
}
function redcap_field_help_em_insertTemplate() {
    const $rt = $('#field_label_rich_text_checkbox');
    const mode_placement = $('#mode-tooltip-placement').val() ?? 'inline';
    const rt = $rt.prop('checked') == true;
    const ta = $('textarea#field_label');
    const id = $('#field-help-em-name').val();
    const template = '<a href="#" data-toggle-toggle="' + id + '" data-toggle-mode="' + mode_placement + '">Help Toggle <i class="fa-solid fa-info-circle"></i></a><div data-toggle-hidden data-toggle-target="' + id + '">Insert help content here.</div>';
    if (rt) $rt.trigger('click');
    ta.val(ta.val() + ' ' + template);
    if (rt) $rt.trigger('click');
    $('#field-help-em-explain-popup').dialog("close")
}
$(function() {
    $('#field_label').after('<div style="font-weight:normal;padding-right:27px"><a onclick="redcap_field_help_em_fieldHelpExplainPopup();return false;" href="javascript:;" style="font-size:11px;color:#3089D4;"><i class="far fa-question-circle"></i> How to use Field Help</a></div>');
})