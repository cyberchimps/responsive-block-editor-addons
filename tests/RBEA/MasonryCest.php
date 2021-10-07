<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class MasonryCest
{
    public $masonryBlock = '//div[@data-title="Masonry"]';
    public $blockInSearch = 'div[class="block-editor-block-types-list__list-item"] > button';
    public $mediaLibraryBtn = '//button[text()="Media Library"]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $createNewGalleryBtn = '//*[text()="Create a new gallery"]';
    public $insertGalleryBtn = '//*[text()="Insert gallery"]';
    public $largeBtn = '//button[text()="Large"]';
    public $gutterInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Gutter"]';
    public $mobileGutterInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Mobile Gutter"]';
    public $roundedCornerInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Rounded corners"]';
    public $lightboxInputBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $captionsInputBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $captionTextbox = '//*[@aria-label="Write caption…"]';
    public $urlTextbox = '//div[contains(@class, "components-base-control block-editor-url-input")]//div//input';
    public $linkSettingsBtn = '//button[text() = "Link settings"]';
    public $openInNewTabBtn = '(//input[contains(@id, "inspector-toggle-control")])[3]';
    public $linkRelInputField = '//input[contains(@id, "inspector-text-control")]';
    public $desktopView = '//button[contains(@class, "components-responsive-block-editor-addons-responsive__tabs-item--desktop")]';
    public $mobileView = '//button[contains(@class, "components-responsive-block-editor-addons-responsive__tabs-item--mobile")]';
    public $masonryBlockImg = '//li[@class="responsive-block-editor-addons-gallery--item"]//figure//img';
    public $fMasonryItem = '//div[contains(@class, "has-caption-style-dark has-gutter has-lightbox")]';
    public $fGalleryImg = '//img[contains(@data-imglink, "https://www.google.com")]';
    public $fMobileGutterImg = '//ul[contains(@class, "has-gutter-50 has-gutter-mobile-10")]';

    /**
     * Block settings
     */
    public $blockAlignmentBtn = '//button[@aria-label="Align"]';
    public $fullWidthBtn = '//*[text() = "Full width"]';
    public $fAlignFull = 'div.alignfull';

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the masonry block.');
        $I->amOnPage('/rbea-block'); 
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->masonryBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Tests the masonry block settings.
     */
    public function MasonrySettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a masonry block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'masonry');
        $I->wait(1);
        $I->seeElement($this->blockInSearch);
        $I->click($this->blockInSearch);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->createNewGalleryBtn);
        $I->wait(1);
        $I->click($this->insertGalleryBtn);
        $I->wait(1);
        $I->click($this->largeBtn);
        $I->click($this->desktopView);
        $I->wait(1);
        $I->click($this->gutterInput);
        $commonFunctionsPageObj->field = $this->gutterInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '50' );
        $I->wait(1);
        $I->click($this->roundedCornerInput);
        $commonFunctionsPageObj->field = $this->roundedCornerInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->wait(1);
        $I->click($this->lightboxInputBtn);
        $I->click($this->captionsInputBtn);
        $I->wait(1);
        $I->click($this->masonryBlockImg);
        $I->wait(1);
        $I->click($this->captionTextbox);
        $I->fillField($this->captionTextbox, 'Lorem Ipsum');
        $I->wait(1);
        $I->selectOption('Caption style', 'Dark');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the masonry block settings in the frontend.');
        $I->wait(1);
        $I->seeElement($this->masonryBlockImg);
        $I->see('Lorem Ipsum');
        $I->seeElement($this->fMasonryItem);

        $I->amGoingTo('Add Link settings to the masonry block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->masonryBlock);
        $I->wait(1);
        $I->click($this->mobileView);
        $I->wait(1);
        $I->click($this->mobileGutterInput);
        $commonFunctionsPageObj->field = $this->mobileGutterInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->lightboxInputBtn);
        $I->click($this->captionsInputBtn);
        $I->wait(1);
        $I->click($this->linkSettingsBtn);
        $I->selectOption('Link to', 'Custom URL');
        $I->wait(1);
        $I->click($this->masonryBlockImg);
        $I->wait(2);
        $I->click($this->urlTextbox);
        $I->fillField($this->urlTextbox, 'https://www.google.com');
        $I->wait(1);
        $I->click($this->openInNewTabBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(2);
        $I->seeElement($this->fGalleryImg);
        $I->resizeWindow(375, 812);
        $I->seeElement($this->fMobileGutterImg);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);
    }

    /**
     * Tests the block settings of the masonry block.
     */
    public function MasonryBlockSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {    
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Check the full width block settings of the masonry block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'masonry');
        $I->wait(1);
        $I->seeElement($this->blockInSearch);
        $I->click($this->blockInSearch);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->createNewGalleryBtn);
        $I->wait(1);
        $I->click($this->insertGalleryBtn);
        $I->wait(1);
        $I->click($this->blockAlignmentBtn);
        $I->wait(1);
        $I->click($this->fullWidthBtn);
        $I->click('XL');
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the block in full width in frontend');
        $I->wait(1);
        $I->seeElement($this->fAlignFull);

        $I->amGoingTo('Reset full width of the block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->masonryBlock);
        $I->wait(1);
        $I->click($this->blockAlignmentBtn);
        $I->wait(1);
        $I->click($this->fullWidthBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the block in full width in frontend');
        $I->wait(1);
        $I->CantSeeElement($this->fAlignFull);        
    }
    
}
