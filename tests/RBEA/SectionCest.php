<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class SectionCest
{

    public $sectionBlock = 'div[data-title="Section"]'; 
    public $fSection = '.responsive-block-editor-addons-block-section'; 
    public $sectionParagraph = '//*[@data-title="Paragraph"]';
    public $selectSectionBtn = '//button[@aria-label="Select Section"]';
    public $sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    /**
     * General settings
     */
    public $generalSettingBtn = '//button[text()="General"]';
    public $widthInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Width"]';
    public $zIndexInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="z-index"]';
    public $resetZIndexBtn = '//button[text()="Reset"]';

    /**
     * Background Settings
     */
    public $backgroundSettingBtn = '//button[text()="Background"]';
    public $backgroundTypeSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $backgroundTypeSelectedColorOption = 'option[value="color"]';
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
    public $imagePositionMobileSelectedOption = 'option[value="center center"]';
    public $attachmentSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $attachmentSelectedOption = 'option[value="scroll"]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $repeatSelect = '(//*[contains(@id, "inspector-select-control")])[4]';
    public $repeatSelectedOption = 'option[value="repeat"]';
    public $sizeSelect = '(//*[contains(@id, "inspector-select-control")])[5]';
    public $sizeSelectedOption = 'option[value="contain"]';
    public $sizeSelectedTabletOption = 'option[value="cover"]';
    public $overlayTypeSelect = '(//*[contains(@id, "inspector-select-control")])[6]';
    public $overlayTypeSelectedOption = 'option[value="gradient"]';
    public $location1 = '//*[contains(@id, "inspector-input-control") and @aria-label="Location 1"]';
    public $location2 = '//*[contains(@id, "inspector-input-control") and @aria-label="Location 2"]';
    public $color1Gradient = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $color2Gradient = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $angleGradient = '//*[contains(@id, "inspector-input-control") and @aria-label="Angle"]';

    public $location1ResetBtn = '(//*[text()="Reset"])[1]';
    public $location2ResetBtn = '(//*[text()="Reset"])[2]';
    public $anlgeResetBtn = '(//*[text()="Reset"])[3]';
    public $opacityResetBtn = '(//*[text()="Reset"])[4]';
    public $color1ResetBtn = '(//*[text()="Clear"])[1]';
    public $color2ResetBtn = '(//*[text()="Clear"])[2]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a section block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'section');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $I->wait(1);
        $I->click($this->sectionBlock);
        $I->click($this->sectionParagraph);
        $I->fillField( $this->sectionParagraph, $this->sampleText);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->amGoingTo('Remove the blockquote block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->sectionBlock);
        $I->click($this->selectSectionBtn);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    // This test is to check the general setting style.
    public function SectionGeneralSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the section block in the frontend.');        
        $I->seeElement($this->fSection);

        $I->amGoingTo('Change general settings of section block.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->generalSettingBtn);
        $I->wait(2);
        $I->click($this->widthInputField);
        $commonFunctionsPageObj->field = $this->widthInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '620' );
        $I->wait(2);
        $I->click($this->zIndexInputField);
        $commonFunctionsPageObj->field = $this->zIndexInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '100' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the width and z-index of the block in the frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'max-width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '620px');  
        $commonFunctionsPageObj->prop = 'z-index';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100'); 

        $I->amGoingTo('Reset z-index of section block');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock); 
        $I->click($this->selectSectionBtn);               
        $I->wait(1);
        $I->click($this->generalSettingBtn);
        $I->click($this->resetZIndexBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the z-index of the block after reset in the frontend');
        $commonFunctionsPageObj->prop = 'z-index';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '1'); 
    }

    // This test is to check the background setting style.
    public function SectionBackgroundSettingsTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change background settings of section block.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
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

        $I->amGoingTo('Check section block background in the frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.94)'); 

        $I->amGoingTo('Reset background color');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->click($this->backgroundSettingBtn);
        $I->click($this->resetColorBtn);
        $I->click($this->resetOpacityBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check section block background in the frontend');
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(255, 255, 255, 0.2)'); 

        $I->amGoingTo('Change background image of the blockquote');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->click($this->backgroundSettingBtn);
        $I->wait(2);

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
        
        $I->amGoingTo('Change the attributes of the gradient image.');
        $imagePosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->imagePositionSelect))->
            findElement( WebDriverBy::cssSelector($this->imagePositionSelectedOption) )->click();
        });
        $I->click($commonFunctionsPageObj->mobileView);
        $imagePosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->imagePositionSelect))->
            findElement( WebDriverBy::cssSelector($this->imagePositionMobileSelectedOption) )->click();
        });
        $I->wait(1);
        $attachment = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->attachmentSelect))->
            findElement( WebDriverBy::cssSelector($this->attachmentSelectedOption) )->click();
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
        $I->click($this->tabletView2);
        $size = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->sizeSelect))->
            findElement( WebDriverBy::cssSelector($this->sizeSelectedTabletOption) )->click();
        });
        $I->wait(1);
        $overlayType = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->overlayTypeSelect))->
            findElement( WebDriverBy::cssSelector($this->overlayTypeSelectedOption) )->click();
        });
        $I->wait(1);
        $I->click($this->color1Gradient);
        $I->click($this->color2Gradient);
        $commonFunctionsPageObj->field = $this->location1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $commonFunctionsPageObj->field = $this->location2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '99' );
        $I->click($this->backgroundOpacity);
        $commonFunctionsPageObj->field = $this->backgroundOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $commonFunctionsPageObj->field = $this->angleGradient;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '127' );
        $commonFunctionsPageObj->publishAndViewPage($I);  
        $I->wait(2);
        $I->seeElement($this->frontEndBackgroundImg); 
        $commonFunctionsPageObj->field = $this->fSection;
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '100% 0%, 100% 0%'); 
        $commonFunctionsPageObj->prop = 'background-attachment';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'scroll, scroll'); 
        $commonFunctionsPageObj->prop = 'background-repeat';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'repeat, repeat'); 
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'contain, contain');  
        
        $I->amGoingTo('Check background position for mobile view.');
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '50% 50%, 50% 50%'); 
        $I->wait(1);

        $I->amGoingTo('Check background position for tablet view.');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'cover, cover'); 
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        
        $I->amGoingTo('Reset background of section.');                
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->backgroundSettingBtn);
        $I->wait(1);
        $I->click($this->location1ResetBtn);
        $I->click($this->location2ResetBtn);
        $I->click($this->color1ResetBtn);
        $I->click($this->color2ResetBtn);
        $I->click($this->anlgeResetBtn);
        $I->click($this->opacityResetBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Remove background image of section.');                
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click( $this->sectionBlock);        
        $I->wait(1);
        $I->click($this->selectSectionBtn);
        $I->wait(1);

        $I->click($this->backgroundSettingBtn); 
        $I->click($this->removeImageBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }
}
