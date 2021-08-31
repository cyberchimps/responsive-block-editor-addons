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
    public $fSeparator = '.responsive-heading-seperator';

    /**
     * Style settings
     * 1. Typography
     */
    public $typographyStyleBtn = '//button[text()="Typography"]';
    public $headingTypographyStyleBtn = '//button[text()="Heading Typography"]';
    public $subHeadingTypographyStyleBtn = '//button[text()="Sub Heading Typography"]';

    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $letterSpacingInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Letter Spacing"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    public $fAdvanceHeading = '.responsive-heading-title-text';
    public $fAdvanceSubHeading = '.responsive-heading-desc-text';

    /**
     * 2. Colors and Decorations
     */
    public $colorsnDecorationsStyleBtn = '//button[text()="Colors and Decorations"]';
    public $headingColorBtn = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $subHeadingColorBtn = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[5]/button';
    public $headingDecorationSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $headingDecorationSelectedOption = 'option[value="underline"]'; 
    public $subHeadingDecorationSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $subHeadingDecorationSelectedOption = 'option[value="line-through"]'; 

    public $headingColorResetBtn = '(//*[text()="Clear"])[1]';
    public $subHeadingColorResetBtn = '(//*[text()="Clear"])[2]';

    /**
     * 3. Separator settings
     */
    public $sepratorStyleBtn = '//button[text()="Separator"]';
    public $positionSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $positionSelectedOption = 'option[value="belowDesc"]';
    public $styleSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $styleSelectedOption = 'option[value="double"]';
    public $thicknessInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Thickness (px)"]';
    public $sizeTypePx = '//*[@aria-label="Size Type"]//button[1]';
    public $widthInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Width"]';
    public $separatorColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';

    public $thicknessResetBtn = '(//button[text()="Reset"])[1]';
    public $widthResetBtn = '(//button[text()="Reset"])[2]';
    public $colorClrBtn = '//button[text()="Clear"]';

    /**
     * 4. Spacing
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $headingSpacing = '//*[contains(@id, "inspector-input-control") and @aria-label="Heading Bottom Spacing"]';
    public $separatorSpacing = '//*[contains(@id, "inspector-input-control") and @aria-label="Separator Bottom Spacing"]';
    public $textSpacing = '//*[contains(@id, "inspector-input-control") and @aria-label="Text Bottom Spacing"]';

    /**
     * Advance Setting
     */
    public $advanceStyleBtn = '//button[text()="Advanced"]';
    public $anchorInputField = '(//input[contains(@id, "inspector-text-control")])[1]';
    public $anchorElement = '#Anchor';

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
    public function _openStyleTabSettings($I, $commonFunctionsPageObj ) {
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
        $commonFunctionsPageObj->field = $this->fAdvanceHeadingBlock;
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
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->headingTypographyStyleBtn);
        $I->wait(1);  
       $backEndSelector = $this->headingTypographyStyleBtn;
        $frontEndSelector = $this->fAdvanceHeading;
        $this->_typographyTest($I, $commonFunctionsPageObj, $frontEndSelector, $backEndSelector);

        $I->amGoingTo('Change style settings for advance subHeading');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->subHeadingTypographyStyleBtn);
        $I->wait(1); 
        $backEndSelector = $this->subHeadingTypographyStyleBtn;
        $frontEndSelector = $this->fAdvanceSubHeading;
        $this->_typographyTest($I, $commonFunctionsPageObj, $frontEndSelector, $backEndSelector);

    }

    /**
     * Complete test for typography
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $frontEndSelector, $backEndSelector) {
        
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->wait(1);
        $fontWeight = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $I->wait(1);        
        $I->scrollTo($this->letterSpacingInputField, 20);
        $I->click($this->letterSpacingInputField);
        $commonFunctionsPageObj->field = $this->letterSpacingInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I); 
        
        $I->amGoingTo('Check the frontend for the typography settings');
        $commonFunctionsPageObj->field = $frontEndSelector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '50px');
        $commonFunctionsPageObj->prop = 'letter-spacing';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '2px');
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $I->resizeWindow(768, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change font-size for mobile view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($backEndSelector);
        $I->wait(1); 
        $I->click($commonFunctionsPageObj->mobileView);
        $fontSize = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontSizeInputField));
        });
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(375, 812);
        $I->wait(1);

        $I->amGoingTo('Check the frontend for the mobile view typography settings');
        $commonFunctionsPageObj->field = $frontEndSelector;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '15px'); 
        $I->resizeWindow(1280, 950); 
        $I->wait(1); 

        $I->amGoingTo('Change font-size for tablet view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($backEndSelector);
        $I->wait(1);  
        $I->click($commonFunctionsPageObj->tabletView);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(768, 1024);
        $I->wait(1); 

        $I->amGoingTo('Check the frontend for the tablet view typography settings');
        $commonFunctionsPageObj->field = $frontEndSelector;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '15px'); 
        $I->resizeWindow(1280, 950); 
        $I->wait(1); 
        
        $I->amGoingTo('Reset line height');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($backEndSelector);
        $I->wait(1);  
        $I->scrollTo($this->resetLineHeightBtn);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check reset line height in the frontend');
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->field = $frontEndSelector;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
    } 
    
    /**
     * This test is to check the colors and decorations settings.
     */
    public function AdvanceHeadingColorsAndDecorationsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) {
        $I->amGoingTo('Change colors and decorations of heading and subheading');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorsnDecorationsStyleBtn);
        $I->wait(1);
        $I->click($this->headingColorBtn);
        $I->click($this->subHeadingColorBtn);
        $headingDecoration = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->headingDecorationSelect))->
            findElement( WebDriverBy::cssSelector($this->headingDecorationSelectedOption) )->click();
        });
        $I->wait(1);
        $subHeadingDecoration = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->subHeadingDecorationSelect))->
            findElement( WebDriverBy::cssSelector($this->subHeadingDecorationSelectedOption) )->click();
        });
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color and decoration in the frontend');
        $commonFunctionsPageObj->field = $this->fAdvanceHeading;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');  
        $commonFunctionsPageObj->prop = 'text-decoration';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'underline solid rgb(16, 101, 156)'); 
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fAdvanceSubHeading;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');  
        $commonFunctionsPageObj->prop = 'text-decoration';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'line-through solid rgb(51, 51, 51)');
        
        $I->amGoingTo('Reset color and decoration');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorsnDecorationsStyleBtn);
        $I->wait(1);
        $I->click($this->headingColorResetBtn);
        $I->click($this->subHeadingColorResetBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the reset color  in the frontend');
        $commonFunctionsPageObj->field = $this->fAdvanceHeading;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fAdvanceSubHeading;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)'); 
    }

    /**
     * This test is to  check the separator settings.
     */
    public function AdvanceHeadingSeparatorSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change the separator settings');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->sepratorStyleBtn);
        $I->wait(1);
        $separatorPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->positionSelect))->
            findElement( WebDriverBy::cssSelector($this->positionSelectedOption) )->click();
        });
        $separatorStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->styleSelect))->
            findElement( WebDriverBy::cssSelector($this->styleSelectedOption) )->click();
        });
        $I->wait(1);
        $I->click($this->thicknessInputField);
        $commonFunctionsPageObj->field = $this->thicknessInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '6' );
        $I->wait(1);
        $I->click($this->sizeTypePx);
        $I->click($this->widthInputField);
        $commonFunctionsPageObj->field = $this->widthInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '120' );
        $I->wait(1);
        $I->click($this->separatorColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check separator style in the frontend');
        $commonFunctionsPageObj->field = $this->fSeparator;
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(16, 101, 156)');  
        $commonFunctionsPageObj->prop = 'border-top-style';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'double');  
        $commonFunctionsPageObj->prop = 'border-top-width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '6px');
        $commonFunctionsPageObj->prop = 'width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '120px');

        $I->amGoingTo('Reset separator style');
        $I->amGoingTo('Change the separator settings');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->sepratorStyleBtn);
        $I->click($this->thicknessResetBtn);
        $I->click($this->widthResetBtn);
        $I->click($this->colorClrBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check reset separator style in the frontend');
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51)');  
        $commonFunctionsPageObj->prop = 'border-top-width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '3px');  
        $commonFunctionsPageObj->prop = 'width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');  
    }

    /**
     * This test is to check spacing settings.
     */
    public function AdvanceHeadingSpacingSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacing settings');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->headingSpacing);
        $commonFunctionsPageObj->field = $this->headingSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->click($this->textSpacing);
        $commonFunctionsPageObj->field = $this->textSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->separatorSpacing);
        $commonFunctionsPageObj->field = $this->separatorSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8' );      
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing settings in the front end.');
        $commonFunctionsPageObj->field = $this->fAdvanceHeading;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $commonFunctionsPageObj->field = $this->fAdvanceSubHeading;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $commonFunctionsPageObj->field = $this->fSeparator;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px');        
        $I->wait(1);
        $I->resizeWindow(768, 1024);
        $arr = array('15px', '15px', '15px');
        $this->_checkDefaultSpacing($I, $commonFunctionsPageObj, $arr);
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $arr = array('15px', '15px', '15px');
        $this->_checkDefaultSpacing($I, $commonFunctionsPageObj, $arr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);  
        
        $I->amGoingTo('Change the bottom margin of heading in mobile view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->headingSpacing);
        $commonFunctionsPageObj->field = $this->headingSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '13' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the mobile spacing settings in the front end.');
        $commonFunctionsPageObj->field = $this->fAdvanceHeading;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '13px');
        $I->resizeWindow(965, 1024); 
        $arr = array('15px', '15px', '15px');
        $this->_checkDefaultSpacing($I, $commonFunctionsPageObj, $arr);
        $I->resizeWindow(1280, 950); 
        $arr = array('25px', '10px', '8px');
        $this->_checkDefaultSpacing($I, $commonFunctionsPageObj, $arr);
        
        $I->amGoingTo('Change the bottom margin of heading in tablet view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->headingSpacing);
        $commonFunctionsPageObj->field = $this->headingSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '17' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the mobile spacing settings in the front end.');
        $commonFunctionsPageObj->field = $this->fAdvanceHeading;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '17px');
        $I->resizeWindow(375, 812); 
        $arr = array('13px', '15px', '15px');
        $this->_checkDefaultSpacing($I, $commonFunctionsPageObj, $arr);
        $I->resizeWindow(1280, 950); 
        $arr = array('25px', '10px', '8px');
        $this->_checkDefaultSpacing($I, $commonFunctionsPageObj, $arr);
    }

    /**
     * To check default spacing in different device mode
     */
    public function _checkDefaultSpacing($I, $commonFunctionsPageObj, $arr){        
        $commonFunctionsPageObj->field = $this->fAdvanceHeading;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]);
        $commonFunctionsPageObj->field = $this->fAdvanceSubHeading;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
        $commonFunctionsPageObj->field = $this->fSeparator;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[2]);  
    }

    /**
     * This test is to check advance HTML Anchor settings.
     */
    public function AdvanceHeadingAdvanceSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->amGoingTo('Create an anchor tag with advance settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->advanceHeadingBlock);
        $I->click('Advanced');
        $I->wait(1);
        $I->click($this->advanceStyleBtn);
        $I->fillField($this->anchorInputField, 'Anchor');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check for HTML Anchor element in the frontend');
        $I->seeElement($this->anchorElement);
        $I->wait(2);
    }
}
