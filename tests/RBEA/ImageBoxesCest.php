<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class ImageBoxesCest
{
    public $imageBoxesBlock = 'div[data-title="Image Boxes"]';
    public $fImageBoxesBlock = 'div.wp-block-responsive-block-editor-addons-image-boxes-block__inner';
    
    /**
     * General settings.
     */
    public $generalSettingsBtn = '//button[text()="General"]';
    public $numberOfImageBoxesInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of Image Boxes Blocks"]';
    public $heightInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Height"]';
    public $fImageItem = '(//div[contains(@class, "wp-block-responsive-block-editor-addons-image-boxes-block-item")])[1]';
    public $fLargeGutter = 'div.has-large-gutter';

    /**
     * Content settings.
     */
    public $contentSettingsBtn = '//button[text()="Content"]';
    public $enableTitleBtn = '(//input[contains(@id, "inspector-toggle-control")])[1]';
    public $enableDescriptionBtn = '(//input[contains(@id, "inspector-toggle-control")])[2]';
    public $fBoxItemTitle = '(//h3[@class="wp-block-responsive-block-editor-addons-image-boxes-block-item__title"])[1]';
    public $fBoxItemDescription = '(//p[@class="wp-block-responsive-block-editor-addons-image-boxes-block-item__description"])[1]';
    
    /**
     * Alignment settings.
     */
    public $alignmentSettingsBtn = '//button[text()="Alignment"]';

    /**
     * Background image.
     */
    public $backgroundImageBtn = '//button[text() = "Background Image"]';
    public $imageStyleBtn = '//button[text() = "Image"]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectBackgroundImageBtn = '(//*[text()="Select Background Image"])[1]';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';

    /**
     * Overlay Color settings
     */
    public $bgColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $bgColorOpacity = '//*[contains(@id, "inspector-input-control") and @aria-label="Background Color Opacity"]';
    public $overlayColorStyleBtn = '//*[text() = "Overlay Color"]';
    public $gradientBgBtn = '//input[contains(@id, "inspector-toggle-control")]';
    public $secondaryColor = '(//*[@class="components-circular-option-picker__swatches"]//div[5]/button)[2]';
    public $gradientDegreeInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Gradient Degree"]';
    public $clearBgColor = '(//button[text()="Clear"])[1]';
    public $clearSecondaryBgColor = '(//button[text()="Clear"])[2]';
    public $resetOpacity = '(//button[text()="Reset"])[1]';

    /**
     * Hover Overlay Color settings
     */
    public $hoverOverlayStyleBtn = '//*[text() = "Hover Overlay Color"]';

    /**
     * Text color settings
     */
    public $textColorStyleBtn = '//*[text() = "Text Colors"]';
    public $titleColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[1]';
    public $descriptionColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[2]';
    public $titleColorReset = '(//button[text()="Clear"])[1]';
    public $descriptionColorReset = '(//button[text()="Clear"])[2]'; 
    
    /**
     * Typography settings
     */
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';
    public $fH1Title = '(//h1[@class="wp-block-responsive-block-editor-addons-image-boxes-block-item__title"])[1]';

    /**
     * Padding settings
     */
    public $topPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Box Top Padding"]';
    public $bottomPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Box Bottom Padding"]';
    public $leftPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Box Left Padding"]';
    public $rightPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Box Right Padding"]';

    /**
     * Hover Effect settings
     */
    public $hoverEffectStyleBtn = '(//*[text() = "Hover Effect"])[1]';

    /**
     * Spacing settings
     */
    public $titleSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Spacing"]';
    public $descriptionSpacingInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Description Spacing"]';    
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $borderStyleBtn = '//button[text()="Border"]';

    /**
     * Border setting
     */
    public $borderTypeSelector = '//*[contains(@id, "inspector-select-control")]';
    public $borderTypeSelectOption = 'option[value="dashed"]';
    public $borderTypeSelectOptionNone = 'option[value="none"]';
    public $borderWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Width"]';
    public $borderRadious = '//*[contains(@id, "inspector-input-control") and @aria-label="Border Radius"]';
    public $borderColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $resetBorderWidth = '(//button[text() = "Reset"])[1]';
    public $resetBorderRadius = '(//button[text() = "Reset"])[2]';
    public $clearBorderColor = '//*[text() = "Clear"]';

    public $boxShadowOptionsBtn = '(//div[@class="res-typography-option-actions"]//button)[1]';
    public $boxShadowResetBtn = '(//div[@class="res-typography-option-actions"]//button)[2]';
    public $boxShadowColor = '(//div[@class="components-circular-option-picker__swatches"])[1]//div[5]';
    public $boxShadowLeft = '(//*[contains(@id, "inspector-input-control")])[3]';
    public $boxShadowTop = '(//*[contains(@id, "inspector-input-control")])[4]';
    public $boxShadowBlur = '(//*[contains(@id, "inspector-input-control")])[5]';
    public $boxShadowSpread = '(//*[contains(@id, "inspector-input-control")])[6]';
    public $boxShadowPosition = '(//*[contains(@id, "inspector-select-control")])[2]';
    public $boxShadowPositionSelected = 'option[value="inset"]';    

    /**
     * Arrow settings
     */
    public $arrowStyleBtn = '(//*[text() = "Arrow"])[1]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create an Image Boxes block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'Image Boxes');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    // public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    // {
    //     $I->amGoingTo('Remove the Image Boxes block.');
    //     $I->amOnPage('/rbea-block');        
    //     $I->wait(2);
    //     $I->click($commonFunctionsPageObj->editBlockBtn);
    //     $I->wait(1);
    //     $I->click($this->imageBoxesBlock);
    //     $commonFunctionsPageObj->removeBlock($I);
    //     $loginAndLogout->userLogout($I); 
    // }

    /**
     * This function is to open style tab settings.
     */
    public function _openStyle($I, $commonFunctionsPageObj)
    {
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->click($this->imageBoxesBlock);
        $I->click('Style');
    }

    /**
     * Tests the general settings of the Image Boxes block.
     */
    public function ImageBoxesGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Check the Image Box in the frontend.');
        $I->seeElement($this->fImageBoxesBlock);

        $I->amGoingTo('Change the general settings of the image boxes.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->wait(1);
        $I->click($this->imageBoxesBlock);
        $I->click($this->generalSettingsBtn);
        $I->click($this->numberOfImageBoxesInput);
        $commonFunctionsPageObj->field = $this->numberOfImageBoxesInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );  
        $I->wait(1);
        $I->click($this->heightInput);
        $commonFunctionsPageObj->field = $this->heightInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '350' );  
        $I->selectOption('Gutter', 'L');
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings in the frontend.');
        $imageBoxesItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('wp-block-responsive-block-editor-addons-image-boxes-block-item'));
        }); 
        $I->assertCount(3, $imageBoxesItems);
        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'height';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '350px');
        $I->seeElement($this->fLargeGutter);
        $I->wait(2);
    }

    /**
     * Tests the content settings of the Image Boxes block.
     */
    public function ImageBoxesContentSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Hide the title of the image boxes.');
        $I->seeElement($this->fBoxItemTitle);
        $I->wait(1);
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->wait(1);
        $I->click($this->imageBoxesBlock);
        $I->click($this->contentSettingsBtn);
        $I->wait(1);
        $I->click($this->enableTitleBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the title in the frontend.');
        $I->cantSeeElement($this->fBoxItemTitle);

        $I->amGoingTo('Hide the description of the image boxes');
        $I->wait(1);
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->wait(1);
        $I->click($this->imageBoxesBlock);
        $I->click($this->contentSettingsBtn);
        $I->wait(1);
        $I->click($this->enableTitleBtn);
        $I->click($this->enableDescriptionBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the description in the frontend.');
        $I->seeElement($this->fBoxItemTitle);
        $I->cantSeeElement($this->fBoxItemDescription);
    }

    /**
     * Tests the alignment settings of the Image Boxes block.
     */
    public function ImageBoxesAlignmentSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the alignment settings of the Image Boxes.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->wait(1);
        $I->click($this->imageBoxesBlock);
        $I->click($this->alignmentSettingsBtn);
        $I->wait(1);
        $I->selectOption('Horizontal Alignment', 'Right');
        $I->wait(1);
        $I->selectOption('Vertical Alignment', 'Bottom');
        $commonFunctionsPageObj->publishAndViewPage($I);

        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'text-align';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'right');
    }

    /**
     * Tests the background Image of the Image Boxes block.
     */
    public function ImageBoxesBackgroundImageTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the background image settings of the Image Boxes.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->wait(1);
        $I->click($this->imageBoxesBlock);
        $I->click($this->backgroundImageBtn);
        $I->wait(1);
        $I->click($this->selectBackgroundImageBtn);
        $I->wait(1);
        $I->click($this->mediaLibraryBtn);
        $I->wait(3);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->selectBtn);
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Background image in the frontend.');
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fImageItem))->getCSSValue('background-image');
        });
        $I->assertTrue(str_contains($actualStyle, 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url'));

        $I->amGoingTo('Change the background image attributes of the Image Boxes.');
        $I->click( $commonFunctionsPageObj->editBlockBtn );
        $I->wait(1);
        $I->click($this->imageBoxesBlock);
        $I->click($this->imageStyleBtn);
        $I->wait(1);
        $I->selectOption('Image Size', 'Large');
        $I->wait(1);
        $I->selectOption('Background Position', 'Center Center');
        $I->wait(1);
        $I->selectOption('Background Repeat', 'Repeat');
        $I->wait(1);
        $I->selectOption('Background Size', 'Cover');
        $commonFunctionsPageObj->publishAndViewPage($I); 

        $I->amGoingTo('Check the background image attributes in the frontend.');
        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'background-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'cover, cover'); 
        $commonFunctionsPageObj->prop = 'background-repeat';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'repeat, repeat'); 
        $commonFunctionsPageObj->prop = 'background-position';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50% 50%, 50% 50%');      
    }

    /**
     * Tests the overlay Color of the Image Boxes block.
     */
    public function ImageBoxesOverlayColorTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Overlay color settings of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->overlayColorStyleBtn);
        $I->wait(1);
        $I->click($this->bgColor);
        $I->click($this->bgColorOpacity);
        $commonFunctionsPageObj->field = $this->bgColorOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        $I->amGoingTo('Check the backgraound color in the frontend.');

        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 0.4)'); 
        $I->wait(1);

        $I->amGoingTo('Add secondary gradient color to the Image Boxes block background.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->overlayColorStyleBtn);
        $I->wait(1);
        $I->click($this->gradientBgBtn);
        $I->wait(1);
        $I->click($this->secondaryColor);
        $I->click($this->gradientDegreeInput);
        $commonFunctionsPageObj->field = $this->gradientDegreeInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '240' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the gradient color of the Image Boxes block background.');
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fImageItem))->getCSSValue('background-image');
        });
        $I->assertTrue(str_contains($actualStyle, 'linear-gradient(240deg, rgba(16, 101, 156, 0.4), rgba(51, 51, 51, 0.4)), url'));

        $I->amGoingTo('Reset the color of the Image Boxes block');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->overlayColorStyleBtn);
        $I->wait(1);
        $I->click($this->clearBgColor);
        $I->click($this->clearSecondaryBgColor);
        $I->click($this->resetOpacity);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the background of the Image Box Block after reset.');
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fImageItem))->getCSSValue('background-image');
        });
        $I->assertTrue(str_contains($actualStyle, 'linear-gradient(240deg, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.7)), url'));
    }  
    
    /**
     * Tests the hover overlay color of the Image Boxes block.
     */
    public function ImageBoxesHoverOverlayColorTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the Hover Overlay color settings of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->hoverOverlayStyleBtn);
        $I->wait(1);
        $I->click($this->bgColor);
        $I->click($this->bgColorOpacity);
        $commonFunctionsPageObj->field = $this->bgColorOpacity;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the backgraound color in the frontend.');
        $I->wait(1);
        $I->moveMouseOver($this->fImageItem);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'background-color';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(255, 255, 255, 0.7)'); 
        $I->wait(1);

        $I->amGoingTo('Add secondary gradient color to the Image Boxes block background.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->hoverOverlayStyleBtn);
        $I->wait(1);
        $I->click($this->gradientBgBtn);
        $I->wait(1);
        $I->click($this->secondaryColor);
        $I->click($this->gradientDegreeInput);
        $commonFunctionsPageObj->field = $this->gradientDegreeInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '240' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the gradient color of the Image Boxes block background.');
        $I->wait(1);
        $I->moveMouseOver($this->fImageItem);
        $I->wait(1);
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fImageItem))->getCSSValue('background-image');
        });
        $I->assertTrue(str_contains($actualStyle, 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url'));

        $I->amGoingTo('Reset the color of the Image Boxes block');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->hoverOverlayStyleBtn);
        $I->wait(1);
        $I->click($this->clearBgColor);
        $I->click($this->clearSecondaryBgColor);
        $I->click($this->resetOpacity);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the background of the Image Box Block after reset.');
        $I->wait(1);
        $I->moveMouseOver($this->fImageItem);
        $I->wait(1);
        $actualStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fImageItem))->getCSSValue('background-image');
        });
        $I->assertTrue(str_contains($actualStyle, 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url'));
    }

    /**
     * Tests the text colors of the Image Boxes block.
     */
    public function ImageBoxesTextColorTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the text color settings of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->textColorStyleBtn);
        $I->wait(1);
        $I->click($this->titleColor);
        $I->click($this->descriptionColor);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the text color settings of the Image Boxes block in the frontend.');
        $commonFunctionsPageObj->field = $this->fBoxItemTitle;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fBoxItemDescription;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');

        $I->amGoingTo('Reset the text color settings of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->textColorStyleBtn);
        $I->wait(1);
        $I->click($this->titleColorReset);
        $I->click($this->descriptionColorReset);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the text color settings after reset in the frontend.');
        $commonFunctionsPageObj->field = $this->fBoxItemTitle;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(30, 30, 30, 1)');
        $commonFunctionsPageObj->field = $this->fBoxItemDescription;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(30, 30, 30, 1)');
    }

     /**
     * Tests the typography of the Image Boxes block.
     */
    public function ImageBoxesTypographyTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the typography settings of the title and description of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->selectOption('Title Heading Tag', 'H1');
        $arr = array('30px', '30px', '30px', '60px');
        $I->click($commonFunctionsPageObj->titleTypography);
        $I->wait(2);
        $I->amGoingTo('Change the title typography setting and check in the frontend.');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->titleTypography, $this->fH1Title, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '37.5px'); 
        $I->seeElement($this->fH1Title);

        $I->amGoingTo('Change the description typography setting and check in the frontend.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $arr = array('14px', '14px', '14px', '28px');
        $I->click($commonFunctionsPageObj->descriptionTypography);
        $I->wait(2);
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->descriptionTypography, $this->fBoxItemDescription, $arr);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '24.5px'); 
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
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);  
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }

    /**
     * Tests the padding of the Image Boxes block.
     */
    public function ImageBoxesPaddingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the padding settings of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->paddingStyleBtn);
        $I->click($this->topPadding);
        $commonFunctionsPageObj->field = $this->topPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '25' );
        $I->click($this->bottomPadding);
        $commonFunctionsPageObj->field = $this->bottomPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $I->click($this->leftPadding);
        $commonFunctionsPageObj->field = $this->leftPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '40' );
        $I->click($this->rightPadding);
        $commonFunctionsPageObj->field = $this->rightPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '50' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the padding in the frontend.');
        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '25px 50px 20px 40px'); 
    }

    /**
     * Tests the hover effect of the Image Boxes block.
     */
    public function ImageBoxesHoverEffectTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the hover effect setting of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->hoverEffectStyleBtn);
        $I->wait(1);
        $I->selectOption('Hover Effect', 'Zoom In');
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the hover effecr in the frontend.');
        $I->wait(1);
        $I->moveMouseOver($this->fImageItem);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'transition';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'transform 0.3s ease 0s'); 
    }

    /**
     * Tests the spacing effect of the Image Boxes block
     */
    public function ImageBoxesSpacingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the spacing setting of the Image Boxes block.');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->click($this->titleSpacingInput);
        $commonFunctionsPageObj->field = $this->titleSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '20' );
        $borderStyleBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderStyleBtn))->getLocationOnScreenOnceScrolledIntoView();
        }); 
        $I->click($this->desktopView2);
        $I->click($this->descriptionSpacingInput);
        $commonFunctionsPageObj->field = $this->descriptionSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12' );
        $I->click($commonFunctionsPageObj->tabletView);
        $I->click($this->titleSpacingInput);
        $commonFunctionsPageObj->field = $this->titleSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16' );
        $I->click($this->tabletView2);
        $I->click($this->descriptionSpacingInput);
        $commonFunctionsPageObj->field = $this->descriptionSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '19' );
        $I->click($commonFunctionsPageObj->mobileView);
        $I->click($this->titleSpacingInput);
        $commonFunctionsPageObj->field = $this->titleSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '17' );
        $I->click($this->mobileView2);
        $I->click($this->descriptionSpacingInput);
        $commonFunctionsPageObj->field = $this->descriptionSpacingInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '10' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing setting of the Image Boxes block.');
        $commonFunctionsPageObj->field = $this->fBoxItemTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px');
        $commonFunctionsPageObj->field = $this->fBoxItemDescription;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '12px');
        $I->resizeWindow(375, 812);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fBoxItemTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '17px');
        $commonFunctionsPageObj->field = $this->fBoxItemDescription;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px');
        $I->resizeWindow(965, 1024);
        $I->wait(1);
        $commonFunctionsPageObj->field = $this->fBoxItemTitle;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '16px');
        $commonFunctionsPageObj->field = $this->fBoxItemDescription;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '19px');        
    }

    /**
     * Tests the border settings of the Image Boxes block
     */
    public function ImageBoxesBorderTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
    //     $I->amGoingTo('Change the border setting of the Image Boxes block.');
    //     $this->_openStyle($I, $commonFunctionsPageObj);
    //     $I->click($this->borderStyleBtn);
    //     $I->wait(1);

    //     $I->amGoingTo("Change Image Boxes's border style to dashed");
    //     $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
    //         return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelector))->
    //         findElement( WebDriverBy::cssSelector($this->borderTypeSelectOption) )->click();
    //     });
    //     $I->wait(1);
    //     $I->click($this->borderWidth);
    //     $commonFunctionsPageObj->field = $this->borderWidth;
    //     $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' );
    //     $I->click($this->borderRadious);
    //     $commonFunctionsPageObj->field = $this->borderRadious;
    //     $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '5' );
    //     $I->wait(1); 
    //     $I->click($this->borderColor); 
    //     $commonFunctionsPageObj->publishAndViewPage($I);
        
    //     $I->amGoingTo('Check border style in frontend');
    //     $attr = array(
    //         'border-color' => 'rgb(16, 101, 156)',
    //         'border-style' => 'dashed',
    //         'border-width' => '3px',
    //         'border-radius' => '5px'
    //     );
    //     $this->_checkBorderStyle($I, $attr);    
        
    //     $I->amGoingTo('Reset border style');
    //     $this->_openStyle($I, $commonFunctionsPageObj);
    //     $I->click($this->borderStyleBtn);
    //     $I->click($this->resetBorderWidth);
    //     $I->click($this->resetBorderRadius);
    //     $I->wait(1);
    //     $I->click($this->clearBorderColor);
    //     $commonFunctionsPageObj->publishAndViewPage($I);

    //     $I->amGoingTo('Check reset border style in frontend');
    //     $attr = array(
    //         'border-color' => 'rgb(0, 0, 0)',
    //         'border-style' => 'dashed',
    //         'border-width' => '2px',
    //         'border-radius' => '0px'
    //     );
    //     $this->_checkBorderStyle($I, $attr);

        $I->amGoingTo('Change Box shadow setting');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->borderStyleBtn);
        $dashedBorderStyle = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->borderTypeSelector))->
            findElement( WebDriverBy::cssSelector($this->borderTypeSelectOptionNone) )->click();
        });
        $I->wait(1);
        $I->scrollTo($this->boxShadowOptionsBtn, 20);
        $I->click($this->boxShadowOptionsBtn);
        $I->wait(5);
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

        $I->scrollTo($this->boxShadowSpread, 20);
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
        $commonFunctionsPageObj->field = $this->fImageItem;
        $commonFunctionsPageObj->prop = 'box-shadow';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 3px 5px 30px 5px inset');

        $I->amGoingTo('Reset box shadow style');
        $this->_openStyle($I, $commonFunctionsPageObj);
        $I->click($this->borderStyleBtn);
        $I->scrollTo($this->boxShadowResetBtn, 20);
        $I->click($this->boxShadowResetBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgb(51, 51, 51) 0px 0px 0px 0px');
    }

    /**
     * This function checks frontend border settings
     */
    public function _checkBorderStyle( $I, $attr) {
        $border = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->fImageItem));
        });
        $I->assertEquals($attr['border-color'], $border->getCSSValue('border-color'));
        $I->assertEquals($attr['border-style'], $border->getCSSValue('border-style'));
        $I->assertEquals($attr['border-width'], $border->getCSSValue('border-width'));
        $I->assertEquals($attr['border-radius'], $border->getCSSValue('border-radius'));
    }

    
}
