<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class CountDownCest
{
    public $countDownBlock = '//div[@data-title="Count Down"]';
    public $fCountDownBlock = 'div.responsive-block-editor-addons-block-count-down';

    /**
     * Countdown content settings
     */
    public $dueDate = '//input[@class="form-control"]'; 
    public $fDueDate = '//div[contains(@data-date , "20")]';
    public $activeDate = '(//td[text()="20"])[1]';
    public $publishBtn = '.editor-post-publish-button';
    public $viewPage = '.components-snackbar__content > a';
    
    /**
     * Display content settings
     */
    public $displayStyleBtn = '//button[text()="Display"]';
    public $textAlignRight = '//button[@aria-label="Align text right"]';
    public $stackOnMobile = '(//input[contains(@id, inspector-toggle-control)])[2]';
    public $fCountDownDays = '.responsive-block-editor-addons-countdown-days';
    public $fCountDownItems = 'ul.responsive-block-editor-addons-countdown-items';
    public $inlineBtn = '(//input[contains(@id, inspector-toggle-control)])[1]';
    public $hideHoursBtn = '(//input[contains(@id, inspector-toggle-control)])[5]';
    public $countDownHour = '.responsive-block-editor-addons-countdown-hours';
    public $hideLabelsBtn = '(//input[contains(@id, inspector-toggle-control)])[3]';
    public $fLabels = '(//span[@class="responsive-block-editor-addons-countdown-label"])[1]';
    
    /**
     * Custom label settings
     */
    public $daysInput = '(//*[contains(@id, "inspector-text-control") and @type="text"])[1]';
    public $hoursInput = '(//*[contains(@id, "inspector-text-control") and @type="text"])[2]';
    public $minutInput = '(//*[contains(@id, "inspector-text-control") and @type="text"])[3]';
    public $secondInput = '(//*[contains(@id, "inspector-text-control") and @type="text"])[4]';

    /**
     * Box style settings
     */
    public $boxStyleBtn = '//button[text()="Box Style"]';
    public $desktopView = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView = '(//button[contains(@id, "mobile")])[2]';
    public $boxSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Box Spacing"]';
    public $topInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $bottomInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $leftInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $rightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]';

    public $boxSpacingReset = '(//button[text()="Reset"])[1]';
    public $topResetBtn = '(//button[text()="Reset"])[2]';
    public $bottomResetBtn = '(//button[text()="Reset"])[3]';
    public $leftResetBtn = '(//button[text()="Reset"])[4]';
    public $rightResetBtn = '(//button[text()="Reset"])[5]';
    public $fMinuteItem = '.responsive-block-editor-addons-countdown-item-minutes';
    public $fItemDays = 'li.responsive-block-editor-addons-countdown-item-days';
    public $boxShadowStyleBtn = '//button[text() = "Box Shadow"]';

    public $borderStyleBtn = '//button[text()="Border"]';
    public $borderWidthInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderTopLeftRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius Top Left"]';
    public $borderTopRightRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius Top Right"]';
    public $borderBottomRightRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius Bottom Right"]';
    public $borderBottomLeftRadius = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius Bottom Left"]';
    public $borderColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[1]';
    public $bgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[2]';
    public $digitColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[3]';
    public $labelColor = '(//*[@class="components-circular-option-picker__swatches"]//div[6]/button)[4]';
    public $fdigitSpan = '.responsive-block-editor-addons-countdown-digits-days';
    public $borderWidthResetBtn = '(//button[text()="Reset"])[6]';
    public $borderColorClearBtn = '(//button[text()="Clear"])[1]';
    public $bgColorClearBtn = '(//button[text()="Clear"])[2]';
    public $digitClearBtn = '(//button[text()="Clear"])[3]';
    public $labelClearBtn = '(//button[text()="Clear"])[4]';

    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '(//div[@class="components-circular-option-picker__swatches"])[1]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[7]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[8]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[9]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $boxShadowPositionSelected = 'option[value="inset"]';

    /**
     * Container Spacing
     */
    public $containerSpacingBtn = '//button[text() = "Container Spacing"]';
    public $paddingBtn = '//button[text() = "Padding"]';
    public $marginBtn = '//button[text() = "Margin"]';
    public $containerSpacingTopResetBtn = '(//button[text()="Reset"])[1]';
    public $containerSpacingBottomResetBtn = '(//button[text()="Reset"])[2]';
    public $containerSpacingLeftResetBtn = '(//button[text()="Reset"])[3]';
    public $containerSpacingRightResetBtn = '(//button[text()="Reset"])[4]';

    /**
     * Typography settings
     */
    public $typographyStyleBtn = '//button[text() = "Typography"]';
    public $digitTypographyBtn = '//button[text() = "Digit Typography"]';
    public $labelTypographyBtn = '//button[text() = "Label Typography"]';
    public $fontFamilySelect = '(//*[contains(@id, "inspector-select-control")])[1]';
    public $selectedFontFamilyOption = 'option[value="Actor"]';
    public $fontWeightSelect = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $selectedFontWeightOption = 'option[value="600"]';
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';
    public $letterSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Letter Spacing"]';
    public $fDigit = '//*[@class="responsive-block-editor-addons-countdown-digits responsive-block-editor-addons-countdown-digits-days"]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a count down block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'count down');
        $I->wait(1);
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the count down block.');
        $I->amOnPage('/rbea-block'); 
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I);
    }

     /**
     * Opens style tab
     */
    public function _openStyle($I, $commonFunctionsPageObj)
    {
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->click('Style');
    }


    /**
     * Tests the General settings of count up block.
     */
    public function ContentCountDownTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('See the count down block in the frontend.');
        $I->seeElement($this->fCountDownBlock);
        $I->amGoingTo('Change the count down settings of the count down block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->wait(1);
        $I->click($this->dueDate);
        $I->wait(2);
        $I->click($this->activeDate);
        $I->wait(2);
        $I->click($this->publishBtn);
        $I->wait(5);
        $I->openNewTab();
        $I->wait(2);
        $I->amOnPage('/rbea-block');
        $I->wait(1);
        $I->amGoingTo('Check the count down settings in the frontend.');
        $I->seeInSource('class="responsive-block-editor-addons-countdown-get-date"');
        $I->wait(1);
    }

    /**
     * Tests the display settings of the count down block.
     */
    public function CountDownDisplayTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the display settings of the count down.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->click('Countdown');
        $I->wait(1);
        $I->click($this->displayStyleBtn);
        $I->click($this->textAlignRight);
        $I->wait(1);
        $I->click($this->stackOnMobile);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(1);
        $I->amGoingTo('Check the display settings of the count down.');
        $commonFunctionsPageObj->field = $this->fCountDownDays;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'right'); 
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->field = $this->fCountDownItems;
        $commonFunctionsPageObj->prop = 'flex-direction';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'column'); 
        $I->wait(2);
        $I->resizeWindow(1280, 950);  

        $I->amGoingTo('Change the display settings to inline of the count down.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->click('Countdown');
        $I->wait(1);
        $I->click($this->displayStyleBtn);
        $I->click($this->inlineBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(1);
        $I->amGoingTo('Check the display settings to inline of the count down in the frontend.');
        $commonFunctionsPageObj->field = $this->fCountDownItems;
        $commonFunctionsPageObj->prop = 'display';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'flex'); 

        $I->amGoingTo('Change the display settings to hide the hours of the count down.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->click('Countdown');
        $I->wait(1);
        $I->click($this->displayStyleBtn);
        $I->click($this->hideHoursBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(1);
        $I->amGoingTo('Check the display settings to hide the hours of the count down in the frontend.');
        $I->cantSeeElement($this->countDownHour);

        
        $I->amGoingTo('Change the display settings to hide labels of the count down.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->click('Countdown');
        $I->wait(1);
        $I->click($this->displayStyleBtn);
        $I->click($this->hideLabelsBtn);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->wait(1);
        $I->amGoingTo('Check the display settings to hide labels of the count down in the frontend.');
        $I->cantSeeElement($this->fLabels);
    }
    
    /**
     * Tests the custom labels settings of the count down block.
     */
    public function CountDownCustomLabelsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the custom labels settings of the count down.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(2);
        $I->click($this->countDownBlock);
        $I->click('Countdown');
        $I->click('Custom Labels');
        $I->wait(1);
        $I->click($this->daysInput);
        $I->clearField($this->daysInput);
        $I->fillField($this->daysInput, 'DAYS');
        $I->click($this->hoursInput);
        $I->clearField($this->hoursInput);
        $I->fillField($this->hoursInput,'HOURS');
        $I->click($this->minutInput);
        $I->clearField($this->minutInput);
        $I->fillField($this->minutInput, 'MINUTES');
        $I->click($this->secondInput);
        $I->clearField($this->secondInput);
        $I->fillField($this->secondInput, 'SECONDS');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the custom labels in the frontend');
        $I->see('DAYS');
        $I->see('HOURS');
        $I->see('MINUTES');
        $I->see('SECONDS');
    }

    /**
     * Tests the box style settings of the count down block 
     */
    public function CountDownBoxStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the box style settings of the count down block and check in the frontend for desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->boxSpacingInput);
        $commonFunctionsPageObj->field = $this->boxSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fMinuteItem;
        $commonFunctionsPageObj->prop = 'margin-left';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '8px');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px');

        $I->amGoingTo('Change the box style settings of the count down block and check in the frontend for tablet and mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->boxSpacingInput);
        $commonFunctionsPageObj->field = $this->boxSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '15' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->boxSpacingInput);
        $commonFunctionsPageObj->field = $this->boxSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->resizeWindow(1280, 950);
        $commonFunctionsPageObj->field = $this->fMinuteItem;
        $commonFunctionsPageObj->prop = 'margin-left';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '20px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '15px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the box spacing and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($this->boxSpacingReset);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fMinuteItem;
        $commonFunctionsPageObj->prop = 'margin-left';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '5px');
    }  
    
    /**
     * Tests the box style padding settings of the count down block
     */
    public function CountDownBoxStylePaddingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change the box style padding for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($this->desktopView);
        $desktopArr = array('20px', '20px', '20px', '20px');
        $selector = $this->fItemDays;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'padding', $desktopArr, $selector, 'desktop');

        $I->amGoingTo('Change the box style padding for the tablet view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($this->tabletView);
        $tabletArr = array('13px', '12px', '10px', '25px');
        $selector = $this->fItemDays;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'padding', $tabletArr, $selector, 'tablet');
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the box style padding for the mobile view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($this->mobileView);
        $mobileArr = array('8px', '12px', '7px', '22px');
        $selector = $this->fItemDays;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'padding', $tabletArr, $selector, 'mobile');        
        $I->resizeWindow(1280, 950);
        $I->wait(1);
     
        $I->amGoingTo('Reset the padding for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $I->click($this->desktopView);
        $I->click($this->topResetBtn);
        $I->click($this->bottomResetBtn);
        $I->click($this->leftResetBtn);
        $I->click($this->rightResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fItemDays;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px 0px 0px');
        $I->wait(1);
    }

    /**
     * Performs the padding test.
     */
    public function _spacingTest($I, $commonFunctionsPageObj, $spacing ,$arr , $selector, $view)
    {
        $I->click($this->topInputField); 
        $commonFunctionsPageObj->field = $this->topInputField;       
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->click($this->bottomInputField);   
        $commonFunctionsPageObj->field = $this->bottomInputField;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[1] );
        $I->click($this->leftInputField);   
        $commonFunctionsPageObj->field = $this->leftInputField;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[2] );
        $I->click($this->rightInputField);   
        $commonFunctionsPageObj->field = $this->rightInputField;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[3] );
        $commonFunctionsPageObj->publishAndViewPage($I);
        if($view === 'mobile')
        {
            $I->resizeWindow(375, 812);
        } else if($view === 'tablet') {
            $I->resizeWindow(965, 1024);
        }
        $I->amGoingTo('Check the box style padding in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        if( $spacing === 'padding')
        {
            $commonFunctionsPageObj->prop = 'padding-top';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]);
            $commonFunctionsPageObj->prop = 'padding-bottom';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
            $commonFunctionsPageObj->prop = 'padding-left';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[2]);
            $commonFunctionsPageObj->prop = 'padding-right';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[3]);
        } else {
            $commonFunctionsPageObj->prop = 'margin-top';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[0]);
            $commonFunctionsPageObj->prop = 'margin-bottom';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[1]);
            $commonFunctionsPageObj->prop = 'margin-left';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[2]);
            $commonFunctionsPageObj->prop = 'margin-right';        
            $commonFunctionsPageObj->_checkFrontEndStyle($I, $arr[3]);
        }     
        $I->wait(2);
    }
    
    /**
     * Tests the box style border settings of the count down block.
     */
    public function CountDownBorderStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change the border style of the count down block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $boxShadowStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->borderStyleBtn);
        $I->selectOption('Border Style', 'dotted');
        $I->click($this->borderWidthInput);  
        $commonFunctionsPageObj->field = $this->borderWidthInput;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '4' );

        $I->click($this->borderTopLeftRadius);  
        $commonFunctionsPageObj->field = $this->borderTopLeftRadius;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '22' );

        $I->click($this->borderTopRightRadius);  
        $commonFunctionsPageObj->field = $this->borderTopRightRadius;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );

        $I->click($this->borderBottomRightRadius);  
        $commonFunctionsPageObj->field = $this->borderBottomRightRadius;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );

        $I->click($this->borderBottomLeftRadius);  
        $commonFunctionsPageObj->field = $this->borderBottomLeftRadius;        
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '24' );
        $boxShadowStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->borderColor);

        $labelColor = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->labelColor))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->bgColor);
        $I->wait(1);
        $I->click($this->digitColor);
        $I->wait(1);
        $I->click($this->labelColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the border style in the frontend');
        $commonFunctionsPageObj->field = $this->fMinuteItem;
        $commonFunctionsPageObj->prop = 'border-radius';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '22px 25px 20px 24px'); 
        $commonFunctionsPageObj->prop = 'border';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '4px dotted rgb(51, 51, 51)'); 
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(0, 102, 204, 1)'); 
        $commonFunctionsPageObj->field = $this->fdigitSpan;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(51, 51, 51, 1)'); 
        $commonFunctionsPageObj->field = $this->fLabels;        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 1)'); 
        $I->wait(2);

        $I->amGoingTo('Reset the border style');
        $I->resizeWindow(1280, 950);
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $bgColorClearBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->bgColorClearBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->borderStyleBtn);
        $I->click($this->borderColorClearBtn);
        $labelClearBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->labelClearBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->bgColorClearBtn);
        $I->click($this->digitClearBtn);
        $I->click($this->labelClearBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the border style in the frontend after reset');
        $commonFunctionsPageObj->field = $this->fMinuteItem;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(110, 193, 228, 1)'); 
        $commonFunctionsPageObj->field = $this->fdigitSpan;
        $commonFunctionsPageObj->prop = 'color';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgba(255, 255, 255, 1)'); 
        $I->wait(2);
    }   
    
    /**
     * Tests the box style box shadow settings of the count down block.
     */
    public function CountDownBoxShadowStyleTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Change the box shadow style of the count down block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $boxShadowStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->boxShadowStyleBtn);
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(2);
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
        $commonFunctionsPageObj->field = $this->fMinuteItem;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->boxStyleBtn);
        $boxShadowStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->boxShadowStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->click($this->boxShadowStyleBtn);
        $I->scrollTo($this->boxShadowResetBtn, 20);
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'rgb(51, 51, 51) 0px 0px 0px 0px');
    }

    /**
     * Tests the Container Spacing settings of the count down block.
     */
    public function CountDownContainerSpacingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the container padding spacing of the count down block for desktop view and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->paddingBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $desktopArr = array('25px', '27px', '30px', '40px');
        $selector = $this->fCountDownBlock;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'padding', $desktopArr, $selector, 'desktop');

        $I->amGoingTo('Change the container padding spacing of the count down block for tablet view and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->paddingBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $tabletArr = array('13px', '12px', '10px', '25px');
        $selector = $this->fCountDownBlock;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'padding', $tabletArr, $selector, 'tablet');
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the container padding spacing of the count down block for mobile view and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->paddingBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $mobileArr = array('8px', '12px', '7px', '22px');
        $selector = $this->fCountDownBlock;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'padding', $tabletArr, $selector, 'mobile');        
        $I->resizeWindow(1280, 950);
        $I->wait(1);
     
        $I->amGoingTo('Reset the padding for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->paddingBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->containerSpacingTopResetBtn);
        $I->click($this->containerSpacingBottomResetBtn);
        $I->click($this->containerSpacingLeftResetBtn);
        $I->click($this->containerSpacingRightResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fCountDownBlock;
        $commonFunctionsPageObj->prop = 'padding';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px 0px 0px');
        $I->wait(1);

        $I->amGoingTo('Change the container margin spacing of the count down block for desktop view and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->marginBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $desktopArr = array('20px', '27px', '32px', '40px');
        $selector = $this->fCountDownBlock;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'margin', $desktopArr, $selector, 'desktop');

        $I->amGoingTo('Change the container margin spacing of the count down block for tablet view and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->marginBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->tabletView);
        $tabletArr = array('14px', '30px', '20px', '13px');
        $selector = $this->fCountDownBlock;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'margin', $tabletArr, $selector, 'tablet');
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the container margin spacing of the count down block for mobile view and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->marginBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->mobileView);
        $mobileArr = array('9px', '12px', '8px', '15px');
        $selector = $this->fCountDownBlock;
        $this->_spacingTest($I, $commonFunctionsPageObj, 'margin', $tabletArr, $selector, 'mobile');        
        $I->resizeWindow(1280, 950);
        $I->wait(1);
     
        $I->amGoingTo('Reset the margin for the desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->containerSpacingBtn);
        $I->click($this->marginBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->containerSpacingTopResetBtn);
        $I->click($this->containerSpacingBottomResetBtn);
        $I->click($this->containerSpacingLeftResetBtn);
        $I->click($this->containerSpacingRightResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->field = $this->fCountDownBlock;
        $commonFunctionsPageObj->prop = 'margin';        
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '10px 0px 0px');
        $I->wait(1);
    }

    /**
     * Tests the Typography settings of the count down block.
     */
    public function CountDownTypographyTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the digit typography settings of the count down block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->click($this->digitTypographyBtn);
        $arr = array('26px', '14px', '28px', '52px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->digitTypographyBtn, $this->fDigit, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '52px');

        $I->amGoingTo('Change the label typography settings of the count down block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->typographyStyleBtn);
        $I->click($this->labelTypographyBtn);
        $arr = array('28px', '12px', '14px', '56px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $this->labelTypographyBtn, $this->fLabels, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '56px');
    }

     /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography style of the count down block for desktop view.');
        $I->resizeWindow(1280, 950);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontFamilySelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontFamilyOption) )->click();
        });
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->wait(1);
        $fontFamily = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fontWeightSelect))->
            findElement( WebDriverBy::cssSelector($this->selectedFontWeightOption) )->click();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $I->click($this->letterSpacingInput);
        $commonFunctionsPageObj->field = $this->letterSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
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

        $I->amGoingTo('Change the typography style of the count up block for mobile and desktop view.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($typography);  
        $I->click($commonFunctionsPageObj->tabletView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16px' );
        $I->click($commonFunctionsPageObj->mobileView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8px' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the typography settings in the tablet and mobile view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-size';
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '16px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->wait(1);
        $I->click($this->typographyStyleBtn);
        $I->wait(1);
        $I->click($typography);  
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }

}
