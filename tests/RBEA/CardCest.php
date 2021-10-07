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

    /**
     * Button Settings
     */
    public $buttonSettingsStyleBtn = '//button[text()="Button Settings"]';
 
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
     * Tests the Border settings 
     */
    public function CardBorderSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        // $I->amGoingTo('Change the border settings of the card block.');
        // $I->click($commonFunctionsPageObj->editBlockBtn);
        // $I->wait(1);
        // $I->click($this->cardBlock);
        // $I->wait(1);
        // $I->click($this->buttonSettingsStyleBtn);
    }
}
