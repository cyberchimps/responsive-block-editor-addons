<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class AnchorCest
{
    public $anchorBlock = 'div[data-title="Anchor"]'; 
    public $anchorInputField = '//*[contains(@id, "inspector-text-control")]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create an anchor block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'anchor');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->wait(1);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->amGoingTo('Remove the anchor block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->anchorBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * This function is to test the anchor block content settings
     */
    public function SectionContentSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo("Add anchor block's content settings.");
        $I->fillField($this->anchorInputField, 'anchor');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check for HTML Anchor element in the frontend');
        $I->seeInSource('<div id="anchor" class="responsive-block-editor-addons-block-anchor'); 
    }
}
