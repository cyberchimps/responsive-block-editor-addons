<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;
class InfoBlockCest
{
    public $infoBlock = 'div[data-title="Info Block"]';
    public $fInfoBlock = 'div.responsive-block-editor-addons-block-info-block';

    /**
     * Image/Icon Settings
     */
    public $imageIconBtn = '//button[text()="Image/Icon"]';
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[4]';
    public $selectedIconBtn = '//*[@class="rfipicons__selector"]//span[9]';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $iconColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $iconHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[3]';
    public $borderHoverColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[4]';
    public $iconBorderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Border Radius"]';
    public $iconBorderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Border Width"]';
    public $iconBackgroundPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Background Padding"]';
    public $fIcon = '//div[contains(@class, "responsive-block-editor-addons-ifb-imgicon-wrap")]';
    public $fIconSpan = '//span[@class="responsive-block-editor-addons-ifb-icon"]';
    public $fIconSvg = 'div.responsive-block-editor-addons-ifb-imgicon-wrap > div > span > svg';
    public $iconSizeRest = '//button[text()="Reset"]';
    public $iconColorReset = '(//button[text()="Clear"])[1]';
    public $iconHoverColorReset = '(//button[text()="Clear"])[2]';
    public $borderColorReset = '(//button[text()="Clear"])[3]';
    public $borderHoverColorReset = '(//button[text()="Clear"])[4]';

    /**
     * Background Options Settings
     */
    public $backgroundOptionsBtn = '//button[text()="Background Options"]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectBackgroundImageBtn = '//*[text()="Select Background Image"]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';
    public $imageOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Image Opacity"]';
    public $backgroundColorBtn = '//button[text()="Background Color"]';
    public $imgBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $colorOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $sizeSelect = '(//select[contains(@id, "inspector-select-control")])[3]';
    public $selectedSizeOption = 'option[value="contain"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create an Info Block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'info block');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the info block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I); 
    }

    /**
     * Tests the Image/Icon Content settings
     */
    public function InfoBlockSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Icon settings of the Info Block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->selectOption('Select Position', 'Below Title');
        $I->wait(1);
        $I->selectOption('Select Source', 'Icon');
        $I->click($this->selectIconBtn);
        $I->wait(2);
        $I->click($this->selectedIconBtn);
        $I->wait(1);
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '45' );
        $I->click($this->iconColor);
        $I->click($this->iconHoverColor);
        $I->wait(1);
        $I->selectOption('Background Type', 'Outline');
        $I->click($this->borderColor);
        $I->click($this->borderHoverColor);
        $I->wait(1);
        $I->click($this->iconBorderRadius);
        $commonFunctionsPageObj->field = $this->iconBorderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->iconBorderWidth);
        $commonFunctionsPageObj->field = $this->iconBorderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->iconBackgroundPadding);
        $commonFunctionsPageObj->field = $this->iconBackgroundPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Icon settings of the Info Block');
        $I->seeElement($this->fIcon);
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(16, 101, 156)');
        $commonFunctionsPageObj->field = $this->fIconSpan;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px solid rgb(0, 102, 204)');
        $I->wait(1);
        $I->moveMouseOver($this->fIconSpan);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px solid rgb(51, 51, 51)');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51)');

        $I->amGoingTo('Reset the Icon settings of the Info Block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click($this->iconSizeRest);
        $I->click($this->iconColorReset);
        $I->click($this->iconHoverColorReset);
        $I->click($this->borderColorReset);
        $I->click($this->borderHoverColorReset);
        $I->selectOption('Background Type', 'None');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Icon settings of the Info Block after reset.');
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(58, 58, 58)');
        $I->wait(1);
        $I->moveMouseOver($this->fIconSpan);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(58, 58, 58)');
    }
    
    /**
     * Tests the background options settings
     */
    public function InfoBlockBackgroundOptionsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Icon settings of the Info Block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->infoBlock);
        $I->click($this->imageIconBtn);
        $I->wait(1);
        $I->click($this->backgroundOptionsBtn);
        $I->wait(1);
        $I->click($this->selectBackgroundImageBtn);
        $I->wait(1);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->selectBtn);
        $I->wait(1);
        $I->selectOption('Image Position', 'Bottom Right');
        $I->selectOption('Repeat', 'Repeat-x');
        $I->wait(1);
        $I->selectOption('Attachment', 'Scroll');
        $I->wait(1);
        $I->click($this->imageOpacity);
        $commonFunctionsPageObj->field = $this->imageOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->wait(1);
        $I->click($this->backgroundColorBtn);
        $I->wait(1);
        $I->click($this->imgBgColor);
        $I->click($this->colorOpacity);
        $commonFunctionsPageObj->field = $this->colorOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the background settings');
        $commonFunctionsPageObj->field = $this->fInfoBlock;
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 0.3)');
    }
}
