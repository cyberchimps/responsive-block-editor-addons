<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;
class InfoBlockCest
{
    public $infoBlock = 'div[data-title="Info Block"]';
    public $fInfoBlock = 'div.responsive-block-editor-addons-block-info-block';

    /**
     * Image/Icon Settings
     */
    public $imageIconBtn = '//button[text()="Image/Icon"]';
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[4]';
    public $selectedIconBtn = '//*[@class="rfipicons__selector"]//span[9]';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $iconHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[3]';
    public $borderHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[4]';
    public $iconBorderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Border Radius"]';
    public $iconBorderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Border Width"]';
    public $iconBackgroundPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Background Padding"]';
    public $fIcon = '//div[contains(@class, "responsive-block-editor-addons-ifb-imgicon-wrap")]';
    public $fIconSpan = '//span[@class="responsive-block-editor-addons-ifb-icon"]';
    public $fIconSvg = 'div.responsive-block-editor-addons-ifb-imgicon-wrap > div > span > svg';
    public $iconSizeRest = '//button[text()="Reset"]';
    public $iconColorReset = '(//button[text()="Clear"])[1]';
    public $iconHoverColorReset = '(//button[text()="Clear"])[2]';
    public $borderColorReset = '(//button[text()="Clear"])[3]';
    public $borderHoverColorReset = '(//button[text()="Clear"])[4]';
    public $selectImageBtn = '//*[text()="Select Image"]';
    public $customWidthBtn = '//input[contains(@id, "inspector-toggle-control")]';
    public $imageWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Width (px)"]';
    public $imgBorderSettings = '//button[text()="Image Border Settings"]';
    public $imgBoxShadowSettings = '//button[text()="Image Box Shadow"]';
    public $fImgContent = 'div.responsive-block-editor-addons-ifb-image-content > img';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadious = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $imgBorderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[1]';
    public $imgBoxShadowColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[7]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[8]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $boxShadowPositionSelected = 'option[value="outset"]'; 
  
    /**
     * Background Options Settings
     */
    public $backgroundOptionsBtn = '//button[text()="Background Options"]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectBackgroundImageBtn = '//*[text()="Select Background Image"]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectedImgAttachment = '//*[contains(@id, "__attachments-view")]/li[2]';
    public $selectBtn = '//*[text()="Select"]';
    public $imageOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Image Opacity"]';
    public $backgroundColorBtn = '//button[text()="Background Color"]';
    public $imgBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $colorOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $sizeSelect = '(//select[contains(@id, "inspector-select-control")])[3]';
    public $selectedSizeOption = 'option[value="contain"]';

    /**
     * Call to Action Settings
     */
    public $callToActionBtn = '//button[text()="Call To Action"]';
    public $textInput = '(//input[contains(@id, "inspector-text-control")])[1]';
    public $linkInput = '(//input[contains(@id, "inspector-text-control")])[2]';
    public $openInNewTabBtn = '//input[contains(@id, "inspector-toggle-control")]';
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $ctaLink = '//a[@class="responsive-block-editor-addons-infobox-cta-link"]';
    public $ctaButton = '//a[@class="responsive-block-editor-addons-infobox-cta-link responsive-block-editor-addons-ifb-cta-button"]';
    public $spacingSettingsBtn = '//button[text()="Spacing Settings"]';
    public $borderSettingsBtn = '//button[text()="Border Settings"]';
    public $colorSettingsBtn = '//button[text()="Color Settings"]';
    public $leftPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Padding"]';
    public $topPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Padding"]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $normalBtn = '//button[text()="Normal"]';
    public $hoverBtn = '//button[text()="Hover"]';
    public $normalTextColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[1]';
    public $normalBorderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
    public $hoverTextColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $hoverBorderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[2]';
    public $normalBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[3]';
    public $hoverBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[3]';
    public $fButtonText = '//span[@class="responsive-block-editor-addons-inline-editing "]';

    /**
     * Spacing Style settings
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $contentPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Padding"]';
    public $prefixBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Prefix Bottom Margin"]';
    public $titleBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Margin"]';
    public $separatorBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Separator Bottom Margin"]';
    public $descriptionBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Description Bottom Margin"]';
    public $imageOrIconMarginBtn = '//button[text()="Image/Icon Margin"]';
    public $topMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $bottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $leftMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $rightMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]';
    public $fImageIconContent = '//div[contains(@class, "responsive-block-editor-addons-ifb-image-icon-content")]';
    public $fTitlePrefix = '//span[@class="responsive-block-editor-addons-ifb-title-prefix"]';
    public $fTitleText = '//h3[@class="responsive-block-editor-addons-ifb-title"]';
    public $fSeparator = '//div[@class="responsive-block-editor-addons-ifb-separator"]';
    public $fDescription = '//p[@class="responsive-block-editor-addons-ifb-desc"]';

    /**
     * Border Style setting
     */
    public $borderStyleBtn = '//button[text()="Border"]';
    public $borderTypeSelector = '//*[contains(@id, "inspector-select-control")]';
    public $borderTypeSelectOption = 'option[value="dashed"]';
    public $borderTypeSelectOptionNone = 'option[value="none"]';
    public $borderStyleColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[3]';
    public $resetBorderWidth = '(//button[text() = "Reset"])[2]';
    public $resetBorderRadius = '(//button[text() = "Reset"])[3]';
    public $clearBorderColor = '(//*[text() = "Clear"])[3]';

    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $hoverBoxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[3]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $hoverBoxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[4]';
    public $boxShadowColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[4]';
    public $boxShadowHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[5]';
    public $boxShadowStyleLeft = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowStyleTop = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowStyleBlur = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowStyleSpread = '(//*[contains(@id, "inspector-input-control")])[7]';
    public $boxShadowStylePosition = '(//*[contains(@id, "inspector-select-control")])[5]';
    public $boxShadowStylePositionSelected = 'option[value="inset"]'; 
    public $separatorStyleBtn = '//button[text()="Separator"]';


    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create an Info Block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'info block');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the info block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I); 
    }

    /**
     * Tests the Icon Content settings
     */
    public function InfoBlockIconSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Icon settings of the Info Block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->selectOption('Select Position', 'Below Title');
        $I->wait(1);
        $I->selectOption('Select Source', 'Icon');
        $I->click($this->selectIconBtn);
        $I->wait(2);
        $I->click($this->selectedIconBtn);
        $I->wait(1);
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '45' );
        $I->click($this->iconColor);
        $I->click($this->iconHoverColor);
        $I->wait(1);
        $I->selectOption('Background Type', 'Outline');
        $I->click($this->borderColor);
        $I->click($this->borderHoverColor);
        $I->wait(1);
        $I->click($this->iconBorderRadius);
        $commonFunctionsPageObj->field = $this->iconBorderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->iconBorderWidth);
        $commonFunctionsPageObj->field = $this->iconBorderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->iconBackgroundPadding);
        $commonFunctionsPageObj->field = $this->iconBackgroundPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Icon settings of the Info Block');
        $I->seeElement($this->fIcon);
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(16, 101, 156)');
        $commonFunctionsPageObj->field = $this->fIconSpan;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px solid rgb(0, 102, 204)');
        $I->wait(1);
        $I->moveMouseOver($this->fIconSpan);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px solid rgb(51, 51, 51)');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51)');

        $I->amGoingTo('Reset the Icon settings of the Info Block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click($this->iconSizeRest);
        $I->click($this->iconColorReset);
        $I->click($this->iconHoverColorReset);
        $I->click($this->borderColorReset);
        $I->click($this->borderHoverColorReset);
        $I->selectOption('Background Type', 'None');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Icon settings of the Info Block after reset.');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(58, 58, 58)');
        $I->wait(1);
        $I->moveMouseOver($this->fIconSpan);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(58, 58, 58)');
    }
    
    /**
     * Tests the background options settings
     */
    public function InfoBlockBackgroundOptionsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Icon settings of the Info Block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click($this->imageIconBtn);
        $I->wait(1);
        $I->click($this->backgroundOptionsBtn);
        $I->wait(1);
        $I->click($this->selectBackgroundImageBtn);
        $I->wait(1);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->selectBtn);
        $I->wait(1);
        $I->selectOption('Image Position', 'Bottom Right');
        $I->selectOption('Repeat', 'Repeat-x');
        $I->wait(1);
        $I->selectOption('Attachment', 'Scroll');
        $I->wait(1);
        $I->click($this->imageOpacity);
        $commonFunctionsPageObj->field = $this->imageOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->wait(1);
        $I->click($this->backgroundColorBtn);
        $I->wait(1);
        $I->click($this->imgBgColor);
        $I->click($this->colorOpacity);
        $commonFunctionsPageObj->field = $this->colorOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the background settings');
        $commonFunctionsPageObj->field = $this->fInfoBlock;
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.3)');
    }

    /**
     * Tests the Image Content settings
     */
    public function InfoBlockImageSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Image settings of the Info Block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->selectOption('Select Position', 'Above Title');
        $I->wait(1);
        $I->selectOption('Select Source', 'Image');
        $I->wait(1);
        $I->click($this->selectImageBtn);
        $I->wait(1);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedImgAttachment);
        $I->wait(1);
        $I->click($this->selectBtn);
        $I->wait(1);
        $I->click($this->imageOpacity);
        $commonFunctionsPageObj->field = $this->imageOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '99' );
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->imageWidth);
        $commonFunctionsPageObj->field = $this->imageWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '400' );
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->imageWidth);
        $commonFunctionsPageObj->field = $this->imageWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '200' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->imageWidth);
        $commonFunctionsPageObj->field = $this->imageWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '120' );

        $I->amGoingTo('Change the Image border settings.');
        $I->click($this->imgBorderSettings);
        $I->selectOption('Border Style', 'Dotted');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' ); 
        $I->click($this->borderRadious);
        $commonFunctionsPageObj->field = $this->borderRadious;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->imgBorderColor);

        $I->amGoingTo('Change the Image box shadow settings.');
        $I->click($this->imgBoxShadowSettings);
        $I->wait(1);
        $I->click($this->imgBoxShadowColor);
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
        $I->wait(1);

        $I->click($this->boxShadowSpread);
        $commonFunctionsPageObj->field = $this->boxShadowSpread;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->getLocationOnScreenOnceScrolledIntoView();
        });
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowPositionSelected) )->click();
        });
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the image in the frontend.');
        $I->seeElement($this->fImgContent);
        $commonFunctionsPageObj->field = $this->fImgContent;
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->prop = 'width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '120px'); 
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '200px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '400px');
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '3px dotted rgb(0, 102, 204)'); 
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px'); 
    }

    /**
     * Tests the call to action settings
     */
    public function InfoBlockCallToActionTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Add the call to action text link.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click($this->imageIconBtn);
        $I->wait(1);
        $I->click($this->callToActionBtn);
        $I->selectOption('Type', 'Text');
        $I->click($this->textInput);
        $I->clearField($this->textInput);
        $I->fillField($this->textInput, 'Click Here');
        $I->click($this->linkInput);
        $I->clearField($this->linkInput);
        $I->fillField($this->linkInput, 'https://www.google.com');
        $I->wait(1);
        $openInNewTabBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->openInNewTabBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->openInNewTabBtn);
        $I->click($this->textColor);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the text call to action link.');
        $I->see('Click Here');
        $I->seeInSource('<a href="https://www.google.com" target="_blank"');
        $commonFunctionsPageObj->field = $this->ctaLink;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');

        $I->amGoingTo('Add the call to action button.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click($this->imageIconBtn);
        $I->wait(1);
        $I->click($this->callToActionBtn);
        $I->selectOption('Type', 'Button');

        $I->amGoingTo('Change the spacing settings.');
        $I->click($this->spacingSettingsBtn);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(4);
        $topPadding = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->topPadding))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->leftPadding);
        $commonFunctionsPageObj->field = $this->leftPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );        
        $I->click($this->desktopView2);
        $I->click($this->topPadding);
        $commonFunctionsPageObj->field = $this->topPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );

        $I->amGoingTo('Change the border settings.');
        $I->click($this->borderSettingsBtn);
        $I->selectOption('Border Style', 'Dashed');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' ); 
        $I->click($this->borderRadious);
        $commonFunctionsPageObj->field = $this->borderRadious;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );

        $I->amGoingTo('Change the color settings.');
        $I->click($this->colorSettingsBtn);
        $I->click($this->normalBtn);
        $I->wait(1);
        $I->click($this->normalTextColor);
        $I->click($this->normalBorderColor);
        $I->wait(1);
        $I->selectOption('Background Type', 'Color');
        $I->click($this->normalBgColor);
        $I->wait(1);
        $I->click($this->hoverBtn);
        $I->wait(1);
        $I->click($this->hoverTextColor);
        $I->click($this->hoverBorderColor);
        $I->wait(1);
        $I->selectOption('Background Type', 'Color');
        $I->click($this->hoverBgColor);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings');
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->ctaButton;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '12px 20px');
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px dashed rgb(51, 51, 51)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fButtonText;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $I->wait(1);
        $I->moveMouseOver($this->ctaButton);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->ctaButton;
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px dashed rgb(16, 101, 156)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
    }

    
    /**
     * Tests the spacing style settings
     */
    public function InfoBlockSpacingStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacing style button.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click('Style');
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->contentPadding);
        $commonFunctionsPageObj->field = $this->contentPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->click($this->prefixBottomMargin);
        $commonFunctionsPageObj->field = $this->prefixBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->titleBottomMargin);
        $commonFunctionsPageObj->field = $this->titleBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->separatorBottomMargin);
        $commonFunctionsPageObj->field = $this->separatorBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->descriptionBottomMargin);
        $commonFunctionsPageObj->field = $this->descriptionBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $imageOrIconMarginBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->imageOrIconMarginBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->imageOrIconMarginBtn);
        $I->wait(1);
        $rightMargin = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->rightMargin))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->topMargin);
        $commonFunctionsPageObj->field = $this->topMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($this->bottomMargin);
        $commonFunctionsPageObj->field = $this->bottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->leftMargin);
        $commonFunctionsPageObj->field = $this->leftMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->click($this->rightMargin);
        $commonFunctionsPageObj->field = $this->rightMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing style in the frontend.');
        $commonFunctionsPageObj->field = $this->fImageIconContent;
        $commonFunctionsPageObj->prop = 'margin';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '12px 15px 10px');
        $commonFunctionsPageObj->field = $this->fTitlePrefix;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px'); 
        $commonFunctionsPageObj->field = $this->fTitleText;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $commonFunctionsPageObj->field = $this->fSeparator;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $commonFunctionsPageObj->field = $this->fDescription;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');     
        $commonFunctionsPageObj->field = $this->fInfoBlock;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '30px'); 
        
        $I->amGoingTo('Change the content padding in the mobile and desktop view');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click('Style');
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->contentPadding);
        $commonFunctionsPageObj->field = $this->contentPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->contentPadding);
        $commonFunctionsPageObj->field = $this->contentPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the content padding in the frontend for mobile and desktop view');
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->field = $this->fInfoBlock;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $I->wait(1); 
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);
    }

    /**
     * Tests the border style settings
     */
    public function InfoBlockBorderStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change border of Info Block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click('Style');
        $I->click($this->borderStyleBtn);
        $I->wait(1);

        $I->amGoingTo("Change Info Block's border style to dashed");
        $I->selectOption('Border Style', 'Dashed');
        $I->wait(1);
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->borderRadious);
        $commonFunctionsPageObj->field = $this->borderRadious;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $I->click($this->borderStyleColor); 
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check border style in frontend');
        $attr = array(
            'border-color' => 'rgb(0, 102, 204)',
            'border-style' => 'dashed',
            'border-width' => '3px',
            'border-radius' => '5px'
        );
        $this->_checkBorderStyle($I, $attr);    
        
        $I->amGoingTo('Reset border style');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click('Style');
        $I->click($this->borderStyleBtn);
        $I->click($this->resetBorderWidth);
        $I->click($this->resetBorderRadius);
        $I->wait(1);
        $I->click($this->clearBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check reset border style in frontend');
        $attr = array(
            'border-color' => 'rgb(51, 51, 51)',
            'border-style' => 'dashed',
            'border-width' => '1px',
            'border-radius' => '0px'
        );
        $this->_checkBorderStyle($I, $attr);

        $I->amGoingTo('Change Box shadow setting');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click('Style');
        $I->click($this->borderStyleBtn);
        $I->selectOption('Border Style', 'None');
        $I->scrollTo($this->boxShadowOptionsBtn, 20);
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(2);
        $I->click($this->boxShadowColor);
        $I->wait(1);

        $I->click($this->boxShadowStyleLeft);
        $commonFunctionsPageObj->field = $this->boxShadowStyleLeft;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->wait(1); 

        $I->click($this->boxShadowStyleTop);
        $commonFunctionsPageObj->field = $this->boxShadowStyleTop;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $I->click($this->boxShadowStyleBlur);
        $commonFunctionsPageObj->field = $this->boxShadowStyleBlur;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->wait(1); ; 

        $I->click($this->boxShadowStyleSpread);
        $commonFunctionsPageObj->field = $this->boxShadowStyleSpread;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $separatorStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->separatorStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->wait(1);  
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowStylePosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowStylePositionSelected) )->click();
        });
        $I->wait(2);

        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check box shadow style in frontend');
        $commonFunctionsPageObj->field = $this->fInfoBlock;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click('Style');
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
            return $webdriver->findElement(WebDriverBy::cssSelector($this->fInfoBlock));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }
}
