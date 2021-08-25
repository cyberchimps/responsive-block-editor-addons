<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;

class BlockquoteCest
{

    public $sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    public $dividerBlock = 'div[data-title="Blockquote"]';    
    public $blockQuoteText = 'div[class="responsive-block-editor-addons-block-blockquote-item"] > span';
    public function _before(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Login as admin.');
        $loginAndLogout->userLogin($I);

        $I->amGoingTo('Create a blockqote block.');
        $I->amOnPage('/blockquote-block');
        $commonFunctionsPageObj->addBlock($I);        
        $I->fillField($commonFunctionsPageObj->searchBox, 'blockquote');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
    }

    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj){
        $I->click($commonFunctionsPageObj->removeBlockToolbarTab);
        $I->scrollTo($commonFunctionsPageObj->removeBlockBtn,20);
        $I->click($commonFunctionsPageObj->removeBlockBtn); 
        $I->wait(3);

        $I->amGoingTo('Check block is removed from frontend.');
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    // tests
    public function BlockquoteTest(RBEATester $I , LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->fillField($this->blockQuoteText, $this->sampleText); 
        $I->click( $this->blockQuoteText );
        $I->wait(3);     
    }
}
