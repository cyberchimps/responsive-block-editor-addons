<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;

class BlockQuoteCest
{

    public $sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    public $blockQuoteBlock = 'div[data-title="Blockquote"]';    
    public $blockQuoteText = 'div[class="responsive-block-editor-addons-block-blockquote-item"] > span';
   
    // This function runs before running each test.
    public function _before(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Login as admin.');
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a blockqote block.');
        $I->amOnPage('/blockquote-block');
        // $commonFunctionsPageObj->addBlock($I);  
        $I->wait(4);      
        // $I->fillField($commonFunctionsPageObj->searchBox, 'blockquote');
        // $commonFunctionsPageObj->seeCommonBlockTabs($I);
        // $I->fillField($this->blockQuoteText, $this->sampleText); 
        // $I->wait(2);  
    }

    // This function runs after running each test.
    // public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        
    //     $I->amGoingTo('Remove the divider block.');
    //     $I->amOnPage('/rbea-block');        
    //     $I->wait(3);
    //     $I->click($commonFunctionsPageObj->editBlockBtn);
    //     $I->click($this->blockQuoteBlock);
    //     $I->click($commonFunctionsPageObj->removeBlockToolbarTab);
    //     $I->scrollTo($commonFunctionsPageObj->removeBlockBtn,20);
    //     $I->click($commonFunctionsPageObj->removeBlockBtn); 
    //     $I->wait(3);

    //     $I->amGoingTo('Check block is removed from frontend.');
    //     $commonFunctionsPageObj->publishAndViewPage($I);
        
    //     $I->amGoingTo('Logout');
    //     $loginAndLogout->userLogout($I);
    //     $I->see('You are now logged out.');
    // }

    // Test for RBEA Blockquote block.
    public function BlockQuoteTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        // $I->click( $this->blockQuoteBlock);
        // $I->wait(4);     
    }
}
