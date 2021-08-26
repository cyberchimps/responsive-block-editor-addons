<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class BlockQuoteCest
{
    /**
     * Content tab variables.
     */
    public $sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    public $blockQuoteText = 'div[class="responsive-block-editor-addons-block-blockquote-item"] > span';
    public $blockQuoteBlock = 'div[data-title="Blockquote"]';   
    public $blockQuote = '.wp-block-responsive-block-editor-addons-blockquote'; 
    public $blockQuoteQuotes = 'div[class="responsive-block-editor-addons-block-blockquote-quote"]';
    public $blockQuoteQuotesIcon = 'div[class="responsive-block-editor-addons-block-blockquote-quote"] > svg';
    public $generalSettingBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[2]/div[1]/h2/button';
    public $quatationMarkSettingBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[2]/div[2]/h2/button';
    public $blockQuoteAlignmentSelect = '//*[contains(@id, "inspector-select-control")]';
    public $blockQuoteAlignmentCenter = 'option[value="center"]';
    public $showQuotesCheckbox = '//*[contains(@id, "inspector-toggle-control")]';
    public $quoteSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Size"]';
    public $quoteColorPicker = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[2]/div[2]/div[4]/div[1]/div[2]/button';
    public $quoteLeft = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Position"]';
    public $quoteTop = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Position"]';
    public $quoteOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $showQuote = '//input[@class="components-form-toggle__input" and @checked]';

    /**
     * Style tab variables.
     */
    public $backgroundStyleBtn = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div[1]/h2/button';
    public $backgroungTypeSelect = '//*[contains(@id, "inspector-select-control")]';
    public $backgroundTypeSelectColor = 'option[value="color"]';
    public $backgroundTypeSelectedColor = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div[1]/div[2]/div/div[1]/div[2]/button';

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
     * Function to open style tab settings
     */
    public function _openStyleTabSettings($I, $commonFunctionsPageObj ) {
        $I->amGoingTo('Change style settings for blockquote');
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
     * Test for RBEA Blockquote Quatation Mark settings
     */
    public function BlockQuoteQuotationMarkSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change content-quatation-mark settings for blockquote.');
        $I->resizeWindow(1280, 950);
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->blockQuoteBlock);
        $I->click( $this->quatationMarkSettingBtn );

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
        $quote = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuoteQuotes));
        });
        $height = $quote->getCSSValue('height');
        $I->assertEquals('40px', $height);
        $width = $quote->getCSSValue('width');
        $I->assertEquals('40px', $width);
        $left = $quote->getCSSValue('left');
        $I->assertEquals('10px', $left);
        $top = $quote->getCSSValue('top');
        $I->assertEquals('10px', $top);
        $color = $quote->getCSSValue('fill');
        $I->assertEquals('rgb(16, 101, 156)', $color);
        $opacity = $quote->getCSSValue('opacity');
        $I->assertEquals('0.94', $opacity);

        $I->click( $commonFunctionsPageObj->editBlockBtn );
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
     * Test for RBEA Blockquote style settings
     */
    public function BlockQuoteStyleBackgroundSettingTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
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
        $backgroundColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->blockQuote))->getCSSValue('background-color');
        });
        $I->assertEquals('rgba(16, 101, 156, 0.94)', $backgroundColor);
    }
}
