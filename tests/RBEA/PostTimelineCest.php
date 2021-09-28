<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class PostTimelineCest
{
    public $postTimelineBlock = 'div[data-title="Post Timeline"]';
    public $fPostTimelineBlock = 'section.wp-block-responsive-block-editor-addons-post-timeline';
    public $queryBtn = '//button[text()="Query"]';
 

    /**
     * Post Timeline Settings
     */
    public $postTimelineSettingsBtn = '//button[text()="Post Timeline Settings"]';
    public $numberOfItems = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of items"]';
    public $numberOfItemsToOffset = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of items to offset"]';
    public $borderRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $orderSelect = '(//select[contains(@id, "inspector-select-control")])[3]';
    public $selectedOrder = 'option[value="asc"]';
    public $fInnerPost = '(//div[@class="responsive-block-editor-addons-timeline__events-inner-new"])[1]';
    public $fmobileStack = '//section[contains(@class, "responsive-block-editor-addons-timeline__responsive-mobile")]';
     
    /**
     * Post Timeline Content
     */
    public $postTimelineContentBtn = '//button[text()="Post Timeline Content"]';
    public $displaySectionTitleBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $sectionTitleInput = '(//input[contains(@id, "inspector-text-control")])[1]';
    public $displayFeaturedImageBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $displayDate = '(//input[contains(@id, "inspector-toggle-control")])[5]';
    public $excerptLength = '//*[contains(@id, "inspector-input-control") and @aria-label="Excerpt Length"]';
    public $displayContinueReadingLink = '(//input[contains(@id, "inspector-toggle-control")])[7]';
    public $continueReadingInput = '(//input[contains(@id, "inspector-text-control")])[2]';
    public $openInNewTab = '(//input[contains(@id, "inspector-toggle-control")])[8]';
    public $fDateTime = '(//div[@class="responsive-block-editor-addons-timeline__date-new responsive-block-editor-addons-timeline__date-outer"])[1]';
    public $fPostImg = 'div.responsive-block-editor-addons-block-post-timeline-image';
    public $postTimelineMarkupBtn = '//button[text()="Post Timeline Markup"]';
    public $fContentTitle = '(//h3[@class="responsive-block-editor-addons-block-post-timeline-title"])[1]';
    public $fMainBlockContainer = 'article.wp-block-responsive-block-editor-addons-post-timeline';
   
    /**
     * Post Timeline Connector Settings
     */
    public $connectorSettingsBtn = '//button[text()="Connector Settings"]';
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[1]';
    public $selectedIcon = '//*[@class="rfipicons__selector"]//span[6]';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $backgroundSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Size"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $connectorWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Connector Width"]';
    public $normalBtn = '//button[text()="Normal"]';
    public $focusBtn = '//button[text()="Focus"]';
    public $normalLineColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $normalIconColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $normalBackgroundColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[5]/button';
    public $normalBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[2]/button';
    public $focusLineColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $focusIconColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[5]/button';
    public $focusBackgroundColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[2]/button';
    public $focusBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[5]/button';
    public $fInFocusIcon = '(//div[@class="responsive-block-editor-addons-timeline__marker responsive-block-editor-addons-timeline__in-view-icon"])[1]';
    public $fNormalIcon = '(//div[@class="responsive-block-editor-addons-timeline__marker responsive-block-editor-addons-timeline__out-view-icon"])[1]';
    public $fTimelineItem = '(//div[@class="responsive-block-editor-addons-timeline__date-new responsive-block-editor-addons-timeline__date-outer"])[1]';
    
    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Post Timeline block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'post timeline');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    // public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    // {
    //     $I->amGoingTo('Remove the Post Timeline block.');
    //     $I->amOnPage('/rbea-block');        
    //     $I->wait(2);
    //     $I->click($commonFunctionsPageObj->editBlockBtn);
    //     $I->wait(1);
    //     $I->click($this->postTimelineBlock);
    //     $commonFunctionsPageObj->removeBlock($I);
    //     $loginAndLogout->userLogout($I); 
    // }

    /**
     * Tests the content query settings.
     */ 
    public function PostTimelineContentQuerySettings(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the Post Timeline block in the frontend.');
        $I->seeElement($this->fPostTimelineBlock);
        $I->wait(1);
        $I->amGoingTo('Change the content query settings of the Post Timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->selectOption('Taxonomy', 'Categories');
        $I->wait(2);
        $I->selectOption('Categories', 'Category1');
        $I->wait(2);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('See the post of specified categories in the frontend.');
        $I->see('Lorem Ipsum 1');
        $I->see('Lorem Ipsum2');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('category-category1'));
        }); 
        $I->assertCount(2, $countItems);
    }

    /**
     * Tests the post timeline settings.
     */
    public function PostTimelineSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the content post timeline settings of the Post Timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->selectOption('Content Type', 'Post');
        $I->wait(1);
        $I->click($this->numberOfItems);
        $commonFunctionsPageObj->field = $this->numberOfItems;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->selectOption('Order By', 'Title');
        $I->wait(3);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->click($this->numberOfItemsToOffset);
        $commonFunctionsPageObj->field = $this->numberOfItemsToOffset;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '1' );
        $I->click($this->borderRadius);
        $commonFunctionsPageObj->field = $this->borderRadius;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '50' );
        $I->selectOption('Orientation', 'Left');
        $I->selectOption('Arrow Alignment', 'Top');
        $I->selectOption('Stack on', 'Mobile');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the post timeline settings of the Post Timeline block in the frontend.');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('type-post'));
        }); 
        $I->assertCount(5, $countItems);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fInnerPost;
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50px'); 
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $I->seeElement($this->fmobileStack);
        $I->wait(1);
    }
    
    /**
     * Tests the post timeline settings.
     */
    public function PostTimelineContentTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the post timeline content settings of the Post Timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->click($this->postTimelineSettingsBtn);
        $I->wait(1);
        $I->click($this->postTimelineContentBtn);
        $I->wait(1);
        $I->click($this->displaySectionTitleBtn);
        $I->wait(1);
        $I->click($this->sectionTitleInput);
        $I->clearField($this->sectionTitleInput);
        $I->fillField($this->sectionTitleInput, 'Demo Section');
        $I->wait(1);
        $I->click($this->displayFeaturedImageBtn);
        $I->click($this->displayDate);
        $I->click($this->excerptLength);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->excerptLength;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '50' );
        $I->wait(1);
        $I->click($this->displayContinueReadingLink);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the Post Timeline Content settings');
        $I->see('Demo Section');
        $I->cantSeeElement($this->fDateTime);
        $I->cantSee('Continue Reading');

        $I->amGoingTo('Change post timeline content settings for image and continue reading link.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->click($this->postTimelineSettingsBtn);
        $I->wait(1);
        $I->click($this->postTimelineContentBtn);
        $I->click($this->displayFeaturedImageBtn);
        $I->wait(1);
        $I->selectOption('Image Size', 'Medium');
        $I->click($this->displayDate);
        $I->click($this->displayContinueReadingLink);
        $I->click($this->continueReadingInput);
        $I->clearField($this->continueReadingInput);
        $I->fillField($this->continueReadingInput, 'Read More');
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the Post Timeline Content settings');
        $I->see('Read More');
        $I->seeElement($this->fDateTime);
        $I->seeElement($this->fPostImg);
    }

    /**
     * Tests the post timeline markup settings.
     */
    public function PostTimelineMarkupTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the post timeline markup settings of the Post Timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->click($this->postTimelineSettingsBtn);
        $I->click($this->postTimelineMarkupBtn);
        $I->wait(1);
        $I->selectOption('Post Timeline Section Tag', 'article');
        $I->wait(1);
        $I->selectOption('Post Title Heading Tag', 'H3');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the timeline markup settings in the frontend.');
        $I->seeElement($this->fContentTitle);
        $I->seeElement($this->fMainBlockContainer);
    }

    /**
     * Tests the connector settings.
     */
    public function PostTimelineConnectorSettingsTest(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the post timeline connector settings of the Post Timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->click($this->postTimelineSettingsBtn);
        $I->click($this->connectorSettingsBtn);
        $I->click($this->selectIconBtn);
        $I->wait(2);
        $I->click($this->selectedIcon);
        $I->wait(2);
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->backgroundSize);
        $commonFunctionsPageObj->field = $this->backgroundSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->connectorWidth);
        $commonFunctionsPageObj->field = $this->connectorWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->wait(1);
        $I->click($this->normalBtn);
        $I->click($this->normalLineColor);
        $I->click($this->normalIconColor);
        $I->click($this->normalBackgroundColor);
        $I->click($this->normalBorderColor);
        $I->wait(1);
        $focusBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->focusBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->focusBtn);
        $I->click($this->focusLineColor);
        $I->click($this->focusIconColor);
        $I->click($this->focusBackgroundColor);
        $I->click($this->focusBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the connector settings in the frontend.');
        $I->wait(1);
        $timelineItem = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fTimelineItem))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(3);
        $commonFunctionsPageObj->field = $this->fInFocusIcon;
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px solid rgb(51, 51, 51)');
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->prop = 'min-height';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '40px');
    }
}
