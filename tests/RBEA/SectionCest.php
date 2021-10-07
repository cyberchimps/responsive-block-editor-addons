<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class SectionCest
{

    public $sectionBlock = 'div[data-title="Section"]'; 
    public $fSection = '.responsive-block-editor-addons-block-section'; 
    public $sectionParagraph = '//*[@data-title="Paragraph"]';
    public $selectSectionBtn = '//button[@aria-label="Select Section"]';
    public $sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    /**
     * General settings
     */
    public $generalSettingBtn = '//button[text()="General"]';
    public $widthInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Width"]';
    public $zIndexInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="z-index"]';
    public $resetZIndexBtn = '//button[text()="Reset"]';

    /**
     * Background Settings
     */
    public $backgroundSettingBtn = '//button[text()="Background"]';
    public $backgroundTypeSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $backgroundTypeSelectedColorOption = 'option[value="color"]';
    public $backgroundTypeSelectedColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $backgroundOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    

    public $resetColorBtn = '*//button[text()="Clear"]';
    public $removeImageBtn = '*//button[text()="Remove Image"]';
    public $resetOpacityBtn = '*//button[text()="Reset"]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $backgroundTypeSelectImage = 'option[value="image"]';
    public $selectBackgroundImageBtn = '//*[text()="Select Background Image"]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';
    public $frontEndBackgroundImg = '.background-type-image';
    public $frontEndBackgroundGradient = '.overlay-type-gradient';

    public $imagePositionSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $imagePositionSelectedOption = 'option[value="top right"]';
    public $imagePositionMobileSelectedOption = 'option[value="center center"]';
    public $attachmentSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $attachmentSelectedOption = 'option[value="scroll"]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $repeatSelect = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $repeatSelectedOption = 'option[value="repeat"]';
    public $sizeSelect = '(//*[contains(@id, "inspector-select-control")])[5]';
    public $sizeSelectedOption = 'option[value="contain"]';
    public $sizeSelectedTabletOption = 'option[value="cover"]';
    public $overlayTypeSelect = '(//*[contains(@id, "inspector-select-control")])[6]';
    public $overlayTypeSelectedOption = 'option[value="gradient"]';
    public $location1 = '//*[contains(@id, "inspector-input-control") and @aria-label="Location 1"]';
    public $location2 = '//*[contains(@id, "inspector-input-control") and @aria-label="Location 2"]';
    public $color1Gradient = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $color2Gradient = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $angleGradient = '//*[contains(@id, "inspector-input-control") and @aria-label="Angle"]';

    public $location1ResetBtn = '(//*[text()="Reset"])[1]';
    public $location2ResetBtn = '(//*[text()="Reset"])[2]';
    public $anlgeResetBtn = '(//*[text()="Reset"])[3]';
    public $opacityResetBtn = '(//*[text()="Reset"])[4]';
    public $color1ResetBtn = '(//*[text()="Clear"])[1]';
    public $color2ResetBtn = '(//*[text()="Clear"])[2]';

    /**
     * Stle settings
     * 1.Spacing settings
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $borderStyleBtn = '//button[text()="Border"]';

    public $paddingTop = '(//*[contains(@id, "inspector-input-control") and @aria-label="Top"])[1]';
    public $paddingBottom = '(//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"])[1]';
    public $paddingLeft = '(//*[contains(@id, "inspector-input-control") and @aria-label="Left"])[1]';
    public $paddingRight = '(//*[contains(@id, "inspector-input-control") and @aria-label="Right"])[1]';
                   
    public $marginTop = '(//*[contains(@id, "inspector-input-control") and @aria-label="Top"])[2]';
    public $marginBottom = '(//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"])[2]';
    public $marginLeft = '(//*[contains(@id, "inspector-input-control") and @aria-label="Left"])[2]';
    public $marginRight = '(//*[contains(@id, "inspector-input-control") and @aria-label="Right"])[2]';

    public $resetPaddingTop = '(//*[text() = "Reset"])[1]';
    public $resetPaddingBottom = '(//*[text() = "Reset"])[2]';
    public $resetPaddingLeft = '(//*[text() = "Reset"])[3]';
    public $resetPaddingRight = '(//*[text() = "Reset"])[4]';
    public $resetMarginTop = '(//*[text() = "Reset"])[5]';
    public $resetMarginBottom = '(//*[text() = "Reset"])[6]';
    public $resetMarginLeft = '(//*[text() = "Reset"])[7]';
    public $resetMarginRight = '(//*[text() = "Reset"])[7]';
    
    /**
     * 2. Border settings
     */
    public $borderTypeSelector = '//*[contains(@id, "inspector-select-control")]';
    public $borderTypeSelectOption = 'option[value="dashed"]';
    public $borderTypeSelectOptionNone = 'option[value="none"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadious = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $borderColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $resetBorderWidth = '(//button[text() = "Reset"])[1]';
    public $resetBorderRadius = '(//button[text() = "Reset"])[2]';
    public $clearBorderColor = '//*[text() = "Clear"]';

    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '(//div[@class="components-circular-option-picker__swatches"])[2]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $boxShadowPositionSelected = 'option[value="inset"]';

    /**
     * Advance Setting
     */
    public $advanceStyleBtn = '//button[text()="Advanced"]';
    public $anchorInputField = '(//input[contains(@id, "inspector-text-control")])[1]';
    public $anchorElement = '#Anchor';
            
    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a section block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'section');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->wait(1);
        $I->click($this->sectionBlock);
        $I->click($this->sectionParagraph);
        $I->fillField( $this->sectionParagraph, $this->sampleText);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->amGoingTo('Remove the section block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->sectionBlock);
        $I->click($this->selectSectionBtn);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Function to open style tab settings.
     */
    public function _openStyleTabSettings($I, $commonFunctionsPageObj ) {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);
        $I->click('Style');
    }

    /**
     * This test is to check the general setting style.
     */
    public function SectionGeneralSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the section block in the frontend.');        
        $I->seeElement($this->fSection);

        $I->amGoingTo('Change general settings of section block.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->generalSettingBtn);
        $I->wait(2);
        $I->click($this->widthInputField);
        $commonFunctionsPageObj->field = $this->widthInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '620' );
        $I->wait(2);
        $I->click($this->zIndexInputField);
        $commonFunctionsPageObj->field = $this->zIndexInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '100' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the width and z-index of the block in the frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'max-width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '620px');  
        $commonFunctionsPageObj->prop = 'z-index';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100'); 

        $I->amGoingTo('Reset z-index of section block');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock); 
        $I->click($this->selectSectionBtn);               
        $I->wait(1);
        $I->click($this->generalSettingBtn);
        $I->click($this->resetZIndexBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the z-index of the block after reset in the frontend');
        $commonFunctionsPageObj->prop = 'z-index';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '1'); 
    }

    /**
     * This test is to check the background setting style.
     */
    public function SectionBackgroundSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change background settings of section block.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->backgroundSettingBtn);
        $sectionBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOption) )->click();
        });
        $I->wait(1);
        $I->click($this->backgroundTypeSelectedColor);
        $I->click($this->backgroundOpacity);
        $commonFunctionsPageObj->field = $this->backgroundOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check section block background in the frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.94)'); 

        $I->amGoingTo('Reset background color');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->click($this->backgroundSettingBtn);
        $I->click($this->resetColorBtn);
        $I->click($this->resetOpacityBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check section block background in the frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(255, 255, 255, 0.2)'); 

        $I->amGoingTo('Change background image of the blockquote');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->click($this->backgroundSettingBtn);
        $I->wait(2);

        $sectionImageBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectImage) )->click();
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
        
        $I->amGoingTo('Change the attributes of the gradient image.');
        $imagePosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->imagePositionSelect))->
            findElement( WebDriverBy::cssSelector($this->imagePositionSelectedOption) )->click();
        });
        $I->click($commonFunctionsPageObj->mobileView);
        $imagePosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->imagePositionSelect))->
            findElement( WebDriverBy::cssSelector($this->imagePositionMobileSelectedOption) )->click();
        });
        $I->wait(1);
        $attachment = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->attachmentSelect))->
            findElement( WebDriverBy::cssSelector($this->attachmentSelectedOption) )->click();
        });
        $I->wait(1);
        $repeat = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->repeatSelect))->
            findElement( WebDriverBy::cssSelector($this->repeatSelectedOption) )->click();
        });
        $size = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->sizeSelect))->
            findElement( WebDriverBy::cssSelector($this->sizeSelectedOption) )->click();
        });
        $I->click($this->tabletView2);
        $size = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->sizeSelect))->
            findElement( WebDriverBy::cssSelector($this->sizeSelectedTabletOption) )->click();
        });
        $I->wait(1);
        $overlayType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->overlayTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->overlayTypeSelectedOption) )->click();
        });
        $I->wait(1);
        $I->click($this->color1Gradient);
        $I->click($this->color2Gradient);
        $commonFunctionsPageObj->field = $this->location1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $commonFunctionsPageObj->field = $this->location2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '99' );
        $I->click($this->backgroundOpacity);
        $commonFunctionsPageObj->field = $this->backgroundOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $commonFunctionsPageObj->field = $this->angleGradient;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '127' );
        $commonFunctionsPageObj->publishAndViewPage($I);  
        $I->wait(2);
        $I->seeElement($this->frontEndBackgroundImg); 
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100% 0%, 100% 0%'); 
        $commonFunctionsPageObj->prop = 'background-attachment';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'scroll, scroll'); 
        $commonFunctionsPageObj->prop = 'background-repeat';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'repeat, repeat'); 
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'contain, contain');  
        
        $I->amGoingTo('Check background position for mobile view.');
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '50% 50%, 50% 50%'); 
        $I->wait(1);

        $I->amGoingTo('Check background position for tablet view.');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'cover, cover'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        
        $I->amGoingTo('Reset background of section.');                
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->backgroundSettingBtn);
        $I->wait(1);
        $I->click($this->location1ResetBtn);
        $I->click($this->location2ResetBtn);
        $I->click($this->color1ResetBtn);
        $I->click($this->color2ResetBtn);
        $I->click($this->anlgeResetBtn);
        $I->click($this->opacityResetBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Remove background image of section.');                
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->backgroundSettingBtn); 
        $I->click($this->removeImageBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function is to test the style-spacing settings  
     */
    public function SectionStyleSpacingSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);

        $I->amGoingTo('Change the padding and margin for desktop view');
        $I->click($commonFunctionsPageObj->desktopView);
        $desktopArr = array('13px', '15px', '15px', '15px', '10px', '12px', '13px', '20px');
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, $this->desktopView2);

        $I->amGoingTo('Check padding and margin in the frontend for desktop view.');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'desktop');
        $I->resizeWindow(375, 812);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'mobile');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'tablet');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
      
        $I->amGoingTo('Change the padding and margin for tablet view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $tabletArr = array('10px', '12px', '15px', '10px', '11px', '14px', '19px', '25px');
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr, $this->tabletView2);

        $I->amGoingTo('Check padding and margin in the frontend for tablet view.');
        $I->resizeWindow(965, 1024);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr, 'tablet');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'mobile');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'desktop');

        $I->amGoingTo('Change the padding and margin for mobile view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $tabletArr = array('10px', '12px', '7px', '10px', '11px', '14px', '19px', '25px');
        $mobileArr = array('5px', '2px', '7px', '1px', '9px', '5px', '9px', '4px');
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $mobileArr, $this->mobileView2);

        $I->amGoingTo('Check padding and margin in the frontend for mobile view.');
        $I->resizeWindow(965, 1024);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr, 'tablet');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $mobileArr, 'mobile');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'desktop');

        $I->amGoingTo('Reset the padding and margin for desktop');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->resetPaddingTop);
        $I->click($this->resetPaddingBottom);
        $I->click($this->resetPaddingLeft) ;
        $I->scrollTo($this->resetPaddingRight, 20);
        $I->click($this->resetPaddingRight);
        $I->scrollTo($this->resetMarginTop, 20);
        $I->click($this->resetMarginTop);
        $I->scrollTo($this->resetMarginBottom, 20);
        $I->click($this->resetMarginBottom);
        $I->scrollTo($this->resetMarginLeft, 20);
        $I->click($this->resetMarginLeft);
        $I->scrollTo($this->borderStyleBtn, 20);
        $I->click($this->resetMarginRight);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $desktopArr = array('10px', '0px', '0px', '0px', '10px', '0px', '0px', '0px');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'desktop');
    }

     /**
     * To change and check the spacing in different device modes
     */
    public function _changePaddingAndMargin($I, $commonFunctionsPageObj, $arr, $view){ 
       $I->wait(1);
       $I->click($this->paddingTop);
       $commonFunctionsPageObj->field = $this->paddingTop;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
       $I->click($this->paddingBottom);
       $commonFunctionsPageObj->field = $this->paddingBottom;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[1] );
       $I->click($this->paddingLeft);
       $commonFunctionsPageObj->field = $this->paddingLeft;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[2] );
       $I->click($this->paddingRight);
       $commonFunctionsPageObj->field = $this->paddingRight;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[3] );

       $I->wait(1);
       $I->click($view);     
       $I->scrollTo($this->resetMarginTop, 20);
       $I->wait(1);
       $I->click($this->marginTop);
       $commonFunctionsPageObj->field = $this->marginTop;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[4] );
       $I->scrollTo($this->resetMarginBottom, 20);
       $I->wait(1);
       $I->click($this->marginBottom);
       $commonFunctionsPageObj->field = $this->marginBottom;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[5] );
       $I->scrollTo($this->resetMarginLeft, 20);
       $I->wait(1);
       $I->click($this->marginLeft);
       $commonFunctionsPageObj->field = $this->marginLeft;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[6] );
       $I->scrollTo($this->borderStyleBtn, 20);
       $I->wait(1);
       $I->click($this->marginRight);
       $commonFunctionsPageObj->field = $this->marginRight;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[7] );
       $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * To check padding and margin in the front end.
     */
    public function _checkPaddingAndMargin($I, $commonFunctionsPageObj, $arr, $view){
        if($view === 'desktop'){
            $arr[6] = $arr[7] = '0px';
        }
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'padding-top';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]); 
        $commonFunctionsPageObj->prop = 'padding-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
        $commonFunctionsPageObj->prop = 'padding-left';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[2]);
        $commonFunctionsPageObj->prop = 'padding-right';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[3]);
        $commonFunctionsPageObj->prop = 'margin-top';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[4]);
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[5]);
        $commonFunctionsPageObj->prop = 'margin-left';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[6]);
        $commonFunctionsPageObj->prop = 'margin-right';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[7]);
    }

    /**
     * This function is to test the style-border settings.
     */
    public function SectionStyleBorderSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->borderStyleBtn);
        $I->wait(1);

        $I->amGoingTo('Change section border style to dashed');
        $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelector))->
            findElement( WebDriverBy::cssSelector($this->borderTypeSelectOption) )->click();
        });
        $I->wait(1);
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->borderRadious);
        $commonFunctionsPageObj->field = $this->borderRadious;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $I->click($this->borderColor); 
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check border style in frontend');
        $attr = array(
            'border-color' => 'rgb(16, 101, 156)',
            'border-style' => 'dashed',
            'border-width' => '3px',
            'border-radius' => '5px'
        );
        $this->_checkBorderStyle($I, $attr);    
        
        $I->amGoingTo('Reset border style');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->borderStyleBtn);
        $I->click($this->resetBorderWidth);
        $I->click($this->resetBorderRadius);
        $I->wait(1);
        $I->click($this->clearBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check reset border style in frontend');
        $attr = array(
            'border-color' => 'rgb(0, 0, 0)',
            'border-style' => 'dashed',
            'border-width' => '1px',
            'border-radius' => '0px'
        );
        $this->_checkBorderStyle($I, $attr);

        $I->amGoingTo('Change Box shadow setting');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->borderStyleBtn);
        $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelector))->
            findElement( WebDriverBy::cssSelector($this->borderTypeSelectOptionNone) )->click();
        });
        $I->scrollTo($this->boxShadowOptionsBtn, 20);
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(2);
        $I->click($this->boxShadowColor);
        $I->wait(1);

        $I->click($this->boxShadowLeft);
        $commonFunctionsPageObj->field = $this->boxShadowLeft;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->wait(1); 

        $I->click($this->boxShadowTop);
        $commonFunctionsPageObj->field = $this->boxShadowTop;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $I->click($this->boxShadowBlur);
        $commonFunctionsPageObj->field = $this->boxShadowBlur;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->wait(1); ; 

        $I->click($this->boxShadowSpread);
        $commonFunctionsPageObj->field = $this->boxShadowSpread;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1);  
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowPositionSelected) )->click();
        });
        $I->wait(2);

        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check box shadow style in frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->borderStyleBtn);
        $I->scrollTo($this->boxShadowResetBtn, 20);
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 0px 0px 0px 0px');
    }

    /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->fSection));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

    /**
     * This test is to check advance HTML Anchor settings.
     */
    public function SectionAdvanceSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->amGoingTo('Create an anchor tag with advance settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);
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
