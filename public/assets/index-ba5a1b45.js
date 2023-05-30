(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function p(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=p(o);fetch(o.href,n)}})();function P(){let s=navigator.userAgent.toLowerCase(),i=screen.width,p=screen.height;const d=document.querySelector("#footer .info");document.querySelector(".time");function o(){s.indexOf("windows")>=0?d.innerHTML="현재 윈도우를 사용하고 있으며, 화면 크기는 "+i+"x"+p+" 입니다.":s.indexOf("macintosh")>=0?d.innerHTML="현재 맥을 사용하고 있으며, 화면 크기는 "+i+"x"+p+" 입니다.":s.indexOf("iphone")>=0?d.innerHTML="현재 아이폰을 사용하고 있으며, 화면 크기는 "+i+"x"+p+" 입니다.":s.indexOf("android")>=0&&(d.innerHTML="현재 안드로이드 폰을 사용하고 있으며, 화면 크기는 "+i+"x"+p+" 입니다.")}function n(){const a=document.querySelector("#header .time");let l=new Date;a.innerHTML=l.getFullYear()+"년 "+(l.getMonth()+1)+"월 "+l.getDate()+"일 "+l.getHours()+"시 "+l.getMinutes()+"분 ",setTimeout(n,1e3)}$(".icon1").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse01.png"),$(".header").removeClass("red blue green yellow")},drag:function(){$(".info").html("<em style='color:red'>Red</em> 뮤직듣기를 드래그 중입니다 !"),$(".header").addClass("red")},stop:function(){setTimeout(o,1e4)}}),$(".icon2").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse02.png"),$(".header").removeClass("red blue green yellow")},drag:function(){$(".info").html("<em style='color:blue'>Blue</em> 뮤직듣기를 드래그 중입니다 !"),$(".header").addClass("blue")},stop:function(){setTimeout(o,1e4)}}),$(".icon3").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse03.png"),$(".header").removeClass("red blue green yellow")},drag:function(){$(".info").html("<em style='color:green'>Green</em> 뮤직듣기를 드래그 중입니다 !"),$(".header").addClass("green")},stop:function(){setTimeout(o,1e4)}}),$(".icon4").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse04.png"),$(".header").removeClass("red blue green yellow")},drag:function(){$(".info").html("<em style='color:yellow'>Yellow</em> 뮤직듣기를 드래그 중입니다 !"),$(".header").addClass("yellow")},stop:function(){setTimeout(o,1e4)}}),$(".music__wrap").draggable({scroll:!1}),window.onload=function(){window.addEventListener("mousemove",a=>{gsap.to(".cursor",{duration:0,left:a.pageX-2,top:a.pageY-3})}),o(),n()}}function D(){const s=[{name:"I Found Her",artist:"Faime",img:"music__view01",audio:"music_audio01"},{name:"Let",artist:"Vietra",img:"music__view02",audio:"music_audio02"},{name:"Stressin'",artist:"Airr",img:"music__view03",audio:"music_audio03"},{name:"Side Effects",artist:"wip",img:"music__view04",audio:"music_audio04"},{name:"flowers",artist:"honeywhip",img:"music__view05",audio:"music_audio05"},{name:"Summer Is for Falling in Love",artist:"Sarah Kang",img:"music__view06",audio:"music_audio06"},{name:"For you",artist:"Vietra",img:"music__view07",audio:"music_audio07"},{name:"Foolish",artist:"Faime",img:"music__view08",audio:"music_audio08"},{name:"You set my world on fire",artist:"Adelyn Paik",img:"music__view09",audio:"music_audio09"},{name:"couldn't say it to your face",artist:"honeywhip",img:"music__view10",audio:"music_audio10"}],i=document.querySelector(".music__wrap"),p=i.querySelector(".music__control .title h3"),d=i.querySelector(".music__control .title p"),o=i.querySelector(".music__view .image img"),n=i.querySelector("#main-audio"),a=i.querySelector("#control-play"),l=i.querySelector("#control-prev"),m=i.querySelector("#control-next"),S=i.querySelector(".progress"),k=i.querySelector(".progress .bar"),M=i.querySelector(".timer .current"),I=i.querySelector(".timer .duration"),f=i.querySelector("#control-repeat"),x=i.querySelector("#control-list"),q=i.querySelector(".music__list"),h=i.querySelector(".music__list ul"),C=i.querySelector(".music__list h3 .close"),w=s.length;let t=1;const c=e=>{p.innerHTML=s[e-1].name,d.innerHTML=s[e-1].artist,o.src=`images/${s[e-1].img}.png`,o.alt=s[e-1].name,n.src=`audio/${s[e-1].audio}.mp3`},u=()=>{i.classList.add("paused"),a.setAttribute("title","정지"),a.setAttribute("class","stop"),n.play()},_=()=>{i.classList.remove("paused"),a.setAttribute("title","재생"),a.setAttribute("class","play"),n.pause()},A=()=>{t==1?t=w:t--,c(t),u(),y()},N=()=>{t==w?t=1:t++,c(t),u(),y()};n.addEventListener("timeupdate",e=>{const r=e.target.currentTime,g=e.target.duration;let v=r/g*100;k.style.width=`${v}%`,n.addEventListener("loadeddata",()=>{let L=n.duration,B=Math.floor(L/60),T=Math.floor(L%60);T<10&&(T=`0${T}`),I.innerText=`${B}:${T}`});let E=Math.floor(r/60),b=Math.floor(r%60);b<10&&(b=`0${b}`),M.innerText=`${E}:${b}`}),S.addEventListener("click",e=>{let r=S.clientWidth,g=e.offsetX,v=n.duration;n.currentTime=g/r*v}),f.addEventListener("click",()=>{switch(f.getAttribute("class")){case"repeat":f.setAttribute("class","repeat_one"),f.setAttribute("title","한곡 반복");break;case"repeat_one":f.setAttribute("class","shuffle"),f.setAttribute("title","랜덤 반복");break;case"shuffle":f.setAttribute("class","repeat"),f.setAttribute("title","전체 반복");break}y()}),n.addEventListener("ended",()=>{switch(f.getAttribute("class")){case"repeat":N();break;case"repeat_one":u();break;case"shuffle":let r=Math.floor(Math.random()*w+1);do r=Math.floor(Math.random()*w+1);while(t==r);t=r,c(t),u();break}}),a.addEventListener("click",()=>{i.classList.contains("paused")?_():u()}),l.addEventListener("click",()=>{A()}),m.addEventListener("click",()=>{N()}),x.addEventListener("click",()=>{q.classList.add("show")}),C.addEventListener("click",()=>{q.classList.remove("show")});for(let e=0;e<w;e++){let r=`
            <li data-index="${e+1}">
                <span class="img">
                    <img src="images/${s[e].img}.png" alt="${s[e].name}" class="img">
                </span>
                <span class="title">
                    <strong>${s[e].name}</strong>
                    <em>${s[e].artist}</em>
                    <audio class="${s[e].audio}" src="audio/${s[e].audio}.mp3"></audio>
                </span>
                <span class="audio-duration" id="${s[e].audio}"></span>
            </li>
        `;h.insertAdjacentHTML("beforeend",r);let g=h.querySelector(`#${s[e].audio}`),v=h.querySelector(`.${s[e].audio}`);v.addEventListener("loadeddata",()=>{let E=v.duration,b=Math.floor(E/60),L=Math.floor(E%60);L<10&&(L=`0${L}`),g.innerHTML=`${b}:${L}`,g.setAttribute("data-duration",`${b}:${L}`)})}function y(){const e=h.querySelectorAll("li");for(let r=0;r<e.length;r++){let g=e[r].querySelector(".audio-duration");if(e[r].addEventListener("click",function(){O(this)}),e[r].classList.contains("playing")){e[r].classList.remove("playing");let v=g.getAttribute("data-duration");g.innerText=v}e[r].getAttribute("data-index")==t&&(e[r].classList.add("playing"),g.innerText="재생중")}}y();function O(e){t=e.getAttribute("data-index"),c(t),u(),y()}window.addEventListener("load",()=>{c(t)})}function H(){const s=document.querySelector(".tetris__play .view ul"),i=20,p=12,d={Tmino:[[[2,1],[0,1],[1,0],[1,1]],[[1,2],[0,1],[1,0],[1,1]],[[1,2],[0,1],[2,1],[1,1]],[[1,2],[2,1],[1,0],[1,1]]],Imino:[[[1,0],[1,1],[1,2],[1,3]],[[0,2],[1,2],[2,2],[3,2]],[[2,0],[2,1],[2,2],[2,3]],[[0,1],[1,1],[2,1],[3,1]]],Omino:[[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]]],Zmino:[[[0,0],[2,1],[1,0],[1,1]],[[0,2],[0,1],[1,0],[1,1]],[[1,2],[0,1],[2,2],[1,1]],[[1,2],[2,0],[2,1],[1,1]]],Smino:[[[2,0],[0,1],[1,0],[1,1]],[[1,2],[0,1],[0,0],[1,1]],[[2,1],[0,2],[1,2],[1,1]],[[1,0],[2,1],[2,2],[1,1]]],Jmino:[[[0,2],[1,0],[1,1],[1,2]],[[0,0],[0,1],[1,1],[2,1]],[[0,0],[1,0],[0,1],[0,2]],[[0,0],[1,0],[2,0],[2,1]]],Lmino:[[[0,0],[0,1],[1,2],[0,2]],[[2,0],[0,1],[1,1],[2,1]],[[0,0],[1,0],[1,1],[1,2]],[[0,0],[1,0],[2,0],[0,1]]]};let o=0,n=500,a,l;const m={type:"Zmino",direction:0,top:0,left:0};function S(){l={...m},k(),x()}function k(){for(let t=0;t<i;t++){const c=document.createElement("li"),u=document.createElement("ul");for(let _=0;_<p;_++){const A=document.createElement("li");u.prepend(A)}c.prepend(u),s.prepend(c)}}function M(t=""){const{type:c,direction:u,top:_,left:A}=l;document.querySelectorAll(".moving").forEach(y=>{y.classList.remove(c,"moving")}),d[c][u].some(y=>{const O=y[0]+A,e=y[1]+_,r=s.childNodes[e]?s.childNodes[e].childNodes[0].childNodes[O]:null;if(q(r))r.classList.add(c,"moving");else return l={...m},setTimeout(()=>{M(),t==="top"&&I()},.1),!0}),m.left=A,m.top=_,m.direction=u}function I(){document.querySelectorAll(".moving").forEach(c=>{c.classList.remove("moving"),c.classList.add("seized")}),f()}function f(){s.childNodes.forEach(c=>{let u=!0;c.children[0].childNodes.forEach(_=>{_.classList.contains("seizes")||(u=!1)}),u&&(c.remove(),k(),o++,scoreDiplay.innerText=o)}),x()}function x(){clearInterval(a),a=setInterval(()=>{h("top",1)},n);const t=Object.entries(d),c=Math.floor(Math.random()*t.length);m.type=t[c][0],m.top=0,m.left=5,m.direction=0,l={...m},M()}function q(t){return!(!t||t.classList.contains("seized"))}function h(t,c){l[t]+=c,M(t)}function C(){l.direction===3?l.direction=0:l.direction+=1,M()}function w(){clearInterval(a),a=setInterval(()=>{h("top",1)},10)}document.addEventListener("keydown",t=>{switch(t.keyCode){case 39:h("left",1);break;case 37:h("left",-1);break;case 40:h("top",1);break;case 32:w();break;case 38:C();break}}),window.addEventListener("DOMContentLoaded",()=>{S()})}P();D();H();
