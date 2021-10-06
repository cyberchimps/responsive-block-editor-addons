<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class PostGridCest
{
    public $postGridBlock = 'div[data-title="Responsive Post and Page Grid"]';

    /**
     * Query Settings
     */
    public $queryStyleBtn = '//button[text()="Query"]';
    public $alignRightBtn = '//button[@aria-label="Align text right"]';
    public $fGridText = '(//div[@class="responsive-block-editor-addons-block-post-grid-text"])[1]';
    public $fPageTypeGridItems = '//div[contains(@class, "responsive-block-editor-addons-post-grid-items")]//article[contains(@class, "type-page")]';
    public $fPostTypeGridItems = '//div[contains(@class, "responsive-block-editor-addons-post-grid-items")]//article[contains(@class, "type-post")]';

    /**
     * Post and Page Grid Settings.
     */
    public $gridSettingsBtn = '//button[text()="Post and Page Grid Settings"]';
    public $numberOfItemsInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of items"]';
    public $numberOfItemsToOffsetInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of items to offset"]';
    public $columnsInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Columns"]';
    public $pageLimitInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Page Limit"]';
    public $equalsHeightBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $postPaginationBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';        
    public $publishBtn = '.editor-post-publish-button';
    public $viewPage = '.components-snackbar__content > a';
    public $fGridItems = '//article[contains(@class, "responsive-block-editor-addons-post-grid-item")]';
    public $fGrid = '//div[@class="responsive-block-editor-addons-post-grid-items is-grid columns-3"]';
    public $fPaginationWrap = 'div.responsive-block-editor-addons-post-pagination-wrap';
    public $paginationBtn = '//button[text()="Pagination"]';
    public $borderSizeInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Size"]';
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $spacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Spacing"]';
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $activeBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $textColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[6]/button';
    public $activeTextColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[6]/button';
    public $fPaginationCurrentSpan = 'div.responsive-block-editor-addons-post-pagination-wrap > span';
    public $fPaginationSpan = '(//div[@class="responsive-block-editor-addons-post-pagination-wrap"]//a)[1]';

    /**
     * Post and Page Grid Markup Settings.
     */
    public $gridMarkupSettingsBtn = '//button[text()="Post and Page Grid Markup"]';
    public $fPostGridSection = '((//div[contains(@class, "responsive-block-editor-addons-post-grid-items")]//article)[contains(@class, "responsive-block-editor-addons-post-grid-item")])[1]';
    public $fPostGridHeading = '(//header[@class="responsive-block-editor-addons-block-post-grid-header"])[1]//h2';
    
    /**
     * Post and Page Grid Content Settings.
     */
    public $gridContentSettingsBtn = '//button[text()="Post and Page Grid Content"]';
    public $displaySectionTitleBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $sectionTitleInput = '(//input[contains(@id, "inspector-text-control")])[1]';
    public $imageBorderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Image Border Radius"]';
    public $excerptLengthInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Excerpt Length"]';
    public $displayAuthorBtn = '(//input[contains(@id, "inspector-toggle-control")])[4]';
    public $continueReadingInput = '(//input[contains(@id, "inspector-text-control")])[2]';
    public $fReadMoreLink = '(//a[contains(@class, "responsive-block-editor-addons-block-post-grid-more-link")])[1]';
    public $fAdmin = '(//div[contains(@class, "responsive-block-editor-addons-block-post-grid-author")])[1]';
    public $fImage = '(//div[@class="responsive-block-editor-addons-block-post-grid-image"]//a//img)[1]';

    /**
     * Typography Settings
     */
    public $excerptTypography = '//button[text()="Excerpt"]';
    public $metaTypography = '//button[text()="Meta"]';
    public $titleTypography = '//button[text()="Title"]';
    public $fReadMoreLinkTypography = '//button[text()="Read More Link"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';
    public $fExcerpt = '(//div[@class="responsive-block-editor-addons-block-post-grid-excerpt"])[1]';
    public $fMeta = '(//div[@class="responsive-block-editor-addons-block-post-grid-byline"])[1]';
    public $fTitle = '(//h3[@class="responsive-block-editor-addons-block-post-grid-title"])[1]';
    
    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Post Grid block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'Responsive Post and Page Grid');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Post Grid block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postGridBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Tests the Query Settings
     */
    public function PostGridQueryTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Query settings of the post grid block');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(3);
        $I->click($this->postGridBlock);
        $I->wait(2);
        $I->click($this->alignRightBtn);
        $I->selectOption('Categories', 'Category1');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the Query settings of the post grid block.');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('category-category1'));
        }); 
        $I->assertCount(2, $countItems); 
        $commonFunctionsPageObj->field = $this->fGridText;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'right');

        $I->amGoingTo('Check the Query settings for the page');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(3);
        $I->click($this->postGridBlock);
        $I->wait(2);
        $I->selectOption('Content Type', 'Page');
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSeeElement($this->fPostTypeGridItems);
        $I->canSeeElement($this->fPageTypeGridItems);
    }

    /**
     * Tests the Grid Settings
     */
    public function PostPageGridSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click($this->gridSettingsBtn);
        $I->wait(1);
        $I->click($this->numberOfItemsInput);
        $commonFunctionsPageObj->field = $this->numberOfItemsInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->selectOption('Order By', 'Random');
        $I->wait(1);
        $I->scrollTo($this->pageLimitInput, 20);
        $I->wait(1);
        $I->click($this->columnsInput);
        $commonFunctionsPageObj->field = $this->columnsInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->postPaginationBtn);
        $I->click($this->pageLimitInput);
        $commonFunctionsPageObj->field = $this->pageLimitInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $this->publishAndViewPage($I); 

        $I->amGoingTo('check the post and page grid settings in the frontend.');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('responsive-block-editor-addons-post-grid-item'));
        }); 
        $I->assertCount(5, $countItems); 
        $commonFunctionsPageObj->field = $this->fGrid;
        $commonFunctionsPageObj->prop = 'grid-template-columns';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '207.462px 207.462px 207.462px');
        $I->seeElement($this->fPaginationWrap);
        
        $I->amGoingTo('Change the pagination settings');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(10);
        $I->click($this->postGridBlock);
        $I->wait(2);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->wait(1);
        $I->click($this->paginationBtn);
        $I->selectOption('Pagination Layout', 'Filled');
        $I->wait(1);
        $I->selectOption('Pagination Alignment', 'Right');
        $I->click($this->borderSizeInput);
        $commonFunctionsPageObj->field = $this->borderSizeInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->borderColor); 
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' ); 
        $I->click($this->activeBorderColor);    
        $I->click($this->textColor);
        $I->click($this->activeTextColor);
        $I->wait(1);
        $I->scrollTo($this->spacingInput, 20);
        $I->click($this->spacingInput);
        $commonFunctionsPageObj->field = $this->spacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $this->publishAndViewPage($I);
        $I->wait(1);
        $I->scrollTo($this->fPaginationCurrentSpan, 20);

        $I->amGoingTo('Check the grid settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fPaginationSpan;
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px solid rgb(51, 51, 51)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px'); 
        $commonFunctionsPageObj->prop = 'border-style';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'solid'); 
        
        $commonFunctionsPageObj->field = $this->fPaginationCurrentSpan;
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px solid rgb(16, 101, 156)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');        
    } 

    /**
     * Publish page and click on view page
     */
    public function publishAndViewPage($I)
    {
        $I->click($this->publishBtn);
        $I->wait(17);
        $I->amOnPage('/rbea-block');
    }

    /**
     * Test the Grid Markup Settings
     */
    public function PostPageGridMarkupTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click($this->gridMarkupSettingsBtn);
        $I->selectOption('Post Grid Section Tag', 'article');
        $I->selectOption('Post Title Heading Tag', 'H2');
        $this->publishAndViewPage($I);
        $I->wait(1);

        $I->amGoingTo('Check the markup settings in the frontend.');
        $I->seeElement($this->fPostGridHeading);  
        $I->seeElement($this->fPostGridSection);      
    }

    /**
     * Test the Grid Content Settings
     */
    public function PostPageGridContentTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the content settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click($this->gridContentSettingsBtn);
        $I->click($this->displaySectionTitleBtn);
        $I->fillField($this->sectionTitleInput, 'Demo Section Title');
        $I->selectOption('Image Size', 'Full Size');
        $I->wait(1);
        $I->selectOption('Image Position', 'Top');
        $I->wait(1);
        $I->selectOption('Layout', 'Content'); 
        $I->click($this->imageBorderRadius);
        $commonFunctionsPageObj->field = $this->imageBorderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->click($this->displayAuthorBtn);
        $I->wait(1);
        $I->scrollTo($this->continueReadingInput, 10);
        $I->fillField($this->continueReadingInput, "Continue >>");
        $this->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the content settings.');
        $I->see('Demo Section Title');
        $I->wait(1);
        $fReadMoreLink = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fReadMoreLink))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->see('Continue >>');
        $I->cantSee($this->fAdmin);
        $I->wait(1); 
        $commonFunctionsPageObj->field = $this->fImage;
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '15px');
    }    

    /**
     * Test the Typography Settings
     */
    public function PostPageGridTypographyTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the excerpt typography settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($this->excerptTypography);
        $arr = array('20px', '20px', '20px', '40px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->excerptTypography, $this->fExcerpt, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '35px'); 

        $I->amGoingTo('Change the meta typography settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($this->metaTypography);
        $arr = array('15px', '15px', '15px', '30px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->metaTypography, $this->fMeta, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '26.25px'); 

        $I->amGoingTo('Change the title typography settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($this->titleTypography);
        $arr = array('22px', '22px', '22px', '44px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->titleTypography, $this->fTitle, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '26.4px');

        $I->amGoingTo('Change the meta typography settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($this->fReadMoreLinkTypography);
        $arr = array('28px', '28px', '28px', '56px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->fReadMoreLinkTypography, $this->fReadMoreLink, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '49px');
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
        $I->selectOption('Font Weight', '200');
        $I->wait(1);
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $I->selectOption('Text Transform', 'Capitalize');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings in the desktop view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '200'); 
        $commonFunctionsPageObj->prop = 'text-transform';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'capitalize'); 
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
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
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
        $I->wait(2);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '14px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $I->wait(2);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
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
     * Test the Border Settings
     */
    public function PostPageGridBorderTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the border settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($this->borderStyleBtn);
    }
}
