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
     * Border Settings
     */
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $fGridItemArticle = '(//article[contains(@class, "responsive-block-editor-addons-post-grid-item")])[1]';
    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $hoverBoxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[3]';
    public $hoverBoxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[4]';
    public $boxShadowColor = '(//div[@class="components-circular-option-picker__swatches"])[2]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $boxShadowPositionSelected = 'option[value="inset"]'; 
    public $resetBorderWidth = '(//button[text()="Reset"])[1]';
    public $resetBorderRadius = '(//button[text()="Reset"])[2]';
    public $resetBorderColor = '(//button[text()="Clear"])[1]'; 

    /**
     * Color Settings.
     */
    public $bgColor = '(//div[@class="components-circular-option-picker__swatches"])[1]//div[5]';
    public $titleColor = '(//div[@class="components-circular-option-picker__swatches"])[2]//div[1]';
    public $titleHoverColor = '(//div[@class="components-circular-option-picker__swatches"])[3]//div[6]';
    public $metaColor = '(//div[@class="components-circular-option-picker__swatches"])[4]//div[2]';
    public $excerptColor = '(//div[@class="components-circular-option-picker__swatches"])[5]//div[6]';
    public $readMoreLinkColor = '(//div[@class="components-circular-option-picker__swatches"])[6]//div[1]';
    public $readMoreHoverLinkColor = '(//div[@class="components-circular-option-picker__swatches"])[7]//div[6]';
    public $fTitleText = '(//h3[@class="responsive-block-editor-addons-block-post-grid-title"])[1] //a';

    /**
     * Spacing Settings.
     */
    public $rowGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Row Gap"]';
    public $columnGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Column Gap"]';
    public $contentPaddingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Padding"]';
    public $titleBottomSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Spacing"]';
    public $metaBottomSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Meta Bottom Spacing"]';
    public $excerptBottomSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Excerpt Bottom Spacing"]';
    public $fGridItemsContainer = 'div.responsive-block-editor-addons-post-grid-items';
    public $tabletView = '(//button[contains(@id, "tablet")])[3]';
    public $mobileView = '(//button[contains(@id, "mobile")])[3]';
   
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
     * Tests the Border Settings
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
        $I->click($commonFunctionsPageObj->borderStyleBtn);
        $I->selectOption('Border Style', 'Groove');
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );  
        $I->click($this->borderColor);
        $this->publishAndViewPage($I);
        
        $I->amGoingTo('Check the border settings of the Post Page.');
        $commonFunctionsPageObj->field = $this->fGridItemArticle;
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px groove rgb(51, 51, 51)'); 
        $commonFunctionsPageObj->prop = 'border-radius';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px'); 
        
        $I->amGoingTo('Change the box shadow settings of the post grid block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->borderStyleBtn);
        $I->selectOption('Border Style', 'None');
        $I->click($this->resetBorderWidth);
        $I->click($this->resetBorderRadius);
        $I->click($this->resetBorderColor);
        $I->wait(1);
        $I->click($this->boxShadowOptionsBtn);
        $this->_setBoxShadowSettings($I, $commonFunctionsPageObj);

        $I->amGoingTo('Check the box shadow settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fGridItemArticle;
        $commonFunctionsPageObj->prop = 'box-shadow';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Change the box shadow on hover settings.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->borderStyleBtn);
        $I->click($this->boxShadowResetBtn);
        $I->click($this->hoverBoxShadowOptionsBtn);
        $this->_setBoxShadowSettings($I, $commonFunctionsPageObj);

        $I->amGoingTo('Check the hover box shadow settings in the frontend.');
        $I->wait(1);
        $I->moveMouseOver($this->fGridItemArticle);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fGridItemArticle;
        $commonFunctionsPageObj->prop = 'box-shadow';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');
    }

    /**
     * Set the box shadow settings.
     */
    public function _setBoxShadowSettings($I, $commonFunctionsPageObj)
    {
        $I->wait(1);
        $I->click($this->boxShadowColor);
        $I->wait(1);
        
        $I->click($this->boxShadowLeft);
        $commonFunctionsPageObj->field = $this->boxShadowLeft;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->wait(1); 

        $I->click($this->boxShadowTop);
        $commonFunctionsPageObj->field = $this->boxShadowTop;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1); 
        $I->click($this->boxShadowBlur);
        $commonFunctionsPageObj->field = $this->boxShadowBlur;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '30' );
        $I->wait(1); ; 

        $boxShadowSpread = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowSpread))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(3);
        $I->click($this->boxShadowSpread);
        $commonFunctionsPageObj->field = $this->boxShadowSpread;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1);  
        $boxShadowPosition = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowPosition))->
            findElement( WebDriverBy::cssSelector($this->boxShadowPositionSelected) )->click();
        });
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * Tests the Color Settings
     */
    public function PostPageGridColorTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->colorStyleBtn);
        $I->wait(1);
        $I->click($this->bgColor);
        $I->click($this->titleColor);
        $I->click($this->titleHoverColor);
        $I->click($this->metaColor);
        $I->click($this->excerptColor);
        $I->click($this->readMoreLinkColor);
        $I->click($this->readMoreHoverLinkColor);
        $I->wait(1);
        $this->publishAndViewPage($I);
        
        $I->amGoingTo('Check the color settings of the Post Page');
        $commonFunctionsPageObj->field = $this->fTitleText;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
        $I->wait(1);
        $I->moveMouseOver($this->fTitleText);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fMeta;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fExcerpt;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fReadMoreLink;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
        $I->wait(1);
        $I->scrollTo($this->fReadMoreLink, 20);
        $I->wait(2);
        $I->moveMouseOver($this->fReadMoreLink);
        $I->wait(1);
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
    }

    /**
     * Tests the Spacing Settings
     */
    public function PostPageGridSpacingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacing settings of the Post Page.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->click($this->rowGapInput);
        $commonFunctionsPageObj->field = $this->rowGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->columnGapInput);
        $commonFunctionsPageObj->field = $this->columnGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->titleBottomSpacingInput);
        $commonFunctionsPageObj->field = $this->titleBottomSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->metaBottomSpacingInput);
        $commonFunctionsPageObj->field = $this->metaBottomSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->click($this->excerptBottomSpacingInput);
        $commonFunctionsPageObj->field = $this->excerptBottomSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $this->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing settings of the post page in the frontend.');
        $commonFunctionsPageObj->field = $this->fGridItemsContainer;
        $commonFunctionsPageObj->prop = 'grid-column-gap';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');
        $commonFunctionsPageObj->prop = 'grid-row-gap';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px'); 
        $commonFunctionsPageObj->field = $this->fGridItems;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px'); 
        $commonFunctionsPageObj->field = $this->fTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $commonFunctionsPageObj->field = $this->fMeta;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $commonFunctionsPageObj->field = $this->fExcerpt;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');

        $I->amGoingTo('Change the content padding for tablet and mobile view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(4);
        $I->click($this->postGridBlock);
        $I->wait(4);
        $I->click($this->queryStyleBtn);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->click($this->tabletView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16' );
        $I->click($this->mobileView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $this->publishAndViewPage($I);

        $I->amGoingTo('Check the content padding in the frontend.');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fGridItems;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '16px');
        $I->resizeWindow(375, 812);       
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
    }
}
