<?php
namespace Page\RBEA;

class CommonFunctionsPage
{
    // include url of current page
    public static $URL = '';

    /**
     * Variables for test
     */
    public $searchBox = 'input[class="block-editor-inserter__search-input"]';
    public $blockInSearch = 'div[class="block-editor-block-types-list__list-item"] > button';
    public $addBlockBtn = 'button[aria-label="Add block"]';
    public $closeDialogBtn = 'button[aria-label="Close dialog"]';
    public $editBlockBtn = '#wp-admin-bar-edit > a';
    public $publishBtn = '.editor-post-publish-button';
    public $viewPage = '.components-snackbar__content > a';

    /**
     * Variable to remove blocks
     */
    public $removeBlockToolbarTab = '//button[@aria-label="Options" and @tabindex]';
    public $removeBlockBtn = '//*[@id="editor"]/div[2]/div/div/div/div/div[3]/div/button/span[1]';
   

    /**
     * Declare UI map for this page here. CSS or XPath allowed.
     * public static $usernameField = '#username';
     * public static $formSubmitButton = "#mainForm input[type=submit]";
     */

    /**
     * Basic route example for your current URL
     * You can append any additional parameter to URL
     * and use it in tests like: Page\Edit::route('/123-post');
     */
    public static function route($param)
    {
        return static::$URL.$param;
    }

    /**
     * @var \RBEATester;
     */
    protected $rBEATester;

    public function __construct(\RBEATester $I)
    {
        $this->rBEATester = $I;
    }
    
    /**
     * Add new block
     */
    public function addBlock($I){        
        $I->click($this->editBlockBtn);
        $I->click($this->closeDialogBtn);
        $I->click($this->addBlockBtn);
    }

    /**
     * See content, style and advanced tabs.
     */
    public function seeCommonBlockTabs($I){
        
        $I->seeElement($this->blockInSearch);
        $I->click($this->blockInSearch);
        $I->see('Content');
        $I->see('Style');
        $I->see('Advanced');
    }

    /**
     * Publish page and click on view page
     */
    public function publishAndViewPage($I){
        $I->click($this->publishBtn);
        $I->wait(5);
        $I->click($this->viewPage);
    }

    /**
     * This function removes the added block
     */
    public function removeBlock($I) {
        $I->click($this->removeBlockToolbarTab);
        $I->scrollTo($this->removeBlockBtn,20);
        $I->click($this->removeBlockBtn); 
        $I->wait(3);

        $I->amGoingTo('Check block is removed from frontend.');
        $this->publishAndViewPage($I);
    }    
}
