# Field Help

A REDCap External Module that provides field help toggles.

## Purpose / Use Case

In some cases it may be useful to present data entry or survey users with additional information on request only. A simple way to achieve this is to provided this information initially hidden and show it in response to some trigger action such as clicking a link or button.

## Effect

When enabled for a project, HTML elements (e.g. `<button>`, `<a>`, `<div>`) with the attributes `data-toggle-toggle` and `data-toggle-target` will be enhanced so that clicking the toggle-element will toggle the visibility of target elements.

## Limitations

The toggle does not work within the designer.

## Requirements

REDCap with Framework 12 support or newer.

## Installation

- Clone this repo into `<redcap-root>/modules/redcap_field_help_v<version-number>`, or
- Obtain this module from the Consortium REDCap Repo via the Control Center.
- Go to Control Center > Technical / Developer Tools > External Modules and enable this module.
- Enable the module for each project that needs the functionality provided by the module..

## Configuration

This external module has no configuration settings.

## Usage

In a field label (or a descriptive field), add a clickable element (e.g. an anchor tag `<a>` or a `<button>`) with the attribute `data-toggle-toggle` and optionally specifying a value that represents the name of the target (when no value is given, targets are assumed to be within the same table row as the  toggling element). Optionally, add the `data-toggle-mode` attribute to control display behavior. Possible modes are `inline`, `tooltip-top`, `tooltip-bottom`, `tooltip-left`, and `tooltip-right`.

In the same field label (or anywhere else when using names), add an element (e.g. a `<span>` or `<div>`) with the attribute `data-toggle-target` (again with an optional value that represents the name and corresponds to a value used in a toggle element) and the attribute `data-toggle-hidden` (alternatively `hidden`) if the element should be hidden initially. When using `hidden`, the element will be hidden at design-time as well.

Note that for links to be clickable, the `href` attribute has to be present.

When activated for a project, the module will insert a help link into the field designer. When clicked, this will show a dialog box with usage instructions as well as the option to insert a template into the label.

![Designer Help](images/design.png)

### Example field label (inline)

```html
Tumorstadium T <a href="#" data-toggle-toggle="t1" data-toggle-mode="inline" style="font-size:80%">(Hilfe)</a>
<div data-toggle-hidden data-toggle-target="t1" style="font-weight:normal; font-size:90%; margin-top:5px;"><b>TX</b> - keine Beurteilung möglich
<b>T0</b> - kein Anhalt für einen Primärtumor
<b>T1</b> - Tumor auf den Uterus beschränkt
<b>T2</b> - Tumor breitet sich auf andere Genitalstrukturen aus: Vagina, Ovarien, Lig. latum, Tube (Metastasen oder direkte Ausdehnung)</div>
```

Here, the link _'Hilfe'_ is set to toggle the visibility of a `<div>` that is initially hidden (set via the attribute `hidden`). The following screenshots illustrate this.

Initial state:  

![Default state](images/default_state.png)

Toggled state:  

![Toggled state, inline](images/toggled_state.png)

### Example field label (tooltip)

```html
Tumorstadium T <a href="#" data-toggle-toggle="t2" data-toggle-mode="tooltip-bottom" style="font-size:80%">(Hilfe)</a>
<div data-toggle-hidden data-toggle-target="t2" style="font-weight:normal; font-size:90%; margin-top:5px;"><b>TX</b> - keine Beurteilung möglich
<b>T0</b> - kein Anhalt für einen Primärtumor
<b>T1</b> - Tumor auf den Uterus beschränkt
<b>T2</b> - Tumor breitet sich auf andere Genitalstrukturen aus: Vagina, Ovarien, Lig. latum, Tube (Metastasen oder direkte Ausdehnung)</div>
```

Toggled state:

![Toggled state, tooltip](images/toggled_tooltip.png)

## Testing

Instructions for testing the module can be found [here](?prefix=redcap_field_help&page=tests/FieldHelpManualTest.md).

## Change Log

Version | Updates
------- | ----
2.1.0   | Adds support for MLM (refreshes after language change).
2.0.0   | Add support for tooltip display.
1.1.0   | Change position of designer help link (due to Rich Text Editor).<br>Enhance insert functionality.<br>Add instructions for testing the module.
1.0.0   | Initial release.
