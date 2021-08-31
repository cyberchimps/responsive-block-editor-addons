<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class BlockQuoteCest
{

    /**
     * Common variables
     */
    public $field = '';
    public $prop = '';

    /**
     * Content tab variables.
     */
    public $sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    public $blockQuoteText = 'div[class="responsive-block-editor-addons-block-blockquote-item"] > span';
    public $blockQuoteBlock = 'div[data-title="Blockquote"]';   
    public $blockQuote = '.wp-block-responsive-block-editor-addons-blockquote'; 
    public $blockQuoteQuotes = 'div[class="responsive-block-editor-addons-block-blockquote-quote"]';
    public $blockQuoteQuotesIcon = 'div[class="responsive-block-editor-addons-block-blockquote-quote"] > svg';
    public $blockQuoteQuotesIconPath = 'div[class="responsive-block-editor-addons-block-blockquote-quote"] > svg > path';
    public $generalSettingBtn = '//button[text()="General"]';
    public $quatationMarkSettingBtn = '//button[text()="Quotation Mark"] ';
    public $blockQuoteAlignmentSelect = '//*[contains(@id, "inspector-select-control")]';
    public $blockQuoteAlignmentCenter = 'option[value="center"]';
    public $showQuotesCheckbox = '//*[contains(@id, "inspector-toggle-control")]';
    public $quoteSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Size"]';
    public $quoteColorPicker = '//*[@class="components-circular-option-picker__swatches"]//div[2]//button';
    public $quoteLeft = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Position"]';
    public $quoteTop = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Position"]';
    public $quoteOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $showQuote = '//input[@class="components-form-toggle__input" and @checked]';
    public $quoteIconSelectBtn = '//*[@class="components-panel__body is-opened"]//div[2]';
    public $quoteIconSelected = '//*[@class="rfipicons__selector"]//span[6]';
    public $quoteIconPath = 'path("M 21.1 6.8 V 43.2 H 0 V 22.1 L 21.1 6.8 Z M 50 6.8 V 43.2 H 28.9 V 22.1 L 50 6.8 Z")';
    public $quoteColorClearBtn = '.components-circular-option-picker__clear';
    public $horizontalPositionResetBtn = '(//button[text()="Reset"])[1]';
    public $verticalPositionResetBtn = '(//button[text()="Reset"])[2]';
    public $opacityResetBtn = '(//button[text()="Reset"])[3]';

    /**
     * Style tab variables.
     * 1. Background style
     */
    public $backgroundStyleBtn = '//button[text()="Background"]';
    public $backgroungTypeSelect = '//*[contains(@id, "inspector-select-control")]';
    public $backgroundTypeSelectColor = 'option[value="color"]';
    public $backgroundTypeSelectedColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $backgroundTypeSelectImage = 'option[value="image"]';
    public $selectBackgroundImageBtn = '//*[text()="Select Background Image"]';
    public $uploadFilesBtn = '#menu-item-upload';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';
    public $imageOpacityInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $frontEndBackgroungImg = '//*[@class="responsive-block-editor-addons-section-background-image"]';
    
    public $resetColorBtn = '*//button[text()="Clear"]';
    public $removeImageBtn = '*//button[text()="Remove Image"]';
    public $resetOpacityBtn = '*//button[text()="Reset"]';
    public $backgroundTypeSelectNone = 'option[value="none"]';

    /**
     * 2. Border style
     */
    public $borderStyleBtn = '//button[text()="Border"] ';
    public $borderTypeSelector = '//*[contains(@id, "inspector-select-control")]';
    public $borderTypeSelectOption = 'option[value="dashed"]';
    public $borderTypeSelectOptionNone = 'option[value="none"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadious = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $borderColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $resetBorderWidth = '(//button[text() = "Reset"])[1]';
    public $resetBorderRadius = '(//button[text() = "Reset"])[2]';
    public $clearBorderColor = '//*[text() = "Clear"]';

    /**
     * 3. box shadow
     */
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
     * 4. Spacing
     */
    public $spacingStyleBtn = '//*[text()="Spacing"]';
    public $textSpacingBtn = '//*[text()="Text Spacing"]';
    public $blockSpacingBtn = '//*[text()="Block Spacing"]';
    public $topSpacing = '(//*[contains(@id, "inspector-input-control")])[1]';
    public $bottomSpacing = '(//*[contains(@id, "inspector-input-control")])[2]';
    public $leftSpacing = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $rightSpacing = '(//*[contains(@id, "inspector-input-control")])[4]';

    public $desktopView = '//button[contains(@id, "desktop")]';
    public $tabletView = '//button[contains(@id, "tablet")]';
    public $mobileView = '//button[contains(@id, "mobile")]';
    public $topPaddingResetBtn = '(//button[text()="Reset"])[1]';
    public $bottomPaddingResetBtn = '(//button[text()="Reset"])[2]';
    public $leftPaddingResetBtn = '(//button[text()="Reset"])[3]';
    public $rightPaddingResetBtn = '(//button[text()="Reset"])[4]';

    public $blockQuoteTextItem = 'div[class="responsive-block-editor-addons-block-blockquote-item"]';

    /**
     * 5. Color Settings
     */
    public $colorStyleBtn = '//*[text()="Color Settings"]';
    public $textColor = '//*[@class="components-circular-option-picker__swatches"]/div[2]/button';
    public $clearTextColor = '//*[text() = "Clear"]';

    /**
     * 6. Typography settings
     */
    public $typographyStyleBtn = '//*[text()="Typography"]';
    public $quoteTypographyBtn = '//*[text()="Quote Typography"]';
    
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    public $blockQuoteTextSpan = 'span[class="responsive-block-editor-addons-block-blockquote-text"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a blockqote block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'blockquote');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->fillField($this->blockQuoteText, $this->sampleText); 
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * Function to open style tab settings.
     */
    public function _openStyleTabSettings($I, $commonFunctionsPageObj ) {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->blockQuoteBlock);
        $I->click('Style');
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->amGoingTo('Remove the blockquote block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->blockQuoteBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Test for RBEA Blockquote General Settings
     */
    public function BlockQuoteGeneralSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check block is shown in frontend.');
        $I->seeElement($this->blockQuote);

        $I->amGoingTo('Change content-general settings for blockquote.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->blockQuoteBlock);
        $I->amGoingTo('Change alignment of blockquote.');
        $I->wait(1);
        $I->click($this->generalSettingBtn);
        $I->wait(1);
        $blockQuoteAlignment = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->blockQuoteAlignmentSelect))->
            findElement( WebDriverBy::cssSelector($this->blockQuoteAlignmentCenter) )->click();
        });
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $align = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuote))->getCSSValue('text-align');
        }); 
        $I->assertEquals('center', $align);
    }

    /**
     * Test for RBEA Blockquote Quatation Mark settings.
     */
    public function BlockQuoteQuotationMarkSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change content-quatation-mark settings for blockquote.');
        $I->resizeWindow(1280, 950);
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->blockQuoteBlock);
        $I->click( $this->quatationMarkSettingBtn );

        $I->amGoingTo('Change quote Icon');
        $I->wait(2);
        $I->click($this->quoteIconSelectBtn);
        $I->wait(2);
        $I->click($this->quoteIconSelected);  
        $I->click($this->quoteIconSelectBtn);          
        $I->wait(2); 
       
        $I->amGoingTo('Change quote size.');
        $sizeElement = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->quoteSizeInputField));
       });
       $sizeElement->sendKeys(WebDriverKeys::BACKSPACE);  
       $sizeElement->sendKeys(WebDriverKeys::BACKSPACE); 
       $sizeElement->sendKeys('40');   
       $I->wait(2); 

       $I->amGoingTo('Change quote color.');   
       $I->click($this->quoteColorPicker);
       $I->wait(2);

       $I->amGoingTo('Change quote left margin.');       
       $I->scrollTo($this->quoteLeft, 20);
        $leftMargin = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->quoteLeft));
        });
       $leftMargin->sendKeys(WebDriverKeys::BACKSPACE);  
       $leftMargin->sendKeys(WebDriverKeys::BACKSPACE); 
       $leftMargin->sendKeys('10');
       $I->wait(2); 

       $I->amGoingTo('Change quote top margin.');
       $I->scrollTo($this->quoteTop, 20);
       $topMargin = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
           return $webdriver->findElement(WebDriverBy::xpath($this->quoteTop));
        });
       $topMargin->sendKeys(WebDriverKeys::BACKSPACE);  
       $topMargin->sendKeys(WebDriverKeys::BACKSPACE); 
       $topMargin->sendKeys('10');  
       $I->wait(2);
      
       $I->amGoingTo('Change quote opacity.');      
       $I->scrollTo($this->quoteOpacity, 20);
       $opacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
          return $webdriver->findElement(WebDriverBy::xpath($this->quoteOpacity));
        });
        $opacity->sendKeys(WebDriverKeys::BACKSPACE);  
        $opacity->sendKeys(WebDriverKeys::BACKSPACE); 
        $opacity->sendKeys(WebDriverKeys::BACKSPACE); 
        $opacity->sendKeys('94');  
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check content-quatation-mark settings for blockquote in frontend.');
        $Iconpath = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuoteQuotesIconPath))->getCSSValue('d');
        }); 
        $I->assertEquals($this->quoteIconPath, $Iconpath);
        $arr = array(
            'height' => '40px',
            'width' => '40px',
            'fill' => 'rgb(16, 101, 156)',
            'left' => '10px',
            'top' => '10px',
            'opacity' => '0.94'
        );
        $this->_checkFrontendQuatationMarkSettings($I, $arr);
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->blockQuoteBlock);

        $I->amGoingTo('Reset the qutation mark settings.');     
        $I->click( $this->quatationMarkSettingBtn );
        $I->wait(2);
        $I->click( $this->quoteColorClearBtn);
        $I->wait(2);
        $I->click( $this->horizontalPositionResetBtn);
        $I->wait(2);
        $I->click( $this->verticalPositionResetBtn);
        $I->wait(2);
        $I->click( $this->opacityResetBtn);  
        $I->wait(2);      
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check reset settings in the frontend.');
        $arr = array(
            'height' => '40px',
            'width' => '40px',
            'fill' => 'rgba(129, 141, 165, 0.32)',
            'left' => '30px',
            'top' => '20px',
            'opacity' => '1'
        );
        $this->_checkFrontendQuatationMarkSettings($I, $arr);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click( $this->blockQuoteBlock);
        $I->amGoingTo('Hide the quotation mark');
        $I->click( $this->quatationMarkSettingBtn );
        $I->wait(2);
        $I->click($this->showQuote);
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->blockQuoteQuotesIcon);
    }

    /**
     * This function checks attribute values in frontend after changing quatation mark settings.
     */
    public function _checkFrontendQuatationMarkSettings( $I, $arr)
    {
        $quote = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuoteQuotes));
        });
        $height = $quote->getCSSValue('height');
        $I->assertEquals($arr['height'], $height);
        $width = $quote->getCSSValue('width');
        $I->assertEquals($arr['width'], $width);
        $left = $quote->getCSSValue('left');
        $I->assertEquals($arr['left'], $left);
        $top = $quote->getCSSValue('top');
        $I->assertEquals($arr['top'], $top);
        $color = $quote->getCSSValue('fill');
        $I->assertEquals($arr['fill'], $color);
        $opacity = $quote->getCSSValue('opacity');
        $I->assertEquals($arr['opacity'], $opacity);
    }

    /**
     * Test for RBEA Blockquote background style settings.
     */
    public function BlockQuoteStyleBackgroundSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change background style settings for blockquote');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->backgroundStyleBtn);
        $I->wait(1);
        $blockQuoteBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroungTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectColor) )->click();
        });
        $I->wait(2);
        $I->click($this->backgroundTypeSelectedColor);
        $I->click($this->quoteOpacity);
        $opacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->quoteOpacity));
          });
          $opacity->sendKeys(WebDriverKeys::BACKSPACE);  
          $opacity->sendKeys(WebDriverKeys::BACKSPACE); 
          $opacity->sendKeys(WebDriverKeys::BACKSPACE); 
          $opacity->sendKeys('94');  
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check background-color of the quote');
        $this->_checkBackgroundColor($I, 'rgba(16, 101, 156, 0.94)');
        $I->wait(2);     
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->wait(2); 
        $I->click($this->backgroundStyleBtn);
        $I->wait(1);  

        $I->amGoingTo('Reset background color');
        $I->click($this->resetColorBtn);
        $I->click($this->resetOpacityBtn);
        $commonFunctionsPageObj->publishAndViewPage($I); 
        $this->_checkBackgroundColor($I, 'rgba(0, 0, 0, 0.2)');
        $I->wait(2);

        $I->amGoingTo('Change background image of the blockquote');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);
        $I->click($this->backgroundStyleBtn);
        $I->wait(2);
        $blockQuoteBackgroundType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->backgroungTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->backgroundTypeSelectImage) )->click();
        });
        $I->wait(2);
        $I->click($this->selectBackgroundImageBtn);
        $I->wait(2);
        $I->click($this->mediaLibraryBtn);
        $I->wait(2);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(2);
        $I->click($this->selectBtn);
        $I->wait(6);
        
        $I->amGoingTo('Change the opacity of the background image.');
        $opacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->imageOpacityInputField));
          });
        $opacity->sendKeys(WebDriverKeys::BACKSPACE);  
        $opacity->sendKeys(WebDriverKeys::BACKSPACE); 
        $opacity->sendKeys(WebDriverKeys::BACKSPACE); 
        $opacity->sendKeys('94');

        $I->amGoingTo('Check for the background image in the frontend');
        $commonFunctionsPageObj->publishAndViewPage($I); 
        $I->wait(2);
        $I->seeElement($this->frontEndBackgroungImg);
        $opacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->frontEndBackgroungImg))->getCSSValue('opacity');
        });
        $I->assertEquals('0.94',$opacity);

        $I->amGoingTo('Reset background of blockquote.');                
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->backgroundStyleBtn);
        $I->wait(2);
        $I->click($this->removeImageBtn);
        $I->wait(2);
        $I->click($this->resetOpacityBtn);
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I); 
        $I->cantSeeElement($this->frontEndBackgroungImg);
    }

    /**
     * This function check background color of quote
     */
    public function _checkBackgroundColor($I, $color){
        $backgroundColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuote))->getCSSValue('background-color');
        });
        $I->assertEquals($color, $backgroundColor);
    }

    /**
     * Test for RBEA Blockquote style border settings.
     */
    public function BlockQuoteStyleBorderSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change blockquote border style to dashed');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->borderStyleBtn);
        $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelector))->
            findElement( WebDriverBy::cssSelector($this->borderTypeSelectOption) )->click();
        });
        $I->wait(2);
        $width = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderWidth));
        });
        $width->sendKeys(WebDriverKeys::BACKSPACE); 
        $width->sendKeys('3'); 
        $I->wait(1); 
        $radious = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderRadious));
        });
        $radious->sendKeys(WebDriverKeys::BACKSPACE); 
        $radious->sendKeys('5'); 
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
            'border-color' => 'rgb(51, 51, 51)',
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
        $left = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowLeft));
        });
        $left->sendKeys(WebDriverKeys::BACKSPACE); 
        $left->sendKeys('5'); 
        $I->wait(1); 

        $I->click($this->boxShadowTop);
        $top = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowTop));
        });
        $top->sendKeys(WebDriverKeys::BACKSPACE); 
        $top->sendKeys('5'); 
        $I->wait(1); 
        $I->click($this->boxShadowBlur);
        $blur = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowBlur));
        });
        $blur->sendKeys(WebDriverKeys::BACKSPACE); 
        $blur->sendKeys(WebDriverKeys::BACKSPACE); 
        $blur->sendKeys('30'); 
        $I->wait(1); ; 

        $I->click($this->boxShadowSpread);
        $spread = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowSpread));
        });
        $spread->sendKeys(WebDriverKeys::BACKSPACE); 
        $spread->sendKeys(WebDriverKeys::BACKSPACE); 
        $spread->sendKeys('25'); 
        $I->wait(1);  
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowPositionSelected) )->click();
        });
        $I->wait(2);

        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check box shadow style in frontend');
        $this->field = $this->blockQuote;
        $this->prop = 'box-shadow';
        $this->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 5px 5px 30px 25px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->borderStyleBtn);
        $I->scrollTo($this->boxShadowResetBtn, 20);
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $this->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 0px 0px 0px 0px');
    }

    /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuote));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

    /**
     * This function checks box shadow style in frontend.
     */
    public function _checkFrontEndStyle($I, $expectedStyle) {
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->field))->getCSSValue($this->prop);
        });
        $I->assertEquals($expectedStyle, $actualStyle);
    }

    /**
     * Test for RBEA Blockquote spacing style settings
     */
    public function BlockQuoteSpacingSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change spacing settings for blockquote');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);         
        $I->click($this->spacingStyleBtn);

        $I->amGoingTo('Change Text Spacing');
        $I->click($this->textSpacingBtn);
        $I->wait(2);
        $I->click($this->desktopView);

        $I->amGoingTo('Change padding of Text');
        $arr = array(
            'topSpacing' => '70',
            'bottomSpacing' => '15',
            'leftSpacing' => '65',
            'rightSpacing' => '10'
        );
        $this->_checkSpacingSettings($I, $arr, $commonFunctionsPageObj, 'desktop', $this->blockQuoteTextItem);

        $I->amGoingTo('change the padding of the text in the mobile view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);         
        $I->click($this->spacingStyleBtn);
        $I->click($this->textSpacingBtn);
        $I->wait(2);
        $I->click($this->mobileView);
        $I->wait(2);
        $arr = array(
            'topSpacing' => '10',
            'bottomSpacing' => '10',
            'leftSpacing' => '20',
            'rightSpacing' => '10'
        );
        $this->_checkSpacingSettings($I, $arr, $commonFunctionsPageObj, 'mobile', $this->blockQuoteTextItem);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('change the padding of the text in the tablet view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);         
        $I->click($this->spacingStyleBtn);
        $I->click($this->textSpacingBtn);
        $I->wait(2);
        $I->click($this->tabletView);
        $I->wait(2);
        $arr = array(
            'topSpacing' => '10',
            'bottomSpacing' => '10',
            'leftSpacing' => '20',
            'rightSpacing' => '10'
        );
        $this->_checkSpacingSettings($I, $arr, $commonFunctionsPageObj, 'tablet', $this->blockQuoteTextItem);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('change the padding of the block in the desktop view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);         
        $I->click($this->spacingStyleBtn);
        $I->click($this->blockSpacingBtn);
        $I->wait(2);
        $I->click($this->desktopView);
        $I->wait(2);
        $arr = array(
            'topSpacing' => '35',
            'bottomSpacing' => '74',
            'leftSpacing' => '50',
            'rightSpacing' => '40'
        );
        $this->_checkSpacingSettings($I, $arr, $commonFunctionsPageObj, 'desktop', $this->blockQuote);

        $I->amGoingTo('change the reset padding of the block in the desktop view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj);         
        $I->click($this->spacingStyleBtn);
        $I->click($this->blockSpacingBtn);
        $I->wait(2);
        $I->click($this->desktopView);
        $I->wait(2);
        $I->click($this->topPaddingResetBtn);
        $I->wait(1);
        $I->click($this->bottomPaddingResetBtn);
        $I->wait(1);
        $I->click($this->leftPaddingResetBtn);
        $I->wait(1);
        $I->click($this->rightPaddingResetBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check reset block spacing in the frontend');
        $this->prop = 'padding-top';
        $this->_checkFrontEndStyle($I,  '10px');
        $this->prop = 'padding-bottom';
        $this->_checkFrontEndStyle($I, '0px');
        $this->prop = 'padding-left';
        $this->_checkFrontEndStyle($I,'0px');
        $this->prop = 'padding-right';
        $this->_checkFrontEndStyle($I, '0px');  

    }

    /**
     * This function checks spacing settings in the frontend.
     */
    public function _checkSpacingSettings($I, $arr, $commonFunctionsPageObj, $resolution, $element) {
        $this->field = $this->topSpacing;
        $I->scrollTo( $this->field, 20);
        $this->_setInputFieldKeys($I, 'xpath', $arr['topSpacing']);
        $this->field = $this->bottomSpacing;
        $I->scrollTo( $this->field, 20);
        $this->_setInputFieldKeys($I, 'xpath', $arr['bottomSpacing']);
        $this->field = $this->leftSpacing;
        $I->scrollTo( $this->field, 20);
        $this->_setInputFieldKeys($I, 'xpath', $arr['leftSpacing']);
        $this->field = $this->rightSpacing;
        $I->scrollTo( $this->field, 20);
        $this->_setInputFieldKeys($I, 'xpath', $arr['rightSpacing']);

        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check text spacing in the frontend');

        if($resolution === 'mobile'){
            $I->resizeWindow(375, 812);
            $I->wait(2);
        } else if($resolution === 'tablet') {
            $I->resizeWindow(768, 1024);
            $I->wait(2);
        }
        $this->field = $element;
        $this->prop = 'padding-top';
        $this->_checkFrontEndStyle($I,  $arr['topSpacing']. 'px');
        $this->prop = 'padding-bottom';
        $this->_checkFrontEndStyle($I, $arr['bottomSpacing']. 'px');
        $this->prop = 'padding-left';
        $this->_checkFrontEndStyle($I, $arr['leftSpacing']. 'px');
        $this->prop = 'padding-right';
        $this->_checkFrontEndStyle($I, $arr['rightSpacing']. 'px');   
    }

    /**
     * This function sets key value to input field 
     */
    public function _setInputFieldKeys( $I, $by, $key ) {
        $I->wait(1);
        if($by === 'xpath'){
            $field= $I->executeInSelenium(function(RemoteWebDriver $webdriver){
                return $webdriver->findElement(WebDriverBy::xpath($this->field));
            });
        } else {
            $field= $I->executeInSelenium(function(RemoteWebDriver $webdriver){
                return $webdriver->findElement(WebDriverBy::cssSelector($this->field));
            });
        }
       
        $field->sendKeys(WebDriverKeys::BACKSPACE);
        $field->sendKeys(WebDriverKeys::BACKSPACE); 
        $field->sendKeys($key); 
        $I->wait(1); 
    }

    /**
     * Test for RBEA Blockquote colour style settings
     */
    public function BlockQuoteColorSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) 
    {
        $I->amGoingTo('Change text color settings for blockquote.');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->colorStyleBtn);
        $I->wait(1);
        $I->click($this->textColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the text color in the frontend.');
        $blockQuote = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuote));
        }); 
        $textColor = $blockQuote->getCSSValue('color');
        $I->assertEquals('rgba(16, 101, 156, 1)', $textColor);

        $I->amGoingTo('Clear text color settings.');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj );
        $I->click($this->colorStyleBtn);
        $I->wait(1); 
        $I->click($this->clearTextColor);  
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the reset text color in the frontend.');
        $blockQuote = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuote));
        }); 
        $textColor = $blockQuote->getCSSValue('color');
        $I->assertEquals('rgba(51, 51, 51, 1)', $textColor);     
    }
    
    /**
     * Test for RBEA Typography style settings
     */
    public function BlockQuoteTypographySettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj) {
        $I->amGoingTo('Change text typography settings for blockquote.');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->quoteTypographyBtn);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($this->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $this->field = $this->fontSizeInputField;
        $this->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->wait(1);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $I->click($this->lineHeightInputField);
        $this->field = $this->lineHeightInputField;
        $this->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the typography settings');
        $this->field = $this->blockQuoteTextSpan;
        $this->prop = 'font-family';
        $this->_checkFrontEndStyle($I, 'Actor');  
        $this->prop = 'font-weight';
        $this->_checkFrontEndStyle($I, '600'); 
        $this->prop = 'line-height';
        $this->_checkFrontEndStyle($I, '50px');
        $this->prop = 'font-size';
        $this->_checkFrontEndStyle($I, '25px');
        
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $this->_checkFrontEndStyle($I, '25px');
        $I->resizeWindow(768, 1024);
        $I->wait(1);
        $this->_checkFrontEndStyle($I, '25px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);
        $I->amGoingTo('Change font-size for mobile view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->quoteTypographyBtn);
        $I->wait(1);
        $I->click($this->mobileView);
        $fontSize = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontSizeInputField));
        });
        $this->field = $this->fontSizeInputField;
        $this->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(375, 812);
        $I->wait(1);

        $I->amGoingTo('Check the frontend for the mobile view typography settings');
        $this->field = $this->blockQuoteTextSpan;
        $this->_checkFrontEndStyle($I, '15px'); 
        $I->resizeWindow(1280, 950); 
        $I->wait(1);

        $I->amGoingTo('Change font-size for tablet view');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->quoteTypographyBtn);
        $I->wait(1);
        $I->click($this->tabletView);
        $this->field = $this->fontSizeInputField;
        $this->_setInputFieldKeys( $I, 'xpath', '15' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(768, 1024);

        $I->amGoingTo('Check the frontend for the tablet view typography settings');
        $this->field = $this->blockQuoteTextSpan;
        $this->_checkFrontEndStyle($I, '15px'); 
        $I->resizeWindow(1280, 950); 
        $I->wait(1); 
        
        $I->amGoingTo('Reset line height');
        $this->_openStyleTabSettings($I, $commonFunctionsPageObj); 
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($this->quoteTypographyBtn);
        $I->wait(1);
        $I->scrollTo($this->resetLineHeightBtn);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check reset line height in the frontend');
        $this->prop = 'line-height';
        $this->field = $this->blockQuoteTextSpan;
        $this->_checkFrontEndStyle($I, '25px');
    }
}
