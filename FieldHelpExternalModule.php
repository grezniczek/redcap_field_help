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
        $jsUrl = $this->getUrl("fieldhelp.js");
        print "<script type=\"text/javascript\" src=\"{$jsUrl}\"></script>";
    }

    /**
     * Inject the JS to provide design-time help.
     */
    private function injectFieldHelpDesignJS() {
        $jsUrl = $this->getUrl("fieldhelp_design.js");
        print "<script type=\"text/javascript\" src=\"{$jsUrl}\"></script>";
    }
}
