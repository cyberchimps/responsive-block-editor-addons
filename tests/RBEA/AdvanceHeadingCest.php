<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class AdvanceHeadingCest
{

    public $advanceHeadingBlock = 'div[data-title="Advanced Heading"]';  
    public $sampleHeadingText = 'Lorem Ipsum';
    public $sampleSubHeadingText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor dolor, condimentum et sapien ut, consequat luctus sem.';
    public $fAdvanceHeadingBlock = '.responsive-block-editor-addons-block-advanced-heading';
    
    /**
     * General settings
     */
    public $advanceHeadingBlockHeading = '//h2[@aria-label="Write a Heading"]';
    public $advanceHeadingBlockSubHeading = '//p[@aria-label="Write some text"]';
    public $generalSettingBtn = '//button[text()="General"]';
    public $alignLeftBtn = '//button[@align="left"]';
    public $advanceHeadingTagSelect = '//*[contains(@id, "inspector-select-control")]';
    public $selectedTag = 'option[value="h1"]';
    public $fHeading = '//h1[text()="Lorem Ipsum"]';
    public $hideSeparatorBtn = '(//input[contains(@id,  "inspector-toggle-control")])[3]';
    public $fSeparator = '//*[@class="responsive-heading-seperator"]';

    /**
     * Style settings
     * 1. Typography
     */
    public $typographyStyleBtn = '//button[text()="Typography"]';
    public $headingTypographyStyleBtn = '//button[text()="Heading Typography"]';
    public $subHeadingTypographyStyleBtn = '//button[text()="Sub Heading Typography"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a advance heading block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'advance heading');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->fillField($this->advanceHeadingBlockHeading, $this->sampleHeadingText);
        $I->wait(1);
        $I->click($this->advanceHeadingBlockSubHeading); 
        $I->fillField($this->advanceHeadingBlockSubHeading, $this->sampleSubHeadingText); 
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * Function to open style tab settings.
     */
    public function _openStyleTab($I, $commonFunctionsPageObj ) {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->advanceHeadingBlock);
        $I->click('Style');
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the advanced heading block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->advanceHeadingBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * This function is to check the general settings.
     */
    public function AdvanceHeadingGeneralSettingTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check block is shown in frontend.');
        $I->seeElement($this->fAdvanceHeadingBlock);

        $I->amGoingTo('Change content-general settings for advance Heading.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->advanceHeadingBlock);
        $I->amGoingTo('Change alignment of advance Heading block.');
        $I->wait(1);
        $I->click($this->generalSettingBtn);
        $I->wait(1);
        $I->click($this->alignLeftBtn);
        $I->wait(2);
        $headingTag = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->advanceHeadingTagSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedTag) )->click();
        });
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for heading alignment and tag');
        $this->field = $this->fAdvanceHeadingBlock;
        $this->prop = 'text-align';
        $this->_checkFrontEndStyle($I, 'left');
        $I->wait(1);
        $I->seeElement($this->fHeading);

        $I->amGoingTo('Hide the separator line');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->advanceHeadingBlock);
        $I->wait(1);
        $I->click($this->generalSettingBtn);        
        $I->wait(1);
        $I->click($this->hideSeparatorBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for hiding separator');
        $I->wait(1);
        $I->cantSeeElement($this->fSeparator);
    }
    
    /**
     * This function is to check the style settings.
     */
    public function AdvanceHeadingTypographyStyleSettingTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Change style settings for advance Heading.');
        $this->_openStyleTab($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->headingTypographyStyleBtn);
        $I->wait(1);      
    }
}
