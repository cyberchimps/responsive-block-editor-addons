<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class DividerCest
{
    public $dividerColor = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div';
    public $dividerColorGreen = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div/div/div/fieldset/div/div[1]/div[4]/button';
    public $dividerColorBlack = '//*[@id="editor"]/div[1]/div[1]/div[2]/div[3]/div/div[3]/div/div[2]/div[3]/div/div/div/fieldset/div/div[1]/div[2]/button';
    public $verticalMarginInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Margin"]';
    public $dividerContent = 'div[class="responsive-block-editor-addons-divider-content"]';
    public $mobileViewBtn = '//*[contains(@id, "mobile") and @role="tab" ]';
    public $tabletViewBtn = '//*[contains(@id, "tablet") and @role="tab" ]';
    public $dividerBlock = 'div[data-title="Divider"]';
    public $dividerHeight = '//*[contains(@id, "inspector-input-control") and @aria-label="Divider Height"]';
    public $dividerWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Divider Width"]';
    public $dividerStyleSelect = '//*[contains(@id, "inspector-select-control")]';
    public $dividerStyleDots = "option[value='dots']";
    public $dottedDivider = 'div[class="rgbl-divider__dots"]';
    public $dottedDividerOuterContainer = '.responsive-block-editor-addons-block-divider > div > div > div';
    public $dottedDividerInnerContainer = '.responsive-block-editor-addons-block-divider > div > div >  div > div';
    public $removeBlockToolbarTab = '//button[@aria-label="Options" and @tabindex]';
    public $removeBlockBtn = '//*[@id="editor"]/div[2]/div/div/div/div/div[3]/div/button/span[1]';
    public $divider = 'hr[class="responsive-block-editor-addons-divider_hr"]';
    public function _before(RBEATester $I)
    {
    }

    // Test for RBEA Divider Block.
    public function dividerBlockTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Login as admin.');
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a divider block.');
        $I->resizeWindow(1280, 800);
        $I->amOnPage('/divider-block');
        $commonFunctionsPageObj->addBlock($I);
        $I->fillField($commonFunctionsPageObj->searchBox, 'divider');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);

        $I->amGoingTo('Publish the page.');
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->seeElement($this->divider);

        $I->amGoingTo('Change divider color to green.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);
        $I->click('Style');
        $I->click($this->dividerColor);
        $I->click($this->dividerColorGreen);
       
        $I->amGoingTo('Check the colour is changed or not');
        $color = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector('.block-editor-block-list__block.wp-block.is-selected > div'))->getCSSValue('color');
        });        
        $I->assertEquals('rgba(34, 210, 95, 1)',$color);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $color = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector('.wp-block-responsive-block-editor-addons-divider'))->getCSSValue('color');
        });
        $I->assertEquals('rgba(34, 210, 95, 1)', $color);

        $I->amGoingTo('Revert the color to default');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);
        $I->click('Style');
        $I->click($this->dividerColor);
        $I->click($this->dividerColorBlack);
        $commonFunctionsPageObj->publishAndViewPage($I);       
 
        $I->amGoingTo('Change dividers Margin, style, height and width using Content Tab and publish the page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);
        $I->click('Content');

        $I->amGoingTo('Change Vertical Margin.');
        $I->seeElement($this->verticalMarginInputField);
        $I->click($this->verticalMarginInputField);
        $marginElement = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
             return $webdriver->findElement(WebDriverBy::xpath($this->verticalMarginInputField));
        });
        $marginElement->sendKeys(WebDriverKeys::BACKSPACE);   
        $marginElement->sendKeys(WebDriverKeys::BACKSPACE);       
        $marginElement->sendKeys('37'); 
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $marginTop = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dividerContent))->getCSSValue('margin-top');
        });    
        $I->amGoingTo('Check top margin for divider on desktop.');
        $I->assertEquals( '37px' , $marginTop);

        $I->amGoingTo('Check top margin for divider on tablet: should be unchanged/default.');
        $I->resizeWindow(768, 1024);
        $I->wait(2);
        $marginTop = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dividerContent))->getCSSValue('margin-top');
        });    
        $I->assertEquals( '30px' , $marginTop);  

        $I->amGoingTo('Check top margin for divider on mobile: : should be unchanged/default.');
        $I->resizeWindow(375, 812);
        $I->wait(2);
        $marginTop = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dividerContent))->getCSSValue('margin-top');
        });    
        $I->assertEquals( '30px' , $marginTop);

        $I->amGoingTo('Change Vertical Margin for mobile.');
        $I->resizeWindow(1280, 800);
        $I->wait(3);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);
        $I->click($this->mobileViewBtn);
        $I->click($this->verticalMarginInputField);
        $marginElement = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
             return $webdriver->findElement(WebDriverBy::xpath($this->verticalMarginInputField));
        });
        $marginElement->sendKeys(WebDriverKeys::BACKSPACE);   
        $marginElement->sendKeys(WebDriverKeys::BACKSPACE);       
        $marginElement->sendKeys('50');
        $I->wait(3);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(2);
        $I->resizeWindow(375, 812);
        $I->wait(2);
        $marginTop = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dividerContent))->getCSSValue('margin-top');
        });    
        $I->assertEquals( '50px' , $marginTop);

        $I->amGoingTo('Change Vertical Margin for tablet.');
        $I->resizeWindow(1280, 800);
        $I->wait(3);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);
        $I->click($this->tabletViewBtn);
        $I->click($this->verticalMarginInputField);
        $marginElement = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
             return $webdriver->findElement(WebDriverBy::xpath($this->verticalMarginInputField));
        });
        $marginElement->sendKeys(WebDriverKeys::BACKSPACE);   
        $marginElement->sendKeys(WebDriverKeys::BACKSPACE);       
        $marginElement->sendKeys('50');
        $I->wait(3);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(2);
        $I->resizeWindow(768, 1024);
        $I->wait(3);
        $marginTop = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dividerContent))->getCSSValue('margin-top');
        });    
        $I->assertEquals( '50px' , $marginTop);
        $I->resizeWindow(1280, 800);
        $I->wait(3);

        $I->amGoingTo('Change Height.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);

        $I->seeElement($this->dividerHeight);
        $I->click($this->dividerHeight);
        $heightElement = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
             return $webdriver->findElement(WebDriverBy::xpath($this->dividerHeight));
        });
        $heightElement->sendKeys(WebDriverKeys::BACKSPACE);          
        $heightElement->sendKeys('9'); 

        $I->amGoingTo('Change Width.');
        $I->seeElement($this->dividerWidth);
        $I->click($this->dividerWidth);
        $widthElement = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
             return $webdriver->findElement(WebDriverBy::xpath($this->dividerWidth));
        });
        $widthElement->sendKeys(WebDriverKeys::BACKSPACE);     
        $widthElement->sendKeys(WebDriverKeys::BACKSPACE);       
        $widthElement->sendKeys('10');        
        $dividerStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
                return $webdriver->findElement(WebDriverBy::xpath($this->dividerStyleSelect))->
                findElement( WebDriverBy::cssSelector($this->dividerStyleDots) )->click();
            });            
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Style, height and width of divider block in the frontend.');
        $I->seeElement($this->dottedDivider);
        $width = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dottedDividerOuterContainer))->getCSSValue('width');
        });    
        $I->assertEquals( '114px' , $width);  
        $height = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::cssSelector($this->dottedDividerInnerContainer))->getCSSValue('height');
        });    
        $I->assertEquals('9px',$height);  
        $I->amGoingTo('Remove the divider block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->dividerBlock);
        $I->click($this->removeBlockToolbarTab);
        $I->scrollTo($this->removeBlockBtn,20);
        $I->click($this->removeBlockBtn); 
        $I->wait(3);

        $I->amGoingTo('Check block is removed from frontend.');
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(3);
        $I->dontSeeElement($this->divider);
    }
}
