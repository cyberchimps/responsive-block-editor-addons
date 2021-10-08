<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class CardCest
{

    public $cardBlock = 'div[data-title="Card"]';
    public $fCardBlock = 'div.responsive-block-editor-addons-block-card';

    /**
     * General settings
     */
    public $numberOfCardsInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of Cards"]';
    public $zIndexInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Z-Index"]';
    public $fCardContainer = 'div.wp-block-responsive-block-editor-addons-card__inner';
    public $fButton = '(//div[@class="responsive-block-editor-addons-card-button-inner"])[1]';
    public $fButtonText = '(//div[@class="responsive-block-editor-addons-card-button-inner"])[1]//a';

    /**
     * Image Settings
     */
    public $selectBgImage = '(//button[text()="Select Background Image"])[1]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectedBackgroundAttachment1 = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectedBackgroundAttachment2 = '(//*[contains(@id, "__attachments-view")]/li[1])[2]';
    public $selectBtn1 = '//*[text()="Select"]';
    public $selectBtn2 = '(//*[text()="Select"])[2]';
    public $customHeightInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Custom Height"]';
    public $fAvatarImgContainer = '(//div[@class="responsive-block-editor-addons-card-avatar"])[1]';
    public $fAvatarImg = '(//div[@class="responsive-block-editor-addons-card-avatar"])[1]//div';

    /**
     * Column Background settings.
     */
    public $columnBackgroundStyleBtn = '//button[text()="Column Background"]';
    public $color1 = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $color2 = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $location1 = '//*[contains(@id, "inspector-input-control") and @aria-label="Color Location 1"]';
    public $location2 = '//*[contains(@id, "inspector-input-control") and @aria-label="Color Location 2"]';
    public $direction = '//*[contains(@id, "inspector-input-control") and @aria-label="Gradient Direction"]';
    public $fCardItem = '(//div[@class="wp-block-responsive-block-editor-addons-card-item"])[1]';
    public $backgroundColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $opacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $textOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Text Opacity"]';

    /**
     * Button Settings
     */
    public $buttonSettingsStyleBtn = '//button[text()="Button Settings"]';
    public $spacingSettingsStyleBtn = '//button[text()="Spacing Settings"]';
    public $borderSettingsStyleBtn = '//button[text()="Border Settings"]';
    public $colorSettingsStyleBtn = '//button[text()="Color Settings"]';
    public $horizontalPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Padding"]';
    public $verticalPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Padding"]';
    public $verticalMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Margin"]';
    public $horizontalMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Margin"]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $normalBtn = '//button[text()="Normal"]';
    public $hoverBtn = '//button[text()="Hover"]';
    public $normalTextColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $normalBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $normalBgColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[6]/button';
    public $hoverTextColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $hoverBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[5]/button';

    /**
     * Typography Style
     */
    public $fTitle = '(//h4[@class="wp-block-responsive-block-editor-addons-card-item__title"])[1]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';
    public $fSubtitle = '(//p[@class="wp-block-responsive-block-editor-addons-card-item__subtitle"])[1]';
    public $fContent = '(//p[@class="wp-block-responsive-block-editor-addons-card-item__content"])[1]';
    
    /**
     * Icon Settings
     */
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[1]';
    public $selectedIcon = '(//*[@class="rfipicons__selector"]//span)[15]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $iconHoverColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[6]/button';
    public $fIconContainer = '(//span[@class="responsive-block-editor-addons-button__icon responsive-block-editor-addons-button__icon-position-before"])[1]';
    
    /**
     * Spacing Settings
     */
    public $titleBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Margin"]';
    public $subtitleBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Subtitle Bottom Margin"]';
    public $contentTopMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Top Margin"]';
    public $contentBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Bottom Margin"]';
    public $blockTopMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Block Top Margin"]';
    public $blockBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Block Bottom Margin"]';
    public $blockLeftMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Block Left Margin"]';
    public $blockRightMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Block Right Margin"]';

    /**
     * Border Settings
     */
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '(//div[@class="components-circular-option-picker__swatches"])[2]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $boxShadowPositionSelected = 'option[value="inset"]'; 
    public $resetBorderWidth = '(//button[text()="Reset"])[1]';
    public $resetBorderRadius = '(//button[text()="Reset"])[2]';
    public $resetBorderColor = '(//button[text()="Clear"])[1]';
    
    /**
     * Text color settings
     */
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $clearTextColor = '//button[text()="Clear"]';

    /**
     * Block Options
     */
    public $alignBtn = '//button[@aria-label="Align"]';
    public $alignCenter = '//*[@id="editor"]/div[2]/div/div/div/div/button[2]';
    public $fTextWrap = '(//div[@class="card-content-wrap"])[1]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Card block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'card');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Card block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->cardBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Tests the General settings
     */
    public function CardGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the General Settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->generalStyleBtn);
        $I->wait(1);
        $I->click($this->numberOfCardsInput);
        $commonFunctionsPageObj->field = $this->numberOfCardsInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->selectOption('Stack on','Tablet');
        $I->click($this->zIndexInput);
        $commonFunctionsPageObj->field = $this->zIndexInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the General Settings of the card block in the frontend.');
        $I->seeElement($this->fCardBlock);
        $I->wait(1);
        $I->scrollTo($this->fButton, 20);
        $I->wait(1);
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('wp-block-responsive-block-editor-addons-card-item'));
        }); 
        $I->assertCount(3, $countItems);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fCardContainer;
        $commonFunctionsPageObj->prop = 'grid-auto-flow';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'column');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'row'); 
        $commonFunctionsPageObj->field = $this->fCardBlock;
        $commonFunctionsPageObj->prop = 'z-index';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5');
    }

    /**
     * Tests the Image settings
     */
    public function CardImageSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Image Settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->imageStyleBtn);
        $I->wait(1);
        $I->click($this->selectBgImage);
        $I->click($this->mediaLibraryBtn);
        $I->wait(5);
        $I->click($this->selectedBackgroundAttachment1);
        $I->click($this->selectBtn1);
        $I->wait(2);
        $I->click($this->selectBgImage);
        $I->wait(5);
        $I->click($this->selectedBackgroundAttachment2);
        $I->click($this->selectBtn2);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->imageSettingsStyleBtn);
        $I->selectOption('Image Size', 'Medium');
        $I->selectOption('Image Position', 'Top Right');
        $I->selectOption('Image Repeat', 'Repeat');
        $I->click($this->customHeightInput);
        $commonFunctionsPageObj->field = $this->customHeightInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '300' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the image settings in the frontend.');
        $I->seeElement($this->fAvatarImg);
        $commonFunctionsPageObj->field = $this->fAvatarImg;
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '100% 0%'); 
        $commonFunctionsPageObj->prop = 'background-repeat';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'repeat'); 
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'cover'); 
        $commonFunctionsPageObj->field = $this->fAvatarImgContainer;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '300px');
    }

    /**
     * Tests the Column Background
     */
    public function CardImageColumnBackgroundSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the column background of the card block to gradient.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->columnBackgroundStyleBtn);
        $I->selectOption('Background Type', 'Gradient');
        $I->click($this->color1);
        $I->click($this->color2);
        $I->click($this->location1);
        $commonFunctionsPageObj->field = $this->location1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->location2);
        $commonFunctionsPageObj->field = $this->location2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '75' );
        $I->click($this->direction);
        $commonFunctionsPageObj->field = $this->direction;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the gradient column background of the card block in the frontend.');
        $commonFunctionsPageObj->field = $this->fCardItem;
        $commonFunctionsPageObj->prop = 'background-image';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'linear-gradient(15deg, rgb(51, 51, 51) 5%, rgb(16, 101, 156) 75%)');

        $I->amGoingTo('Change the color background of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->columnBackgroundStyleBtn);
        $I->selectOption('Background Type', 'Color');
        $I->wait(1);
        $I->click($this->backgroundColor);
        $I->click($this->opacity);
        $commonFunctionsPageObj->field = $this->opacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath',  '40');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color content background of the card block.');
        $commonFunctionsPageObj->field = $this->fCardItem;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 0.4)');
    }

    /**
     * Tests the Button settings 
     */
    public function CardButtonSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the button settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->buttonSettingsStyleBtn);
        $I->click($this->spacingSettingsStyleBtn);
        $I->wait(2);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->verticalMargin);
        $commonFunctionsPageObj->field = $this->verticalMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->horizontalMargin);
        $commonFunctionsPageObj->field = $this->horizontalMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the button settings of the card block in the frontend.');
        $I->scrollTo($this->fButton);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px'); 
        $commonFunctionsPageObj->prop = 'margin';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px 20px'); 


        $I->amGoingTo('Change the padding settings of the card block for tablet and mobile view');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->buttonSettingsStyleBtn);
        $I->click($this->spacingSettingsStyleBtn);
        $I->wait(2);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16' );
        $I->click($this->tabletView2);
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '27' );
        $I->wait(2);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->click($this->mobileView2);
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the button settings of the card block in the frontend for tablet and mobile view.');
        $I->scrollTo($this->fButton);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '27px 16px'); 
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '30px 22px'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the border settings of the button');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->buttonSettingsStyleBtn);
        $I->click($this->borderSettingsStyleBtn);
        $I->wait(1);
        $I->selectOption('Border Style', 'Dashed');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the border settings of the button in the frontend.');
        $I->scrollTo($this->fButton);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px dashed rgb(51, 51, 51)');

        $I->amGoingTo('Change the color settings of the button.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->buttonSettingsStyleBtn);
        $I->selectOption('Button Size', 'Large');
        $I->click($this->borderSettingsStyleBtn);
        $I->selectOption('Border Style', 'Solid');
        $I->click($this->borderSettingsStyleBtn);
        $I->wait(1);
        $I->click($this->colorSettingsStyleBtn);
        $I->wait(1);
        $I->click($this->normalBtn);
        $I->click($this->normalTextColor);
        $I->click($this->normalBorderColor);
        $I->wait(1);
        $textOpacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->textOpacity))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->selectOption('Background Type', 'Color');
        $I->click($this->normalBgColor);
        $I->wait(1);
        $I->click($this->opacity);
        $commonFunctionsPageObj->field = $this->opacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94' );
        $I->wait(1);
        $I->click($this->textOpacity);
        $commonFunctionsPageObj->field = $this->textOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '93' );
        $hoverBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->hoverBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->hoverBtn);
        $I->click($this->hoverTextColor);
        $I->click($this->hoverBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings of the button in the frontend.');
        $I->scrollTo($this->fButton);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 0.94)');
        $commonFunctionsPageObj->field = $this->fButtonText;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(16, 101, 156)');
        $I->wait(1);
        $I->moveMouseOver($this->fButton);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51)');
        $commonFunctionsPageObj->field = $this->fButtonText;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
    }

    /**
     * Tests the typography settings
     */
    public function CardTypographyStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the title typograhy settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->wait(2);
        $I->click($commonFunctionsPageObj->titleTypography);
        $arr = array('22px', '22px', '22px', '44px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->titleTypography, $this->fTitle, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '22px');

        $I->amGoingTo('Change the subtitle typograhy settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->wait(2);
        $I->click($commonFunctionsPageObj->subtitleTypography);
        $arr = array('20px', '20px', '20px', '40px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->subtitleTypography, $this->fSubtitle, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');

        $I->amGoingTo('Change the content typograhy settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->wait(2);
        $I->click($commonFunctionsPageObj->contentTypography);
        $arr = array('18px', '18px', '18px', '36px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->contentTypography, $this->fContent, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '36px');
    }

    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography of the flipbox block for desktop view.');
        $I->resizeWindow(1280, 950);
        $I->selectOption('Font Family', 'Actor');
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->wait(1);
        $I->selectOption('Font Weight', '600');
        $I->wait(1);
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings in the desktop view.');
        $I->scrollTo($selector, 20);
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

        $I->amGoingTo('Change the typography style of the block for mobile and desktop view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);
        $I->click($commonFunctionsPageObj->tabletView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '14px' );
        $I->click($commonFunctionsPageObj->mobileView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8px' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the typography settings in the tablet and mobile view.');
        $I->scrollTo($selector, 20);
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-size';
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '14px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $I->wait(2);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);  
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $I->scrollTo($selector, 20);
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }

    /**
     * Test the Icon settings 
     */
    public function CardIconSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the icon settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->iconSettingsStyleBtn);
        $I->wait(2);
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $I->click($this->selectedIcon);
        $I->wait(1);
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $I->selectOption('Icon Position', 'Before Text');
        $I->click($this->iconColor);
        $I->click($this->iconHoverColor);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the icon settings in the frontend.');
        $I->scrollTo($this->fButton, 20);
        $I->seeElement($this->fIconContainer);
        $commonFunctionsPageObj->field = $this->fIconContainer;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $I->wait(1);  
        $I->moveMouseOver($this->fButton);
        $I->wait(1);
    }

    /**
     * Test the spacing setting
     */
    public function CardSpacingsSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacings settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->titleBottomMargin);
        $commonFunctionsPageObj->field = $this->titleBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->subtitleBottomMargin);
        $commonFunctionsPageObj->field = $this->subtitleBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($this->contentTopMargin);
        $commonFunctionsPageObj->field = $this->contentTopMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->contentBottomMargin);
        $commonFunctionsPageObj->field = $this->contentBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->blockTopMargin);
        $commonFunctionsPageObj->field = $this->blockTopMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->blockBottomMargin);
        $commonFunctionsPageObj->field = $this->blockBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->blockLeftMargin);
        $commonFunctionsPageObj->field = $this->blockLeftMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->blockRightMargin);
        $commonFunctionsPageObj->field = $this->blockRightMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacings settings of the card block in the frontend.');
        $I->wait(1);
        $I->scrollTo($this->fButton, 10);
        $commonFunctionsPageObj->field = $this->fTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $commonFunctionsPageObj->field = $this->fSubtitle;      
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '12px');
        $commonFunctionsPageObj->field = $this->fCardBlock;
        $commonFunctionsPageObj->prop = 'margin';       
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');

        $I->amGoingTo('Change the spacing settings of the card block for the tablet and mobile view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->titleBottomMargin);
        $commonFunctionsPageObj->field = $this->titleBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' ); 
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->titleBottomMargin);
        $commonFunctionsPageObj->field = $this->titleBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '24' ); 
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacings settings of the card block in the frontend tablet and mobile view.');
        $I->wait(1);
        $I->scrollTo($this->fButton, 10);
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '24px');
        $I->resizeWindow(1280, 950);  
    }

    /**
     * Tests the border settings
     */
    public function CardBorderSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the border settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->borderStyleBtn);
        $I->wait(1);
        $I->amGoingTo('Change the border settings of the Post Page.');
        $I->selectOption('Border Style', 'Groove');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $I->click($this->borderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the border settings of the Post Page.');
        $commonFunctionsPageObj->field = $this->fCardItem;
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px groove rgb(51, 51, 51)'); 
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px'); 
        
        $I->amGoingTo('Change the box shadow settings of the Card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->borderStyleBtn);
        $I->selectOption('Border Style', 'None');
        $I->click($this->resetBorderWidth);
        $I->click($this->resetBorderRadius);
        $I->click($this->resetBorderColor);
        $I->wait(1);
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(1);
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

        $boxShadowSpread = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowSpread))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(3);
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

        $I->amGoingTo('Check the box shadow settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fCardItem;
        $commonFunctionsPageObj->prop = 'box-shadow';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');
        $I->wait(2);
    }

    /**
     * Tests the color settings
     */
    public function CardTextColorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the text color settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->textColorSettingsBtn);
        $I->click($this->textColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the text color in the frotend.');
        $I->scrollTo($this->fButton, 10);
        $I->wait(2);
        $commonFunctionsPageObj->field = $this->fTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');

        $I->amGoingTo('Reset the text color settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->textColorSettingsBtn);
        $I->click($this->clearTextColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the text color in the frotend.');
        $I->scrollTo($this->fButton, 10);
        $I->wait(2);
        $commonFunctionsPageObj->field = $this->fTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
    }

    /**
     * Tests the block Options
     */
    public function CardBlockOptionsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the alignment settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->alignBtn);
        $I->wait(1);
        $I->click($this->alignCenter);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the alignment settings of the card block in the frontend.');
        $I->scrollTo($this->fButton, 10);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fTextWrap;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'center');

        $I->amGoingTo('Reset the alignment settings of the card block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->cardBlock);
        $I->wait(1);
        $I->click($this->alignBtn);
        $I->wait(1);
        $I->click($this->alignCenter);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the alignment settings of the card block in the frontend after reset.');
        $I->scrollTo($this->fButton, 10);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fTextWrap;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'left');
    }
}

