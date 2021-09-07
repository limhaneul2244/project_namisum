//와이드PC header slide Up, Down
$(document).ready(function () {
    let width = $(window).width(); //윈도우의 넓이

    if (width > 1280) { //윈도우 넓이가 1280보다 클때
    $("#gnb").hover(function () {
            $(".sub_menu").stop().fadeIn(300);
            $("#slide_box").stop().slideDown(100);
        },
        function () {
            $(".sub_menu").stop().fadeOut(300);
            $("#slide_box").stop().slideUp(200);
        });
    };
});

//일반PC~모바일까지 메인슬라이드
$(document).ready(function () {
    $(window).resize(function () {
        let width = $(window).width(); //윈도우의 넓이
        if (width < 1601) {
            let swiper = new Swiper(".mySwiper", {
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                }
            });
        }
    });

});

// m_nav_icon
$(document).ready(function () {
    $(".m_nav_icon").click(function () {
        let documentHeight = $(document).height(); //마크업한 높이
        let windowHeight = $(window).height(); //기기로 접속했을때의 높이

        $(".menu_bg").css('height', documentHeight); //마크업의 높이만큼 h가짐 (도큐먼트는 문서라는 뜻)
        $("#gnb").css('height', windowHeight); //접속하는 기기별 높이만큼만 h 가짐

        $(".menu_bg").show(); //menu_bg 보임
        $("#gnb").animate({
            right: '0',
            opacity: '1'
        }, "normal"); //#gnb에 왼쪽에서 날아와서 보이도록
    });
    $(".close_btn, .menu_bg").click(function () { //.close_btn, .menu_bg 다시 클릭하면
        $(".menu_bg").hide(); //menu_bg 숨김
        $("#gnb").animate({
            right: '-100%',
            opacity: '0'
        }, "fast"); //gnb 다시 왼쪽으로 들어감
    });
});



//태블릿, 모바일 main_menu
$(document).ready(function () {
    $(".depth").click(function () { //depth 클릭
        $(".sub_menu").hide(); //sub_menu 숨기고 시작
        $(this).next(".sub_menu").slideDown('slow'); //클릭한 this의 sub_menu 다음에 있는(next) 애들만 보여라
    });
});

//공연/전시/행사/이벤트 슬라이드
$(document).ready(function () {
    let swiper = new Swiper(".event_Swiper", {
        slidesPerView: 4,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});


// top_btn
$(document).ready(function () {

    $("#top_btn").click(function () { //top버튼 클릭시 이동
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000); //html, body 태그 기점으로 1.4초 정도 위로 이동
    });
    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop(); //윈도우창의 화면 높이를 측정해서
        if (scroll >= 1100) { //측정 높이가 1080이 넘어가면 기능을 수행해라
            $("#top_btn").fadeIn('slow'); //1000이 넘어가면 버튼을 천천히 보여라
        } else {
            $("#top_btn").fadeOut('slow'); //1000이 넘어가지 않으면 화면에서 버튼 숨겨
        }
    });
});