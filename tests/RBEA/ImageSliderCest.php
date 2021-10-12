<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class ImageSliderCest
{
    public $imgSliderBlock = 'div[data-title="Image Slider"]';
    public $mediaLibraryBtn = '//button[text()="Media Library"]';
    public $mediaLibraryTab = '#menu-item-browse';
    public $imgAttchment1 = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $imgAttchment2 = '//*[contains(@id, "__attachments-view")]/li[2]';
    public $selectBtn = '//*[text()="Select"]';
    public $createNewGalleryBtn = '//button[text()="Create a new gallery"]';
    public $insertGalleryBtn = '//button[text()="Insert gallery"]';
    public $blockInSearch = 'div[class="block-editor-block-types-list__list-item"] > button';
    public $fImageSliderBlock = 'div.responsive-block-editor-addons-block-image-slider';

    /**
     * Image Carousel
     */
    public $imageCarouselStyleBtn = '//button[text()="Image Carousel"]';
    public $imgExtraLargeSize = '//button[text()="Extra Large"]';
    public $imgLargeSize = '//button[text()="Large"]';
    public $customWidthBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $widthInPixelInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Width in pixels"]';
    public $heightInPixelsInput = '//input[@class="block-height-control__input"]';
    public $smallImagesBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $thumbnailsBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $lightBoxBtn = '(//input[contains(@id, "inspector-toggle-control")])[4]';
    public $fCarouselContainer = 'div.responsive-block-editor-addons-block-image-slider > div > div';
    public $fImgLightBox = '//div[@class="responsive-block-editor-addons-lightbox"]';
    public $fThumbnailBox = '//div[@class = "responsive-block-editor-addons--item-thumbnail"]';
    public $fSliderImg = 'div.responsive-block-editor-addons-gallery--item.is-selected > figure > img';
    public $closeLightBoxBtn = '//button[@class="responsive-block-editor-addons-lightbox__close"]';
    public $desktopView = '(//button[@role="tab"])[1]';
    public $mobileView = '(//button[@role="tab"])[2]';
    public $gutterInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Gutter"]';
    public $mobileGutterInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Mobile Gutter"]';
    public $radiusInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Radius"]';
    public $fGalleryItem = 'div.responsive-block-editor-addons-gallery--item:nth-child(1)';

    /**
     * Slider Settings
     */
    public $sliderSettingsBtn = '//button[text()="Slider settings"]';
    public $autoPlayBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $pauseOnHoverBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';        
    public $draggableBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $freeScrollBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $arrowNavigationBtn = '(//input[contains(@id, "inspector-toggle-control")])[4]';
    public $dotNavigationBtn = '(//input[contains(@id, "inspector-toggle-control")])[5]';
    public $alignCellsBtn = '(//input[contains(@id, "inspector-toggle-control")])[7]';
    public $fSlider = 'div.flickity-slider';
    public $fSelectedSlider = '//div[@class="responsive-block-editor-addons-gallery--item is-selected"]';
    public $fPreviousArrow = '//button[@class="flickity-button flickity-prev-next-button previous"]';
    public $fPreviousArrowSvgIcon = 'button.flickity-button.flickity-prev-next-button.previous > svg';
    public $fSliderViewport = 'div.flickity-viewport';
    public $fPageDots = '//ol[@class="flickity-page-dots"]';
    
    /**
     * Arrow Settings
     */
    public $arrowStyleBtn = '//*[text()="Arrow"]';
    public $arrowColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $arrowBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
    public $backgroundOpacityInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Opacity"]';
    public $backgroundRadiusInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Radius"]';
    public $clrColorBtn = '(//*[text()="Clear"])[1]';
    public $clrBgColorBtn = '(//*[text()="Clear"])[2]';

    /**
     * Border settings
     */
    public $borderStyleBtn = '//*[text()="Border"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadious = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $borderColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $resetBorderWidth = '(//button[text() = "Reset"])[1]';
    public $resetBorderRadius = '(//button[text() = "Reset"])[2]';
    public $clearBorderColor = '//*[text() = "Clear"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create an Image Slider block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'image slider');
        $I->seeElement($this->blockInSearch);
        $I->click($this->blockInSearch);
        $I->wait(2);
        $I->click($this->mediaLibraryBtn);
        $I->wait(1);
        $I->click($this->mediaLibraryTab);
        $I->wait(3);
        $I->click($this->imgAttchment1);
        $I->click($this->imgAttchment2);
        $I->wait(1);
        $I->click($this->createNewGalleryBtn);
        $I->wait(1);
        $I->click($this->insertGalleryBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Image Slider block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->imgSliderBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I); 
    }

    /**
     * Tests the Image Carousel settings
     */
    public function ImageSliderCarouselTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the Image Slider Carousel block in the frontend');
        $I->seeElement($this->fImageSliderBlock);

        $I->amGoingTo('Change the Image Carousel size and height settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click($this->imageCarouselStyleBtn);
        $I->click($this->imgExtraLargeSize);
        $I->click($this->smallImagesBtn);
        $I->click($this->thumbnailsBtn);
        $I->click($this->lightBoxBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the image carousel settings.');
        $fThumbnailBox = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fThumbnailBox))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->seeElement($this->fThumbnailBox);
        $I->click($this->fSliderImg);       
        $I->wait(2);
        $I->seeElement($this->fImgLightBox);
        $I->click($this->closeLightBoxBtn);
        $I->wait(1);

        $I->amGoingTo("Change the Image Carousel size to large and it's settings.");
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click($this->imageCarouselStyleBtn);
        $I->click($this->imgLargeSize);
        $I->click($this->desktopView);
        $I->wait(1);
        $I->click($this->gutterInput);
        $commonFunctionsPageObj->field = $this->gutterInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->wait(1);
        $I->click($this->mobileView);
        $I->wait(1);
        $I->click($this->mobileGutterInput);
        $commonFunctionsPageObj->field = $this->mobileGutterInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->wait(1);
        $I->click($this->radiusInput);
        $commonFunctionsPageObj->field = $this->radiusInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '9' );
        $I->click($this->customWidthBtn);
        $I->click($this->widthInPixelInput);
        $commonFunctionsPageObj->field = $this->widthInPixelInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '400' ); 
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check large Image Carousel settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fGalleryItem;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '400px');
        $commonFunctionsPageObj->prop = 'margin-left';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');
        $commonFunctionsPageObj->prop = 'margin-right';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');     
        $commonFunctionsPageObj->field = $this->fSliderImg;
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '9px'); 
    }

    /**
     * Tests the Slider Settings
     */
    public function ImageSliderSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Image Carousel slider settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click($this->sliderSettingsBtn);
        $I->wait(1);

        $I->amGoingTo('Change the transition, arrow navigation and draggable settings of slider.');
        $I->click($this->autoPlayBtn);
        $I->selectOption('Transition speed', 'Three Seconds');
        $I->wait(1);
        $I->click($this->pauseOnHoverBtn);
        $I->click($this->alignCellsBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the transition, arrow navigation and draggable settings of slider in the frontend.');
        $commonFunctionsPageObj->field = $this->fSelectedSlider;
        $commonFunctionsPageObj->prop = 'position';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'absolute');
        $commonFunctionsPageObj->prop = 'left';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '0px');
        $I->seeElement($this->fPreviousArrow); 
        $commonFunctionsPageObj->field = $this->fSliderViewport;
        $commonFunctionsPageObj->prop = 'cursor';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'grab');

        $I->amGoingTo('Change arrow navigation to dot navigation.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click($this->sliderSettingsBtn);
        $I->click($this->autoPlayBtn);
        $I->click($this->arrowNavigationBtn);
        $I->click($this->dotNavigationBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->seeElement($this->fPageDots);
    }

    /**
     * Tests the arrow settings
     */
    public function ImageSliderArrowStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950); 
        $I->amGoingTo('Change the arrow style settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click('Style');
        $I->click($this->arrowStyleBtn);
        $I->click($this->arrowColor);
        $I->click($this->arrowBgColor);
        $I->wait(1);
        $I->click($this->backgroundOpacityInput);
        $commonFunctionsPageObj->field = $this->backgroundOpacityInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '35' );
        $I->click($this->backgroundRadiusInput);
        $commonFunctionsPageObj->field = $this->backgroundRadiusInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the arrow style setting in the frontend.');
        $commonFunctionsPageObj->field = $this->fPreviousArrow;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 0.35)'); 
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '40%'); 
        $commonFunctionsPageObj->field = $this->fPreviousArrowSvgIcon;
        $commonFunctionsPageObj->prop = 'fill';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(16, 101, 156)'); 

        $I->amGoingTo('Reset the arrow settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click('Style');
        $I->click($this->arrowStyleBtn);
        $I->click($this->clrColorBtn);
        $I->click($this->clrBgColorBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the arrow style setting in the frontend after reset.');
        $commonFunctionsPageObj->field = $this->fPreviousArrow;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 0.35)');
        $commonFunctionsPageObj->field = $this->fPreviousArrowSvgIcon;
        $commonFunctionsPageObj->prop = 'fill';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(0, 0, 0)'); 
    }

    /**
     * Tests the Border settings
     */
    public function ImageSliderBorderStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    { 
        $I->amGoingTo('Change the border style settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
        $I->click('Style');
        $I->click($this->borderStyleBtn);
        $I->selectOption('Border Style', 'Ridge');
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
            'border-style' => 'ridge',
            'border-width' => '3px',
            'border-radius' => '5px'
        );
        $this->_checkBorderStyle($I, $attr); 

        $I->amGoingTo('Reset border style');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->imgSliderBlock);        
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
            'border-style' => 'ridge',
            'border-width' => '0px',
            'border-radius' => '0px'
        );
        $this->_checkBorderStyle($I, $attr);  
    }

    /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fSelectedSlider));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

}
