<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class ExpandCest
{
    public $expandBlock = '//div[@data-title="Expand/Show More"]';
    public $fExpandBlock = 'div .responsive-block-editor-addons-block-expand';

    /**
     * General settings
     */
    public $generalStyleBtn = '//button[text()="General"]';
    public $titleToggleBtn = '//*[contains(@id, "inspector-toggle-control")]';
    public $fExpandTitle = 'div .responsive-block-editor-addons-expand-title';
    public $typographyStyleBtn = '//button[text()="Typography"]';
    public $titleTypographyBtn = '//button[text()="Title Typography"]';
    public $textTypographyBtn = '//button[text()="Text Typography"]';
    public $linkTypographyBtn = '//button[text()="Link Typography"]';

    /**
     * Style settings.
     * 1. Typography
     */
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';
    public $fExpandText = 'div .responsive-block-editor-addons-expand-less-text';
    public $fExpandLink = 'p.responsive-block-editor-addons-expand-more-toggle-text'; 

    /**
     * 2. Spacing
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $titleMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Title - Margin Bottom"]';
    public $textMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Text - Margin Bottom"]';
    public $linkMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Link - Margin Bottom"]';
    public $titleMarginReset = '(//*[text() = "Reset"])[1]';
    public $textMarginReset = '(//*[text() = "Reset"])[2]';
    public $linkMarginReset = '(//*[text() = "Reset"])[3]';
    public $desktopView1 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView1 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView1 = '(//button[contains(@id, "mobile")])[2]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[3]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[3]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[3]';

    /**
     * 3. Color setting
     */
    public $colorSettingStyleBtn = '//*[text()="Color Setting"]';
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $linkColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[1]/button';
    public $titleColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[5]/button';
    public $clrTextColor = '(//*[text() = "Clear"])[1]';
    public $clrLinkColor = '(//*[text() = "Clear"])[2]';
    public $clrTitleColor = '(//*[text() = "Clear"])[3]';
    
    /**
     * Block options
     */
    public $blockAlignmentBtn = '(//button[@aria-label="Align"])[1]';
    public $fullWidthBtn = '//*[@id="editor"]/div[2]/div/div/div/div/button[5]';
    public $textAlignmentBtn = '(//button[@aria-label="Align"])[2]';
    public $textAlignRight = '//*[@id="editor"]/div[2]/div/div/div/div/button[3]';
    public $fBlockContent = 'div .responsive-block-editor-addons-expand-block-content';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create an Expand block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'expand/show more');
        $I->wait(1);
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the expand block.');
        $I->amOnPage('/rbea-block'); 
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->expandBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Function to open style tab settings.
     */
    public function _openStyle($I, $commonFunctionsPageObj ) {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->expandBlock);
        $I->click('Style');
    }

    /**
     * This test checks the general settings of the expand block.
     */
    public function ExpandBlockGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Check the expand block in the frontend.');
        $I->seeElement($this->fExpandBlock);
        $I->seeElement($this->fExpandTitle);
        
        $I->amGoingTo('Hide the title of the expand block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->expandBlock);
        $I->click($this->generalStyleBtn);
        $I->click($this->titleToggleBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(1);
        $I->cantSee($this->fExpandTitle);
    }

    /**
     * This test checks the style typography settings of the expand block.
     */
    public function ExpandBlockTypographySettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the title typography....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->titleTypographyBtn);  
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->titleTypographyBtn,$this->fExpandTitle);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');

        $I->amGoingTo('Change the text typography....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->textTypographyBtn);
        $linkTypographyBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->linkTypographyBtn))->getLocationOnScreenOnceScrolledIntoView();
        });  
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->textTypographyBtn, $this->fExpandText);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '50px');

        $I->amGoingTo('Change the link typography....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->linkTypographyBtn);
        $spacingStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->spacingStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->linkTypographyBtn, $this->fExpandLink);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
    }

    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography style of the expand block for desktop view.');
        $I->resizeWindow(1280, 950);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25px' );
        $I->wait(1);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings in the desktop view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '50px');
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the typography style of the expand block for mobile and desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($typography);  
        $I->click($commonFunctionsPageObj->tabletView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16px' );
        $I->click($commonFunctionsPageObj->mobileView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8px' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the typography settings in the tablet and mobile view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-size';
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($typography);  
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }

    /**
     * This test checks the spacing settings of the expand block.
     */
    public function ExpandBlockSpacingSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the title spacing....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $view = array($commonFunctionsPageObj->desktopView, $commonFunctionsPageObj->tabletView, $commonFunctionsPageObj->mobileView );
        $spacing = array('13px', '28px', '28px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->titleMargin, $this->fExpandTitle);

        $I->amGoingTo('Change the text spacing....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $view = array($this->desktopView1, $this->tabletView1, $this->mobileView1 );
        $spacing = array('10px', '20px', '20px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->textMargin, $this->fExpandText);

        $I->amGoingTo('Change the link spacing....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $view = array($this->desktopView2, $this->tabletView2, $this->mobileView2 );
        $spacing = array('20px', '18px', '18px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->linkMargin, $this->fExpandLink);
    }

    /**
     * This function performs the spacing test
     */
    public function _spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $backendSelector, $frontendSelector)
    {
        $I->wait(1);
        $I->amGoingTo('Change the spacing settings of the expand block for the desktop view');
        $I->click($view[0]);
        $I->click($backendSelector);
        $commonFunctionsPageObj->field = $backendSelector;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[0] );
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the margin in the front view for desktop view.');
        $commonFunctionsPageObj->field = $frontendSelector;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $spacing[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I,  $spacing[1]);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I,  $spacing[2]);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);
        
        $I->amGoingTo('Change the title spacing settings of the expand block for the tablet and mobile view');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($view[1]);
        $I->click($backendSelector);
        $commonFunctionsPageObj->field = $backendSelector;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10px' );
        $I->wait(1);
        $I->click($view[2]);
        $I->click($backendSelector);
        $commonFunctionsPageObj->field = $backendSelector;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5px' );
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the margin in the front view for tablet and mobile view.');
        $commonFunctionsPageObj->field = $frontendSelector;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $spacing[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Reset the margin in the desktop view');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->titleMarginReset);
        $I->click($this->textMarginReset);
        $I->click($this->linkMarginReset);
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the margin in the front view for desktope view.');
        $commonFunctionsPageObj->field = $frontendSelector;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $I->wait(1);
    }

    /**
     * This test checks the color settings of the expand block.
     */
    public function ExpandBlockColorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color setting of the expand block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorSettingStyleBtn);
        $I->wait(1);
        $I->click($this->textColor);
        $I->wait(1);
        $I->click($this->linkColor);
        $I->wait(1);
        $I->click($this->titleColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fExpandTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fExpandText;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fExpandLink;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 102, 204, 1)');

        $I->amGoingTo('Reset the color settings of the expand block');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorSettingStyleBtn);
        $I->wait(1);
        $I->click($this->clrTitleColor);
        $I->wait(1);
        $I->click($this->clrTextColor);
        $I->wait(1);
        $I->click($this->clrLinkColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fExpandTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fExpandText;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fExpandLink;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 102, 204, 1)');
    }

    /**
     * This test checks the expand block options.
     */
    public function ExpandBlockOptionsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the expand block options.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->expandBlock);
        $I->click($this->blockAlignmentBtn);
        $I->wait(1);
        $I->click($this->fullWidthBtn);
        $I->wait(1);
        $I->click($this->textAlignmentBtn);
        $I->wait(1);
        $I->click($this->textAlignRight);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the block options in the frontend.');
        $commonFunctionsPageObj->field = $this->fBlockContent;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'right'); 
        
        $I->amGoingTo('Reset the block options.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->expandBlock);
        $I->click($this->blockAlignmentBtn);
        $I->wait(1);
        $I->click($this->fullWidthBtn);
        $I->wait(1);
        $I->click($this->textAlignmentBtn);
        $I->wait(1);
        $I->click($this->textAlignRight);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the block options in the frontend after reset.');
        $commonFunctionsPageObj->field = $this->fBlockContent;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'left'); 
    }
}
