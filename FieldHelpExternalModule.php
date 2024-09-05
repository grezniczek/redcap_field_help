<?php

namespace RUB\FieldHelpExternalModule;

use ExternalModules\AbstractExternalModule;

/**
 * ExternalModule class for survey authentication.
 */
class FieldHelpExternalModule extends AbstractExternalModule {

    function redcap_every_page_top($project_id) {
        if (PAGE == "DataEntry/index.php" || PAGE == "surveys/index.php") {
            if ($project_id != null && intval($project_id) > 0) {
                $this->injectFieldHelpJS();
            }
        }
        else if (PAGE == "Design/online_designer.php") {
            $this->injectFieldHelpDesignJS();
        }
    }

    /**
     * Inject the JS necessary to process field help data-attributes.
     */
    private function injectFieldHelpJS() {
        /** @var \ExternalModules\Framework */
        $fw = $this->framework;
        $fw->initializeJavascriptModuleObject();
        $jsmo_name = $fw->getJavascriptModuleObjectName();
        $js = file_get_contents(__DIR__ . "/fieldhelp.js");
        $js = str_replace("{JSMO}", $jsmo_name, $js);
        print \RCView::script($js, true);
        print \RCView::style("[data-toggle-hidden] { display: none; }");
    }

    /**
     * Inject the JS to provide design-time help.
     */
    private function injectFieldHelpDesignJS() {
        /** @var \ExternalModules\Framework */
        $fw = $this->framework;
        $jsUrl = $fw->getUrl("fieldhelp_design.js");
        print "<script type=\"text/javascript\" src=\"{$jsUrl}\"></script>";
    }
}
