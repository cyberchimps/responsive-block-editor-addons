window.addEventListener( 'load', function () { rbeaTabInit(); anchorTabId(); });
window.addEventListener( 'hashchange', anchorTabId, false );
 
function rbeaTabInit(){
	var tabWrap = document.getElementsByClassName( 'responsive-block-editor-addons-tabs__wrap' );
	for ( var item = 0; item < tabWrap.length; item++ ) {
        
        var tabActive = tabWrap[item].getAttribute('data-tab-active');
        var tabLi = tabWrap[item].querySelectorAll( '.responsive-block-editor-addons-tabs__panel li.responsive-block-editor-addons-tab' );
        for ( var i = 0; i < tabLi.length; i++ ) {
            if(!tabLi[i].classList.contains("responsive-block-editor-addons-tabs__active")){
                if(tabActive == i){  
                    tabLi[i].classList.add('responsive-block-editor-addons-tabs__active');
                    tabWrap[item].classList.add( 'responsive-block-editor-addons-active-tab-'+i); 
                }else{
                    tabWrap[item].classList.add( 'responsive-block-editor-addons-active-tab-'+tabActive);
                }
                tabLi[i].setAttribute('id', 'responsive-block-editor-addons-tabs__tab'+i);
            }
        }
        var tabBody = tabWrap[item].querySelectorAll( '.responsive-block-editor-addons-tabs__body-wrap .responsive-block-editor-addons-tabs__body-container' );
        for ( var body = 0; body < tabBody.length; body++ ) {
            if(tabBody[body] == undefined){
                return
            }
            if(tabBody[body].classList.contains( '.responsive-block-editor-addons-tabs__inner-tab' )){
               
                tabBody[body].classList.add('responsive-block-editor-addons-inner-tab-'+body); 
            }
        }
		var tabList = tabWrap[item].querySelectorAll( '.responsive-block-editor-addons-tabs__panel li:not(.responsive-block-editor-addons-tabs__active) a' );
        for ( var tab = 0; tab < tabList.length; tab++ ) {
			tabList[tab].setAttribute('aria-selected', 'false');
		}
        
        var tabAnchor = tabWrap[item].querySelectorAll( '.responsive-block-editor-addons-tabs__panel li a' );
        for ( var a = 0; a < tabAnchor.length; a++ ) {
            if(!tabAnchor[a].classList.contains("responsive-block-editor-addons-tabs-list")){
                tabAnchor[a].classList.add('responsive-block-editor-addons-tabs-list');
                tabAnchor[a].setAttribute('data-tab', a);
            }
		}
		tabWrap[item].querySelector('.responsive-block-editor-addons-tabs__panel li.responsive-block-editor-addons-tabs__active a').setAttribute('aria-selected', 'true');
        
        var tabPanel = tabWrap[item].querySelectorAll('.responsive-block-editor-addons-tabs__panel li a');
       
        for ( var panel = 0; panel < tabPanel.length; panel++ ) {
			tabPanel[panel].addEventListener("click", function( e ) {
                tabClickEvent( e, this , this.parentElement , tabPanel.length);
            });
		}
         
    }
}
function tabClickEvent(e , tabName , list , count){

    e.preventDefault();
    
    var tabId = tabName.getAttribute( 'data-tab' );
    var mainWrap = list.closest( '.responsive-block-editor-addons-tabs__wrap' );
    
    for ( var idx = 0; idx < 15; idx++ ) {
        if(mainWrap.classList.contains('responsive-block-editor-addons-active-tab-'+idx)){
            mainWrap.classList.remove( 'responsive-block-editor-addons-active-tab-'+idx); 
        }else{
            mainWrap.classList.add('responsive-block-editor-addons-active-tab-'+ tabId);
        }

    }
    var listPanel = list.closest( '.responsive-block-editor-addons-tabs__panel' );

    var oldActiveTab = listPanel.querySelector( '.responsive-block-editor-addons-tabs__active' );
    oldActiveTab.classList.remove( 'responsive-block-editor-addons-tabs__active' );
    
    listPanel.querySelector( 'a.responsive-block-editor-addons-tabs-list' ).setAttribute( 
        'aria-selected', 'false'
    );

    list.classList.add( 'responsive-block-editor-addons-tabs__active' );

    tabName.setAttribute( 'aria-selected', 'true' );
    
   
    mainWrap.querySelector( '.responsive-block-editor-addons-tabs__body-wrap .responsive-block-editor-addons-tabs__body-container:not(.responsive-block-editor-addons-inner-tab-' + tabId + ')' ).setAttribute( 'aria-hidden', 'true' );
    mainWrap.querySelector( '.responsive-block-editor-addons-tabs__body-wrap .responsive-block-editor-addons-inner-tab-' + tabId ).setAttribute( 'aria-hidden', 'false' );

}
function anchorTabId() {
	if ( window.location.hash != '' && /^#responsive-block-editor-addons-tabs__tab\d$/.test( window.location.hash ) ) {
        var tabId = escape(window.location.hash.substring(1));
        var tabPanel = document.querySelector('#' + tabId );
        const topPos = tabPanel.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
            top: topPos, 
            behavior: 'smooth' 
        })
        var tabNum = tabPanel.querySelector('a.responsive-block-editor-addons-tabs-list').getAttribute( 'data-tab' );
        var listPanel = tabPanel.closest( '.responsive-block-editor-addons-tabs__panel' );

        var oldActiveTab = listPanel.querySelector( '.responsive-block-editor-addons-tabs__active' );
        oldActiveTab.classList.remove( 'responsive-block-editor-addons-tabs__active' );

        listPanel.querySelector( 'a.responsive-block-editor-addons-tabs-list' ).setAttribute( 
            'aria-selected', 'false'
        );
        tabPanel.classList.add( 'responsive-block-editor-addons-tabs__active' );
        tabPanel.setAttribute( 'aria-selected', 'true' );

        var count = listPanel.getElementsByTagName("li").length;
        var mainWrap = tabPanel.closest( '.responsive-block-editor-addons-tabs__wrap' );
        for ( var idx = 0; idx < count; idx++ ) {
            mainWrap.classList.remove( 'responsive-block-editor-addons-active-tab-'+idx); 
        }
        mainWrap.classList.add('responsive-block-editor-addons-active-tab-'+tabNum)
        mainWrap.querySelector( '.responsive-block-editor-addons-tabs__body-wrap .responsive-block-editor-addons-tabs__body-container:not(.responsive-block-editor-addons-inner-tab-' + tabNum + ')' ).setAttribute( 'aria-hidden', 'true' );
        mainWrap.querySelector( '.responsive-block-editor-addons-tabs__body-wrap .responsive-block-editor-addons-inner-tab-' + tabNum ).setAttribute( 'aria-hidden', 'false' );
	}
}