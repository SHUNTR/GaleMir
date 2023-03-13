// Медиа-Запрос
$(window).on("resize load",function(){
    if(window.matchMedia('(max-width: 1200px)').matches && window.matchMedia('(min-width: 768px)').matches){
        AsideCompressedMode();
        $(".site-menu").addClass("site-menu_compressed");
        $(".site-menu__list-item.active").removeClass('active');
        $('.main-aside').css("left","0px");
     }
     else if(window.matchMedia('(max-width: 768px)').matches){
        DesctopAside();
        $('.main-container').css("paddingLeft","0")
        $('.main-footer').css("paddingLeft","0")
        $(".site-menu").removeClass("site-menu_compressed");
        $(".site-menu__list-item.active").removeClass('active');
        $('.main-aside').css("left","-260px");
        $('.main-header__logo').css('display','none');
        $('.main-header__logo.icon').css('display','block')
     }
     else{
        $('.main-aside').css("left","0px");
         DesctopAside();
     }
})
// Прослушивание всех кликов по окну
$(window).on("click",(function(e){
    if(!e.target.closest('.popup-wrapper') && !e.target.closest('.popup-opener')){
         $.each($('.popup-wrapper'),function(){{
             this.classList.remove('active');
         }})
     }}
 ))
// Прослушивание загрузки страницы
$(document).ready(function(){
    // Прячем прелоудер
    HidePreloader();
   
   
    // Слушаем нажанитие на кнопку фильтра
    $('.artist__btn').click(function(){
        $('.artist__btn.active').removeClass("active");
        $(this).addClass("active");
    });
})
                                                                      // Функции
// Включение и выключение полноэкранного режима
function EnableFullScreen(element){
        let isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
            (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
            (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
            (document.msFullscreenElement && document.msFullscreenElement !== null);
    
        let docElm = document.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
}
// Скрытие прелоудера
function HidePreloader(){
    $('.preloader').fadeOut(700,function(){
        $('.preloader').remove();
    });
}
// Показ панели поиска
function ShowSearchPanel(){
    $('.seacrh-wrapper').addClass('active');
}
// Скрываем панель поиска
function CloseSearchPanel(){
    $('.seacrh-wrapper').removeClass('active');
}
// Открываем менюшку пользователя
function ShowUserMenu(){
    if(!$(".user-wrapper__menu").hasClass("active"))
        {
            $('.user-wrapper__menu').addClass('active');
        }
        else{
            $('.user-wrapper__menu').removeClass('active');
        }
}
//Открываем вкладки навигационного меню
function NavMenuChanger(event){
  
    let item = event.target.closest('.site-menu__list-item');
    if(item.classList.contains('active')){
          item.classList.remove('active');
    }
    else{
        $('.site-menu__list-item.active').removeClass('active');
        item.classList.add('active');
    }
  
}
// Изменение бокового меню
function ChangeAsideMenu(){
    if(window.matchMedia('(min-width: 768px)').matches){ 
        $(".site-menu").toggleClass("site-menu_compressed");
        $(".site-menu__list-item.active").removeClass('active');
        if($(".site-menu").hasClass('site-menu_compressed')){
            AsideCompressedMode();
        }
        else{
            DesctopAside();
        }
    }
    else{
       if( $('.main-aside').css("left") == "0px"){
        $('.main-aside').css("left","-260px");
       }
       else{
         $('.main-aside').css("left","0px");
       }
    }
}
// Включение у бокового меню сжатого режима
function AsideCompressedMode(){
    
    $('.site-menu__btn').each(function(element){
        $(this).removeAttr("onclick");
    })
    $(".main-aside").css("width","88px");
    $('.main-container').css("paddingLeft","88px")
    $('.main-footer').css("paddingLeft","88px")
    $('.main-header__logo').css('display','none');
    $('.main-header__logo.icon').css('display','block')
}
// Включение у бокового меню десктопного режима
function DesctopAside(){
    $('.main-header__logo').css('display','block');
    $('.main-header__logo.icon').css('display','none')
    $(".site-menu").removeClass("site-menu_compressed");
    $('.site-menu__btn').each(function(element){
        $(this).attr('onclick',"NavMenuChanger(event)");
    })
    $(".main-aside").css("width","260px");
    $('.main-container').css("paddingLeft","260px")
    $('.main-footer').css("paddingLeft","260px")
}
// Проверка текстовых полей
function InputCheck(){
    let CurentInput = $(".autorize__input:focus");
        if($.trim(CurentInput.val()) != ""){
            CurentInput.parent(".autorize__text-wrapper").addClass('active');
        }
        else{
            CurentInput.parent(".autorize__text-wrapper").removeClass('active');
        }
}
// LazyLoad
$(function() {
    $('.lazy').lazy({
        effect: "fadeIn",
          effectTime: 500,
          threshold: 0
    });
});