<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class CallToActionCest
{
    public $callToActionBlock = 'div[data-title="Call To Action"]';
    public $blockTitle = '//h2[@aria-label="Call-To-Action Title"]';
    public $blockText = '//div[@aria-label="Call To Action Text"]';
    public $blockButton = '//a[@aria-label="Button text..."]';
    public $title = 'Lorem Ipsum';
    public $text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis est vel lorem eleifend consequat a sit amet augue.';
    public $buttonText = 'Click here';
    public $fCallToActionBlock = '.responsive-block-editor-addons-block-call-to-action';

    /**
     * General settings.
     */
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '//div[@class="components-circular-option-picker__swatches"]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[2]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowPosition = '//*[contains(@id, "inspector-select-control")]';
    public $boxShadowPositionSelected = 'option[value="inset"]'; 

    /**
     * Style settings 
     * 1.Typography
     */
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]'; 
    public $fCTATitle = '.responsive-block-editor-addons-cta-title'; 
    public $fCTADescription = '.responsive-block-editor-addons-cta-text';
    public $fCTAButton = '.responsive-block-editor-addons-cta-button';
    public $textColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $textColorResetBtn = '*//button[text()="Clear"]';

    /**
     * 2. Background
     */
    public $backgroundTypeSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $backgroundTypeSelectedColorOption = 'option[value="color"]';
    public $backgroundTypeSelectedColorOptionNone = 'option[value="none"]';
    public $backgroundTypeSelectedColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $backgroundOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $imageOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Image Opacity"]';
    
    public $resetColorBtn = '*//button[text()="Clear"]';
    public $removeImageBtn = '*//button[text()="Remove Image"]';
    public $resetOpacityBtn = '(//*[text()="Reset"])[2]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $backgroundTypeSelectImage = 'option[value="image"]';
    public $selectBackgroundImageBtn = '//*[text()="Select Background Image"]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';

    public $imagePositionSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $imagePositionSelectedOption = 'option[value="top right"]';
    public $repeatSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $repeatSelectedOption = 'option[value="repeat"]';
    public $sizeSelect = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $sizeSelectedOption = 'option[value="contain"]';

    /**
     * 3. Icon settings
     */
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[4]';
    public $closeIconSelectionBtn = 'div[class="rfipbtn__button rfipbtn__button--open"]';
    public $selectedIcon = '//*[@class="rfipicons__selector"]//span';
    public $iconColor = '//*[@class="components-circular-option-picker__swatches"]//div[6]/button';
    public $iconSpacingInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Spacing"]';
    public $iconPositionSelect = '//*[contains(@id, "inspector-select-control")]';
    public $iconPositionSelected = 'option[value="before"]';
    public $CTABlockBtnIcon = '.responsive-block-editor-addons-cta-button__icon.responsive-block-editor-addons-cta-button__icon-position-before';
    public $CTABlockBtnIconSvg = ' .responsive-block-editor-addons-cta-button__icon svg';
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $iconColorClrBtn = '*//button[text()="Clear"]';
    public $iconSpacingResetBtn = '(*//button[text()="Reset"])[2]';

    /**
     * 4. Spacing settings
     */
    public $paddingTop = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $paddingBottom = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $paddingLeft = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $paddingRight = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]';
    
    public $resetPaddingTop = '(//*[text() = "Reset"])[2]';
    public $resetPaddingBottom = '(//*[text() = "Reset"])[3]';
    public $resetPaddingLeft = '(//*[text() = "Reset"])[4]';
    public $resetPaddingRight = '(//*[text() = "Reset"])[5]';

    public $descriptionDesktopView = '(//button[contains(@id, "desktop")])[2]';
    public $descriptionTabletView = '(//button[contains(@id, "tablet")])[2]';
    public $descriptionMobileView = '(//button[contains(@id, "mobile")])[2]';  

    public $buttonDesktopView = '(//button[contains(@id, "desktop")])[3]';
    public $buttonTabletView = '(//button[contains(@id, "tablet")])[3]';
    public $buttonMobileView = '(//button[contains(@id, "mobile")])[3]';

    public $titleBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Margin"]';
    public $descriptionBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Description Bottom Margin"]';
    public $buttonBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Button Bottom Margin"]';
    public $buttonWrapper = '.responsive-block-editor-addons-cta-button-wrapper';

    /**
     * 5. Button options
     */
    public $buttonSizeSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $buttonSizeSelectedOption = 'option[value=""]';
    public $buttonShapeSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $buttonShapeSelectedOption = 'option[value=""]';
    public $buttonTypeSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $buttonTypeSelectedOption = 'option[value=""]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Call to action block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'call to action');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->field = $this->blockTitle;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $this->title );
        $commonFunctionsPageObj->field = $this->blockText;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $this->text );
        $commonFunctionsPageObj->field = $this->blockButton;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $this->buttonText );
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test
     */
    public function _after(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Remove the call to action block.');
        $I->amOnPage('/rbea-block'); 
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->callToActionBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);       
    }

    /**
     * This function open style tabs settings
     */
    public function _openStyle($I, $commonFunctionsPageObj) 
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->callToActionBlock);
        $I->click('Style');
    }
    
    /**
     * This test checks the general settings of call to action block.
     */
    public function CallToActionBlockGeneralSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->amGoingTo('Check the Call to action block in the frontend.'); 
        $I->seeElement($this->fCallToActionBlock);
        $I->wait(1);

        $I->amGoingTo('Change the general settings of call to action block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->callToActionBlock);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );

        $I->amGoingTo('Change Box shadow setting');
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(1);
        $I->click($this->boxShadowColor);
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
        $I->wait(1); 
        $I->click($this->boxShadowSpread);
        $commonFunctionsPageObj->field = $this->boxShadowSpread;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1);  
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowPositionSelected) )->click();
        });
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the genearal settings to the frontend.');
        $commonFunctionsPageObj->field = $this->fCallToActionBlock;
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->callToActionBlock);
        $boxShadowResetBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowResetBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(41, 48, 56) 0px 0px 0px 0px');
    }

    /**
     * This test checks the typography settings of call to action block.
     */
    public function CallToActionBlockTypographyStyleSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->amGoingTo('Change the style settings.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Title Typography');
        $arr = array(
            'input_font_size' => '25',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '22', 
            'tablet_font_size' => '22',
            'line_height' => '50px'
        );
        $I->amGoingTo('Change the title typography for the desktop view.');
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->desktopView, $arr, $this->fCTATitle);

        $I->amGoingTo('Change the title typography for the mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Title Typography');
        $arr = array(
            'input_font_size' => '10',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '10', 
            'tablet_font_size' => '22',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->mobileView, $arr, $this->fCTATitle);

        $I->amGoingTo('Change the title typography for the tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Title Typography');
        $arr = array(
            'input_font_size' => '20',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '10', 
            'tablet_font_size' => '20',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->tabletView, $arr, $this->fCTATitle);

        $I->amGoingTo('Change the description typography for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Description Typography');
        $arr = array(
            'input_font_size' => '18',
            'desktop_font_size'=>'18',
            'mobile_font_size' => '16', 
            'tablet_font_size' => '16',
            'line_height' => '36px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->desktopView, $arr, $this->fCTADescription);

        $I->amGoingTo('Change the button typography for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Button Typography');
        $arr = array(
            'input_font_size' => '25',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '18', 
            'tablet_font_size' => '18',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->desktopView, $arr, $this->fCTAButton);

        $I->amGoingTo('Change the color of text and check in the frontend');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Text Color');
        $I->click($this->textColor);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fCTATitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');  

        $I->amGoingTo('Reset the color of text and check in the frontend');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Typography Options');
        $I->click('Text Color');
        $I->click($this->textColorResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fCTATitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)');
    }

    /**
     * This function changes typography settings 
     */
    public function _typographySettings($I, $commonFunctionsPageObj, $view, $arr, $selector)
    {
        $I->resizeWindow(1280, 950);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($view);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr['input_font_size'] );
        $I->wait(1);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $lineHeightInputField = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->lineHeightInputField))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['line_height']);
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['desktop_font_size'].'px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['mobile_font_size'].'px');
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['tablet_font_size'].'px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);
    }

    /**
     * This test checks the background option setting of call to action block.
     */
    public function CallToActionBlockBackgroundStyleSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the background style of CTA block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Background Options');

        $I->amGoingTo('Change background color of Call To Action Block.');
        $I->resizeWindow(1280, 950);  
        $CTABackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOption) )->click();
        });
        $I->wait(1);
        $I->click($this->backgroundTypeSelectedColor);
        $I->click($this->backgroundOpacity);
        $commonFunctionsPageObj->field = $this->backgroundOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check CTA block background in the frontend');
        $commonFunctionsPageObj->field = $this->fCallToActionBlock;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.94)'); 

        $I->amGoingTo('Reset background color');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Background Options');
        $I->click($this->resetColorBtn);
        $I->click($this->resetOpacityBtn);
        $CTABackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
        findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOptionNone) )->click();
      });
       $I->wait(1);
       $commonFunctionsPageObj->publishAndViewPage($I);

       $I->amGoingTo('Check CTA block background after reset in the frontend');
       $commonFunctionsPageObj->field = $this->fCallToActionBlock;
       $commonFunctionsPageObj->prop = 'background-color';
       $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(255, 255, 255, 1)'); 

       $I->amGoingTo('Change background image of the CTA block');
       $this->_openStyle($I, $commonFunctionsPageObj);
       $I->click('Background Options');
       $this->_changeBackgroundImage($I, $commonFunctionsPageObj); 
       $commonFunctionsPageObj->field = $this->fCallToActionBlock;
       $this->_checkBackgroundImageProperty($I, $commonFunctionsPageObj);

       $I->amGoingTo('Remove background image of section.');                
       $this->_openStyle($I, $commonFunctionsPageObj);
       $I->click('Background Options'); 
       $I->click($this->removeImageBtn);
       $CTABackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
        findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOptionNone) )->click();
      });
       $I->wait(1);
       $commonFunctionsPageObj->publishAndViewPage($I);
       $commonFunctionsPageObj->field = $this->fCallToActionBlock;
       $commonFunctionsPageObj->prop = 'background';
       $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box');
    }

    /**
     * This function changes background image
     */
    public function _changeBackgroundImage($I, $commonFunctionsPageObj){
       $CTAImageBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
           findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectImage) )->click();
       });
       $I->wait(1);
       $I->click($this->selectBackgroundImageBtn);
       $I->wait(1);
       $I->click($this->mediaLibraryBtn);
       $I->wait(3);
       $I->click($this->selectedBackgroundAttachment);
       $I->wait(2);
       $I->click($this->selectBtn);
       $I->wait(1);
       
       $I->amGoingTo('Change the attributes of the image.');
       $imagePosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->imagePositionSelect))->
           findElement( WebDriverBy::cssSelector($this->imagePositionSelectedOption) )->click();
       });
       $I->wait(1);
       $repeat = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->repeatSelect))->
           findElement( WebDriverBy::cssSelector($this->repeatSelectedOption) )->click();
       });
       $imageOpacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->imageOpacity))->getLocationOnScreenOnceScrolledIntoView();
        });
       $size = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->sizeSelect))->
           findElement( WebDriverBy::cssSelector($this->sizeSelectedOption) )->click();
       });
       $I->wait(1);
       $I->click($this->imageOpacity);
       $commonFunctionsPageObj->field = $this->imageOpacity;
       $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '70' );
       $commonFunctionsPageObj->publishAndViewPage($I); 
    }

    /**
     * This function checks background image properties in the front end
     */
    public function _checkBackgroundImageProperty($I, $commonFunctionsPageObj)
    {
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '0% 0%'); 
        $commonFunctionsPageObj->prop = 'background-repeat';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'repeat'); 
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'auto'); 
        $commonFunctionsPageObj->prop = 'opacity';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '1'); 
    }

    /**
     * This test checks the icon settings of call to action block.
     */
    public function CallToActionBlockIconSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Add the Icon to the button of CTA block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Icon Settings');
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $spacingStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->spacingStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->selectedIcon);
        $I->wait(1);
        $I->click($this->closeIconSelectionBtn);
        $I->wait(1);
        $I->click($this->iconColor);
        $iconPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->iconPositionSelect))->
            findElement( WebDriverBy::cssSelector($this->iconPositionSelected) )->click();
        });
        $I->click($this->iconSpacingInputField);
        $commonFunctionsPageObj->field = $this->iconSpacingInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the CTA block button icon.');
        $I->seeElement($this->CTABlockBtnIcon);
        $commonFunctionsPageObj->field = $this->CTABlockBtnIcon;
        $commonFunctionsPageObj->prop = 'margin-right';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $commonFunctionsPageObj->field = $this->CTABlockBtnIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(255, 255, 255)'); 

        $I->amGoingTo('Clear Icon color and reset icon spacing');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Icon Settings');
        $I->click($this->iconColorClrBtn);
        $I->click($this->iconSpacingResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color and spacing in the frontend after reset.');
        $commonFunctionsPageObj->field = $this->CTABlockBtnIcon;
        $commonFunctionsPageObj->prop = 'margin-right';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px');
        $commonFunctionsPageObj->field = $this->CTABlockBtnIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(58, 58, 58)');
    }

    /**
     * This test checks the spacing settings of call to action block
     */
    public function CallToActionBlockSpacingSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the padding of the CTA block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');
        $I->click('Padding');
        $I->amGoingTo('Change the padding for desktop view');
        $I->click($commonFunctionsPageObj->desktopView);
        $desktopArr = array('13px', '15px', '15px', '15px');
        $mobTabArr = array('20px', '20px', '20px', '20px');
        $this->_changePadding($I, $commonFunctionsPageObj, $desktopArr);
        $commonFunctionsPageObj->publishAndViewPage($I);
 
        $I->amGoingTo('Check padding in the frontend for desktop view.');
        $commonFunctionsPageObj->field = $this->fCallToActionBlock;
        $this->_checkPadding($I, $commonFunctionsPageObj, $desktopArr);
        $I->resizeWindow(375, 812);
        $this->_checkPadding($I, $commonFunctionsPageObj, $mobTabArr);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $this->_checkPadding($I, $commonFunctionsPageObj, $mobTabArr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change the padding for tablet and mobile view');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');
        $I->click('Padding');
        $I->click($commonFunctionsPageObj->mobileView);
        $desktopArr = array('13px', '15px', '15px', '15px');
        $mobileArr = array('11px', '12px', '13px', '15px');
        $tabletArr = array('15px', '16px', '17px', '18px');
        $this->_changePadding($I, $commonFunctionsPageObj, $mobileArr);
        $I->click($commonFunctionsPageObj->tabletView);
        $this->_changePadding($I, $commonFunctionsPageObj, $tabletArr);
        $commonFunctionsPageObj->publishAndViewPage($I);
 
        $I->amGoingTo('Check padding in the frontend for mobile and tablet view.');
        $commonFunctionsPageObj->field = $this->fCallToActionBlock;
        $this->_checkPadding($I, $commonFunctionsPageObj, $desktopArr);
        $I->resizeWindow(375, 812);
        $this->_checkPadding($I, $commonFunctionsPageObj, $mobileArr);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $this->_checkPadding($I, $commonFunctionsPageObj, $tabletArr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the padding.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');
        $I->click('Padding');
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->resetPaddingTop);
        $I->click($this->resetPaddingBottom);
        $I->click($this->resetPaddingLeft);
        $I->click($this->resetPaddingRight);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check padding in the frontend for deskto view after reset.');
        $commonFunctionsPageObj->field = $this->fCallToActionBlock;
        $desktopArr = array('10px', '0px', '0px', '0px');
        $this->_checkPadding($I, $commonFunctionsPageObj, $desktopArr);

        // $I->amGoingTo('Change the margin for desktop view.');
        // $this->_openStyle($I, $commonFunctionsPageObj);
        // $I->click('Spacing');
        // $I->click('Margin');
        // $arr = array('25px', '22px', '17px');
        // $this->_changeMargin($I, $commonFunctionsPageObj, $arr, 'desktop');

        // $I->amGoingTo('Check the margin in the frontend.');
        // $this->_checkMargin($I, $commonFunctionsPageObj, $arr);

        $I->amGoingTo('Change the margin for tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');
        $I->click('Margin');
        $arr = array('20px', '10px', '15px');
        $this->_changeMargin($I, $commonFunctionsPageObj, $arr, 'tablet');

        $I->amGoingTo('Check the margin in the frontend.');
        $I->resizeWindow(965, 1024);
        $this->_checkMargin($I, $commonFunctionsPageObj, $arr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change the margin for mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');
        $I->click('Margin');
        $arr = array('5px', '8px', '6px');
        $this->_changeMargin($I, $commonFunctionsPageObj, $arr, 'mobile');

        $I->amGoingTo('Check the margin in the frontend.');
        $I->resizeWindow(375, 812);
        $this->_checkMargin($I, $commonFunctionsPageObj, $arr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
    }

     /**
     * To change padding in different device modes
     */
    public function _changePadding($I, $commonFunctionsPageObj, $arr){ 
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
    }
 
     /**
      * To check padding  in the front end.
      */
     public function _checkPadding($I, $commonFunctionsPageObj, $arr){
         $commonFunctionsPageObj->prop = 'padding-top';
         $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]); 
         $commonFunctionsPageObj->prop = 'padding-bottom';
         $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
         $commonFunctionsPageObj->prop = 'padding-left';
         $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[2]);
         $commonFunctionsPageObj->prop = 'padding-right';
         $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[3]);
    }

     /**
     * To change the margin in different device modes
     */
    public function _changeMargin($I, $commonFunctionsPageObj, $arr, $view){ 
        $view1 = $commonFunctionsPageObj->desktopView;
        $view2 = $this->descriptionDesktopView;
        $view3 = $this->buttonDesktopView;
        if($view === 'mobile'){
            $view1 = $commonFunctionsPageObj->mobileView;
            $view2 = $this->descriptionMobileView;
            $view3 = $this->buttonMobileView;
        } else if($view === 'tablet'){
            $view1 = $commonFunctionsPageObj->tabletView;
            $view2 = $this->descriptionTabletView;
            $view3 = $this->buttonTabletView;
        }
        $I->wait(1);
        $I->click($view1);
        $I->click($this->titleBottomMargin);
        $commonFunctionsPageObj->field = $this->titleBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $buttonBottomMargin = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->buttonBottomMargin))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($view2);
        $I->click($this->descriptionBottomMargin);
        $commonFunctionsPageObj->field = $this->descriptionBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[1] );
        $I->click($view3);
        $I->click($this->buttonBottomMargin);
        $commonFunctionsPageObj->field = $this->buttonBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[2] );
        $commonFunctionsPageObj->publishAndViewPage($I);
    }
 
    /**
     * To check margin in the front end.
     */
    public function _checkMargin($I, $commonFunctionsPageObj, $arr){
        $commonFunctionsPageObj->field = $this->fCTATitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]);
        $commonFunctionsPageObj->field = $this->fCTADescription;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
    }
}
