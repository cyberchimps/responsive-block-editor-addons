<?php
namespace Page\RBEA;

class LogInAndLogOut
{
    // include url of current page
    public static $URL = '';

    // Include variables for test 
    public $usernameField = '#user_login';
    public $usernameValue = 'admin';
    public $passwordField = '#user_pass';
    public $passwordValue = 'password';
    public $submitBtn = '#wp-submit';

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
     * User login.
     */
    public function userLogin($I) {
        $I->amOnPage("/wp-admin");
        $I->fillField( $this->usernameField , $this->usernameValue );
        $I->fillField($this->passwordField , $this->passwordValue );
        $I->click($this->submitBtn);
        $I->see('Welcome to WordPress!');
    }

}
