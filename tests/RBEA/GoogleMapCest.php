<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class GoogleMapCest
{
    public $blockInSearch = 'div[class="block-editor-block-types-list__list-item"] > button';
    public $searchPlaceInput = '//input[@class="components-placeholder__input"]';
    public $applyBtn = '//*[text()="Apply"]';
    public $zoomInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Zoom"]';
    public $mapHeight = '//*[@aria-label="Height for the map in pixels"]';
    public $fGoogleMapBlock = 'div.wp-block-responsive-block-editor-addons-googlemap.responsive-block-editor-addons-block-googlemap';
    public $googleMapBlock = '//div[@data-title="Google Map"]';
    public $fGoogleMapBlockIframe = 'div.wp-block-responsive-block-editor-addons-googlemap.responsive-block-editor-addons-block-googlemap > div > iframe';

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the google map block.');
        $I->amOnPage('/rbea-block'); 
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->googleMapBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Tests the Map settings of the google API block
     */
    public function GoogleAPIMapSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {   
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Change the map settings of the google API block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'google map');
        $I->wait(1);
        $I->seeElement($this->blockInSearch);
        $I->click($this->blockInSearch);
        $I->wait(1);
        $I->click($this->searchPlaceInput);
        $I->fillField($this->searchPlaceInput, 'pune');
        $I->click($this->applyBtn);
        $I->wait(1);
        $I->click($this->zoomInput);
        $commonFunctionsPageObj->field = $this->zoomInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->wait(1);
        $I->click($this->mapHeight);
        $commonFunctionsPageObj->field = $this->mapHeight;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '450' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(5);
        $I->seeElement($this->fGoogleMapBlock);
        $I->seeInSource('src="https://www.google.com/maps?q=pune&amp;output=embed&amp;z=15"');
        $I->seeElement($this->fGoogleMapBlockIframe);
        $commonFunctionsPageObj->field = $this->fGoogleMapBlockIframe;
        $commonFunctionsPageObj->prop = 'min-height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '450px'); 
    }
}
