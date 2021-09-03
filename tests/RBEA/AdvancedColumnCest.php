<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class AdvancedColumnCest
{
    public $advanceColumnBlock = 'div[data-title="Advanced Columns"]';
    public $selectAdvancedColumnsBlockBtn = '//button[@aria-label="Select Advanced Columns"]';
    public $selectColumnBlockBtn = '//button[@aria-label="Select Column"]';
    public $childColumn1 = '(//*[@aria-label="Block: Column"])[1]';
    public $childColumnParagraph1 = '(//div[@class="responsive-column-wrap responsive-block-editor-addons-block-column"])[1]//div//div//div//p'; 
    public $childColumnParagraph2 = '(//div[@class="responsive-column-wrap responsive-block-editor-addons-block-column"])[2]//div//div//div//p';
    public $childColumnParagraph3 = '(//div[@class="responsive-column-wrap responsive-block-editor-addons-block-column"])[3]//div//div//div//p';
    public $childColumn2 = '(//*[@aria-label="Block: Column"])[2]';
    public $childColumn3 = '(//*[@aria-label="Block: Column"])[3]';
    public $fAdvancedColumn = '.responsive-block-editor-addons-advanced-column';
    public $fColumnOuterWrap = '.responsive-block-editor-addons-advanced-column-outer-wrap';
    public $fSingleColumn = '.responsive-columns-inner-wrap > div > div';
    public $fColumnsContainer = '.responsive-columns-inner-wrap';
    public $fColumnWrap = '.responsive-columns-wrap';
    public $sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vel ex porttitor auctor.';

    /**
     * General Settings
     */
    public $generalSettingsBtn = '(//*[text()="General"])[2]';
    public $columnsInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Columns"]';
    public $defaultGapSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $defaultGapSelectedOption = 'option[value="narrow"]'; 
    public $stackOnSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $stackOnSelectedOption = 'option[value="mobile"]'; 
    public $containerWidthSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $containerWidthSelectedOption = 'option[value="custom"]'; 
    public $heightSelect = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $heightSelectedOption = 'option[value="half"]'; 
    public $horizontalAlignSelect = '(//*[contains(@id, "inspector-select-control")])[5]';
    public $horizontalAlignSelectedOption = 'option[value="center"]'; 
    public $verticalAlignSelect = '(//*[contains(@id, "inspector-select-control")])[6]';
    public $verticalAlignSelectedOption = 'option[value="center"]'; 
    public $innerWidthInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Inner Width"]';
    public $zIndexInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="z-index"]';

    /**
     * Background
     */
    public $backgroundSettingBtn = '//button[text()="Background"]';
    public $backgroundTypeSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $backgroundTypeSelectedColorOption = 'option[value="color"]';
    public $backgroundTypeSelectedColorOptionNone = 'option[value="none"]';
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
    public $repeatSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $repeatSelectedOption = 'option[value="repeat"]';
    public $sizeSelect = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $sizeSelectedOption = 'option[value="contain"]';
    public $attachmentSelect = '(//*[contains(@id, "inspector-select-control")])[5]';
    public $attachmentSelectedOption = 'option[value="scroll"]';
    public $overlayTypeSelect = '(//*[contains(@id, "inspector-select-control")])[6]';
    public $overlayTypeSelectedOption = 'option[value="color"]';
    public $overlayTypeSelectedColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';

    public $opacityResetBtn = '//*[text()="Reset"]';

    /**
     * Spacing Style
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $desktopView3 = '(//button[contains(@id, "desktop")])[3]';
    public $mobileView3 = '(//button[contains(@id, "mobile")])[3]';
    public $tabletView3= '(//button[contains(@id, "tablet")])[3]';

    public $paddingTop = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $paddingBottom = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $paddingLeft = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $paddingRight = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]';
                   
    public $marginTop = '//*[contains(@id, "inspector-input-control") and @aria-label="Top Margin"]';
    public $marginBottom = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom Margin"]';

    public $resetPaddingTop = '(//*[text() = "Reset"])[1]';
    public $resetPaddingBottom = '(//*[text() = "Reset"])[2]';
    public $resetPaddingLeft = '(//*[text() = "Reset"])[3]';
    public $resetPaddingRight = '(//*[text() = "Reset"])[4]';
    public $resetMarginTop = '(//*[text() = "Reset"])[5]';
    public $resetMarginBottom = '(//*[text() = "Reset"])[6]';

    /**
     * Border style
     */
    public $borderStyleBtn = '//button[text()="Border"]';
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
     * Layout style
     */
    public $contentWidthInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Width(%)"]';
    public $fChildBlock = '.responsive-block-editor-addons-advanced-column > div > div > div';
   
    /**
     * Child Background
     */
    public $fChildColumnWrap = '.responsive-block-editor-addons-advanced-column > div > div > div >div ';
   
    /**
    * Block Options
    */
    public $changeBlockAlignmentBtn = '(//button[@aria-label="Align"])[1]'; 
    public $changeTextAlignmentBtn = '(//button[@aria-label="Align"])[2]'; 
    public $wideWidthBtn = '//*[@id="editor"]/div[2]/div/div/div/div/button[1]';
    public $fullWidthBtn = '//*[@id="editor"]/div[2]/div/div/div/div/button[2]';
    public $alignTextRightBtn = '//*[@id="editor"]/div[2]/div/div/div/div/button[3]';
    public $alignFullEle = 'div[class="responsive-block-editor-addons-advanced-column alignfull"]';
    public $alignWideEle = 'div[class="responsive-block-editor-addons-advanced-column alignwide"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a advanced column block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'advanced columns');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->click($this->childColumn1);
        $I->click($this->childColumnParagraph1);
        $I->fillField($this->childColumnParagraph1, $this->sampleText);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Remove the advanced column block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->childColumn1);
        $I->click($this->selectColumnBlockBtn);
        $I->click($this->selectAdvancedColumnsBlockBtn);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);       
    }

    /**
     * This function is to select advance column block .
     */
    public function _selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj)
    {
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click($this->childColumn1);
        $I->click($this->selectColumnBlockBtn);
        $I->click($this->selectAdvancedColumnsBlockBtn);
    }

    /**
     * This function is to select advance column Child block .
     */
    public function _selectAdvanceColumnsChildBlock($I, $commonFunctionsPageObj)
    {
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click($this->childColumn1);
        $I->click($this->selectColumnBlockBtn);
    }

    /**
     * This test is to check general settings of advanced column block.
     */
    public function AdvancedColumnsGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the advanced column block in the frontend.');        
        $I->seeElement($this->fAdvancedColumn);

        $I->amGoingTo('Change general settings of advanced column.');
        $I->resizeWindow(1280, 950);  
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
        $I->click($this->generalSettingsBtn); 
        $I->click($this->columnsInputField);
        $commonFunctionsPageObj->field = $this->columnsInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );  
        $defaultGap = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->defaultGapSelect))->
            findElement( WebDriverBy::cssSelector($this->defaultGapSelectedOption) )->click();
        });   
        $stackOn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->stackOnSelect))->
            findElement( WebDriverBy::cssSelector($this->stackOnSelectedOption) )->click();
        });  
        $containerWidth = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->containerWidthSelect))->
            findElement( WebDriverBy::cssSelector($this->containerWidthSelectedOption) )->click();
        });
        $I->click($this->innerWidthInputField);
        $commonFunctionsPageObj->field = $this->innerWidthInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '700' );
        $heightSelect = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->heightSelect))->
            findElement( WebDriverBy::cssSelector($this->heightSelectedOption) )->click();
        });  
        $horizontalAlign = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->horizontalAlignSelect))->
            findElement( WebDriverBy::cssSelector($this->horizontalAlignSelectedOption) )->click();
        });  
        $verticalAlign = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->verticalAlignSelect))->
            findElement( WebDriverBy::cssSelector($this->verticalAlignSelectedOption) )->click();
        });  
        $I->click($this->zIndexInputField);
        $commonFunctionsPageObj->field = $this->zIndexInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '100' );
        $I->click($this->childColumn2);
        $I->click($this->childColumnParagraph2);
        $I->fillField($this->childColumnParagraph2, $this->sampleText);
        $I->click($this->childColumn3);
        $I->click($this->childColumnParagraph3);
        $I->fillField($this->childColumnParagraph3, $this->sampleText);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the general settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fColumnOuterWrap;
        $commonFunctionsPageObj->prop = 'z-index';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100');
        $commonFunctionsPageObj->field = $this->fSingleColumn;           
        $commonFunctionsPageObj->prop = 'align-items';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'center'); 
        $commonFunctionsPageObj->prop = 'min-height';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '375.6px');
        $commonFunctionsPageObj->field = $this->fColumnsContainer;           
        $commonFunctionsPageObj->prop = 'max-width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '700px'); 
        $I->wait(2);
        $I->resizeWindow(375, 812);  
        $commonFunctionsPageObj->prop = 'display';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'block'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);  
    }

    /**
     * This test is to check background settings of advanced column block
     */
    public function AdvancedColumnsBackgroundSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
       $I->amGoingTo('Change background settings of advanced column.');
       $I->resizeWindow(1280, 950);  
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
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

       $I->amGoingTo('Check advance block background in the frontend');
       $commonFunctionsPageObj->field = $this->fColumnWrap;
       $commonFunctionsPageObj->prop = 'background-color';
       $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.94)'); 

       $I->amGoingTo('Reset background color');
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $I->click($this->backgroundSettingBtn);
       $I->click($this->resetColorBtn);
       $I->click($this->resetOpacityBtn);
       $sectionBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
        findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOptionNone) )->click();
      });
       $I->wait(1);
       $commonFunctionsPageObj->publishAndViewPage($I);

       $I->amGoingTo('Check advance heading block background in the frontend');
       $commonFunctionsPageObj->field = $this->fColumnWrap;
       $commonFunctionsPageObj->prop = 'background-color';
       $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 0, 0, 0)'); 

       $I->amGoingTo('Change background image of the advance heading block');
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $this->_changeBackgroundImage($I, $commonFunctionsPageObj); 
       $commonFunctionsPageObj->field = $this->fColumnOuterWrap;
      $this->_checkBackgroundImageProperty($I, $commonFunctionsPageObj);

       $I->amGoingTo('Remove background image of section.');                
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $I->click($this->backgroundSettingBtn); 
       $I->click($this->removeImageBtn);
       $sectionBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
        findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOptionNone) )->click();
      });
       $I->wait(1);
       $commonFunctionsPageObj->publishAndViewPage($I);
       $commonFunctionsPageObj->field = $this->fColumnOuterWrap;
       $commonFunctionsPageObj->prop = 'background';
       $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'); 
    }  

    /**
     * This function changes background image
     */
    public function _changeBackgroundImage($I, $commonFunctionsPageObj){
        $I->click($this->backgroundSettingBtn);
       $I->wait(1);
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
       $size = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->sizeSelect))->
           findElement( WebDriverBy::cssSelector($this->sizeSelectedOption) )->click();
       });
       $attachment = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
        return $webdriver->findElement(WebDriverBy::xpath($this->attachmentSelect))->
        findElement( WebDriverBy::cssSelector($this->attachmentSelectedOption) )->click();
       });
       $I->wait(1);
       $overlayType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->overlayTypeSelect))->
           findElement( WebDriverBy::cssSelector($this->overlayTypeSelectedOption) )->click();
       });
       $I->wait(1);
       $I->scrollTo($this->overlayTypeSelectedColor);
       $I->click($this->overlayTypeSelectedColor);
       $commonFunctionsPageObj->publishAndViewPage($I); 
    }

    /**
     * This function checks background image properties in the front end
     */
    public function _checkBackgroundImageProperty($I, $commonFunctionsPageObj)
    {
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100% 0%, 100% 0%'); 
        $commonFunctionsPageObj->prop = 'background-attachment';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'scroll, scroll'); 
        $commonFunctionsPageObj->prop = 'background-repeat';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'repeat, repeat'); 
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'contain, contain'); 
    }

    /**
     * This test is to check spacing style setting of advanced column block
     */
    public function AdvancedColumnsSpacingStyleSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
       $I->amGoingTo('Change spacings of advanced column.');
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $I->click('Style');
       $I->click($this->spacingStyleBtn);
       $I->wait(1);

       $I->amGoingTo('Change the padding and margin for desktop view');
       $I->click($commonFunctionsPageObj->desktopView);
       $desktopArr = array('13px', '15px', '15px', '15px', '10px', '12px');
       $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr, 'desktop');

       $I->amGoingTo('Check padding and margin in the frontend for desktop view.');
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);
       $I->resizeWindow(375, 812);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);
       $I->wait(1);
       $I->resizeWindow(965, 1024);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);
       $I->wait(1);
       $I->resizeWindow(1280, 950);
     
       $I->amGoingTo('Change the padding and margin for tablet view');
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $I->click('Style');
       $I->click($this->spacingStyleBtn);
       $I->wait(1);
       $I->click($commonFunctionsPageObj->tabletView);
       $tabletArr = array('10px', '12px', '15px', '10px', '11px', '14px');
       $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr, 'tablet');

       $I->amGoingTo('Check padding and margin in the frontend for tablet view.');
       $I->resizeWindow(965, 1024);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr);
       $I->wait(1);
       $I->resizeWindow(375, 812);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr);
       $I->wait(1);
       $I->resizeWindow(1280, 950);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);

       $I->amGoingTo('Change the padding and margin for mobile view');
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $I->click('Style');
       $I->click($this->spacingStyleBtn);
       $I->wait(1);
       $I->click($commonFunctionsPageObj->mobileView);
       $mobileArr = array('5px', '2px', '7px', '1px', '9px', '5px');
       $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $mobileArr, 'mobile');

       $I->amGoingTo('Check padding and margin in the frontend for mobile view.');
       $I->resizeWindow(965, 1024);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $tabletArr);
       $I->wait(1);
       $I->resizeWindow(375, 812);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $mobileArr);
       $I->wait(1);
       $I->resizeWindow(1280, 950);
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);

       $I->amGoingTo('Reset the padding and margin for desktop');
       $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
       $I->click('Style');
       $I->click($this->spacingStyleBtn);
       $I->wait(1);
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
       $I->wait(1);
       $commonFunctionsPageObj->publishAndViewPage($I);
       $desktopArr = array('10px', '0px', '0px', '0px', '5px', '5px');
       $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopArr);
    }

     /**
     * To change and check the spacing in different device modes
     */
    public function _changePaddingAndMargin($I, $commonFunctionsPageObj, $arr, $view){ 
        $view1 = $commonFunctionsPageObj->desktopView;
        $view2 = $this->desktopView2;
        $view3 = $this->desktopView3;
        if($view === 'mobile'){
            $view1 = $commonFunctionsPageObj->mobileView;
            $view2 = $this->mobileView2;
            $view3 = $this->mobileView3;
        } else if($view === 'tablet'){
            $view1 = $commonFunctionsPageObj->tabletView;
            $view2 = $this->tabletView2;
            $view3 = $this->tabletView3;
        }
        $I->wait(1);
        $I->click($view1);
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
        $I->click($view2);     
        $I->scrollTo($this->marginTop, 20);
        $I->wait(1);
        $I->click($this->marginTop);
        $commonFunctionsPageObj->field = $this->marginTop;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[4] );
        $I->click($view3);     
        $I->scrollTo($this->marginBottom, 20);
        $I->wait(1);
        $I->click($this->marginBottom);
        $commonFunctionsPageObj->field = $this->marginBottom;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[5] );
        $commonFunctionsPageObj->publishAndViewPage($I);
    }
 
     /**
      * To check padding and margin in the front end.
      */
     public function _checkPaddingAndMargin($I, $commonFunctionsPageObj, $arr){
         $commonFunctionsPageObj->field = $this->fColumnWrap;
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
    }

    /**
     * This test is to check border style setting of advanced column block
     */
    public function AdvancedColumnsBorderStyleSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change border of advanced column.');
        $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
        $I->click('Style');
        $I->click($this->borderStyleBtn);
        $I->wait(1);

        $I->amGoingTo("Change advanced column's border style to dashed");
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
        $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
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
        $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
        $I->click('Style');
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
        $commonFunctionsPageObj->field = $this->fColumnWrap;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
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
            return $webdriver->findElement(WebDriverBy::cssSelector($this->fColumnWrap));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

    /**
     * This function checks Layout setting of Advanced heading child element
     */
    public function AdvancedColumnsChildLayoutSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change border of advanced column.');
        $this->_selectAdvanceColumnsChildBlock($I, $commonFunctionsPageObj);
        $I->click('Layout');
        $I->click($this->contentWidthInputField);
        $commonFunctionsPageObj->field = $this->contentWidthInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fChildBlock;
        $commonFunctionsPageObj->prop = 'width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '192.712px');  
    }

     /**
     * This Test checks background setting of Advanced heading child element
     */
    public function AdvancedColumnsChildBackgroundSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo("Change background settings of advanced column's child.");
        $I->resizeWindow(1280, 950);  
        $this->_selectAdvanceColumnsChildBlock($I, $commonFunctionsPageObj);

        $I->amGoingTo("Change background settings of advanced column's child.");
        $I->resizeWindow(1280, 950); 
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
 
        $I->amGoingTo('Check child block background in the frontend');
        $commonFunctionsPageObj->field = $this->fChildColumnWrap;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.94)'); 
 
        $I->amGoingTo('Reset background color');
        $this->_selectAdvanceColumnsChildBlock($I, $commonFunctionsPageObj);
        $I->click($this->backgroundSettingBtn);
        $I->click($this->resetColorBtn);
        $I->click($this->resetOpacityBtn);
        $sectionBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
         return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
         findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOptionNone) )->click();
       });
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
 
        $I->amGoingTo('Check child block background after reset in the frontend');
        $commonFunctionsPageObj->field = $this->fChildColumnWrap;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 0, 0, 0)'); 
 
        $I->amGoingTo('Change background image of the advance heading child block');
        $this->_selectAdvanceColumnsChildBlock($I, $commonFunctionsPageObj);
        $this->_changeBackgroundImage($I, $commonFunctionsPageObj); 
        $commonFunctionsPageObj->field = $this->fChildColumnWrap;
       $this->_checkBackgroundImageProperty($I, $commonFunctionsPageObj);
 
        $I->amGoingTo('Remove background image of section.');                
        $this->_selectAdvanceColumnsChildBlock($I, $commonFunctionsPageObj);
        $I->click($this->backgroundSettingBtn); 
        $I->click($this->removeImageBtn);
        $sectionBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
         return $webdriver->findElement(WebDriverBy::xpath($this->backgroundTypeSelect))->
         findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectedColorOptionNone) )->click();
       });
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fChildColumnWrap;
        $commonFunctionsPageObj->prop = 'background';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'); 
    } 

    /**
     * This Test checks the parent:Advanced Columns block options
     */
    public function AdvanceColumnParentBlockOptions(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the alignment of the block to align full and text to align right.');
        $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->changeBlockAlignmentBtn);
        $I->wait(1);
        $I->click($this->fullWidthBtn);
        $I->wait(1);
        $I->click($this->changeTextAlignmentBtn);
        $I->wait(1);
        $I->click($this->alignTextRightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the frontend for block option settings');
        $I->seeElement($this->alignFullEle);
        $commonFunctionsPageObj->field = $this->fColumnWrap;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'right'); 

        $I->amGoingTo('Reset block alignment and text alignment');
        $this->_selectAdvanceColumnsParentBlock($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->changeBlockAlignmentBtn);
        $I->wait(1);
        $I->click($this->fullWidthBtn);
        $I->wait(1);
        $I->click($this->changeTextAlignmentBtn);
        $I->wait(1);
        $I->click($this->alignTextRightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->alignFullEle); 
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'left'); 
    }
}
