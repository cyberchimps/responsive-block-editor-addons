<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class SpacerCest
{
    public $spacerBlockInSearch = 'div[class="block-editor-block-types-list__list-item"] > button[class="components-button block-editor-block-types-list__item editor-block-list-item-responsive-block-editor-addons-spacer"]';
    public $spacerBlock = 'div[data-title="Spacer"]';
    public $fSpacer = '.responsive-block-editor-addons-spacer';

    public $desktopHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Height in pixels"]';
    public $tabletHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Height Tablet"]';
    public $mobileHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Height Mobile"]';
    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a spacer block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'spacer');
        $I->click($this->spacerBlockInSearch);
        $I->see('Content');
        $I->see('Advanced');
        $I->wait(1);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the anchor block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->spacerBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * This function runs after running each test.
     */
    public function RBEASpacerContentSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change height of spacer for desktop view.');
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(5);
        $I->click($this->desktopHeightInputField);
        $commonFunctionsPageObj->field = $this->desktopHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '150' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check height of spacer for desktop view in the fronend.');        
        $commonFunctionsPageObj->field = $this->fSpacer;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '150px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100px');
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100px');
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change height of spacer for tablet view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click( $this->spacerBlock);        
        $I->click($commonFunctionsPageObj->tabletView);
        $I->wait(1);
        $I->click($this->tabletHeightInputField);
        $commonFunctionsPageObj->field = $this->tabletHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '120' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check height of spacer for tablet view in the frontend.');        
        $commonFunctionsPageObj->field = $this->fSpacer;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '150px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100px');
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '120px');
        $I->resizeWindow(1280, 950);

        
        $I->amGoingTo('Change height of spacer for mobile view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click( $this->spacerBlock);        
        $I->click($commonFunctionsPageObj->mobileView);
        $I->wait(1);
        $I->click($this->mobileHeightInputField);
        $commonFunctionsPageObj->field = $this->mobileHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '90' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check height of spacer for mobile view in the frontend.');        
        $commonFunctionsPageObj->field = $this->fSpacer;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '150px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '90px');
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '120px');
        $I->resizeWindow(1280, 950);
    }
}
