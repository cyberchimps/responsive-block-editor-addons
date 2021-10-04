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
    // public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    // {
    //     $I->amGoingTo('Remove the Post Carousel block.');
    //     $I->amOnPage('/rbea-block');        
    //     $I->wait(2);
    //     $I->click($commonFunctionsPageObj->editBlockBtn);
    //     $I->wait(1);
    //     $I->click($this->postCarouselBlock);
    //     $commonFunctionsPageObj->removeBlock($I);
    //     $loginAndLogout->userLogout($I);
    // }

    /**
     * Tests the general settings of the Post Carousel block.
     */
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
        // $I->click($commonFunctionsPageObj->editBlockBtn);
        // $I->wait(1);
        // $I->click($this->postCarouselBlock);
        // $I->click($this->carouselStyleBtn);
    }
}
