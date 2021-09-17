<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class FlipboxCest
{
    public $flipboxBlock = '//div[@data-title="Flipbox"]';
    public $fFlipboxBlock = 'div.responsive-block-editor-addons-block-flipbox';

    /**
     * General settings
     */
    public $generalStyleBtn = '//button[text()="General"]';
    public $numberOfFlexboxInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of Flip Boxes"]';
    public $gutterGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Gutter Gap"]';
    public $heightInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Height"]';
    public $transitionSpeed = '//*[contains(@id, "inspector-input-control") and @aria-label="Transition Speed (ms)"]';
    public $fFlipboxItem = '(//div[@class="wp-block-responsive-block-editor-addons-flip-box"])[1]';
    public $fFlipboxInner = '(//div[@class="flip-box-inner RTL"])[1]';
    public $frontBtn = '//button[@class="components-button flipbox_button is-primary"]';
    public $backBtn = '//button[@class="components-button flipbox_button is-default"]';
    public $hideFrontTitleBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $fFrontTitle = '(//p[@class="wp-block-responsive-block-editor-addons-flip-box__title"])[1]';
    public $fFrontSubTitle = '(//*[@class="wp-block-responsive-block-editor-addons-flip-box__subtitle"])[1]';
    public $titleInput = '(//*[contains(@id, "inspector-text-control") and @type="text"])[1]';
    public $contentInput = '(//*[contains(@id, "inspector-text-control") and @type="text"])[2]';
    public $selectIconBtn1 = '(//*[@class="components-panel__body is-opened"]//div[2])[2]';
    public $selectIconBtn2 = '(//*[@class="components-panel__body is-opened"]//div[2])[2]//div//div//div[2]';
    public $selectedIconBtn = '//*[@class="rfipicons__selector"]//span[7]';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectBackgroundImageBtn = '//*[text()="Select Background Image"]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';
    public $backgroundOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $fIconWrapper = '(//div[@class="wp-block-responsive-block-editor-addons-flip-box-dashicon-fronticon-wrap"])[1]';
    public $fIconSvgPath = 'div.wp-block-responsive-block-editor-addons-flipbox__inner > div:nth-child(1) > div > div:nth-child(1) > div > span > svg > path';
    public $fIconSvg = 'div.wp-block-responsive-block-editor-addons-flipbox__inner > div:nth-child(1) > div > div:nth-child(1) > div > span > svg';
    public $fFlipBoxFront = '(//div[@class="flip-box-front"])[1]';
    public $fFlipBoxBack = '(//div[@class="flip-box-back LTR"])[1]';
    public $resetIconSizeBtn = '//button[text()="Reset"]';
    public $clearIconColor = '//button[text()="Clear"]';
    public $resetOpacityBtn = '//button[text()="Reset"]';

    /**
     * Front Color Settings
     */
    public $frontColorSettingsBtn = '//*[text()="Front Color Settings"]';
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[1]';
    public $bgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[2]';
    public $clrTextColor = '(//button[text()="Clear"])[1]';
    public $clrBgColor = '(//button[text()="Clear"])[2]';

    /**
     * Front Title Typography
     */
    public $titleTypography = '//button[text()="Front Title Typography"]';
    public $subtitleTypography = '//button[text()="Front Subtitle Typography"]';
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    /**
     * Spacing setting
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $marginStyleBtn = '//button[text()="Margin"]';
    public $paddingStyleBtn = '//button[text()="Padding"]';
    public $frontPaddingBtn = '(//button[text()="Front"])[2]';
    public $backPaddingBtn = '(//button[text()="Back"])[2]';
    public $topMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Top Margin"]';
    public $bottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom Margin"]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $resetTopMargin = '(//*[text() = "Reset"])[1]';
    public $resetBottomMargin = '(//*[text() = "Reset"])[2]';
    public $topInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $bottomInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $leftInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $rightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]';
    public $topResetBtn = '(//button[text()="Reset"])[1]';
    public $bottomResetBtn = '(//button[text()="Reset"])[2]';
    public $leftResetBtn = '(//button[text()="Reset"])[3]';
    public $rightResetBtn = '(//button[text()="Reset"])[4]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a flipbox block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'flipbox');
        $I->wait(1);
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the flipbox block.');
        $I->amOnPage('/rbea-block'); 
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->flipboxBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Opens style tab
     */
    public function _openStyle($I, $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->flipboxBlock);
        $I->click('Style');
    }

    /**
     * Tests the general settings of the flipbox block.
     */
    public function FlipboxFrontGeneralContentTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('See the flipbox block in the frontend.');
        $I->seeElement($this->fFlipboxBlock);

        $I->amGoingTo('Change the general settings of the flipbox.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->flipboxBlock);
        $I->click($this->generalStyleBtn);
        $I->click($this->numberOfFlexboxInput);
        $commonFunctionsPageObj->field = $this->numberOfFlexboxInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $I->selectOption('Stack on', 'Mobile'); 
        $I->click($this->gutterGapInput);
        $commonFunctionsPageObj->field = $this->gutterGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '35' );
        $I->click($this->heightInput);
        $commonFunctionsPageObj->field = $this->heightInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '350' );
        $I->selectOption('Flip Style', 'Right To Left'); 
        $I->click($this->transitionSpeed);
        $commonFunctionsPageObj->field = $this->transitionSpeed;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '7' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings in the frontend.');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('wp-block-responsive-block-editor-addons-flip-box'));
        }); 
        $I->assertCount(2, $countItems);
        $commonFunctionsPageObj->field = $this->fFlipboxItem;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '350px'); 
        $commonFunctionsPageObj->field = $this->fFlipboxInner;
        $commonFunctionsPageObj->prop = 'transition';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'transform 0.7s ease 0s');

        $I->amGoingTo('Hide the Title of the Flexbox.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->flipboxBlock);
        $I->click($this->hideFrontTitleBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->fFrontTitle);

        $I->amGoingTo('Change the Front settings of the flipbox');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->flipboxBlock);
        $I->click($this->hideFrontTitleBtn);

        $I->amGoingTo('Change Front Content Settings');
        $I->click('Front Content Settings');
        $I->click('Flip Box 1 Settings');
        $I->click($this->titleInput);
        $I->clearField($this->titleInput);
        $I->fillField($this->titleInput, 'FRONT TITLE 1');
        $I->click($this->contentInput);
        $I->clearField($this->contentInput);
        $I->fillField($this->contentInput, 'FRONT SUBTITLE 1');
        $I->click('Flip Box 1 Settings');
        $I->wait(1);
        $I->click('Flip Box 2 Settings');
        $I->click($this->titleInput);
        $I->clearField($this->titleInput);
        $I->fillField($this->titleInput, 'FRONT TITLE 2');
        $I->click($this->contentInput);
        $I->clearField($this->contentInput);
        $I->fillField($this->contentInput, 'FRONT SUBTITLE 2');
        $I->click('Flip Box 2 Settings');
        $I->click('Front Content Settings');

        $I->amGoingTo('Change Front Icon Settings');
        $I->click('Front Icon Settings');
        $I->click('Flip Box 1');
        $I->click($this->selectIconBtn1);
        $I->wait(2);
        $I->click($this->selectedIconBtn);
        $I->wait(2);
        $I->click($this->selectIconBtn1);
        $I->wait(2);
        $I->click('Flip Box 1');
        $I->click('Flip Box 2');
        $I->click($this->selectIconBtn2);
        $I->wait(2);
        $I->click($this->selectedIconBtn);
        $I->wait(2);
        $I->click($this->selectIconBtn2);
        $I->wait(2);
        $I->click('Flip Box 2');
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->click($this->iconColor);
        $I->wait(1);
        $I->click('Front Icon Settings');

        $I->amGoingTo('Change Front Background Image');
        $I->click('Background Image');
        $backgroundOpacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroundOpacity))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1); 
        $I->click($this->selectBackgroundImageBtn);
        $I->wait(1);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->selectBtn);
        $I->wait(1);
        $I->click($this->backgroundOpacity);
        $commonFunctionsPageObj->field = $this->backgroundOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $I->selectOption('Image Position', 'Top Right');
        $I->selectOption('Attachment', 'Scroll');
        $I->selectOption('Repeat', 'Repeat');
        $I->selectOption('Size', 'Contain');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Front Content Settings for the flipbox in the frontend.');
        $I->see('FRONT TITLE 1');
        $I->see('FRONT SUBTITLE 1');
        $I->see('FRONT TITLE 2');
        $I->see('FRONT SUBTITLE 2');

        $I->amGoingTo('Check the Front Icon Settings for the flipbox in the frontend.');
        $commonFunctionsPageObj->field = $this->fIconWrapper;
        $commonFunctionsPageObj->prop = 'font-size';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '22px');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(16, 101, 156)');
        $commonFunctionsPageObj->field = $this->fIconSvgPath;
        $commonFunctionsPageObj->prop = 'd';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'path("M 528 32 H 48 C 21.5 32 0 53.5 0 80 V 432 C 0 458.5 21.5 480 48 480 H 528 C 554.5 480 576 458.5 576 432 V 80 C 576 53.5 554.5 32 528 32 Z M 176 128 C 211.3 128 240 156.7 240 192 S 211.3 256 176 256 S 112 227.3 112 192 S 140.7 128 176 128 Z M 288 364.8 C 288 375.4 278 384 265.6 384 H 86.4 C 74 384 64 375.4 64 364.8 V 345.6 C 64 313.8 94.1 288 131.2 288 H 136.2 C 148.5 293.1 161.9 296 176 296 S 203.6 293.1 215.8 288 H 220.8 C 257.9 288 288 313.8 288 345.6 V 364.8 Z M 512 312 C 512 316.4 508.4 320 504 320 H 360 C 355.6 320 352 316.4 352 312 V 296 C 352 291.6 355.6 288 360 288 H 504 C 508.4 288 512 291.6 512 296 V 312 Z M 512 248 C 512 252.4 508.4 256 504 256 H 360 C 355.6 256 352 252.4 352 248 V 232 C 352 227.6 355.6 224 360 224 H 504 C 508.4 224 512 227.6 512 232 V 248 Z M 512 184 C 512 188.4 508.4 192 504 192 H 360 C 355.6 192 352 188.4 352 184 V 168 C 352 163.6 355.6 160 360 160 H 504 C 508.4 160 512 163.6 512 168 V 184 Z")');

        $I->amGoingTo('Check the Front Background Settings for the flipbox in the frontend.');
        $commonFunctionsPageObj->field = $this->fFlipBoxFront;
        $commonFunctionsPageObj->prop = 'background-position';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '100% 0%, 100% 0%');
        $commonFunctionsPageObj->prop = 'background-attachment';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'scroll, scroll');
        $commonFunctionsPageObj->prop = 'background-repeat';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'repeat, repeat');
        $commonFunctionsPageObj->prop = 'background-size';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'contain, contain');

        $I->amGoingTo('Reset the general settings of the flipbox');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->flipboxBlock);
        $I->click('Front Icon Settings');
        $clearIconColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->clearIconColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->resetIconSizeBtn);
        $I->click($this->clearIconColor);
        $I->click('Front Icon Settings');
        $I->click('Background Image');
        $resetOpacityBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetOpacityBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->resetOpacityBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings after reset.');
        $commonFunctionsPageObj->field = $this->fIconWrapper;
        $commonFunctionsPageObj->prop = 'font-size';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50px');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(0, 0, 0)');
    }

    /**
     * Tests the color style setting of the flipbox block.
     */
    public function FlipboxFrontColorTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color settings of the front of the flexbox.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->frontColorSettingsBtn);
        $I->click($this->textColor);
        $I->click($this->bgColor);
        $I->click($this->backgroundOpacity);
        $commonFunctionsPageObj->field = $this->backgroundOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings in the front end.');
        $commonFunctionsPageObj->field = $this->fFrontTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fFlipBoxFront;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 0.4)');  
        
        $I->amGoingTo('Reset the color settings of the front of the flexbox.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->frontColorSettingsBtn);
        $I->click($this->clrTextColor);
        $I->click($this->clrBgColor);
        $I->click($this->resetOpacityBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings in the front end.');
        $commonFunctionsPageObj->field = $this->fFrontTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fFlipBoxFront;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');  
    }

    /**
     * Tests the title typographyof the flipbox block
     */
    public function FlipboxFrontTypographyTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the title typography of the flipbox block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->titleTypography);  
        $arr = array('26px', '16px', '16px', '52px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->titleTypography, $this->fFrontTitle, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '26px');

        $I->amGoingTo('Change the subtitle typography of the flipbox block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->subtitleTypography);  
        $arr = array('13px', '16px', '16px', '26px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->subtitleTypography, $this->fFrontSubTitle, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '13px');
    }

    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography of the flipbox block for desktop view.');
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
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
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
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[3]);
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[1]);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[2]);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the typography style of the count up block for mobile and desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
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
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '16px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($typography);  
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }
    
    /**
     * Tests the margin spacing of the flipbox block
     */
    public function FlipboxMarginSpacingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the margin of the flipbox block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);  
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->topMargin);
        $commonFunctionsPageObj->field = $this->topMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8px' ); 
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->topMargin);
        $commonFunctionsPageObj->field = $this->topMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '14px' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->topMargin);
        $commonFunctionsPageObj->field = $this->topMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '6px' );  
        $I->click($this->desktopView2);
        $I->click($this->bottomMargin);
        $commonFunctionsPageObj->field = $this->bottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20px' ); 
        $I->click($this->tabletView2);
        $I->click($this->bottomMargin);
        $commonFunctionsPageObj->field = $this->bottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16px' );
        $I->click($this->mobileView2);
        $I->click($this->bottomMargin);
        $commonFunctionsPageObj->field = $this->bottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '9px' );  
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the margin in the frontView');
        $commonFunctionsPageObj->field = $this->fFlipboxBlock;
        $commonFunctionsPageObj->prop = 'margin-top';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px');
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->prop = 'margin-top';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '14px');
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->prop = 'margin-top';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '6px');
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '9px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the margin for desktop');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($this->resetTopMargin);
        $I->click($this->resetBottomMargin);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fFlipboxBlock;
        $commonFunctionsPageObj->prop = 'margin-top';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $I->wait(1);
    }

    /**
     * Tests the margin spacing of the flipbox block
     */
    public function FlipboxPaddingSpacingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the padding of the front side of the flipbox block for desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($this->marginStyleBtn);
        $I->click($this->paddingStyleBtn);
        $I->click($this->frontPaddingBtn);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $spacing = array('54px', '20px', '30px', '25px');
        $this->_paddingTest($I, $commonFunctionsPageObj, $spacing,  $this->fFlipBoxFront, 'desktop');        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '54px 25px 20px 30px');

        $I->amGoingTo('Change the padding of the front side of the flipbox block for mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($this->marginStyleBtn);
        $I->click($this->paddingStyleBtn);
        $I->click($this->frontPaddingBtn);        
        $I->click($commonFunctionsPageObj->mobileView);
        $I->wait(1);
        $spacing = array('10px', '20px', '33px', '20px');
        $this->_paddingTest($I, $commonFunctionsPageObj, $spacing,  $this->fFlipBoxFront , 'mobile');        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px 20px 20px 33px');
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change the padding of the back side of the flipbox block for desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($this->marginStyleBtn);
        $I->click($this->paddingStyleBtn);
        $I->click($this->backPaddingBtn);        
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $spacing = array('89px', '49px', '56px', '33px');
        $this->_paddingTest($I, $commonFunctionsPageObj, $spacing,  $this->fFlipBoxBack, 'desktop');
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '89px 33px 49px 56px');

        $I->amGoingTo('Change the padding of the back side of the flipbox block for tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($this->marginStyleBtn);
        $I->click($this->paddingStyleBtn);
        $I->click($this->backPaddingBtn);        
        $I->click($commonFunctionsPageObj->tabletView);
        $I->wait(1);
        $spacing = array('20px', '23px', '40px', '11px');
        $this->_paddingTest($I, $commonFunctionsPageObj, $spacing,  $this->fFlipBoxBack, 'tablet');
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px 11px 23px 40px');
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the padding of the front side of the flipbox block for desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->click($this->marginStyleBtn);
        $I->click($this->paddingStyleBtn);
        $I->click($this->frontPaddingBtn);  
        $I->wait(1);
        $rightResetBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->rightResetBtn))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->wait(1);
        $I->click($this->topResetBtn);
        $I->click($this->bottomResetBtn);
        $I->click($this->leftResetBtn);
        $I->click($this->rightResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I); 
        $commonFunctionsPageObj->field = $this->fFlipBoxFront;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px 0px 0px');
    }

    /**
     * Padding test
     */
    public function _paddingTest($I, $commonFunctionsPageObj, $spacing, $selector, $view)
    {
        $I->click($this->topInputField);
        $commonFunctionsPageObj->field = $this->topInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[0] );
        $I->click($this->bottomInputField);
        $commonFunctionsPageObj->field = $this->bottomInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[1] );
        $I->click($this->leftInputField);
        $commonFunctionsPageObj->field = $this->leftInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[2] );
        $I->click($this->rightInputField);
        $commonFunctionsPageObj->field = $this->rightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[3] );
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the padding in the frontend');
        if($view === 'mobile')
        {
            $I->resizeWindow(375, 812);
        } else if($view === 'tablet'){
            $I->resizeWindow(965, 1024);
        }
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'padding';
        $I->wait(1);
    }
}
