<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class CountUpCest
{
    public $countUpBlock = '//div[@data-title="Count Up"]';  
    public $fCountUpBlock = '.responsive-block-editor-addons-block-count-up';

    /**
     * General settings
     */
    public $alignRightBtn = '//button[@aria-label="Align text right"]';
    public $columnsInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Columns"]';
    public $generalStyleBtn = '//button[text()="General"]';
    public $fCountItemTitle = '(//*[@class="responsive-count-item__title"])[1]';
    public $countItemWrapper = '.responsive-count > div';
    public $countItem = 'div .responsive-count-item';

    /**
     * Content settings
     */
    public $contentStyleBtn = '//button[text()="Content"]';
    public $enableTitle = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $enableNumber = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $enableDescription = '(//input[contains(@id, "inspector-toggle-control")])[3]'; 
    public $enableIcon = '(//input[contains(@id, "inspector-toggle-control")])[4]';
    public $description1 = '(//div[@aria-label="Description"])[1]';
    public $description2 = '(//div[@aria-label="Description"])[2]';
    public $fDescription1 = '(//div[@class="responsive-count-item__features"])[1]';
    public $fDescription2 = '(//div[@class="responsive-count-item__features"])[2]';
    
    /**
     * Icon settings
     */
    public $selectIconBtn1 = '(//*[@class="components-panel__body is-opened"]//div[2])[2]';
    public $nextIconBtn = '//span[@aria-label="Right"]';
    public $selectedIcon = '//*[@class="rfipicons__selector"]//span[15]';
    public $selectIconBtn2 = '(//*[@class="components-panel__body is-opened"]//div[2])[3]//div//div//div[2]';
    public $fIcon1 = '.responsive-block-editor-addons-block-count-up > div:nth-child(1) > div:nth-child(1) > div > svg';
    public $fIcon1Path = '.responsive-block-editor-addons-block-count-up > div:nth-child(1) > div:nth-child(1) > div > svg > path';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[6]/button';
    public $iconShapeColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[1]/button';
    public $iconOutlineRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Shape / Outline Border Radius"]';
    public $iconOutlinePadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Shape / Outline Padding"]';
    public $iconOutlineWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Outline Width"]';
    public $fIconOutline = '(//div[@class="responsive-block-editor-addons-count-up__source-icon"])[1]';
    public $resetIconSizeBtn = '//button[text()="Reset"]';
    public $clearIconColorBtn = '(//button[text()="Clear"])[1]';
    public $clearIconShapeColorBtn = '(//button[text()="Clear"])[2]';

    /**
     * Typography settings
     */
    public $typographyStyleBtn = '//button[text()="Typography"]';
    public $numberTypography = '//button[text()="Number Typography"]';
    public $headingTypography = '//button[text()="Heading Typography"]';
    public $descriptionTypography = '//button[text()="Description Typography"]';
    public $fNumber = '(//div[@class="responsive-count-item__amount"])[1]';
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    /**
     * Spacing Settings
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $contentPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Padding"]';
    public $fContentPadding = '//div[@class="responsive-count has-text-align-center"]';
    public $iconMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Bottom Spacing"]';
    public $fIconMargin = '(//div[@class="responsive-block-editor-addons-count-up__source-wrap res-countup-icon-design-none"])[1]';
    public $titleMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Margin"]';
    public $numberMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Number Bottom Margin"]';
    public $descriptionMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Description Bottom Margin"]';
    public $contentPaddingReset = '(//button[text()="Reset"])[1]';
    public $iconBottomSpacingReset = '(//button[text()="Reset"])[2]';
    public $titleBottomMarginReset = '(//button[text()="Reset"])[3]';
    public $numberBottomMarginReset = '(//button[text()="Reset"])[4]';
    public $descriptionBottomMarginReset = '(//button[text()="Reset"])[5]';

    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $desktopView3 = '(//button[contains(@id, "desktop")])[3]';
    public $tabletView3 = '(//button[contains(@id, "tablet")])[3]';
    public $mobileView3 = '(//button[contains(@id, "mobile")])[3]';
    public $desktopView4 = '(//button[contains(@id, "desktop")])[4]';
    public $tabletView4 = '(//button[contains(@id, "tablet")])[4]';
    public $mobileView4 = '(//button[contains(@id, "mobile")])[4]';
    public $desktopView5 = '(//button[contains(@id, "desktop")])[5]';
    public $tabletView5 = '(//button[contains(@id, "tablet")])[5]';
    public $mobileView5 = '(//button[contains(@id, "mobile")])[5]';
    
    /**
     * Color settings
     */
    public $colorSpacingStyleBtn = '//*[text()="Color Settings"]';
    public $titleColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[6]/button';
    public $numberColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[1]/button';
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[2]/button';
    public $bgColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[5]/button';
    public $opacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $fCountItem1 = '(//div[@class="responsive-count-item"])[1]';
    public $clearTitleBtn = '(//button[text()="Clear"])[1]';
    public $clearNumberBtn = '(//button[text()="Clear"])[2]';
    public $clearTextBtn = '(//button[text()="Clear"])[3]';
    public $clearBgBtn = '(//button[text()="Clear"])[4]';
    public $resetOpacity = '//button[text()="Reset"]'; 
    
    /**
     * Border settings
     */
    public $borderStyleBtn = '//*[text()="Border"]';
    public $borderTypeSelector = '//*[contains(@id, "inspector-select-control")]';
    public $borderTypeSelectOption = 'option[value="dashed"]';
    public $borderTypeSelectOptionNone = 'option[value="none"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadious = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $borderColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $resetBorderWidth = '(//button[text() = "Reset"])[1]';
    public $resetBorderRadius = '(//button[text() = "Reset"])[2]';
    public $clearBorderColor = '//*[text() = "Clear"]';
    public $fItemWrapper = '(//div[@class="responsive-count-item"])[1]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a count up block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'count up');
        $I->wait(1);
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the count up block.');
        $I->amOnPage('/rbea-block'); 
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
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
        $I->click($this->countUpBlock);
        $I->click('Style');
    }

    /**
     * Tests the General settings of count up block
     */
    public function CountUpGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the count up block in the frontend.');
        $I->seeElement($this->fCountUpBlock);

        $I->amGoingTo('Change the general settings of the count up block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->generalStyleBtn);
        $I->click($this->alignRightBtn);
        $I->click($this->columnsInput);
        $commonFunctionsPageObj->field = $this->columnsInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '4' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings of the count up block.');
        $commonFunctionsPageObj->field = $this->fCountItemTitle;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'right');  
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('responsive-count-item'));
        }); 
        $I->assertCount(4, $countItems);
    }

    /**
     * Tests the Content Settings of count up block
     */
    public function CountUpContentSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Hide the title and check in the frontend.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->contentStyleBtn);
        $I->click($this->enableTitle);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->fCountItemTitle);

        $I->amGoingTo('Show the title and check in the frontend.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->contentStyleBtn);
        $I->click($this->enableTitle);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->seeElement($this->fCountItemTitle);

        $I->amGoingTo('Show the description and check in the frontend.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->contentStyleBtn);
        $I->click($this->description1);
        $commonFunctionsPageObj->field = $this->description1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $I->wait(1);
        $I->click($this->description2);
        $commonFunctionsPageObj->field = $this->description2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->seeElement($this->fDescription1);
        $I->seeElement($this->fDescription2);

        $I->amGoingTo('Hide the description and check in the frontend.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->contentStyleBtn);
        $I->click($this->enableDescription);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->fDescription1);
        $I->cantSeeElement($this->fDescription2);
    }

    /**
     * Tests the Icon settings of the count up block
     */
    public function CountUpIconSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Enable the Icon and check in the frontend.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->contentStyleBtn);
        $I->click($this->enableIcon);
        $I->click('Style');
        $I->click('CountUp Box 1');
        $I->wait(1);
        $I->click($this->selectIconBtn1);
        $I->wait(2);
        $I->click($this->nextIconBtn);
        $I->wait(2);
        $I->click($this->selectedIcon);
        $I->wait(1);
        $I->click($this->selectIconBtn1);
        $I->wait(1);
        $I->click('CountUp Box 2');
        $I->wait(1);
        $I->click($this->selectIconBtn2);
        $I->wait(2);
        $I->click($this->nextIconBtn);
        $I->wait(2);
        $I->click($this->selectedIcon);
        $I->wait(1);
        $I->click($this->selectIconBtn2);   
        $I->wait(1);     
        $typographyStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->typographyStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->click($this->iconColor);
        $I->wait(1);
        $I->selectOption('Design', 'Plain');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the icon settings in the frontend.');
        $I->seeElement($this->fIcon1);
        $commonFunctionsPageObj->field = $this->fIcon1Path;
        $commonFunctionsPageObj->prop = 'd';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'path("M 177 159.7 L 313 295.7 C 322.4 305.1 322.4 320.3 313 329.6 L 290.4 352.2 C 281 361.6 265.8 361.6 256.5 352.2 L 160 255.9 L 63.6 352.3 C 54.2 361.7 39 361.7 29.7 352.3 L 7 329.7 C -2.4 320.3 -2.4 305.1 7 295.8 L 143 159.8 C 152.4 150.3 167.6 150.3 177 159.7 Z")');
        $commonFunctionsPageObj->field = $this->fIcon1;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '22px');
        $commonFunctionsPageObj->prop = 'height';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '22px');
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(255, 255, 255)');

        $I->amGoingTo('Change the Design of the icon');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click('Style');
        $typographyStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->typographyStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->selectOption('Design', 'Shaped');
        $I->wait(1);
        $typographyStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->typographyStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->iconShapeColor);
        $I->click($this->iconOutlineRadius);
        $commonFunctionsPageObj->field = $this->iconOutlineRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '42' );
        $I->click($this->iconOutlinePadding);
        $commonFunctionsPageObj->field = $this->iconOutlinePadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($this->iconOutlineWidth);
        $commonFunctionsPageObj->field = $this->iconOutlineWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '9' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the design of the icon in the frontend');
        $commonFunctionsPageObj->field = $this->fIconOutline;
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '42px');
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '12px');

        $I->amGoingTo('Reset Icon Design Settings');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click('Style');
        $I->click($this->resetIconSizeBtn);
        $I->click($this->clearIconColorBtn);
        $I->click($this->clearIconShapeColorBtn);  
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check Icon Design Settings after reset');
        $commonFunctionsPageObj->field = $this->fIcon1;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px');
        $commonFunctionsPageObj->prop = 'height';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px');
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(58, 58, 58)');
        $commonFunctionsPageObj->field = $this->fIconOutline;
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(173, 213, 239, 1)');
    }

    /**
     * Tests the Typography settings of the count up block
     */
    public function CountUpTypographySettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the number typography settings of the count up block.');

        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->description1);
        $commonFunctionsPageObj->field = $this->description1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $I->wait(1);
        $I->click($this->description2);
        $commonFunctionsPageObj->field = $this->description2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);  
        $I->click($this->numberTypography);  
        $arr = array('26px', '40px', '40px', '52px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->numberTypography, $this->fNumber, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '26px');

        $I->amGoingTo('Change the heading typography settings of the count up block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);  
        $I->click($this->headingTypography);  
        $arr = array('23px', '23px', '23px', '46px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->headingTypography, $this->fCountItemTitle, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '41.4px');

        $I->amGoingTo('Change the description typography settings of the count up block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);  
        $I->click($this->descriptionTypography);  
        $arr = array('23px', '16px', '16px', '46px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->descriptionTypography, $this->fDescription1, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '40.25px');
    }

    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography style of the count up block for desktop view.');
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
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '16px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
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
     * Tests the spacing settings of the count up block
     */
    public function CountUpSpacingSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the content padding spacing....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->contentPadding);
        $view = array($commonFunctionsPageObj->desktopView, $commonFunctionsPageObj->tabletView, $commonFunctionsPageObj->mobileView );
        $spacing = array('54px', '0px', '0px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->contentPadding, $this->fContentPadding);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $I->wait(1);

        $I->amGoingTo('Change the Icon Bottom margin spacing....');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->contentStyleBtn);
        $I->click($this->enableIcon);
        $I->click('Style');
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->iconMargin);
        $numberMargin = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->numberMargin))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $view = array($this->desktopView2, $this->tabletView2, $this->mobileView2 );
        $spacing = array('30px', '16px', '16px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->iconMargin, $this->fIconMargin);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '0px');
        $I->wait(1);

        $I->amGoingTo('Change the title bottom spacing....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->titleMargin);
        $view = array($this->desktopView3, $this->tabletView3, $this->mobileView3 );
        $spacing = array('20px', '20px', '20px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->titleMargin, $this->fCountItemTitle);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '0px');
        $I->wait(1);

        $I->amGoingTo('Change the number bottom spacing....');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->numberMargin);
        $view = array($this->desktopView4, $this->tabletView4, $this->mobileView4 );
        $spacing = array('15px', '20px', '20px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->numberMargin, $this->fNumber);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '0px');
        $I->wait(1);

        $I->amGoingTo('Change the description bottom spacing....');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->description1);
        $commonFunctionsPageObj->field = $this->description1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $I->wait(1);
        $I->click($this->description2);
        $commonFunctionsPageObj->field = $this->description2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $I->wait(1);
        $I->click('Style');
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->descriptionMargin);
        $view = array($this->desktopView5, $this->tabletView5, $this->mobileView5 );
        $spacing = array('20px', '30px', '30px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $this->descriptionMargin, $this->fDescription1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '0px');
        $I->wait(1);
    }

    /**
     * This function performs the spacing test
     */
    public function _spacingTest($I, $commonFunctionsPageObj, $view, $spacing, $backendSelector, $frontendSelector)
    {
        $I->wait(1);
        $I->amGoingTo('Change the spacing settings of the count up block for the desktop view.');
        $I->click($view[0]);
        $I->click($backendSelector);
        $commonFunctionsPageObj->field = $backendSelector;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[0] );
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the margin in the front view for desktop view.');
        $commonFunctionsPageObj->field = $frontendSelector;
        if( $backendSelector === $this->contentPadding)
        {
            $commonFunctionsPageObj->prop = 'padding';
        } else {
            $commonFunctionsPageObj->prop = 'margin-bottom';
        }
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $spacing[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I,  $spacing[1]);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I,  $spacing[2]);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);
        
        $I->amGoingTo('Change the content spacing settings of the count up block for the tablet and mobile view');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($view[1]);
        $descriptionMargin = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->descriptionMargin))->getLocationOnScreenOnceScrolledIntoView();
        }); 
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
        if( $backendSelector === $this->contentPadding)
        {
            $commonFunctionsPageObj->prop = 'padding';
        } else {
            $commonFunctionsPageObj->prop = 'margin-bottom';
        }
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $spacing[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Reset the spacing in the desktop view');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->contentPaddingReset);
        $I->click($this->iconBottomSpacingReset);
        $I->click($this->titleBottomMarginReset);
        $I->click($this->numberBottomMarginReset);
        $I->click($this->descriptionBottomMarginReset);
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the spacing in the front view for desktope view.');
        $commonFunctionsPageObj->field = $frontendSelector;
        $commonFunctionsPageObj->prop = 'padding';
    }

    /**
     * Tests the color settings of the count up block
     */
    public function CountUpColorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color settings of the count up block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countUpBlock);
        $I->click($this->description1);
        $commonFunctionsPageObj->field = $this->description1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $I->wait(1);
        $I->click($this->description2);
        $commonFunctionsPageObj->field = $this->description2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', 'Description' );
        $I->wait(1);
        $I->click('Style');
        $I->wait(1);
        $I->click($this->colorSpacingStyleBtn);
        $I->wait(1);
        $I->click($this->titleColor);
        $I->wait(1);
        $I->click($this->numberColor);
        $I->wait(1);
        $I->click($this->textColor);
        $I->wait(1);
        $I->click($this->bgColor);
        $I->wait(1);
        $I->click($this->opacity);
        $commonFunctionsPageObj->field = $this->opacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94px' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the color setting');
        $commonFunctionsPageObj->field = $this->fCountItemTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fNumber;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
        $commonFunctionsPageObj->field = $this->fDescription1;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fCountItem1;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 0.94)');

        $I->amGoingTo('Reset the colors.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorSpacingStyleBtn);
        $clearBgBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->clearBgBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->clearTitleBtn);
        $I->wait(1);
        $I->click($this->clearNumberBtn);
        $I->wait(1);
        $I->click($this->clearTextBtn);
        $I->wait(1);
        $I->click($this->clearBgBtn);
        $resetOpacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetOpacity))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetOpacity);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the color setting');
        $commonFunctionsPageObj->field = $this->fCountItemTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fNumber;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fDescription1;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fCountItem1;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 0, 0, 0.1)');
    }

    /**
     * Tests the border settings of the count up block.
     */
    public function CountUpBorderSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the border settings of the count up block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->borderStyleBtn);

        $I->amGoingTo("Change count up's border style to dashed");
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
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
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
    }

    /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fItemWrapper));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

}
