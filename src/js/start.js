function start(){
    let os = navigator.userAgent.toLowerCase();
    let sw = screen.width;
    let sh = screen.height;
    const inFo = document.querySelector("#footer .info");
    const tiMe = document.querySelector(".time");

    function printAgent(){
        if (os.indexOf("windows") >= 0) {
            inFo.innerHTML = "현재 윈도우를 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        } else if (os.indexOf("macintosh") >= 0) {
            inFo.innerHTML = "현재 맥을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        } else if (os.indexOf("iphone") >= 0) {
            inFo.innerHTML = "현재 아이폰을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        } else if (os.indexOf("android") >= 0) {
            inFo.innerHTML = "현재 안드로이드 폰을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        }
    };

    // function printTime(){
    //     setInterval(function () {
    //     tiMe.innerHTML = new Date().toLocaleString();
    //     }, 1000);
    // }

    function printTime(){
        const clock = document.querySelector("#header .time");
        let now = new Date();
        clock.innerHTML = now.getFullYear() + "년 " +(now.getMonth()+1) + "월 " +now.getDate() + "일 " +now.getHours() + "시 " +now.getMinutes() + "분 ";
        setTimeout(printTime, 1000);
    }

    function classRemove(){
        $(".header").removeClass("red blue green yellow")
    }

    $(".icon1").draggable({
        containment: ".icon__box", scroll: false,
        start: function() {
            $(".cursor img").attr("src", "images/game_mouse01.png")
            $(".header").removeClass("red blue green yellow")
        },
        drag : function() {
            $(".info").html("<em style='color:red'>Red</em> 뮤직듣기를 드래그 중입니다 !")
            $(".header").addClass("red")
        },
        stop : function() {
            setTimeout(printAgent, 10000);
            // $(".header").removeClass("red")
        }
    });
    $(".icon2").draggable({
        containment: ".icon__box", scroll: false,
        start: function() {
            $(".cursor img").attr("src", "images/game_mouse02.png")
            $(".header").removeClass("red blue green yellow")
        },
        drag : function() {
            $(".info").html("<em style='color:blue'>Blue</em> 뮤직듣기를 드래그 중입니다 !")
            $(".header").addClass("blue")
        },
        stop : function() {
            setTimeout(printAgent, 10000);
            // $(".header").removeClass("blue")
        }
    });
    $(".icon3").draggable({
        containment: ".icon__box", scroll: false,
        start: function() {
            $(".cursor img").attr("src", "images/game_mouse03.png")
            $(".header").removeClass("red blue green yellow")
        },
        drag : function() {
            $(".info").html("<em style='color:green'>Green</em> 뮤직듣기를 드래그 중입니다 !")
            $(".header").addClass("green")
        },
        stop : function() {
            setTimeout(printAgent, 10000);
            // $(".header").removeClass("green")
        }
    });
    $(".icon4").draggable({
        containment: ".icon__box", scroll: false,
        start: function() {
            $(".cursor img").attr("src", "images/game_mouse04.png")
            $(".header").removeClass("red blue green yellow")
        },
        drag : function() {
            $(".info").html("<em style='color:yellow'>Yellow</em> 뮤직듣기를 드래그 중입니다 !")
            $(".header").addClass("yellow")
        },
        stop : function() {
            setTimeout(printAgent, 10000);
            // $(".header").removeClass("yellow")
        }
    });
        $(".music__wrap").draggable({
        scroll: false,
    });

    window.onload = function(){
        window.addEventListener("mousemove", e => {
            gsap.to(".cursor", {
                duration: 0,
                left: e.pageX -2,
                top: e.pageY -3
            });
        });

        printAgent();
        printTime();

        // printTime();    //오른쪽 상단 시간
        // printAgent();   //하단 중앙

    };
};

export default start;