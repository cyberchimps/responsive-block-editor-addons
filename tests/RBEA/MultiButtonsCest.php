<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class MultiButtonsCest
{
    public $multiButtonsBlock = 'div[data-title="Multi Buttons"]';
    public $multiButtonsBlockBtn = '//button[@aria-label="Select Multi Buttons"]';
    public $fMultiButtons = '.responsive-block-editor-addons-block-button';
    public $fMultiButtonsLayout = '.responsive-block-editor-addons-buttons-layout-wrap';

    /**
     * General settings
     */
    public $alignLeft = '//button[@aria-label="Align text left"]';
    public $alignRight = '//button[@aria-label="Align text right"]';
    public $stackOnSelect = '//*[contains(@id, "inspector-select-control")]';
    public $stackOnSelectOption = 'option[value="mobile"]';

    /**
     * Child element style
     * Content settings
     */
    public $childBtn = '(//*[@data-title="Buttons Child"])[1]';
    public $urlInputField = '//input[@aria-label="URL"]';
    public $inheritFromThemeBtn = '(//*[contains(@id, "inspector-toggle-control")])[1]';
    public $openInNewTabBtn = '(//*[contains(@id, "inspector-toggle-control")])[2]';
    public $hoverEffectSelect = '//*[contains(@id, "inspector-select-control")]';
    public $hoverEffectSelectOption = 'option[value="scale"]';
    public $fChildBtnLink = '.responsive-block-editor-addons-buttons-layout-wrap > div:nth-child(1) > div > a';

    /**
     * Style  Settings
     * 1.Color Settings
     */
    public $colorStyleBtn = '//*[text()="Color Settings"]';
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"]/div[2]/button)[1]';
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"]/div[5]/button)[2]';
    public $hoverTextColor = '(//*[@class="components-circular-option-picker__swatches"]/div[5]/button)[1]';
    public $hoverBorderColor = '(//*[@class="components-circular-option-picker__swatches"]/div[6]/button)[2]';
    public $clearTextColorBtn = '(//*[text() = "Clear"])[1]';
    public $clearBoderColorBtn = '(//*[text() = "Clear"])[2]';
    public $opacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $fLinkWrapper = '.responsive-block-editor-addons-buttons-layout-wrap > div:nth-child(1) > div > a';
  
    /**
     * 2. Background
     */
    public $backgroundStyleBtn = '//button[text()="Background"]';
    public $backgroungTypeSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $backgroundTypeSelectColor = 'option[value="color"]';
    public $backgroundSelectedColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[1]';
    public $backgroundHoverSelectedColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[2]';

    /**
     * 3. Border
     */
    public $borderStyleBtn = '//button[text()="Border"]';
    public $borderTypeSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $borderTypeSelectOption = 'option[value="dashed"]';
    public $borderThicknessInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Thickness"]';
    public $borderCornersInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Rounded Corners"]';

    /**
     * 4. Spacing
     */
    public $spacingStyleBtn = '//*[text()="Spacing"]';
    public $verticalPaddingInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Padding"]';
    public $horizontalPaddingInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Padding"]';
    public $verticalMarginInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Margin"]';
    public $HorizontalMarginInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Margin"]';
    public $verticalPaddingTabletInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Padding Tablet"]';
    
    /**
     * 5. Icon
     */
    public $iconStyleBtn = '//*[text()="Icon Settings"]';
    public $fIcon = '.responsive-block-editor-addons-button__icon';
    public $fIconSvg = '.responsive-block-editor-addons-button__icon > svg';
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[1]';
    public $selectedIcon = '(//*[@class="rfipicons__selector"]//span)[1]';
    public $selectIconPosition = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $iconPositionSelected = 'option[value="before"]';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $iconSpacing = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Spacing"]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $iconHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
   
    public $resetIconSize = '(//button[text()="Reset"])[1]';
    public $resetIconSpacing = '(//button[text()="Reset"])[2]';
    public $clearIconColor = '(//button[text()="Clear"])[1]';
    public $clearIconHoverColor = '(//button[text()="Clear"])[2]';

    public $iconSvgColor = '.responsive-block-editor-addons-button__icon svg';
    public $RBEABtnWrapper = '//*[@id="primary"]/article/div/div[2]/div/div/div[1]/div';

    /**
     * 6. Typography
     */
    public $typographyStyleBtn = '//button[text()="Button Typography"]';
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    /**
     * 7. Box Spacing
     */
    public $boxShadowStyleBtn = '//button[text()="Box Shadow"]';
    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '//div[@class="components-circular-option-picker__swatches"]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[1]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[2]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $boxShadowPositionSelected = 'option[value="inset"]';


    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950); 
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a multi buttons block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'multi buttons');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Remove the mutli buttons block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->childBtn);
        $I->click($this->multiButtonsBlockBtn);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);       
    }

    /**
     * Function to select child element
     */
    public function _selectChildStyle( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj){
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->multiButtonsBlock); 
        $I->click( $this->childBtn); 
        $I->wait(1);
        $I->click('Style');
    }

    /**
     * This test is to check general settings of multi buttons block.
     */
    public function MultiSelectGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the multi buttons block in the frontend.');        
        $I->seeElement($this->fMultiButtons);

        $I->amGoingTo('Change general settings of multi buttons block on desktop.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->multiButtonsBlock);   
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->alignLeft);
        $stackOn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->stackOnSelect))->
            findElement( WebDriverBy::cssSelector($this->stackOnSelectOption) )->click();
        });        
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general setting for desktop to the frontend.');
        $commonFunctionsPageObj->field = $this->fMultiButtons;
        $commonFunctionsPageObj->prop = 'justify-content';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'flex-start');
        $I->resizeWindow(965, 1024);        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'center');
        $I->wait(1);
        $I->resizeWindow(375, 812);        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'center');
        $commonFunctionsPageObj->field = $this->fMultiButtonsLayout;
        $commonFunctionsPageObj->prop = 'flex-direction';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'column');
        $I->wait(1);
        $I->resizeWindow(1280, 950);  
        
        $I->amGoingTo('Change general settings of multi buttons block on tablet.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->multiButtonsBlock);   
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->alignRight);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->alignLeft);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general setting for tablet and mobile to the frontend.');
        $commonFunctionsPageObj->field = $this->fMultiButtons;
        $commonFunctionsPageObj->prop = 'justify-content';
        $I->resizeWindow(375, 812);        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'flex-start');
        $I->wait(1);
        $I->resizeWindow(965, 1024);    
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'flex-end'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);
    }

    /**
     * This test is to check the child element's content settings
     */
    public function MultiSelectChildContentSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Change the content settings for the Child button');

        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->multiButtonsBlock); 
        $I->click( $this->childBtn); 
        $I->wait(1);
        
        $I->click($this->urlInputField);  
        $field= $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->urlInputField));
        });      
        $field->sendKeys(WebDriverKeys::BACKSPACE);
        $I->fillField($this->urlInputField, 'www.google.com');
        $I->click($this->inheritFromThemeBtn);
        $I->click($this->openInNewTabBtn);
        $I->wait(1);
        $hoverOption = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->hoverEffectSelect))->
            findElement( WebDriverBy::cssSelector($this->hoverEffectSelectOption) )->click();
        });
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the content settings in the frontend');
        $I->seeInSource('<a class="responsive-block-editor-addons-buttons-repeater responsive-block-editor-addons-button__wrapper wp-block-button__link" href="www.google.com"');
    }

    /**
     * This test is to check the child elements's Color Settings 
     */
    public function MultiSelectChildColorStyleSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the text and border color for normal state of link.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->colorStyleBtn);
        $I->click('Normal');
        $I->click($this->textColor);
        $I->click($this->borderColor);
        $commonFunctionsPageObj->field = $this->opacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend color settings for normal state of link.');
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51)'); 
        $commonFunctionsPageObj->field = $this->fChildBtnLink;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');

        $I->amGoingTo('Clear text and border color for normal state of link.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->colorStyleBtn);
        $I->click($this->clearTextColorBtn);
        $I->click($this->clearBoderColorBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the front end after resetting text and border');
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(0, 0, 0)'); 
        $commonFunctionsPageObj->field = $this->fChildBtnLink;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 0, 0, 1)');
    }

    /**
     * This test is to check the child element's background Settings
     */
    public function MultiSelectChildBackgroundSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the background of the button.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->backgroundStyleBtn);
        $I->wait(3);
        $buttonBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroungTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectColor) )->click();
        });
        $I->click($this->backgroundSelectedColor);
        $I->click($this->backgroundHoverSelectedColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check for the background color in the frontend');
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 102, 204, 1)');
        $I->wait(2);        
        $I->moveMouseOver($this->fLinkWrapper);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');
    }

    /**
     * This test is to check the child element's Border Settings
     */
    public function MultiSelectChildBorderSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the border of the button.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->borderStyleBtn);
        $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->borderTypeSelectOption) )->click();
        });
        $I->click($this->borderThicknessInputField);
        $commonFunctionsPageObj->field = $this->borderThicknessInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '4' );
        $I->click($this->borderCornersInputField);
        $commonFunctionsPageObj->field = $this->borderCornersInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the border of the button.');
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'border-style';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'dashed');
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $commonFunctionsPageObj->prop = 'border-width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '4px');
        $I->wait(1);
    }

    /**
     * This test is to check the child element's Spacing Settings
     */
    public function MultiSelectChildSpacingSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacing of the button.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);

        $I->amGoingTo('Change the spacing of the button in desktop view.');
        $I->click($commonFunctionsPageObj->desktopView);
        $desktopArr = array('13px', '15px', '12px', '20px');
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);

        $I->amGoingTo('Check padding and margin in the frontend for desktop view.');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'desktop');
        $I->resizeWindow(375, 812);
        $mobileArr = array('10px', '14px', '10px', '5px');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $mobileArr, 'mobile');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $tabletArr = array('10px', '14px', '10px', '10px');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr, 'tablet');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change the top padding of the button in tablet view.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($commonFunctionsPageObj->tabletView);        
        $I->click($this->verticalPaddingTabletInputField);
        $commonFunctionsPageObj->field = $this->verticalPaddingTabletInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16px' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the top padding of the button to the front end in tablet view.');
        $I->resizeWindow(965, 1024);
        $I->wait(3);
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'padding-top';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);
    }

    /**
     * To change and check the spacing in different device modes
     */
    public function _changePaddingAndMargin($I, $commonFunctionsPageObj, $arr){ 
        $I->wait(1);
        $I->click($this->verticalPaddingInputField);
        $commonFunctionsPageObj->field = $this->verticalPaddingInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->click($this->horizontalPaddingInputField);
        $commonFunctionsPageObj->field = $this->horizontalPaddingInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[1] );
        $I->click($this->verticalMarginInputField);
        $commonFunctionsPageObj->field = $this->verticalMarginInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[2] );
        $I->click($this->HorizontalMarginInputField);
        $commonFunctionsPageObj->field = $this->HorizontalMarginInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[3] );
        $commonFunctionsPageObj->publishAndViewPage($I);
     }

    /**
     * To check padding and margin in the front end.
     */
    public function _checkPaddingAndMargin($I, $commonFunctionsPageObj, $arr, $view){
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'padding-top';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]); 
        $commonFunctionsPageObj->prop = 'padding-left';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
        $commonFunctionsPageObj->prop = 'margin-top';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[2]);
        $commonFunctionsPageObj->prop = 'margin-left';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[3]);
    }

    /**
     * This test is to check the child element's Icon Settings
     */
    public function MultiSelectChildIconSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the icons of the button.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->iconStyleBtn);
        $I->wait(2);
        $I->click($this->selectIconBtn);
        $I->wait(2);
        $I->click($this->selectedIcon);
        $I->wait(2);
        $I->click($this->selectIconBtn);
        $I->wait(2);
        $iconPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->selectIconPosition))->
            findElement( WebDriverBy::cssSelector($this->iconPositionSelected) )->click();
        });
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->field = $this->iconSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->iconColor);
        $I->click($this->iconHoverColor);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Icon settings in the front end.');
        $I->seeElement($this->fIcon);
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px'); 
        $commonFunctionsPageObj->field = $this->fIcon;
        $commonFunctionsPageObj->prop = 'margin-right';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px'); 
        $commonFunctionsPageObj->field = $this->iconSvgColor;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');
        $I->wait(1);
        $I->moveMouseOver($this->RBEABtnWrapper);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');

        $I->amGoingTo('Reset the Icon settings');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->iconStyleBtn);
        $I->click($this->resetIconSize);
        $I->click($this->resetIconSpacing);
        $I->click($this->clearIconColor);
        $I->click($this->clearIconHoverColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Icon setting after reset in the frontend.');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px'); 
        $commonFunctionsPageObj->field = $this->fIcon;
        $commonFunctionsPageObj->prop = 'margin-right';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px'); 
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');
    }

    /**
     * This test is to check the child element's Typography Settings
     */
    public function MultiSelectChildTypographySettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change typography style settings for multi buttons.');
        $this->_selectChildStyle( $I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $this->_typographyTest($I, $commonFunctionsPageObj);
    }

    /**
     * Complete test for typography
     */
    public function _typographyTest($I, $commonFunctionsPageObj) {
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $fontWeight = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I); 
        
        $I->amGoingTo('Check the frontend for the typography settings');
        $commonFunctionsPageObj->field = $this->fChildBtnLink;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '50px');
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
        $this->_selectChildStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->click($commonFunctionsPageObj->mobileView);
        $fontSize = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontSizeInputField));
        });
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);
     
        $I->amGoingTo('Check the frontend for the mobile view typography settings');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fChildBtnLink;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px'); 
        $I->resizeWindow(1280, 950); 
        $I->wait(1); 

        $I->amGoingTo('Change font-size for tablet view');
        $this->_selectChildStyle($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(768, 1024);
        $I->wait(1); 

        $I->amGoingTo('Check the frontend for the tablet view typography settings');
        $commonFunctionsPageObj->field = $this->fChildBtnLink;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px'); 
        $I->resizeWindow(1280, 950); 
        $I->wait(1); 
        
        $I->amGoingTo('Reset line height');
        $this->_selectChildStyle($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->scrollTo($this->resetLineHeightBtn);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check reset line height in the frontend');
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->field = $this->fChildBtnLink;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '43.75px');
    }
    
    /**
     * This test is to check the child element's Box Spacing Settings
     */
    public function MultiSelectChildBoxShadowSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change Box shadow setting');
        $this->_selectChildStyle($I, $commonFunctionsPageObj); 
        $I->click($this->boxShadowStyleBtn);
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(2);
        $I->scrollTo($this->boxShadowColor, 10);
        $I->click($this->boxShadowColor);
        $I->wait(1);
        $I->scrollTo($this->boxShadowLeft, 10);
        $I->click($this->boxShadowLeft);
        $commonFunctionsPageObj->field = $this->boxShadowLeft;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->wait(1); 
        $I->scrollTo($this->boxShadowTop, 10);
        $I->click($this->boxShadowTop);
        $commonFunctionsPageObj->field = $this->boxShadowTop;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $I->scrollTo($this->boxShadowBlur, 10);
        $I->click($this->boxShadowBlur);
        $commonFunctionsPageObj->field = $this->boxShadowBlur;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->wait(1); ; 
        $I->scrollTo($this->boxShadowSpread, 10);
        $I->click($this->boxShadowSpread);
        $commonFunctionsPageObj->field = $this->boxShadowSpread;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1);  
        $I->scrollTo($this->boxShadowPosition, 10);
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowPositionSelected) )->click();
        });
        $I->wait(2);

        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check box shadow style in frontend');
        $commonFunctionsPageObj->field = $this->fLinkWrapper;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_selectChildStyle($I, $commonFunctionsPageObj); 
        $I->click($this->boxShadowStyleBtn);
        $I->scrollTo($this->boxShadowResetBtn, 20);
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(0, 0, 0) 0px 0px 0px 0px');
    }
}