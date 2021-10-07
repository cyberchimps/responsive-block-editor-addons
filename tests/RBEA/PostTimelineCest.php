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
    public $fTimelineItem = 'section.responsive-block-editor-addons-block-post-timeline:nth-child(2)';
    public $fIcon = 'div.responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon > span > span > div > span > svg';
    public $fTimeline = 'div.responsive-block-editor-addons-timeline__line'; 

    /**
     * Post Timeline Colors Style 
     */
    public $colorsBtn = '//button[text()="Colors"]';
    public $hoverBtn = '//button[text()="Hover"]';
    public $postBgColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $headingColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[2]/button';
    public $authorColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[6]/button';
    public $contentColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[6]/button';
    public $ctaColorSettingBtn = '//button[text()="CTA Color Settings"]';
    public $ctaNormalTextColor = '(//*[@class="components-circular-option-picker__swatches"])[5]//div[2]/button';
    public $ctaNormalBackgroundColor = '(//*[@class="components-circular-option-picker__swatches"])[6]//div[6]/button';
    public $ctaNormalBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[7]//div[1]/button';    
    public $ctaHoverTextColor = '(//*[@class="components-circular-option-picker__swatches"])[5]//div[5]/button';
    public $ctaHoverBackgroundColor = '(//*[@class="components-circular-option-picker__swatches"])[6]//div[6]/button';
    public $ctaHoverBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[7]//div[5]/button';    
    public $fTitle = '(//a[@class="responsive-block-editor-addons-block-post-timeline-title-heading"])[1]';
    public $fAuthor = '(//div[@class="responsive-block-editor-addons-block-post-timeline-author"])[1]/a/span';
    public $fAuthorLink = '(//div[@class="responsive-block-editor-addons-block-post-timeline-author"])[1]/a';
    public $fContent = '(//div[@class="responsive-block-editor-addons-timeline__post"])[1]';
    public $fTimelineEvent = '(//div[@class="responsive-block-editor-addons-timeline__events-inner-new"])[1]';
    public $fCTALink = '(//a[contains(@class,"responsive-block-editor-addons-timeline__link")])[1]';
    public $fCTABtn = '(//div[@class="responsive-block-editor-addons-timeline__link_parent"])[1]';

    /**
     * Typography settings
     */
    public $typographyStyelBtn = '//button[text()="Typography"]';
    public $dateTypographyBtn = '//button[text()="Date Typography"]';
    public $headingTypographyBtn = '//button[text()="Heading Typography"]';
    public $authorTypographyBtn = '//button[text()="Author Typography"]';
    public $contentTypographyBtn = '//button[text()="Content Typography"]';
    public $continueReadingTypography = '//button[text()="Continue Reading Text Typography"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';

    /**
     * Padding settings
     */
    public $contentPaddingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Content Padding"]';
    public $fContentContainer = '(//div[@class="responsive-block-editor-addons-content"])[1]';

    /**
     * Spacing Settings 
     */
    public $blockBottomInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Block Bottom"]';
    public $headingBottomInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Heading Bottom"]';
    public $authorBottomInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Author Bottom"]';
    public $excerptBottomInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Excerpt Bottom"]';
    public $verticalSpaceInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Space"]';
    public $horizontalSpaceInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Space"]';
    public $fSingleBlock = '(//div[@class="responsive-block-editor-addons-timeline__events-new"])[1]';
    public $fAdminContainer = '(//div[@class="responsive-block-editor-addons-block-post-timeline-byline"])[1]';
    public $fBlockSection = '(//section[contains(@class, "responsive-block-editor-addons-block-post-timeline")])[2]';   
      
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $desktopView3 = '(//button[contains(@id, "desktop")])[3]';
    public $tabletView3 = '(//button[contains(@id, "tablet")])[3]';
    public $mobileView3 = '(//button[contains(@id, "mobile")])[3]';

    /**
     * Box shadow settings
     */
    public $btnBoxShadow = '//button[text()="Button Box Shadow"]';
    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '(//div[@class="components-circular-option-picker__swatches"])[1]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[1]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[2]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $boxShadowPositionSelected = 'option[value="inset"]';    
    public $fBtnParent = '(//div[@class="responsive-block-editor-addons-timeline__link_parent"])[1]';

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
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Post Timeline block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I); 
    }

    /**
     * This function opens the style tab.
     */
    public function _openStyle($I, $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->postTimelineBlock);
        $I->wait(2);
        $I->click($this->queryBtn);
        $I->wait(1);
        $I->click($this->postTimelineSettingsBtn);
        $I->click('Style');
    }

    /**
     * Tests the content query settings.
     */ 
    public function PostTimelineContentQuerySettings(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
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
    public function PostTimelineSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
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
    public function PostTimelineContentTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
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
        $postTimelineMarkupBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->postTimelineMarkupBtn))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->wait(1);
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
    public function PostTimelineMarkupTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
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
    public function PostTimelineConnectorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
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
            return $webdriver->findElement(WebDriverBy::cssSelector($this->fTimelineItem))->getLocationOnScreenOnceScrolledIntoView();
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

        $commonFunctionsPageObj->field = $this->fNormalIcon;
        $commonFunctionsPageObj->prop = 'border';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px solid rgb(16, 101, 156)');
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 

        $commonFunctionsPageObj->field = $this->fIcon;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');
        $commonFunctionsPageObj->prop = 'height';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');

        $commonFunctionsPageObj->field = $this->fIcon;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px'); 

        $commonFunctionsPageObj->field = $this->fTimeline;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
    }

    /**
     * Tests the color settings.
     */
    public function PostTimelineColorsSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the colors settings of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->colorsBtn);
        $I->click($this->postBgColor);
        $I->click($this->headingColor);
        $I->click($this->authorColor);        
        $I->click($this->contentColor);
        $I->wait(1);
        $I->click($this->ctaColorSettingBtn);
        $I->click($this->normalBtn);
        $I->click($this->ctaNormalTextColor);
        $I->click($this->ctaNormalBackgroundColor);
        $I->click($this->ctaNormalBorderColor);
        $hoverBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->hoverBtn))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->click($this->hoverBtn);
        $I->click($this->ctaHoverTextColor);
        $I->click($this->ctaHoverBackgroundColor);
        $I->click($this->ctaHoverBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the colors settings of the post timeline block in the frontend.');
        $commonFunctionsPageObj->field = $this->fTitle;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fAuthor;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fContent;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fCTALink;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 0, 0, 0)');
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(16, 101, 156)');
        $commonFunctionsPageObj->field = $this->fTimelineEvent;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $I->wait(1);
        $fCTABtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fCTABtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->moveMouseOver($this->fCTABtn);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fCTALink;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->prop = 'border-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51)');
    }

    /**
     * Tests the typography settings.
     */
    public function PostTimelineTypographySettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the typography settings of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyelBtn);
        $I->click($this->dateTypographyBtn);
        $arr = array('20px', '20px', '20px', '40px');
        $I->amGoingTo('Change the date typography and check in the frontend');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->dateTypographyBtn, $this->fDateTime, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '35px'); 

        $I->amGoingTo('Change the heading typography and check in the frontend');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyelBtn);
        $I->click($this->headingTypographyBtn);
        $arr = array('25px', '25px', '25px', '50px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->headingTypographyBtn, $this->fTitle, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '37.5px'); 

        $I->amGoingTo('Change the author typography and check in the frontend');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyelBtn);
        $I->click($this->authorTypographyBtn);
        $arr = array('31px', '31px', '31px', '62px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->authorTypographyBtn, $this->fAuthorLink, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '46.5px'); 
    }

    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography of the flipbox block for desktop view.');
        $I->resizeWindow(1280, 950);
        $I->selectOption('Font Family', 'Actor');
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->wait(1);
        $I->selectOption('Font Weight', '600');
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
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '600'); 
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
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyelBtn);
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
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyelBtn);
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
     * Tests the content padding settings.
     */
    public function PostTimelinePaddingSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the padding setting of the contents of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->paddingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '26' );
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->contentPaddingInput);
        $commonFunctionsPageObj->field = $this->contentPaddingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the padding in the frontend.');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->field = $this->fContentContainer;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '22px');
        $I->wait(1);
        $I->resizeWindow(375, 812);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '26px');
        $I->wait(1);
    }

    /**
     * Tests the spacing settings.
     */
    public function PostTimelineSpacingSettingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the block bottom spacing settings of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $views = array($commonFunctionsPageObj->desktopView, $commonFunctionsPageObj->tabletView, $commonFunctionsPageObj->mobileView);
        $inputValues = array('25px', '22px', '20px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $views, $this->fSingleBlock, $this->blockBottomInput, $inputValues);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the Heading bottom spacing settings of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $views = array($this->desktopView2, $this->tabletView2, $this->mobileView2);
        $inputValues = array('40px', '30px', '25px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $views, $this->fContentTitle, $this->headingBottomInput, $inputValues);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the Author bottom spacing settings of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $views = array($this->desktopView3, $this->tabletView3, $this->mobileView3);
        $inputValues = array('33px', '12px', '6px');
        $I->wait(1);
        $btnBoxShadow = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->btnBoxShadow))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->wait(1);
        $this->_spacingTest($I, $commonFunctionsPageObj, $views, $this->fAdminContainer, $this->authorBottomInput, $inputValues);
        $I->resizeWindow(1280, 950);
        $I->wait(1); 

        $I->amGoingTo('Change the Excerpt bottom spacing, vertical and horizontal spacing');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->wait(1);
        $btnBoxShadow = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->btnBoxShadow))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->wait(1);
        $I->click($this->excerptBottomInput);
        $commonFunctionsPageObj->field = $this->excerptBottomInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '50' );
        $I->wait(1);
        $I->click($this->verticalSpaceInput);
        $commonFunctionsPageObj->field = $this->verticalSpaceInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $I->wait(1);
        $I->click($this->horizontalSpaceInput);
        $commonFunctionsPageObj->field = $this->horizontalSpaceInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the excerpt, vertical and horizontal spacings in the frontend.');
        $commonFunctionsPageObj->field = $this->fContent;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50px');
        $I->wait(1);
    }

    /**
     * This is a single spacing test.
     */
    public function _spacingTest($I, $commonFunctionsPageObj, $views, $selector, $input, $inputValues)
    {
        $I->click($views[0]);
        $I->click($input);
        $commonFunctionsPageObj->field = $input;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $inputValues[0] );
        $I->click($views[1]);
        $I->click($input);
        $commonFunctionsPageObj->field = $input;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $inputValues[1] );
        $I->click($views[2]);
        $I->click($input);
        $commonFunctionsPageObj->field = $input;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $inputValues[2] );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing settings of the post timeline block.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $inputValues[0]);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $inputValues[1]);
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $inputValues[2]);
        $I->wait(1);
    }

    /**
     * Test the box shadow settings.
     */
    public function PostTimelineBoxShadowSettingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the box shadow settings of the post timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->btnBoxShadow);
        $I->click($this->boxShadowOptionsBtn);
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

        $I->amGoingTo('Check box shadow style in frontend');
        $I->wait(1);
        $boxShadowSpread = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fBtnParent))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(2);
        $commonFunctionsPageObj->field = $this->fBtnParent;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->btnBoxShadow);
        $I->scrollTo($this->boxShadowResetBtn, 20);
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(1);
        $boxShadowSpread = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fBtnParent))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(2);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 0px 0px 0px 0px');
    }
}
