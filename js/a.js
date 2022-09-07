const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");

setInterval(() => {
  $target.addClass(CLASSNAME);

  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT*2);

// function initialize() {
//   // var latlng = new google.maps.LatLng(41.803026,140.727661);/*表示したい場所の経度、緯度*/
//   // var myOptions = {
//   //   zoom: 17, /*拡大比率*/
//   //   center: latlng, /*表示枠内の中心点*/
//   //   mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
//   //   mapTypeControl: false,
//   //   fullscreenControl: false,
//   //   // zoomControl: false,
//   //   streetViewControl: false,
//   //   keyboardShortcuts: false
//   // };


//   // var map = new google.maps.Map(document.getElementById('map'), myOptions);
//   // var styleOptions =
//   // [
//   //   {
//   //     "featureType": "landscape.natural",
//   //     "stylers": [
//   //       { "color": "#fff2c2" }
//   //     ]
//   //   },{
//   //     "featureType": "road",
//   //     "stylers": [
//   //       { "color": "#ABC88B" }
//   //       // ,{"color": "#d29f14"}
//   //     ]
//   //   }
//   // ];

//   // var styledMapOptions = { name: '株式会社WEB企画' }
//   // var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
//   // map.mapTypes.set('sample', sampleType);
//   // map.setMapTypeId('sample');
 
//   // var markerOptions = {
//   //   position: latlng,/*表示場所と同じ位置に設置*/
//   //   map: map,
//   //   title: '1珈琲',/*マーカーのtitle*/
//   // };
//   // var marker = new google.maps.Marker(markerOptions);
  

// }

function fadeAnime(){
  $('.animation').each(function(){
    var elemPos = $(this).offset().top-1; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
    }
  });


  $('.beans').each(function(){
    var elemPos = $(this).offset().top-1; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('slideIn');
    }
  });
}

$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

$(function () {
  $('.js-open').click(function () {
    $('#overlay, .modal-window').fadeIn();
  });
  $('.js-close, #overlay').click(function () {
    $('#overlay, .modal-window').fadeOut();
  });


});





$(function(){
  
  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  $('.modal_open').click(function(){

    // 黒い背景をbody内に追加
    $('body').append('<div class="modal_bg"></div>');
    $('.modal_bg').fadeIn();

    // data-targetの内容をIDにしてmodalに代入
    var modal = '#' + $(this).attr('data-target');

    // モーダルをウィンドウの中央に配置する
    function modalResize(){
        var w = $(window).width();
        var h = $(window).height();

        var x = (w - $(modal).outerWidth(true)) / 2;
        var y = (h - $(modal).outerHeight(true)) / 2;

        $(modal).css({'left': x + 'px','top': y + 'px'});
    }

    // modalResizeを実行
    modalResize();

    // modalをフェードインで表示
    $(modal).fadeIn();

    // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
    $('.modal_bg, .modal_close').off().click(function(){
        $('.modal_box').fadeOut();
        $('.modal_bg').fadeOut('slow',function(){
            $('.modal_bg').remove();
        });
    });


    // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
      modalResize();
  });

  // .modal_switchを押すとモーダルを切り替える
  $('.modal_switch').click(function(){

    // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
    $(this).parents('.modal_box').fadeOut();

    // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
    var modal = '#' + $(this).attr('data-target');

    // モーダルをウィンドウの中央に配置する
    function modalResize(){
        var w = $(window).width();
        var h = $(window).height();

        var x = (w - $(modal).outerWidth(true)) / 2;
        var y = (h - $(modal).outerHeight(true)) / 2;

        $(modal).css({'left': x + 'px','top': y + 'px'});
    }

    // modalResizeを実行
    modalResize();

    // modalをフェードインで表示
    $(modal).fadeIn();

    // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
        modalResize();
    });
  });
});
});

$(function() {
  const hum = $('#hamburger, .close')
  const nav = $('.sp-nav')
  hum.on('click', function(){
     nav.toggleClass('toggle');
  });
});
