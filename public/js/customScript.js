/**
 * Created by root on 10/14/15.
 */
$(document).ready(function(){
    if( $.cookie('addCartNumber') == null ) $.cookie('addCartNumber', '0');
    var addCartNumber = $.cookie('addCartNumber');
    if ( addCartNumber > 0 ) {
        $('.redCircleBox').empty();
        $('.redCircleBox').append(addCartNumber);
        $('.redCircleBox').css('display', 'block');
    } else {
        $('.redCircleBox').css('display', 'none');
    }

    $('.addCartButton').click(function(){
        var currentCartNumber = $.cookie('addCartNumber');
        currentCartNumber++;
        $.cookie('addCartNumber', currentCartNumber);
    });

    $('.showLeftMenu').mouseenter(function(){
        $('.showLeftMenu').css('cursor', 'pointer');
        var displayCssValue = $('.resLeftMenu').css('display');
        if ( displayCssValue == 'none' ) {
            $('.resLeftMenu').removeClass('visible-lg-block');
            $('.resLeftMenu').removeClass('visible-md-block');
            $('.resLeftMenu').css('position', 'absolute');
            $('.resLeftMenu').css('z-index', '999');

            $('.leftSubMenu').addClass('hiddenSubMenu');
        }
    });
    $('.resLeftMenu').mouseleave(function(){

        var displayCssValue = $('.resLeftMenu').css('display');
        if ( displayCssValue == 'block' ) {
            $('.showLeftMenu').css('cursor', 'default');
            $('.resLeftMenu').addClass('visible-lg-block');
            $('.resLeftMenu').addClass('visible-md-block');
            $('.leftSubMenu').removeClass('hiddenSubMenu');
        }
    });
});

