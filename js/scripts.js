"use strict";var burgerbtn=document.querySelector(".header__burder-menu-span"),closebtn=document.querySelector(".burder-close-icon"),burgertoggle=document.querySelector(".bd-modal-burger"),headermenu=document.querySelector(".header__top-menu");burgerbtn.onclick=function(){burgertoggle.style.display="block",headermenu.style.visibility="hidden"},closebtn.onclick=function(){burgertoggle.style.display="none",headermenu.style.visibility="visible"};var multiItemSlider=function(t,e){var a,s=document.querySelector(t),d=s.querySelector(".slider__wrapper"),l=s.querySelectorAll(".slider__item"),u=(s.querySelectorAll(".slider__control"),s.querySelector(".slider__control_left"),s.querySelector(".slider__control_right"),parseFloat(getComputedStyle(d).width)),m=parseFloat(getComputedStyle(l[0]).width),i=s.innerHTML,f=0,g=l.length-1,v=0,h=0,p=m/u*100,y=[],c=0,_=[{active:!1,minWidth:0,count:1},{active:!1,minWidth:576,count:2},{active:!1,minWidth:992,count:3},{active:!1,minWidth:1200,count:4}],n={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var r in e)r in n&&(n[r]=e[r]);l.forEach(function(t,e){y.push({item:t,position:e,transform:0})});var b=function(){var n=0,r=parseFloat(document.body.clientWidth);_.forEach(function(t,e,i){_[e].active=!1,r>=_[e].minWidth&&(n=e)}),_[n].active=!0},S={getItemMin:function(){var i=0;return y.forEach(function(t,e){t.position<y[i].position&&(i=e)}),i},getItemMax:function(){var i=0;return y.forEach(function(t,e){t.position>y[i].position&&(i=e)}),i},getMin:function(){return y[S.getItemMin()].position},getMax:function(){return y[S.getItemMax()].position}},o=function(t){var e,i,n,r,o,l,c=f;n=(i=s).getBoundingClientRect(),r=window.innerWidth||doc.documentElement.clientWidth,o=window.innerHeight||doc.documentElement.clientHeight,l=function(t,e){return document.elementFromPoint(t,e)},n.right<0||n.bottom<0||n.left>r||n.top>o||!(i.contains(l(n.left,n.top))||i.contains(l(n.right,n.top))||i.contains(l(n.right,n.bottom))||i.contains(l(n.left,n.bottom)))||("right"===t&&(++v+u/m-1>S.getMax()&&(e=S.getItemMin(),y[e].position=S.getMax()+1,y[e].transform+=100*y.length,y[e].item.style.transform="translateX("+y[e].transform+"%)"),h-=p,g<(f+=1)&&(f=0)),"left"===t&&(--v<S.getMin()&&(e=S.getItemMax(),y[e].position=S.getMin()-1,y[e].transform-=100*y.length,y[e].item.style.transform="translateX("+y[e].transform+"%)"),h+=p,(f-=1)<0&&(f=g)),d.style.transform="translateX("+h+"%)",a[c].classList.remove("active"),a[f].classList.add("active"))},I=function(t){n.isCycling&&(c=setInterval(function(){o(t)},n.interval))},q=function(t){if(t.target.classList.contains("slider__control")){t.preventDefault();var e=t.target.classList.contains("slider__control_right")?"right":"left";o(e),clearInterval(c),I(n.direction)}t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,i=f<t?"right":"left";t!==f&&e<=g;)o(i),e++}(parseInt(t.target.getAttribute("data-slide-to"))),clearInterval(c),I(n.direction))},E=function(){"hidden"===document.visibilityState?clearInterval(c):(clearInterval(c),I(n.direction))},M=function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0;e<l.length;e++){var i=document.createElement("li");0===e&&i.classList.add("active"),i.setAttribute("data-slide-to",e),t.appendChild(i)}s.appendChild(t),a=s.querySelectorAll(".slider__indicators > li")};return M(),s.addEventListener("click",q),n.pause&&n.isCycling&&(s.addEventListener("mouseenter",function(){clearInterval(c)}),s.addEventListener("mouseleave",function(){clearInterval(c),I(n.direction)})),document.addEventListener("visibilitychange",E,!1),window.addEventListener("resize",function(){var n,r=0,o=parseFloat(document.body.clientWidth);_.forEach(function(t,e,i){o>=_[e].minWidth&&(r=e)}),r!==(_.forEach(function(t,e,i){_[e].active&&(n=e)}),n)&&(b(),clearInterval(c),s.innerHTML=i,d=s.querySelector(".slider__wrapper"),l=s.querySelectorAll(".slider__item"),s.querySelectorAll(".slider__control"),s.querySelector(".slider__control_left"),s.querySelector(".slider__control_right"),u=parseFloat(getComputedStyle(d).width),m=parseFloat(getComputedStyle(l[0]).width),f=h=v=0,g=l.length-1,p=m/u*100,y=[],l.forEach(function(t,e){y.push({item:t,position:e,transform:0})}),M())}),"visible"===document.visibilityState&&I(n.direction),b(),{right:function(){o("right")},left:function(){o("left")},stop:function(){n.isCycling=!1,clearInterval(c)},cycle:function(){n.isCycling=!0,clearInterval(c),I()}}},slider=multiItemSlider(".slider",{isCycling:!0});