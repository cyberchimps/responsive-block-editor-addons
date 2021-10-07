<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class IconListCest
{
    public $addIconBtn = '//button[@aria-label="Add Icons List Child"]';
    public $iconListParentBlock = '//div[@data-title="Icons List"]';
    public $iconListChildBlock = '(//div[@aria-label="Block: Icons List Child"])[1]';
    public $selectParentBtn = '//button[@aria-label="Select Icons List"]';
    public $fIconList = '.wp-block-responsive-block-editor-addons-icons-list';

    /**
     * Parent: General settings.
     */
    public $layoutSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $layoutSelectedOption = 'option[value="horizontal"]';
    public $hideLabels = '//*[contains(@id, "inspector-toggle-control")]';
    public $gapBetweenItems = '//*[contains(@id, "inspector-input-control") and @aria-label="Gap between Items"]';
    public $gapBetIconNLabel = '(//*[contains(@id, "inspector-input-control")])[2]';
    public $iconAlignment = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $iconAlignmentSelectedOption = 'option[value="middle"]';    
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $iconSizeTablet = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size Tablet"]';
    public $iconSizeMobile = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size Mobile"]';
    public $backgroundSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Size"]';
    public $backgroundSizeMobile = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Size Mobile"]';
    public $backgroundSizeTablet = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Size Tablet"]';
    public $border = '//*[contains(@id, "inspector-input-control") and @aria-label="Border"]';
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';

    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    
    public $iconListWrap = '.responsive-block-editor-addons-icon-list__wrap';
    public $firstChildWrap = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1)';
    public $firstChildIcon = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div';
    public $firstChildIconSpanWarp = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div > span';
    public $firstChildIconSpanIcon = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div > span > span';
    public $firstChildLabelWrap = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div > div';
    public $firstChildLabel = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div > div >div';
    public $childItemHorizontalWrap = '.responsive-block-editor-addons-icon-list__layout-horizontal';
    public $firstChildImageWrap = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div > span > img';
    /**
     * Parent: Style settings.
     */
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '(//*[text() = "Reset"])[2]';
    public $desktopView = '(//button[contains(@id, "desktop")])[3]'; 
    public $tabletView = '(//button[contains(@id, "tablet")])[3]'; 
    public $mobileView = '(//button[contains(@id, "mobile")])[3]'; 
        
    /**
     * Child: Icon Settings
     */
    public $sourceSelect = '//*[contains(@id, "inspector-select-control")]';
    public $sourceSelectedOptionIcon = 'option[value="icon"]';
    public $sourceSelectedOptionImage = 'option[value="image"]';
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[2]';
    public $selectedIcon = '(//*[@class="rfipicons__selector"]//span)[1]';
    public $closeIconSelection = 'div[class="rfipbtn__button rfipbtn__button--open"]';
    public $iconPath = 'path("M 8 256 C 8 392.966 119.033 504 256 504 S 504 392.966 504 256 S 392.966 8 256 8 S 8 119.033 8 256 Z M 256 440 V 72 C 357.705 72 440 154.311 440 256 C 440 357.705 357.689 440 256 440 Z")';
    public $disableLinkBtn = '(//input[contains(@id, inspector-toggle-control)])[1]';
    public $urlInputField = '//input[@placeholder="Enter URL"]'; 
    public $openInNewTabBtn = '(//input[contains(@id, inspector-toggle-control) and @type="checkbox"])[2]';

    public $iconPathEle = '.responsive-block-editor-addons-icon-list__wrap > div:nth-child(1) > div > span > span > svg > path';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectImageBtn = '//*[text()="Select Image"]';
    public $selectedAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';
    public $removeImageBtn = '*//button[text()="Remove Image"]';

    /**
     * Child: Colors Settings
     */
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $textHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';   
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[2]';
    public $iconBackgroundColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[3]';
    public $iconBorderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[4]';
  
    public $resetTextColor = '(*//button[text()="Clear"])[1]';
    public $resetIconColor = '(*//button[text()="Clear"])[2]';
    public $resetBgIconColor = '(*//button[text()="Clear"])[3]';
    public $resetBorderColor = '(*//button[text()="Clear"])[4]';


    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Icons List block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'icons list');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->click($this->addIconBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }
    
    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Remove the icons list block.');
        $I->amOnPage('/rbea-block'); 
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->iconListChildBlock);
        $I->wait(1);
        $I->click($this->selectParentBtn);
        $I->wait(1);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);       
    }

    /**
     * This function opens style options for parent Icon List block
     */
    public function _openParentStyleSettings(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj){
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->iconListChildBlock);
        $I->click($this->selectParentBtn);
        $I->click('Style');
    }

    /**
     * This test checks the general settings of Icon List Parent block.
     */
    public function IconsListGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->resizeWindow(1280, 950);  
        $I->amGoingTo('Check block in the frontend');
        $I->seeElement($this->fIconList);
        
        $I->amGoingTo('Change the general settings of Icon List parent block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->iconListChildBlock);
        $I->click($this->selectParentBtn);
        $I->wait(1);
        $layout = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->layoutSelect))->
            findElement( WebDriverBy::cssSelector($this->layoutSelectedOption))->click();
        });
        $I->click($this->gapBetweenItems);
        $commonFunctionsPageObj->field = $this->gapBetweenItems;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->gapBetIconNLabel);
        $commonFunctionsPageObj->field = $this->gapBetIconNLabel;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $alignment = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->iconAlignment))->
            findElement( WebDriverBy::cssSelector($this->iconAlignmentSelectedOption))->click();
        });
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );    
        $I->wait(1); 
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->iconSizeTablet);
        $commonFunctionsPageObj->field = $this->iconSizeTablet;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16' );    
        $I->wait(1); 
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->iconSizeMobile);
        $commonFunctionsPageObj->field = $this->iconSizeMobile;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );    
        $I->wait(1); 

        $I->wait(1); 
        $I->click($this->desktopView2);
        $I->click($this->backgroundSize);
        $commonFunctionsPageObj->field = $this->backgroundSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );    
        $I->click($this->tabletView2);
        $I->click($this->backgroundSizeTablet);
        $commonFunctionsPageObj->field = $this->backgroundSizeTablet;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16' );    
        $I->wait(1); 
        $I->click($this->mobileView2);
        $I->click($this->backgroundSizeMobile);
        $commonFunctionsPageObj->field = $this->backgroundSizeMobile;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );    
        $I->wait(1); 
        $I->click($this->border);
        $commonFunctionsPageObj->field = $this->border;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );  
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings in the frontend.');
        $I->seeElement($this->childItemHorizontalWrap);
        $I->seeElement($this->firstChildLabelWrap);
        $commonFunctionsPageObj->field = $this->firstChildIconSpanWarp;
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $commonFunctionsPageObj->prop = 'border-width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '3px');
        $commonFunctionsPageObj->prop = 'margin-right';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $commonFunctionsPageObj->prop = 'text-align';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'center');
        $commonFunctionsPageObj->field = $this->firstChildWrap;
        $commonFunctionsPageObj->prop = 'margin-right';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $commonFunctionsPageObj->field = $this->firstChildIconSpanIcon;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');     
        $commonFunctionsPageObj->prop = 'height';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');  
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');   
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px'); 
        $I->resizeWindow(965, 1024); 
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px');   
        $commonFunctionsPageObj->prop = 'height';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '16px'); 
        $I->resizeWindow(1280, 950);  
        
        $I->amGoingTo('Hide the labels of icon list.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->iconListChildBlock);
        $I->click($this->selectParentBtn);
        $I->wait(1);
        $I->click($this->hideLabels);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->firstChildLabelWrap);
    } 

    /**
     * This test checks the Label Typography style of Icon List Parent Block.
     */
    public function IconsListLabelTypographyStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Change the style of parent Icon List Block label');
        $this->_openParentStyleSettings($I, $commonFunctionsPageObj);
        $I->click('Label Typography');

        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($this->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->wait(1);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings for desktop view');
        $commonFunctionsPageObj->field = $this->firstChildLabel;
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

        $I->amGoingTo('Change font-size for tablet and mobileview');
        $this->_openParentStyleSettings($I, $commonFunctionsPageObj);
        $I->click('Label Typography');
        $I->click($this->tabletView);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->click($this->mobileView);
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(965, 1024);
        $I->wait(1);

        $I->amGoingTo('Check the frontend for the tablet and mobile view typography settings');
        $commonFunctionsPageObj->field = $this->firstChildLabel;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '15px');       
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px'); 
        $I->wait(1); 
        $I->resizeWindow(1280, 950);
        $I->wait(1); 
        
        $I->amGoingTo('Reset line height');
        $this->_openParentStyleSettings($I, $commonFunctionsPageObj);
        $I->click('Label Typography');
        $I->scrollTo($this->resetLineHeightBtn);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check reset line height in the frontend');
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->field = $this->firstChildLabel;
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '25px');
    }

    /**
     * This test checks the Icon Settings of Icon List Child block.
     */
    public function IconsListChildIconSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj) 
    {
       $I->amGoingTo("Change the Icon List child block's Icon settings for Icon.");
       $I->click($commonFunctionsPageObj->editBlockBtn);
       $I->click($this->iconListChildBlock);
       $itemSource = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->sourceSelect))->
        findElement( WebDriverBy::cssSelector($this->sourceSelectedOptionIcon))->click();
       });
       $I->click($this->selectIconBtn);
       $I->click($this->selectedIcon);
       $I->wait(1);
       $I->click($this->closeIconSelection);
       $I->wait(1);
       $I->click($this->disableLinkBtn);
       $I->wait(1);
       $urlInputField = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->urlInputField))->getLocationOnScreenOnceScrolledIntoView();
        });
       $I->click($this->urlInputField);
       $I->clearField($this->urlInputField);
       $I->fillField($this->urlInputField, 'https://www/google.com');
       $I->wait(1);
       $openInNewTabBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->openInNewTabBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
       $I->wait(2);
       $I->click($this->openInNewTabBtn);
       $commonFunctionsPageObj->publishAndViewPage($I);

       $I->amGoingTo('Check the frontend for Icon settings');
       $I->seeElement($this->iconPathEle);
       $I->seeInSource('<a target="_blank" rel="noopener noreferrer" aria-label="#Label" href="https://www/google.com"');
    
       $I->amGoingTo("Change the Icon List child block's Icon settings for Image.");
       $I->click($commonFunctionsPageObj->editBlockBtn);
       $I->click($this->iconListChildBlock);
       $itemSource = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->sourceSelect))->
        findElement( WebDriverBy::cssSelector($this->sourceSelectedOptionImage))->click();
       });
       $I->click($this->selectImageBtn);
       $I->click($this->mediaLibraryBtn);
       $I->wait(3);
       $I->click($this->selectedAttachment);
       $I->wait(1);
       $I->click($this->selectBtn);
       $I->wait(1);
       $commonFunctionsPageObj->publishAndViewPage($I);
       $I->seeElement($this->firstChildImageWrap);

       $I->amGoingTo('Remove background image of section.');                
       $I->click($commonFunctionsPageObj->editBlockBtn);
       $I->click($this->iconListChildBlock);
       $I->click($this->removeImageBtn);
       $commonFunctionsPageObj->publishAndViewPage($I);
       $I->cantSeeElement($this->firstChildImageWrap);
    }

    /**
     * This test checks the Colors Settings of Icon List child block.
     */
    public function IconsListChildColorsSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color settings of Icon List child block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->iconListChildBlock);
        $I->click('Style');
        $I->click('Normal');
        $I->click($this->textColor);
        $I->click($this->iconColor);
        $I->click($this->iconBackgroundColor);
        $I->click($this->iconBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings of Icon List in the frontend');
        $arr = array(
            'icon-color' => 'rgba(16, 101, 156, 1)',
            'icon-bg-color' => 'rgba(0, 0, 0, 0)',
            'icon-border-color' => 'rgb(51, 51, 51)',
            'text-color' => 'rgba(16, 101, 156, 1)'
        );
        $this->_checkFrontEndColorSettings($I, $commonFunctionsPageObj, $arr );
        
        $I->amGoingTo('Reset the colors');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->iconListChildBlock);
        $I->click('Style');
        $I->click('Normal');
        $I->click($this->resetTextColor);
        $I->click($this->resetIconColor);
        $I->click($this->resetBgIconColor);
        $I->click($this->resetBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the colors of Icon List Child in the frontend after reset');
        $arr = array(
            'icon-color' => 'rgba(58, 58, 58, 1)',
            'icon-bg-color' => 'rgba(0, 0, 0, 0)',
            'icon-border-color' => 'rgb(58, 58, 58)',
            'text-color' => 'rgba(58, 58, 58, 1)'
        );
        $this->_checkFrontEndColorSettings($I, $commonFunctionsPageObj, $arr );

        $I->amGoingTo('Change the hover color of the settings of Icon List Child');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->iconListChildBlock);
        $I->click('Style');
        $I->click('Hover');
        $I->click($this->textHoverColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('CHeck the text hover color in the frontend');
        $I->wait(2);
        $I->moveMouseOver($this->firstChildLabel);
        $commonFunctionsPageObj->field = $this->firstChildLabel;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');
    }

    /**
     * Function to check fronend color settings
     */
    public function _checkFrontEndColorSettings($I, $commonFunctionsPageObj, $arr)
    {
        $commonFunctionsPageObj->field = $this->firstChildIconSpanIcon;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['icon-color']);
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['icon-bg-color']);
        $commonFunctionsPageObj->field = $this->firstChildIconSpanWarp;
        $commonFunctionsPageObj->prop = 'border-color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['icon-border-color']);
        $commonFunctionsPageObj->field = $this->firstChildLabel;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr['text-color']);
    }
}
