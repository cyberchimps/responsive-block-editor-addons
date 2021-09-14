<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class ContentTimelineCest
{
    public $contentTimelineBlock = '//div[@data-title="Content Timeline"]';

    /**
     * Content settings
     * 1. General
     */
    public $generalStyleBtn = '//button[text()="General"]';
    public $numberOfItemsInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of Items"]';
    public $orientationSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $orientationSelectedOption = 'option[value="right"]';
    public $arrowAlignmentSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $arrowAlignmentSelectedOption = 'option[value="top"]';
    public $stackOnSelect = '(//*[contains(@id, "inspector-select-control")])[3]';
    public $stackOnSelectedOption = 'option[value="mobile"]';
    public $timeLineFieldarticles = '.responsive-timeline__field.responsive-timeline__field-wrap';
    public $fResponsiveTimelineBlock = 'div .responsive-timeline__right-block.responsive-timeline__arrow-top.responsive-timeline__responsive-mobile';
    public $fResponsiveTimelineBlockPara = '(//p[@class="responsive-timeline-desc-content"])[1]';

    /**
     * 2. Timeline Item 
     */
    public $timelineItemStyleBtn = '//button[text()="Timeline Item"]';
    public $headingTagSelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $headingTagSelectedOption = 'option[value="h1"]';
    public $borderStyleSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $borderStyleSelectedOption = 'option[value="dotted"]';
    public $borderWidthInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadiusInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $borderColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $paddingInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Padding"]';
    public $borderWidthResetBtn = '(//*[text() = "Reset"])[1]';
    public $borderRadiusResetBtn = '(//*[text() = "Reset"])[2]';
    public $paddingResetBtn = '(//*[text() = "Reset"])[3]';
    public $clrBorderColorBtn = '//*[text() = "Clear"]';
    public $fTimelineItemHeadingElement = '//h1[@class = "responsive-timeline__heading"]';
    public $fTimelineEventItem = '(//div[@class="responsive-timeline__events-inner-new"])[1]';

    /**
     * 3. Date Settings.
     */
    public $dateSettingsBtn = '//button[text()="Date Settings"]';
    public $dateFormatSelect = '//*[contains(@id, "inspector-select-control")]';
    public $dateFormatSelectedOption = 'option[value="F j, Y"]';
    public $date1 = '(//input[contains(@id, "inspector-text-control") and @type="text"])[1]';
    public $date2 = '(//input[contains(@id, "inspector-text-control") and @type="text"])[2]';
    public $displayPostDateBtn = '//*[contains(@id, "inspector-toggle-control")]';

    /**
     * Style settings
     * 1. Connector style
     */
    public $connectorStyleBtn = '//button[text()="Connector"]';
    public $selectIconBtn = '(//*[@class="components-panel__body is-opened"]//div[2])[1]';
    public $selectedIcon = '//*[@class="rfipicons__selector"]//span[15]';
    public $iconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Size"]';
    public $backgroundIconSize = '//*[contains(@id, "inspector-input-control") and @aria-label="Icon Background Size"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $connectorWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Connector Width"]'; 
    public $linkColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[2]/button';
    public $connectorIconColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[6]/button';
    public $connectorBgColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[5]/button';
    public $connectorBorderColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[6]/button';
    public $fConnectorIconSvgPath = 'path("M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z")';
    public $fConnectorIconSvg = '.responsive-timeline__marker.responsive-timeline__in-view-icon svg';
    public $fConnectorIconWrap = '(//div[@class="responsive-block-editor-addons-ifb-icon-wrap"])[1]';
    public $fConnectorIconSpan = '(//div[@class="responsive-block-editor-addons-ifb-icon-wrap"])[1]//span';
    public $fOutViewTimeline = '(//div[@class="responsive-timeline__marker out-view-responsive-timeline__icon responsive-timeline__out-view-icon"])[1]';
    public $fTimelineLine = '.responsive-timeline__line';

    /**
     * 2. Spacing style
     */
    public $spacingStyleBtn = '//button[text()="Spacing"]';
    public $desktopView1 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView1 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView1 = '(//button[contains(@id, "mobile")])[2]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[3]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[3]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[3]';
    public $horizontalSpacing = '//*[contains(@id, "inspector-input-control") and @aria-label="Horizontal Spacing"]';
    public $verticalSpacing = '//*[contains(@id, "inspector-input-control") and @aria-label="Vertical Spacing"]';
    public $headingBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Heading Bottom Margin"]';
    public $fHeadingEle = '(//h4[@class="responsive-timeline__heading"])[1]';
    public $fTimelineDiv = '(((//div[@class="responsive-timeline__days"])//article)[1]//div//div)[1]';
    public $fTimelineArticle = '(//article[@class="responsive-timeline__field responsive-timeline__field-wrap in-view"])[1]';
    public $horizontalMarginResetBtn = '(*//button[text()="Reset"])[1]';
    public $verticalMarginResetBtn = '(*//button[text()="Reset"])[2]';
    public $headingBottomMarginResetBtn = '(*//button[text()="Reset"])[3]';

    /**
     * 3. Typography style
     */
    public $typographyStyleBtn = '//button[text()="Typography"]';
    public $dateTypographyBtn = '//button[text()="Date Typography"]';
    public $headingTypographyBtn = '//button[text()="Heading Typography"]';
    public $contentTypographyBtn = '//button[text()="Content Typography"]';

    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]'; 
    public $date = '(//div[@class="responsive-timeline__date-new"])[1]';
    public $typographyColorSettingBtn = '//*[text()="Color Settings"]'; 
    public $fHeading = '(//h4[@class = "responsive-timeline__heading"])[1]';
    public $fContent = '(//p[@class="responsive-timeline-desc-content"])[1]';

    /**
     * 4. Color Settings style
     */
    public $colorSettingsStyleBtn = '//*[text()="Color Settings"]';
    public $backgroundColor = '(//*[@class="components-circular-option-picker__swatches"])[1]//div[5]/button';
    public $headingColor = '(//*[@class="components-circular-option-picker__swatches"])[2]//div[6]/button';
    public $contentColor = '(//*[@class="components-circular-option-picker__swatches"])[3]//div[1]/button';
    public $dateColor = '(//*[@class="components-circular-option-picker__swatches"])[4]//div[2]/button';
    public $colorOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Opacity"]';
    public $fContentBg = '(//div[@class="responsive-timeline__events-inner-new"])[1]';
    public $clrBgColorBtn = '(//button[text()="Clear"])[1]';
    public $clrHeadingColorBtn = '(//button[text()="Clear"])[2]';
    public $clrContentColorBtn = '(//button[text()="Clear"])[3]';
    public $clrDateColorBtn = '(//button[text()="Clear"])[4]';
    public $resetColorOpacityBtn = '//button[text()="Reset"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Content Timeline block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'content timeline');
        $I->wait(1);
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the content timeline block.');
        $I->amOnPage('/rbea-block'); 
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->contentTimelineBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

    /**
     * Function to open style tab settings.
     */
    public function _openStyle($I, $commonFunctionsPageObj ) {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->contentTimelineBlock);
        $I->click('Style');
    }

    /**
     * This test checks the general settings of timeline block.
     */
    public function ContentTimeLineGeneralContentTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the General settings of the content timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->contentTimelineBlock);
        $I->wait(1);
        $I->click($this->generalStyleBtn);
        $commonFunctionsPageObj->field = $this->numberOfItemsInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '4' );
        $orientation = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->orientationSelect))->
            findElement( WebDriverBy::cssSelector($this->orientationSelectedOption) )->click();
        });
        $arrowAlignment = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->arrowAlignmentSelect))->
            findElement( WebDriverBy::cssSelector($this->arrowAlignmentSelectedOption) )->click();
        });
        $stackOn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->stackOnSelect))->
            findElement( WebDriverBy::cssSelector($this->stackOnSelectedOption) )->click();
        });
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I); 
        
        $I->amGoingTo('Check the timeline block in the frontend.');
        $I->seeElement($this->fResponsiveTimelineBlock);
        $I->resizeWindow(375, 812); 
        $commonFunctionsPageObj->field = $this->fResponsiveTimelineBlockPara;
        $commonFunctionsPageObj->prop = 'display';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'block');  
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);  
    }

    /**
     * This test checks the timeline item setting of timeline block.
     */
    public function ContentTimeLineItemContentTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the timeline item settings of the content timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->contentTimelineBlock);
        $I->wait(1);
        $I->click($this->timelineItemStyleBtn);
        $headingTag = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->headingTagSelect))->
            findElement( WebDriverBy::cssSelector($this->headingTagSelectedOption) )->click();
        });
        $borderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderStyleSelect))->
            findElement( WebDriverBy::cssSelector($this->borderStyleSelectedOption) )->click();
        });
        $I->click($this->borderWidthInputField);
        $commonFunctionsPageObj->field = $this->borderWidthInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->borderRadiusInputField);
        $commonFunctionsPageObj->field = $this->borderRadiusInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $I->click($this->borderColor);
        $I->wait(1);
        $I->click($this->paddingInputField);
        $commonFunctionsPageObj->field = $this->paddingInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '18' );
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the timeline item settings of the content timeline block in the frontend.');
        $I->seeElement($this->fTimelineItemHeadingElement);
        $I->seeElement($this->fTimelineEventItem);
        $attr = array(
            'border-color' => 'rgb(16, 101, 156)',
            'border-style' => 'dotted',
            'border-width' => '3px',
            'border-radius' => '5px',
            'padding' => '18px'
        );
        $this->_checkBorderStyle($I, $attr); 

        $I->amGoingTo('Reset the timeline item settings of the content timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->contentTimelineBlock);
        $I->wait(1);
        $I->click($this->timelineItemStyleBtn);
        $I->click($this->borderWidthResetBtn);
        $I->click($this->borderRadiusResetBtn);
        $paddingResetBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->paddingResetBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->clrBorderColorBtn);
        $I->click($this->paddingResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the timeline item settings of the content timeline block after reset in the frontend.');
        $attr = array(
            'border-color' => 'rgb(51, 51, 51)',
            'border-style' => 'dotted',
            'border-width' => '1px',
            'border-radius' => '2px',
            'padding' => '20px'
        );
        $this->_checkBorderStyle($I, $attr);
    }

     /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fTimelineEventItem));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
        $I->assertEquals($attr['padding'], $border->getCSSValue('padding'));
    }

    /**
     * This test checks the date settings of timeline block.
     */
    public function ContentTimeLineDateSettingsContentTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the date settings of the content timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->contentTimelineBlock);
        $I->wait(1);
        $I->click($this->dateSettingsBtn);
        $dateFormat = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->dateFormatSelect))->
            findElement( WebDriverBy::cssSelector($this->dateFormatSelectedOption) )->click();
        });    
        $I->click($this->date1);
        $I->clearField($this->date1);
        $commonFunctionsPageObj->field = $this->date1;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10-4-2021' );

        $I->click($this->date2);
        $I->clearField($this->date2);
        $commonFunctionsPageObj->field = $this->date2;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '21-12-2021' );
        $commonFunctionsPageObj->publishAndViewPage($I);
       
        $I->amGoingTo('Check the dates in the frontend');
        $I->see('10-4-2021');
        $I->see('21-12-2021');

        $I->amGoingTo('Hide the date of the content timeline block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->click($this->contentTimelineBlock);
        $I->wait(1);
        $I->click($this->dateSettingsBtn);
        $I->click($this->displayPostDateBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->cantSee('10-4-2021');
        $I->cantSee('21-12-2021');
    }

    /**
     * This test checks the connector style of timeline block.
     */
    public function ContentTimeLineConnectorStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the connector style of the content timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->connectorStyleBtn);
        $I->wait(1);
        $I->click($this->selectIconBtn);
        $I->wait(2);
        $I->click($this->selectedIcon);
        $I->wait(1);
        $I->click($this->selectIconBtn);
        $I->wait(1);
        $I->click($this->iconSize);
        $commonFunctionsPageObj->field = $this->iconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );
        $I->click($this->backgroundIconSize);
        $commonFunctionsPageObj->field = $this->backgroundIconSize;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '38' );
        $I->click($this->borderWidth);
        $commonFunctionsPageObj->field = $this->borderWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
        $I->click($this->connectorWidth);
        $commonFunctionsPageObj->field = $this->connectorWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8' );

        $I->amGoingTo('Change the color of the normal connector icon');
        $I->click('Normal');
        $linkColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->linkColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->linkColor);
        $connectorIconColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->connectorIconColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->connectorIconColor);
        $connectorBgColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->connectorBgColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->connectorBgColor);
        $connectorBorderColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->connectorBorderColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->connectorBorderColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the normal connector style of the content timeline block in the frontend.');
        $commonFunctionsPageObj->field = $this->fTimelineLine;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px');
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(16, 101, 156, 1)');     
        $commonFunctionsPageObj->field = $this->fOutViewTimeline;
        $commonFunctionsPageObj->prop = 'background-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->prop = 'min-width';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '38px');
        $commonFunctionsPageObj->prop = 'border-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(255, 255, 255)'); 
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fConnectorIconSvg;
        $commonFunctionsPageObj->prop = 'fill';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(255, 255, 255)');
        $commonFunctionsPageObj->field = $this->fConnectorIconSpan;
        $commonFunctionsPageObj->prop = 'width';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '22px');  
        $I->wait(1);
    }

    /**
     * This test checks the spacing style of the timeline block.
     */
    public function ContentTimeLineSpacingStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change the spacing style of the content timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);

        $I->amGoingTo('Change the spacing of in desktop view.');
        $I->click($commonFunctionsPageObj->desktopView);
        $desktopSpacing = array('13px', '15px', '12px');
        $desktopView = array($this->desktopView1, $this->desktopView2);
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $desktopSpacing, $desktopView);

        $I->amGoingTo('Check padding and margin in the frontend for desktop view.');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopSpacing);

        $I->amGoingTo('Change the spacing in tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->click($commonFunctionsPageObj->tabletView);
        $tabletSpacing = array('11px', '10px', '7px');
        $tabletView = array($this->tabletView1, $this->tabletView2);
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $tabletSpacing, $tabletView);

        $I->amGoingTo('Check padding and margin in the frontend for tablet view.');
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Change the spacing in mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->click($commonFunctionsPageObj->mobileView);
        $mobileSpacing = array('6px', '7px', '7px');
        $mobileView = array($this->mobileView1, $this->mobileView2);
        $this->_changePaddingAndMargin($I, $commonFunctionsPageObj, $mobileSpacing, $mobileView);

        $I->amGoingTo('Check padding and margin in the frontend for mobile view.');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the spacing for desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->spacingStyleBtn);
        $I->click($this->horizontalMarginResetBtn);
        $I->click($this->verticalMarginResetBtn);
        $I->click($this->headingBottomMarginResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check padding and margin in the frontend for desktop view after reset.');
        $desktopSpacing = array('5px', '5px', '5px');
        $this->_checkPaddingAndMargin($I, $commonFunctionsPageObj, $desktopSpacing);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
    }  
    
    /**
     * To change and check the spacing in different device modes
     */
    public function _changePaddingAndMargin($I, $commonFunctionsPageObj, $spacing, $view){ 
        $I->wait(1);
        $I->click($this->horizontalSpacing);
        $commonFunctionsPageObj->field = $this->horizontalSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[0] );

        $I->click($view[0]);
        $I->click($this->verticalSpacing);
        $commonFunctionsPageObj->field = $this->verticalSpacing;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[1] );
        $I->click($view[1]);

        $I->click($this->headingBottomMargin);
        $commonFunctionsPageObj->field = $this->headingBottomMargin;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $spacing[2] );
        $commonFunctionsPageObj->publishAndViewPage($I);
     }

    /**
     * To check padding and margin in the front end.
     */
    public function _checkPaddingAndMargin($I, $commonFunctionsPageObj, $arr){
        $commonFunctionsPageObj->field = $this->fTimelineDiv;
        $commonFunctionsPageObj->prop = 'margin-left';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[0]); 
        $commonFunctionsPageObj->prop = 'margin-right';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[0]);
        $commonFunctionsPageObj->field = $this->fTimelineArticle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[1]);
        $commonFunctionsPageObj->field = $this->fHeadingEle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[2]);
    }

    /**
     * This test checks the typography style of the timeline block.
     */
    public function ContentTimeLineTypographyStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change the typography style of the content timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->dateTypographyBtn);
        $arr = array(
            'input_font_size' => '25',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '25', 
            'tablet_font_size' => '25',
            'line_height' => '50px'
        );
        $I->amGoingTo('Change the date typography for the desktop view.');
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->desktopView, $arr, $this->date);

        $I->amGoingTo('Change the date typography for the tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->dateTypographyBtn);
        $arr = array(
            'input_font_size' => '20',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '20', 
            'tablet_font_size' => '20',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->tabletView, $arr, $this->date);

        $I->amGoingTo('Change the date typography for the mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->dateTypographyBtn);
        $arr = array(
            'input_font_size' => '10',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '10', 
            'tablet_font_size' => '20',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->mobileView, $arr, $this->date);

        $I->amGoingTo('Reset line height');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->dateTypographyBtn);
        $typographyColorSettingBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->typographyColorSettingBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check reset line height in the frontend');
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->field = $this->date;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px');

        $I->amGoingTo('Change the heading typography for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->headingTypographyBtn);
        $arr = array(
            'input_font_size' => '25',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '25', 
            'tablet_font_size' => '25',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->desktopView, $arr, $this->fHeading);
        
        $I->amGoingTo('Change the heading typography for the tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->headingTypographyBtn);
        $arr = array(
            'input_font_size' => '22',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '22', 
            'tablet_font_size' => '22',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->tabletView, $arr, $this->fHeading);

        $I->amGoingTo('Change the Content typography for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->click($this->contentTypographyBtn);
        $arr = array(
            'input_font_size' => '25',
            'desktop_font_size'=>'25',
            'mobile_font_size' => '25', 
            'tablet_font_size' => '25',
            'line_height' => '50px'
        );
        $this->_typographySettings($I, $commonFunctionsPageObj, $commonFunctionsPageObj->desktopView, $arr, $this->fContent);
    }

    /**
     * This function changes typography settings 
     */
    public function _typographySettings($I, $commonFunctionsPageObj, $view, $arr, $selector)
    {
        $I->resizeWindow(1280, 950);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($view);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr['input_font_size'] );
        $I->wait(1);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $typographyColorSettingBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->typographyColorSettingBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr['line_height']);
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr['desktop_font_size'].'px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr['tablet_font_size'].'px');
        $I->resizeWindow(1280, 950);
        $I->wait(1);
    }

    /**
     * This test checks the color style of the timeline block.
     */
    public function ContentTimeLineColorStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color settings of the content timeline block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorSettingsStyleBtn);
        $I->click($this->backgroundColor);
        $I->wait(1);
        $I->click($this->headingColor);
        $I->wait(1);
        $colorOpacity = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->colorOpacity))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->contentColor);
        $I->wait(1);
        $I->click($this->dateColor);
        $I->wait(1);
        $I->click($this->colorOpacity);
        $commonFunctionsPageObj->field = $this->colorOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '94' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the color settings of the content timeline in the frontend.');
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->field = $this->date;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fHeading;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)');
        $commonFunctionsPageObj->field = $this->fContent;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
        $commonFunctionsPageObj->field = $this->fContentBg;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 0.94)');
        
        $I->amGoingTo('Reset the colors of the content timeline block items.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->colorSettingsStyleBtn);
        $I->click($this->clrBgColorBtn);
        $I->click($this->clrHeadingColorBtn);
        $resetColorOpacityBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetColorOpacityBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->clrContentColorBtn);
        $I->wait(1);
        $I->click($this->clrDateColorBtn);
        $I->wait(1);
        $I->click($this->resetColorOpacityBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the colors after reset in the frontend.');
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->field = $this->date;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fHeading;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fContent;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(51, 51, 51, 1)');
        $commonFunctionsPageObj->field = $this->fContentBg;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(238, 238, 238, 1)'); 
    }
}
