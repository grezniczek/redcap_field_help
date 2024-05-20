# Field Help - Manual Testing Procedure

Version 2 - 2024-05-20

## Prerequisites

- A project in development mode with at least one instruments enabled as a survey.
- Field Help is enabled for this project.
- No other external modules should be enabled, except those with which this module's interaction should be tested.

## Test Procedure

1. Go to the _Online Designer_ and select an instrument.
1. Add a new field and choose any field type.
1. Make sure that the _Rich Text Editor_ is turned **off**.
1. Verify the following:
   - The "How to use Field Help" link is shown below the field label textarea.
1. Click on the "How to use Field Help" link and verify the following:
   - The "How to use Field Help Editor" popup is shown.
   - The popup contains an **Add** button, a text box ("Enter a Toggle ID"), and a dropdown.
1. Enter "h1" into the text box, select 'Inline' and press the **Add** button.
1. Verify the following:
   - The popup has closed.
   - The _Field Label_ now contains the following text: ` <a href="#" data-toggle-toggle="h1" data-toggle-mode="inline">Help Toggle <i class="fa-solid fa-info-cirlce"></i></a><div data-toggle-hidden data-toggle-target="h1">Insert help content here.</div>`
1. Save the field.
1. Open the instrument for data entry in a (new) record and verify the following:
   - Clicking on the _Help Toggle_ link toggles display of the help text ("Insert help content here.")
1. Open the instrument as a survey and verify the following:
   - Clicking on the _Help Toggle_ link toggles display of the help text ("Insert help content here.")

Done.

## Reporting Errors

Before reporting errors:
- Make sure there is no interference with any other external module by turning off all others and repeating the tests.
- Check if you are using the latest version of the module. If not, see if updating fixes the issue.

To report an issue:
- Please report errors by opening an issue on [GitHub](https://github.com/grezniczek/redcap_field_help/issues) or on the community site (please tag @gunther.rezniczek). 
- Include essential details about your REDCap installation such as **version** and platform (operating system, PHP version).
- If the problem occurs only in conjunction with another external module, please provide its details (you may also want to report the issue to that module's authors).
