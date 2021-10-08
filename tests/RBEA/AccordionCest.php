<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class AccordionCest
{
   public $accordionBlock = '//div[@data-title="Accordion"]';
   public $firstChildBlock = '(//div[@aria-label="Block: Accordion Item"])[1]';
   public $fAccordionBlock = '.wp-block-responsive-block-editor-addons-accordion';
   public $selectAccordionBtn = '//button[@aria-label="Select Accordion"]';
   public $selectAccordionItemBtn = '//button[@aria-label="Accordion Item"]';
   public $typographyStleBtn = '//*[text()="Typography"]';

   /**
    * General settings.
    */
    public $layoutSelect = '//*[contains(@id, "inspector-select-control")]';
    public $layoutSelectedOption = 'option[value="accordion"]';
    public $expandFirstItemBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $expandIconSelectBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[2]/div/div[4]'; 
    public $selectedExpandIcon = '(//*[@class="rfipicons__selector"]//span)[1]';
    public $closeIconSelection = 'div[class="rfipbtn__button rfipbtn__button--open"]';
    public $selectedCollapseIcon = '//*[@class="rfipicons__selector"]//span[2]';
    public $collapseIconSelectBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[2]/div/div[5]';
    public $alignRightBtn = '//button[@aria-label="Right"]';
    public $sizeInputField = '//*[contains(@id, "inspector-input-control") and @type="number"]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[1]';
    public $iconActiveColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[2]';
    
    public $sizeResetBtn = '*//button[text()="Reset"]';

    /**
     * Style Settings
     * 1.Color
     */
    public $titletextColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[3]';
    public $titleBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[4]';
    public $activeTextColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[5]';
    public $activeBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[6]';
    public $gradientBgBtn = '(//*[@class="components-form-toggle"])[2]//input';
    public $secondaryBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[7]';
    public $gradientDegree = '//*[contains(@id, "inspector-input-control") and @aria-label="Gradient Degree"]';
    public $bgColorOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Color Opacity"]';
    public $contentStyleBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div[1]/div[2]/h2/button/span[2]';
    public $contentTextColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[3]';
    public $contentBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[4]';
     
    public $fAccordionTitle = '(//span[@class="responsive-block-editor-addons-title"])[1]';
    public $fExpandBtn = '(//span[@class="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap"])[1]';
    public $fAccordionTitleBtn = '(//*[@class="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles"])[1]';
     
    public $resetTitleTextColor = '(*//button[text()="Clear"])[3]';
    public $resetTitleBgColor = '(*//button[text()="Clear"])[4]';
    public $resetActiveColor = '(*//button[text()="Clear"])[5]';
    public $resetActiveBgColor = '(*//button[text()="Clear"])[6]';
    public $resetGradientColor = '(*//button[text()="Clear"])[7]';
    
    public $secondaryBgColorContent = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[5]';
    public $fAccordionContent = '(//div[@class="responsive-block-editor-addons-accordion-content"])[1]';
    public $fAccordionContentSpan =  '(//div[@class="responsive-block-editor-addons-accordion-content"])[1]//span';

    /**
     * 2. Spacing
     */
    public $rowGapInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Row Gap"]';
    public $verticalMarginInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Margin"]';
    public $horizontalMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Margin"]';
    public $desktopView1 = '(//button[contains(@id, "desktop")])[2]';
    public $mobileView1 = '(//button[contains(@id, "mobile")])[2]';
    public $tabletView1 = '(//button[contains(@id, "tablet")])[2]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[3]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[3]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[3]';
    public $desktopView3 = '(//button[contains(@id, "desktop")])[4]';
    public $mobileView3 = '(//button[contains(@id, "mobile")])[4]';
    public $tabletView3 = '(//button[contains(@id, "tablet")])[4]';
    public $fAccordionWrap = '.responsive-block-editor-addons-accordion__wrap';

    /**
     * 3. Typography
     */
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '(//*[text() = "Reset"])[2]';  
    
    public $typographyContentBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div[3]/div[2]/div/div/h2/button';
     
    /**
     * 4. Advanced
     */
    public $anchorInputField = '(//*[contains(@id, "inspector-text-control")])[1]';
    public $advancedStyleBtn = '//button[text()="Advanced"]';

    /**
     * Child block settings
     * 1. Style
     */
    public $styleBtn = '//button[text()="Style"]';
    public $spacingBtn = '//button[text()="Spacing"]';
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
    public $childContainerBox = '(//*[@class="responsive-column-wrap responsive-block-editor-addons-block-column"])[1]';
    public $accordionItemOuterWrap = '.responsive-block-editor-addons-accordion__wrap > div:nth-child(1)';

    /**
     * 2. Spacing
     */
    public $titlePadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Padding"]';
    public $contentPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Padding"]';
    public $resetTitlepaddingBtn = '(//button[text()="Reset"])[1]';
    public $resetContentpaddingBtn = '(//button[text()="Reset"])[2]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Accordion block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'accordion');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }
    
    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Remove the accordion block.');
        $I->amOnPage('/rbea-block'); 
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->firstChildBlock);
        $I->wait(2);
        $I->click($this->selectAccordionBtn);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);       
    }

    /**
     * Function to select style settings for parent accordion block.
     */
    public function _selectParentBlockStyle($I, $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->firstChildBlock);
        $I->click($this->selectAccordionBtn);
        $I->click('Style');
    }

    /**
     * Function to select style settings for parent accordion block.
     */
    public function _selectChildBlockStyle($I, $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->firstChildBlock);
        $I->click('Style');
    }

    /**
     * This test checks the general settings of Accordion parent block.
     */
    // public function AccordionParentBlockGeneralSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    // {
    //     $I->amGoingTo('Check the accordion block in the frontend.');
    //     $I->seeElement($this->fAccordionBlock);

    //     $I->amGoingTo('Change the general settings of accordion parent block.');
    //     $I->click($commonFunctionsPageObj->editBlockBtn);
    //     $I->click($this->firstChildBlock);
    //     $I->click($this->selectAccordionBtn);
    //     $layout = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
    //         return $webdriver->findElement(WebDriverBy::xpath($this->layoutSelect))->
    //         findElement( WebDriverBy::cssSelector($this->layoutSelectedOption) )->click();
    //     });
    //     $I->click($this->expandFirstItemBtn);
    //     $sizeResetBtnBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
    //         return $webdriver->findElement(WebDriverBy::xpath($this->sizeResetBtn))->getLocationOnScreenOnceScrolledIntoView();
    //     });
    //     $I->wait(1);
    //     $I->click($this->expandIconSelectBtn);
    //     $I->click($this->selectedExpandIcon);
    //     $I->click($this->closeIconSelection);
    //     $I->wait(1);
    //     $I->click($this->collapseIconSelectBtn);
    //     $I->wait(2);
    //     $I->click($this->selectedCollapseIcon);
    //     $I->wait(2);
    //     $I->click($this->closeIconSelection);
    //     $I->click($this->alignRightBtn);
    //     $I->click($commonFunctionsPageObj->desktopView);
    //     $I->click($this->sizeInputField);
    //     $commonFunctionsPageObj->field = $this->sizeInputField;
    //     $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
    //     $I->click($this->iconColor);
    //     $I->click($this->iconActiveColor);
    //    $commonFunctionsPageObj->publishAndViewPage($I);

    //    $I->amGoingTo('Check the general settings of accordion block in the frontend.');
    // }

    /**
     * This test checks the color style settings of accordion parent block.
     */
    public function AccordionParentBlockColorStyleSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->amGoingTo('Change title color style settings of accordion parent block.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Color');
        $I->click('Title');
        $I->click($this->activeTextColor);
        $activeBgColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->activeBgColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->activeBgColor);
        $this->_changeColorSettings($I, $commonFunctionsPageObj, $this->titletextColor, $this->titleBgColor, $this->secondaryBgColor);
        
        $I->amGoingTo('Check the frontend for title color settings of accordion parent block.');
        $arr = array('rgba(51, 51, 51, 1)', 'rgba(0, 0, 0, 0)', 'rgba(16, 101, 156, 1)', 'rgba(0, 0, 0, 0)' );
        $commonFunctionsPageObj->field = $this->fAccordionTitle;
        $this->_checkColorSettings($I, $commonFunctionsPageObj, $arr);
        $commonFunctionsPageObj->field = $this->fAccordionTitleBtn;
        $commonFunctionsPageObj->prop = 'background-image';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'linear-gradient(70deg, rgba(255, 255, 255, 0.94), rgba(0, 102, 204, 0.94))');

        $I->amGoingTo('Reset the gradient color.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Color');
        $I->click('Title');
        $I->click($this->resetTitleTextColor);
        $I->click($this->resetTitleBgColor);
        $I->click($this->resetActiveColor);
        $I->click($this->resetActiveBgColor);
        $I->wait(1);
        $resetGradientColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetGradientColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetGradientColor);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoinGTo('Check the gradient color after reset in the frontend.');
        $arr = array('rgba(49, 49, 49, 1)', 'rgba(0, 0, 0, 0)', 'rgba(49, 49, 49, 1)', 'rgba(0, 0, 0, 0)' );
        $commonFunctionsPageObj->field = $this->fAccordionTitle;
        $this->_checkColorSettings($I, $commonFunctionsPageObj, $arr);
        $commonFunctionsPageObj->prop = 'background-image';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'none');
        $I->wait(1);
        
        $I->amGoingTo('Change the content color settings of accordion parent block.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Color');
        $I->click($this->contentStyleBtn);
        $I->wait(3);
        $this->_changeColorSettings($I, $commonFunctionsPageObj, $this->contentTextColor, $this->contentBgColor, $this->secondaryBgColorContent);
  
        $I->amGoingTo('Check the frontend for content color settings of accordion parent block.');
        $commonFunctionsPageObj->field = $this->fAccordionContent;
        $commonFunctionsPageObj->prop = 'color'; 
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $I->click($this->fExpandBtn);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'background-image';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'linear-gradient(70deg, rgba(51, 51, 51, 0.94), rgba(16, 101, 156, 0.94))');
    }

    /**
     * This function changes the color settings.
     */
    public function _changeColorSettings($I, $commonFunctionsPageObj, $textColorField, $bgColorField, $secondaryBgColor)
    {
     $I->click($textColorField);
     $I->click($bgColorField);
     $I->wait(1);
     $typographyStleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->typographyStleBtn))->getLocationOnScreenOnceScrolledIntoView();
     });
     $I->wait(1);
     $I->click($this->gradientBgBtn);
     $I->wait(1);
     $I->click($secondaryBgColor);
     $I->click($this->gradientDegree);
     $commonFunctionsPageObj->field = $this->gradientDegree;
     $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '70' );
     $I->click($this->bgColorOpacity);
     $commonFunctionsPageObj->field = $this->bgColorOpacity;
     $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94' );
     $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function check the color settings in the frontend
     */
    public function _checkColorSettings($I, $commonFunctionsPageObj, $arr)
    {
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[0]);
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[1]);
        $I->click($this->fExpandBtn);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[2]);
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[3]);
    }

    /**
     * This test is to check the spacing settings of parent block
     */
    public function AccordionParentBlockSpacingStyleSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->amGoingTo('Change spacing style settings of accordion parent block for desktop.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');

        $viewArr = array($this->desktopView1, $this->desktopView2, $this->desktopView3);
        $valuesArr = array('15', '12', '12');
        $this->_setSpacing($I, $commonFunctionsPageObj, $viewArr, $valuesArr);
        
        $I->amGoingTo('Check the spacing in the frontend desktop view');
        $this->_checkSpacing($I, $commonFunctionsPageObj, $valuesArr);
        
        $I->amGoingTo('Change spacing style settings of accordion parent block for tablet.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');

        $viewArr = array($this->tabletView1, $this->tabletView2, $this->tabletView3);
        $valuesArr = array('12', '10', '10');
        $this->_setSpacing($I, $commonFunctionsPageObj, $viewArr, $valuesArr);
        
        $I->amGoingTo('Check the spacing in the frontend tablet view');
        $I->resizeWindow(965, 1024); 
        $this->_checkSpacing($I, $commonFunctionsPageObj, $valuesArr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);  

        $I->amGoingTo('Change spacing style settings of accordion parent block for mobile.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Spacing');

        $viewArr = array($this->mobileView1, $this->mobileView2, $this->mobileView3);
        $valuesArr = array('4', '5', '5');
        $this->_setSpacing($I, $commonFunctionsPageObj, $viewArr, $valuesArr);
        
        $I->amGoingTo('Check the spacing in the frontend mobile view');
        $I->resizeWindow(375, 812); 
        $this->_checkSpacing($I, $commonFunctionsPageObj, $valuesArr);
        $I->wait(1);
        $I->resizeWindow(1280, 950);  
    }

    /**
     * Function to set spacing
     */
    public function _setSpacing($I, $commonFunctionsPageObj, $viewArr, $valuesArr)
    {
        $I->click($viewArr[0]);
        $I->click($this->rowGapInputField);
        $commonFunctionsPageObj->field = $this->rowGapInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $valuesArr[0] );   
        $I->click($viewArr[1]); 
        $I->click($this->verticalMarginInputField);
        $commonFunctionsPageObj->field = $this->verticalMarginInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $valuesArr[1] );  
        $I->click($viewArr[2]); 
        $I->click($this->horizontalMargin);
        $commonFunctionsPageObj->field = $this->horizontalMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $valuesArr[2] ); 
        $commonFunctionsPageObj->publishAndViewPage($I); 
    }

    /**
     * Function to check the spacing
     */
    public function _checkSpacing($I, $commonFunctionsPageObj, $arr) 
    {
        $commonFunctionsPageObj->field = $this->fAccordionWrap;
        $commonFunctionsPageObj->prop = 'grid-row-gap';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0].'px');
        $commonFunctionsPageObj->field = $this->fAccordionBlock;
        $commonFunctionsPageObj->prop = 'margin-top';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1].'px');
        $commonFunctionsPageObj->prop = 'margin-left';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1].'px');
    }

    /**
     * This test is to check the typography settings of parent block
     */
    public function AccordionParentBlockTypographyStyleSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change title spacing style settings of accordion parent block for desktop.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Typography');
        $I->click('Title');
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($this->desktopView1);
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

        $I->amGoingTo('Check the frontend for the title typography settings for desktop view');
        $commonFunctionsPageObj->field = $this->fAccordionTitle;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50px');
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px');
        $I->resizeWindow(768, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change title font-size for tablet and mobileview');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Typography');
        $I->click('Title');
        $I->click($this->tabletView1);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->click($this->mobileView1);
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(965, 1024);
        $I->wait(1);

        $I->amGoingTo('Check the frontend for the tablet and mobile view title typography settings');
        $commonFunctionsPageObj->field = $this->fAccordionTitle;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '15px');       
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px'); 
        $I->wait(1); 
        $I->resizeWindow(1280, 950);
        $I->wait(1); 
        
        $I->amGoingTo('Reset line height');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Typography');
        $I->click('Title');
        $I->wait(1);
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->typographyContentBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check reset line height in the frontend');
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->field = $this->fAccordionTitle;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '43.75px');
        
        $I->amGoingTo('Change content spacing style settings of accordion parent block for desktop.');
        $this->_selectParentBlockStyle($I, $commonFunctionsPageObj);
        $I->click('Typography');
        $I->click($this->typographyContentBtn);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($this->desktopView1);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
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
        $commonFunctionsPageObj->field = $this->fAccordionContent;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '30px');
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '15px');
        
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '15px');
        $I->resizeWindow(768, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '15px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);
    }

    /**
     * This test checks the accordion block's advanced settings
     */
    public function AccordionParentBlockAdvancedSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo("Add accordion block's advanced settings.");
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->firstChildBlock);
        $I->click($this->selectAccordionBtn);
        $I->click('Advanced');
        $I->click($this->advancedStyleBtn);
        $I->fillField($this->anchorInputField, 'anchor_rohcna');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check for HTML Anchor element in the frontend');
        $I->seeInSource('id="anchor_rohcna"'); 
    }

    /**
     * This test checks the style setting of child block
     */
    public function AccordionChildBlockStyleSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->amGoingTo('Change the style setting of accordion child block.');
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->styleBtn);
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
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->styleBtn);
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
            'border-radius' => '2px'
        );
        $this->_checkBorderStyle($I, $attr);

        $I->amGoingTo('Change Box shadow setting');
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->styleBtn);
        $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelector))->
            findElement( WebDriverBy::cssSelector($this->borderTypeSelectOptionNone) )->click();
        });
        $boxShadowOptionsBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowOptionsBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
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
        $I->wait(1);

        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check box shadow style in frontend');
        $commonFunctionsPageObj->field = $this->accordionItemOuterWrap;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->styleBtn);
        $boxShadowResetBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowResetBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 0px 0px 0px 0px');
    }

    /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->accordionItemOuterWrap));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

    /**
     * This test checks the spacing setting of child block
     */
    public function AccordionChildBlockSpacingSettingsTest( RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj )
    {
        $I->amGoingTo('Change the title and content spacing of accordion child block for desktop.');
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingBtn);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->titlePadding);
        $commonFunctionsPageObj->field = $this->titlePadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($this->desktopView1);
        $I->click($this->contentPadding);
        $commonFunctionsPageObj->field = $this->contentPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the spacing setting for desktop and tablet.');
        $I->click($this->fExpandBtn);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fAccordionContentSpan;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $commonFunctionsPageObj->field = $this->fAccordionTitleBtn;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '12px');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $commonFunctionsPageObj->field = $this->fAccordionContentSpan;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change the title and content spacing of accordion child block for mobile.');
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingBtn);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->titlePadding);
        $commonFunctionsPageObj->field = $this->titlePadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->mobileView1);
        $I->click($this->contentPadding);
        $commonFunctionsPageObj->field = $this->contentPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '9' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the spacing setting for mobile.');
        $I->click($this->fExpandBtn);
        $I->wait(1);
        $I->resizeWindow(374, 812);
        $commonFunctionsPageObj->field = $this->fAccordionContentSpan;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '9px');
        $commonFunctionsPageObj->field = $this->fAccordionTitleBtn;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the padding for mobile view');
        $this->_selectChildBlockStyle($I, $commonFunctionsPageObj);
        $I->click($this->spacingBtn);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->resetTitlepaddingBtn);
        $I->click($this->mobileView1);
        $I->click($this->resetTitlepaddingBtn);
        $I->click($this->resetContentpaddingBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend after resetting the padding for mobile.');
        $I->click($this->fExpandBtn);
        $I->wait(1);
        $I->resizeWindow(374, 812);
        $commonFunctionsPageObj->field = $this->fAccordionContentSpan;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $commonFunctionsPageObj->field = $this->fAccordionTitleBtn;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
    }
}
