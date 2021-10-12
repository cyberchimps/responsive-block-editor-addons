<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class PricingTableCest
{
    public $pricingTableBlock = 'div[data-title="Pricing Table"]';
    
    /**
     * General settings
     */
    public $subPriceInput = '(//p[@aria-label="Sub Price"])[1]';
    public $selectImgBtn =  '(//button[@class="components-button responsive-block-editor-addons-add-image"])[1]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';
    public $numberOfPricingTable = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of Pricing Tables"]';
    public $imgToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $titleToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $pricePrefixToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $priceToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[4]';
    public $priceSuffixToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[5]';
    public $subPriceToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[6]';
    public $featuresToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[7]';
    public $btnToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[8]';
    public $fPricingTable = 'div.responsive-block-editor-addons-block-pricing-table';
    public $fPricingTableImg = 'img.responsive-block-editor-addons-pricing-image';
    public $fSubPrice = '(//p[@class="wp-block-responsive-block-editor-addons-pricing-table-item__sub_price"])[1]';
    public $fTableItemTitle = '(//span[@class="wp-block-responsive-block-editor-addons-pricing-table-item__title"])[1]';
    public $fTableItemCurrency = '(//p[@class="wp-block-responsive-block-editor-addons-pricing-table-item__currency"])[1]';
    public $fTableItemPrice = '(//p[@class="wp-block-responsive-block-editor-addons-pricing-table-item__amount"])[1]';
    public $fTableItemSuffix = '(//p[@class="wp-block-responsived-block-editor-addons-pricing-table-item__price_suffix"])[1]';
    public $fFeatures = '(//ul[@class="wp-block-responsive-block-editor-addons-pricing-table-item__features"])[1]';
    public $fButton = '(//a[@class="wp-block-responsive-block-editor-addons-pricing-table-item__button"])[1]';
    public $fPricingTableInner = '//div[contains(@class, "wp-block-responsive-block-editor-addons-pricing-table__inner")]';

    /**
     * Image Settings
     */
    public $widthInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Width"]';
    public $widthTabletInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Width Tablet"]';
    public $widthMobileInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Width Mobile"]';

    /**
     * Button Settings
     */
    public $openInNewTabBtn = '//input[contains(@id, "inspector-toggle-control")]';
    public $horizontalPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Padding"]';
    public $verticalPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Padding"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $normalTextColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $normalBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $normalBgColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[6]/button';
    public $hoverTextColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $hoverBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[5]/button';
    public $hoverBgColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[2]/button';
    
    /**
     * Column Background
     */
    public $color1 = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $color2 = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[5]/button';
    public $location1 = '//*[contains(@id, "inspector-input-control") and @aria-label="Color Location 1"]';
    public $location2 = '//*[contains(@id, "inspector-input-control") and @aria-label="Color Location 2"]';
    public $gradientDirection = '//*[contains(@id, "inspector-input-control") and @aria-label="Gradient Direction"]';
    public $opacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $fPricingTableItem = 'div.wp-block-responsive-block-editor-addons-pricing-table-item:nth-child(1)';
    
    /**
     * Typography settings
     */
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    /**
     * Border settings
     */
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $resetBorderWidth = '(//button[text()="Reset"])[1]';
    public $resetBorderRadius = '(//button[text()="Reset"])[2]';
    public $resetBorderColor = '(//button[text()="Clear"])[1]';
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
     * Spacing settings
     */
    public $topPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $bottomPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $leftPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $rightPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]'; 
    public $titleInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Title"]';
    public $priceInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Price"]';
    public $subPrice = '//*[contains(@id, "inspector-input-control") and @aria-label="Sub Price"]';
    public $buttonInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Button"]';
    public $featuresInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Features"]';
    public $fPrice = '(//div[@class="wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper"])[1]';

    /**
     * Color Settings
     */
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $titleColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[5]/button';
    public $pricePrefixColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[5]/button';
    public $priceColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[2]/button';
    public $priceSuffixColor = '(//*[@class="components-circular-option-picker__swatches"])[5]//div[5]/button';
    public $subPriceColor = '(//*[@class="components-circular-option-picker__swatches"])[6]//div[5]/button';
    public $featuresColor = '(//*[@class="components-circular-option-picker__swatches"])[7]//div[2]/button';
    public $fTableItemPriceSuffix = '(//p[@class="wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix"])[1]';
    public $colorSettingsStyleBtn = '//*[text()="Color Settings"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Pricing Table block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'pricing table');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Pricing Table block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->pricingTableBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Tests the general setting
     */
    public function PricingTableGeneralTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->pricingTableBlock); 
        $I->click($this->selectImgBtn);
        $I->click($this->mediaLibraryBtn); 
        $I->wait(3); 
        $I->click($this->selectAttachment); 
        $I->wait(2);
        $I->click($this->selectBtn);  
        $I->wait(1);
        $I->click($this->subPriceInput);
        $I->wait(1);
        $I->fillField($this->subPriceInput, '17');  
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the pricing table block in the frontend.');
        $I->seeElement($this->fPricingTable);
        $I->seeElement($this->fPricingTableImg);
        $I->seeElement($this->fSubPrice);
        $I->wait(1);

        $I->amGoingTo('Change the general settings of the img, title, currency and price.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->pricingTableBlock); 
        $I->click($commonFunctionsPageObj->generalStyleBtn);
        $I->wait(1);
        $I->click($this->numberOfPricingTable);
        $commonFunctionsPageObj->field = $this->numberOfPricingTable;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->selectOption('Gutter', 'L');
        $I->selectOption('Alignment', 'Left');
        $I->click($this->imgToggleBtn);
        $I->click($this->titleToggleBtn);
        $I->click($this->pricePrefixToggleBtn);
        $I->click($this->priceToggleBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings of the Pricing Table block in the frontend.');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('wp-block-responsive-block-editor-addons-pricing-table-item'));
        }); 
        $I->assertCount(3, $countItems);
        $commonFunctionsPageObj->field = $this->fPricingTableInner;
        $commonFunctionsPageObj->prop = 'text-align';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'left');
        $I->cantSeeElement($this->fPricingTableImg);
        $I->cantSeeElement($this->fTableItemTitle);
        $I->cantSeeElement($this->fTableItemCurrency);
        $I->cantseeElement($this->fTableItemPrice);
        $I->wait(1);

        $I->amGoingTo('Change the general settings of the price suffix, sub price, features and button.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->pricingTableBlock); 
        $I->click($commonFunctionsPageObj->generalStyleBtn);
        $I->wait(1);
        $I->click($this->imgToggleBtn);
        $I->click($this->titleToggleBtn);
        $I->click($this->pricePrefixToggleBtn);
        $I->click($this->priceToggleBtn);
        $I->click($this->priceSuffixToggleBtn);
        $I->click($this->subPriceToggleBtn);
        $I->click($this->featuresToggleBtn);
        $I->click($this->btnToggleBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Change the general settings of the price suffix, sub price, features and button in the frontend.');
        $I->seeElement($this->fPricingTableImg);
        $I->seeElement($this->fTableItemTitle);
        $I->seeElement($this->fTableItemCurrency);
        $I->seeElement($this->fTableItemPrice);
        $I->cantSeeElement($this->fSubPrice);
        $I->cantSeeElement($this->fTableItemSuffix);
        $I->cantSeeElement($this->fFeatures);
        $I->cantSeeElement($this->fButton);
    }

    /**
     * Tests the Image Settings 
     */
    public function PricingTableImageSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->pricingTableBlock); 
        $I->click($this->selectImgBtn);
        $I->click($this->mediaLibraryBtn); 
        $I->wait(3); 
        $I->click($this->selectAttachment); 
        $I->wait(2);
        $I->click($this->selectBtn);  
        $I->wait(1);
        $I->click($commonFunctionsPageObj->imageSettingsStyleBtn);
        $I->wait(1);
        $I->selectOption('Shape', 'Circle');
        $I->selectOption('Size', 'Medium');
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->widthInput);
        $commonFunctionsPageObj->field = $this->widthInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '500' );
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->widthTabletInput);
        $commonFunctionsPageObj->field = $this->widthTabletInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '300' );
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->widthMobileInput);
        $commonFunctionsPageObj->field = $this->widthMobileInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '170' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check image settings in the frontend.');
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fPricingTableImg;
        $commonFunctionsPageObj->prop = 'width';
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '300px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '170px');
        $I->resizeWindow(1280, 950);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '267.2px'); 
    }

    /**
     * Tests the Button Settings
     */
    public function PricingTableButtonSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the button settings of the pricing table block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->pricingTableBlock); 
        $I->click($commonFunctionsPageObj->buttonSettingStyleBtn);
        $I->click($this->openInNewTabBtn);
        $I->click($commonFunctionsPageObj->spacingSettingsStyleBtn);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->wait(1);
        $I->click($commonFunctionsPageObj->borderSettingsStyleBtn);
        $I->selectOption('Border Style', 'Dotted');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1);
        $I->click($commonFunctionsPageObj->colorSettingsStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->normalBtn);
        $I->click($this->normalTextColor);
        $I->click($this->normalBorderColor);
        $I->click($this->normalBgColor);
        $hoverBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->normalTextColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(4);
        $I->click($commonFunctionsPageObj->hoverBtn);
        $I->click($this->hoverTextColor);
        $I->click($this->hoverBorderColor);
        $I->click($this->hoverBgColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the button settings of the pricing table block.');
        $I->scrollTo($this->fButton, 20);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px 40px');
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px dotted rgb(16, 101, 156)');
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $I->wait(1);
        $I->moveMouseOver($this->fButton);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
    }

    /**
     * Tests the Column Background Settings
     */
    public function PricingTableColumnBackgroundTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the colummn background settings of the pricing table block to gradient.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->pricingTableBlock);  
        $I->click($commonFunctionsPageObj->columnBackgroundStyle);  
        $I->selectOption('Background Type', 'Gradient'); 
        $I->click($this->color1);
        $I->click($this->color2);
        $I->click($this->location1);
        $commonFunctionsPageObj->field = $this->location1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->location2);
        $commonFunctionsPageObj->field = $this->location2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '90' );
        $I->click($this->gradientDirection);
        $commonFunctionsPageObj->field = $this->gradientDirection;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->opacity);
        $commonFunctionsPageObj->field = $this->opacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '80' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the column background in the frontend');
        $commonFunctionsPageObj->field = $this->fPricingTableItem;
        $commonFunctionsPageObj->prop = 'background-image';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'linear-gradient(20deg, rgba(16, 101, 156, 0.8) 20%, rgba(51, 51, 51, 0.8) 90%)');
        $I->wait(1);

        $I->amGoingTo('Change the colummn background settings of the pricing table block to image.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->pricingTableBlock);  
        $I->click($commonFunctionsPageObj->columnBackgroundStyle);  
        $I->selectOption('Background Type', 'Image'); 
        $I->click($commonFunctionsPageObj->selectBgImage);
        $I->click($commonFunctionsPageObj->mediaLibraryBtn);
        $I->wait(5);
        $I->click($commonFunctionsPageObj->selectedBackgroundAttachment);
        $I->click($commonFunctionsPageObj->selectBtn);
        $I->wait(2);
        $I->click($this->opacity);
        $commonFunctionsPageObj->field = $this->opacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '80' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the column background settings in the frontend');
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->fPricingTableItem))->getCSSValue('background-image');
        });
        $I->assertTrue(str_contains($actualStyle, 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url'));
    }

    /**
     * Tests the Typography style Settings
     */
    public function PricingTableTypographyStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
      $I->amGoingTo('Change the title typography style of the Pricing Table Block');  
      $I->click($commonFunctionsPageObj->editBlockBtn);
      $I->wait(2);
      $I->click($this->pricingTableBlock);
      $I->click('Style'); 
      $I->click($commonFunctionsPageObj->typographyStyleBtn);
      $I->click($commonFunctionsPageObj->titleTypography);
      $arr = array('22px', '22px', '22px', '44px');
      $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->titleTypography, $this->fTableItemTitle, $arr);        
      $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '38.5px');

      $I->amGoingTo('Change the cta button typography style of the Pricing Table Block');  
      $I->click($commonFunctionsPageObj->editBlockBtn);
      $I->wait(2);
      $I->click($this->pricingTableBlock);
      $I->click('Style'); 
      $I->click($commonFunctionsPageObj->typographyStyleBtn);
      $I->click($commonFunctionsPageObj->ctaTypography);
      $arr = array('25px', '25px', '25px', '50px');
      $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->ctaTypography, $this->fButton, $arr);        
      $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '43.75px');
    }

     /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography of the pricing table block for desktop view.');
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
        $I->wait(2);
        $I->click($this->pricingTableBlock);
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
        $I->wait(2);
        $I->click($this->pricingTableBlock);
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
     * Tests the settings Border Style Settings
     */
    public function PricingTableBorderStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the border settings of the pricing table block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingTableBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->borderStyleBtn);
        $I->wait(1);
        $I->selectOption('Border Style', 'Groove');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $I->click($this->borderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the border settings of the Pricing table item.');
        $commonFunctionsPageObj->field = $this->fPricingTableItem;
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px groove rgb(51, 51, 51)'); 
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px'); 
        
        $I->amGoingTo('Change the box shadow settings of the pricing table block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingTableBlock);
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
        $commonFunctionsPageObj->field = $this->fPricingTableItem;
        $commonFunctionsPageObj->prop = 'box-shadow';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');
        $I->wait(2);
    }

    /**
     * Tests the spacing Style Settings
     */
    public function PricingTableSpacingStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the block spacing settings of the pricing table block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingTableBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->blockSpacingBtn);
        $this->_paddingTest($I, $commonFunctionsPageObj, $this->fPricingTable);

        $I->amGoingTo('Change the column spacing settings of the pricing table block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingTableBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->columnSpacingBtn);
        $this->_paddingTest($I, $commonFunctionsPageObj, $this->fPricingTableItem);

        $I->amGoingTo('Change the spacing of the block elements');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingTableBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->click($this->titleInput);
        $commonFunctionsPageObj->field = $this->titleInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->priceInput);
        $commonFunctionsPageObj->field = $this->priceInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->subPrice);
        $commonFunctionsPageObj->field = $this->subPrice;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '13' );
        $I->click($this->buttonInput);
        $commonFunctionsPageObj->field = $this->buttonInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '50' );
        $I->click($this->featuresInput);
        $commonFunctionsPageObj->field = $this->featuresInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing of the block elements');
        $commonFunctionsPageObj->field = $this->fTableItemTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px'); 
        $commonFunctionsPageObj->field = $this->fPrice;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px'); 
        $commonFunctionsPageObj->field = $this->fSubPrice;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '13px');
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50px'); 
        $commonFunctionsPageObj->field = $this->fFeatures;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px'); 
    }

    /**
     * This function sets the padding.
     */
    public function _paddingTest($I, $commonFunctionsPageObj, $selector)
    {
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->topPadding);
        $commonFunctionsPageObj->field = $this->topPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->bottomPadding);
        $commonFunctionsPageObj->field = $this->bottomPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->click($this->leftPadding);
        $commonFunctionsPageObj->field = $this->leftPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->click($this->rightPadding);
        $commonFunctionsPageObj->field = $this->rightPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );

        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->topPadding);
        $commonFunctionsPageObj->field = $this->topPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->bottomPadding);
        $commonFunctionsPageObj->field = $this->bottomPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($this->leftPadding);
        $commonFunctionsPageObj->field = $this->leftPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->rightPadding);
        $commonFunctionsPageObj->field = $this->rightPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );

        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->topPadding);
        $commonFunctionsPageObj->field = $this->topPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->bottomPadding);
        $commonFunctionsPageObj->field = $this->bottomPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '6' );
        $I->click($this->leftPadding);
        $commonFunctionsPageObj->field = $this->leftPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '6' );
        $I->click($this->rightPadding);
        $commonFunctionsPageObj->field = $this->rightPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the padding.');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px 5px 6px 6px'); 
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px 10px 12px'); 
        $I->resizeWindow(1280, 950);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px 20px 25px 15px'); 
    }

    /**
     * Tests the Color Style Settings
     */
    public function PricingTableColorStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the block spacing settings of the pricing table block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingTableBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($this->colorSettingsStyleBtn);
        $I->click($this->textColor);
        $I->click($this->titleColor);
        $I->click($this->pricePrefixColor);
        $I->click($this->priceColor);
        $I->click($this->priceSuffixColor);
        $I->click($this->subPriceColor);
        $I->click($this->featuresColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the block spacing settings of the pricing table block.');
        $commonFunctionsPageObj->field = $this->fTableItemTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fTableItemCurrency;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fTableItemPrice;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)'); 
        $commonFunctionsPageObj->field = $this->fTableItemPriceSuffix;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fButton;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)'); 
        $commonFunctionsPageObj->field = $this->fFeatures;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)'); 
    }
}
