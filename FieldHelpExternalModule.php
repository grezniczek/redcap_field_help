<?php

namespace RUB\FieldHelpExternalModule;

use ExternalModules\AbstractExternalModule;

/**
 * ExternalModule class for survey authentication.
 */
class FieldHelpExternalModule extends AbstractExternalModule {

    private $settings;

    function __construct()
    {
        // Need to call parent constructor first!
        parent::__construct();
        // Initialize settings.
        $this->settings = new FieldHelpSettings($this);
    }


    public function redcap_data_entry_form_top(int $project_id, string $record = NULL, string $instrument, int $event_id, int $group_id = NULL, int $repeat_instance = 1) {
        if ($project_id != null && intval($project_id) > 0) {
            $this->injectFieldHelpJS();
        }
    }

    public function redcap_survey_page_top(int $project_id, string $record = NULL, string $instrument, int $event_id, int $group_id = NULL, string $survey_hash, int $response_id = NULL, int $repeat_instance = 1 ) {
        if ($project_id != null && intval($project_id) > 0) {
            $this->injectFieldHelpJS();
        }
    }

    function redcap_every_page_top($project_id) {

    }



    /**
     * Inject the JS necessary to process field help data-attributes.
     */
    private function injectFieldHelpJS() {
        $jsUrl = $this->getUrl("fieldhelp.js");
        print "<script type=\"text/javascript\" src=\"{$jsUrl}\"></script>";
    }


} // FieldHelpExternalModule

/**
 * A helper class that holds settings info for this external module.
 */
class FieldHelpSettings 
{
    public $isProject = false;
    private $m;

    function __construct($module) 
    {
        $this->isProject = isset($GLOBALS["project_id"]);
        $this->m = $module;
        // Only in the context of a project.
        if ($this->isProject) {
        }
    }

    private function getValue($name, $default) 
    {
        $value = $this->m->getProjectSetting($name);
        return strlen($value) ? $value : $default;
    }

    /**
     * Generates a GUID in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
     */
    public static function GUID() 
    {
        if (function_exists('com_create_guid') === true) {
            return strtolower(trim(com_create_guid(), '{}'));
        }
        return strtolower(sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535)));
    }

} // FieldHelpSettings
