<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class PostCarouselCest
{
    /**
     * General settings test.
     */
    public $postCarouselBlock = 'div[data-title="Post Carousel"]';
    public $fPostCarouselBlock = '//section[contains(@class, "responsive-block-editor-addons-block-post-carousel")]';
    public $equalHeightToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $featuredImageToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $postTitleToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $postAuthorToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[4]';
    public $postDateToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[5]';
    public $postCommentsToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[6]';
    public $postTaxonomyToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[7]';
    public $postExcerptToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[8]';
    public $postLinkToggleBtn = '(//input[contains(@id, "inspector-toggle-control")])[9]';
    public $excerptLengthInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Excerpt Length"]';
    public $columnsInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Columns"]';
    public $numberOfItemsInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of items"]';
    public $fPostCarouselInner = '(//div[@class="responsive-block-editor-addons-post-carousel-inner"])[1]';
    public $fFeaturedImage = '(//div[@class="responsive-block-editor-addons-block-post-carousel-image-top"])[1]';
    public $fPostTitle = '(//h3[@class="responsive-block-editor-addons-block-post-carousel-title"])[3]';
    public $fPostTitleText = '(//h3[@class="responsive-block-editor-addons-block-post-carousel-title"])[3]//a';
    public $fPostAuthor = '(//div[@class="responsive-block-editor-addons-block-post-carousel-author"])[3]';
    public $fPostDate = '(//time[@class="responsive-block-editor-addons-block-post-carousel-date"])[3]';
    public $fPostComment = '(//p[@class="responsive-block-editor-addons-block-post-carousel-comments"])[3]';
    public $fPostTaxonomy = '(//div[@class="responsive-block-editor-addons-block-post-carousel-taxonomy"])[3]';
    public $fPostExcerpt = '(//div[@class="responsive-block-editor-addons-block-post-carousel-excerpt"])[3]/p[1]';
    public $fPostLink = '(//div[@class="responsive-block-editor-addons-block-post-carousel-excerpt"])[3]/p[2]';
 

    /**
     * Carousel settings
     */
    public $carouselStyleBtn = '//button[text()="Carousel"]';
    public $autoPlayBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $pauseOnHoverBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $infiniteLoopBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $autoPlaySpeed = '//*[contains(@id, "inspector-input-control") and @aria-label="Autoplay Speed (ms)"]';
    public $transitionSpeed = '//*[contains(@id, "inspector-input-control") and @aria-label="Transition Speed (ms)"]';
    public $arrowSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Arrow Size"]';
    public $arrowBorderSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Arrow Border Size"]';
    public $arrowBorderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Arrow Border Radius"]';
    public $fArrow = '//button[@class="slick-next slick-arrow"]';

    /**
     * Image settings
     */
    public $imageSettingsBtn = '//button[text()="Image Settings"]';
    public $imageOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $imageCarouselBackground = '(//div[@class="responsive-block-editor-addons-block-post-carousel-image-background"])[1]';
    public $imageCarouselBackgroundImg = '(//div[@class="responsive-block-editor-addons-block-post-carousel-image-background"])[1]//a//img';
  
    /**
     * CTA settings
     */
    public $ctaSettingsStyleBtn = '//button[text()="CTA Settings"]';
    public $ctaTextInput = '(//input[contains(@id, "inspector-text-control")])[1]';
    public $spacingSettingsBtn = '//button [text()="Spacing Settings"]';
    public $borderSettingsBtn = '//button [text()="Border Settings"]';
    public $colorSettingsBtn = '(//button [text()="Color Settings"])[1]';
    public $openInNewTabBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $horizontalPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Padding"]';
    public $verticalPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Padding"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $normalBtn = '//button[text()="Normal"]';
    public $hoverBtn = '//button[text()="Hover"]';
    public $normalTextColorBtn = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $normalBorderColorBtn = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[2]';
    public $normalBackgroundColorBtn = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[3]';
    public $hoverTextColorBtn = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[1]';
    public $hoverBorderColorBtn = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[2]';
    public $hoverBackgroundColorBtn = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[3]';
    public $fCTALink = '(//a[contains(@class, "responsive-block-editor-addons-block-post-carousel-more-link")])[3]';
    public $fCTAWrapper = '(//p[contains(@class, "responsive-block-editor-addons-block-post-carousel-more-link-wrapper")])[3]';
    public $fMetaContainer = '(//div[@class="responsive-block-editor-addons-block-post-carousel-byline"])[3]';

    /**
     * Typography settings
     */
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    /**
     * Spacing setting
     */
    public $contentPaddingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Padding"]';
    public $contentDotGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Gap Between Content & Dots"]';
    public $columnGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Column Gap"]';
    public $titleTopMarginInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Top Margin"]';
    public $titleBottomMarginInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Margin"]';
    public $metaBottomMarginInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Meta Bottom Margin"]';
    public $exerptBottomMarginInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Excerpt Bottom Margin"]';
    public $ctaBottomMarginInput = '//*[contains(@id, "inspector-input-control") and @aria-label="CTA Bottom Margin"]';
    public $fContentWrap = '(//div[@class="responsive-block-editor-addons-block-post-carousel-text-wrap"])[1]';
    
    /**
     * Color Settings
     */
    public $postBgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[1]';
    public $titleColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[2]';
    public $contentColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[3]';
    public $metaColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[4]';
    public $arrowColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[5]';
    public $resetPostBgColor = '(//button[text()="Clear"])[1]';
    public $resetTitleColor = '(//button[text()="Clear"])[2]';
    public $resetContentColor = '(//button[text()="Clear"])[3]';
    public $resetMetaColor = '(//button[text()="Clear"])[4]';
    public $resetArrowColor = '(//button[text()="Clear"])[5]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Post Carousel block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'post carousel');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
  
    /**
     * Tests the general settings of the Post Carousel block.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Post Carousel block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    public function PostCarouselGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the post carousel block in the frontend.');
        $I->wait(2);
        $I->seeElement($this->fPostCarouselBlock); 

        $I->amGoingTo('Change the post carousel block general settings');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->click($this->carouselStyleBtn);
        $I->click($this->autoPlayBtn);
        $I->click($this->carouselStyleBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the carousel elements in the frontend.');
        $I->wait(2);
        $I->seeElement($this->fFeaturedImage);
        $I->seeElement($this->fPostTitle);
        $I->seeElement($this->fPostAuthor);
        $I->seeElement($this->fPostDate);
        $I->seeElement($this->fPostComment);
        $I->seeElement($this->fPostTaxonomy);
        $I->seeElement($this->fPostExcerpt);
        $I->seeElement($this->fPostLink);
        $commonFunctionsPageObj->field = $this->fPostCarouselInner;
        $commonFunctionsPageObj->prop = 'height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '536.787px');

        $I->amGoingTo('Hide the post title and post link');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->click($commonFunctionsPageObj->generalStyleBtn);
        $I->click($this->postTitleToggleBtn);
        $I->click($this->postLinkToggleBtn);
        $I->click($this->columnsInput);
        $commonFunctionsPageObj->field = $this->columnsInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '1' );
        $I->selectOption('Category', 'Category1');
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->fPostTitle);
        $I->cantSeeElement($this->fPostLink);
        $I->see('Category1');
    }

    /**
     * Tests the Carousel settings.
     */
    public function PostCarouselSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->click($this->carouselStyleBtn);
        $I->click($this->pauseOnHoverBtn);
        $I->click($this->autoPlaySpeed);
        $commonFunctionsPageObj->field = $this->autoPlaySpeed;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '200' );
        $I->click($this->transitionSpeed);
        $commonFunctionsPageObj->field = $this->transitionSpeed;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '600' );
        $I->wait(1);
        $I->selectOption('Show Arrows & Dots', 'Only Arrows');
        $I->wait(1);
        $I->click($this->arrowSize);
        $commonFunctionsPageObj->field = $this->arrowSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '35px' );
        $I->click($this->arrowBorderSize);
        $commonFunctionsPageObj->field = $this->arrowBorderSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3px' );
        $I->click($this->arrowBorderRadius);
        $commonFunctionsPageObj->field = $this->arrowBorderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5px' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the arrow settings in the frontend.');
        $I->seeElement($this->fArrow);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fArrow;
        $commonFunctionsPageObj->prop = 'border-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51)');
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px');
        $commonFunctionsPageObj->prop = 'border-width';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px');
        $I->seeInSource('"autoplaySpeed":2000,"autoplay":true,"infinite":true,"pauseOnHover":false,"speed":600,');
    }

    /**
     * Tests the Image settings.
     */
    public function PostCarouselImageSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->click($this->imageSettingsBtn);
        $I->wait(1);
        $I->selectOption('Image Size', 'Full');
        $I->wait(1);
        $I->selectOption('Image Position', 'Background');
        $I->click($this->imageOpacity);
        $commonFunctionsPageObj->field = $this->imageOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '60' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the image settings');
        $I->seeElement($this->imageCarouselBackground);
        $commonFunctionsPageObj->field = $this->imageCarouselBackground;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '312px');
        $commonFunctionsPageObj->field = $this->imageCarouselBackgroundImg;
        $commonFunctionsPageObj->prop = 'opacity';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '0.6');
    }

    /**
     * Tests the CTA settings.
     */
    public function PostCarouselCTASettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->click($this->carouselStyleBtn);
        $I->click($this->autoPlayBtn);
        $I->click($this->carouselStyleBtn);
        $I->wait(1);
        $I->click($this->ctaSettingsStyleBtn);
        $I->click($this->ctaTextInput);
        $I->clearField($this->ctaTextInput);
        $I->fillField($this->ctaTextInput, 'Read More');
        $I->wait(1);
        $I->click($this->openInNewTabBtn);
        $I->wait(1);
        $I->click($this->spacingSettingsBtn);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->horizontalPadding);
        $commonFunctionsPageObj->field = $this->horizontalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '26' );
        $I->wait(1);
        $I->click($this->desktopView2);
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->click($this->tabletView2);
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->mobileView2);
        $I->click($this->verticalPadding);
        $commonFunctionsPageObj->field = $this->verticalPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '24' );
        $I->click($this->spacingSettingsBtn);
        $I->wait(1);
        $I->click($this->borderSettingsBtn);
        $I->selectOption('Border Style', 'Dashed');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3px' );
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5px' );
        $I->click($this->borderSettingsBtn);
        $I->wait(1);
        $I->click($this->colorSettingsBtn);
        $I->click($this->normalBtn);
        $I->click($this->normalTextColorBtn);
        $I->click($this->normalBorderColorBtn);
        $I->selectOption('Background Type', 'Color');
        $I->click($this->normalBackgroundColorBtn);
        $hoverBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->hoverBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->hoverBtn);
        $I->wait(1);
        $I->click($this->hoverTextColorBtn);
        $I->click($this->hoverBorderColorBtn);
        $I->selectOption('Background Type', 'Color');
        $I->wait(1);
        $I->click($this->hoverBackgroundColorBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the CTA settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fCTALink;
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px dashed rgb(16, 101, 156)');
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $I->wait(1);
        $I->moveMouseOver($this->fCTALink);
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px dashed rgb(255, 255, 255)');
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
    }
    
    /**
     * Tests the Typography settings.
     */
    public function PostCarouselTypographySettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the title typography settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);        
        $I->click($this->carouselStyleBtn);
        $I->click($this->autoPlayBtn);
        $carouselStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->carouselStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->carouselStyleBtn);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($commonFunctionsPageObj->titleTypography);
        $arr = array('30px', '20px', '20px', '60px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->titleTypography, $this->fPostTitle, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '30px'); 
        
        $I->amGoingTo('Change the Meta typography settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($commonFunctionsPageObj->metaTypography);
        $arr = array('18px', '18px', '18px', '36px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->metaTypography, $this->fMetaContainer, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '18px');

        $I->amGoingTo('Change the Exceprt typography settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($commonFunctionsPageObj->excerptTypography);
        $arr = array('16px', '16px', '16px', '32px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->excerptTypography, $this->fPostExcerpt, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '16px');

        $I->amGoingTo('Change the Exceprt typography settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($commonFunctionsPageObj->ctaTypography);
        $arr = array('23px', '23px', '23px', '46px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->ctaTypography, $this->fCTAWrapper, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '23px');

        
    }

    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography of the Post Carousel block for desktop view.');
        $I->resizeWindow(1280, 950);
        $I->selectOption('Font Family', 'Actor');
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->wait(1);
        $I->selectOption('Font Weight', '700');
        $I->wait(1);
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings in the desktop view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '700'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[3]);
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[1]);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[2]);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the typography style of the block for mobile and desktop view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);
        $I->click($commonFunctionsPageObj->tabletView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '14px' );
        $I->click($commonFunctionsPageObj->mobileView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8px' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the typography settings in the tablet and mobile view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-size';
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '14px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $I->wait(2);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);  
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }

    /**
     * Tests the spacing settings.
     */
    public function PostCarouselSpacingSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacing settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);        
        $I->click($this->carouselStyleBtn);
        $I->click($this->autoPlayBtn);
        $carouselStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->carouselStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->carouselStyleBtn);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->contentDotGapInput);
        $commonFunctionsPageObj->field = $this->contentDotGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $I->click($this->columnGapInput);
        $commonFunctionsPageObj->field = $this->columnGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($this->titleTopMarginInput);
        $commonFunctionsPageObj->field = $this->titleTopMarginInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->click($this->titleBottomMarginInput);
        $commonFunctionsPageObj->field = $this->titleBottomMarginInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->click($this->metaBottomMarginInput);
        $commonFunctionsPageObj->field = $this->metaBottomMarginInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->exerptBottomMarginInput);
        $commonFunctionsPageObj->field = $this->exerptBottomMarginInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->click($this->ctaBottomMarginInput);
        $commonFunctionsPageObj->field = $this->ctaBottomMarginInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '32' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing settings in the frontend');
        $commonFunctionsPageObj->field = $this->fPostTitle;
        $commonFunctionsPageObj->prop = 'margin';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px 0px 22px');  
        $commonFunctionsPageObj->field = $this->fMetaContainer;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $commonFunctionsPageObj->field = $this->fPostExcerpt;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '30px');
        $commonFunctionsPageObj->field = $this->fPostLink;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '32px');
        $commonFunctionsPageObj->field = $this->fContentWrap;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');

        $I->amGoingTo('Change content padding for tablet and mobile view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);        
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '18' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the content padding in the frontend for the tablet and mobile viw');
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->field = $this->fContentWrap;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '18px');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '22px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);

    }

     /**
     * Tests the color settings.
     */
    public function PostCarouselColorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Color Settings of the Post Carousel Block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock);        
        $I->click($this->carouselStyleBtn);
        $I->click($this->autoPlayBtn);
        $carouselStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->carouselStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->carouselStyleBtn);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->colorSettingsStyleBtn);
        $I->wait(1);
        $I->click($this->postBgColor);
        $I->click($this->titleColor);
        $I->click($this->contentColor);
        $I->click($this->metaColor);
        $I->click($this->arrowColor);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fPostCarouselInner;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fPostTitleText;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)'); 
        $commonFunctionsPageObj->field = $this->fPostExcerpt;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)'); 
        $commonFunctionsPageObj->field = $this->fCTALink;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');

        $I->amGoingTo('Reset the colors of the Post Carousel block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postCarouselBlock); 
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->colorSettingsStyleBtn);
        $I->wait(1);
        $I->click($this->resetPostBgColor);
        $I->click($this->resetTitleColor);
        $I->click($this->resetContentColor);
        $I->click($this->resetMetaColor);
        $I->click($this->resetArrowColor);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings in the frontend after reset.');
        $commonFunctionsPageObj->field = $this->fPostCarouselInner;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)'); 
        $commonFunctionsPageObj->field = $this->fPostTitleText;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fPostExcerpt;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fCTALink;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
    }
}
