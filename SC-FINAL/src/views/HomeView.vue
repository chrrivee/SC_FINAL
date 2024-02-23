<template>
  <head> 
    <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'>
    <meta name="viewport" content="width=1920,height=927, initial-scale=1.0">
  </head>
  <div>
    <div class="sx">
      <h1 class="title"> <span class="title"> Hey! I'm <em> Sachman </em> </span> <br> </h1>
      <span class="x">And welcome to my life!</span>
    </div>
    <button class="btnx"> Click here for more !</button>
  </div>
  <svg class="line" viewBox="0 0 50 10" xmlns="http://www.w3.org/2000/svg" style="background-color: transparent;">
    <path d="M0 10 L50 10" stroke="white" stroke-width="0.2" />
  </svg>
  <div>
    <img class="Me" src="https://unsplash.it/500/500" height="500" width="500z"><img>
    <p class="underTxt">woah :0 thats me ! <br> keep scrolling there's more &lt;3 ! </p>
  </div>
  <h1 class="hobbiesTxt">
    And these are my hobbies!
  </h1>

  <svg class="line1" viewBox="0 0 692 760" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M691 0V313H1V760" stroke="white"/>
</svg>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'
import { onMounted } from 'vue'
import anime from 'animejs'
import ClickHandler from '../components/logic'
import AnimePresets from '../components/logic'

onMounted(() => {
  document.title = "Sachman's Portfolio"
  //@ts-ignore
  console.log('mounted', {w: window.innerWidth, h: window.innerHeight}, "aspect ratio", window.innerWidth / window.innerHeight)
  if(Math.round(window.innerWidth / window.innerHeight) != 2  ) {
    alert('Please use a 16:9 aspect ratio for the best experience')
  }



  //@ts-ignore
  let efx: boolean = ClickHandler.AnimePresets.typeWriter(document.querySelector('h1'), 100, false, true)
  ClickHandler.AnimePresets.fadeIn('.x', 1700, 2000)
  ClickHandler.AnimePresets.fadeIn('.btnx', 1900, 2900)
  let flag = false;
  let flag1 = false;
  //@ts-ignore
  



  document.querySelector('.btnx').addEventListener('click', () => {
    console.log('clicked')
    if(!flag) {

      anime({
        targets: '.line path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'cubicBezier(0.575, 0.015, 0.515, 1.025)',
        duration: 1500,
        begin: function (anim) {
          //@ts-ignore
          document.querySelector('.line').style.display = 'block'
          flag = true;
        },
      })


      ClickHandler.AnimePresets.fadeIn('.Me', 800, 300)
      ClickHandler.AnimePresets.fadeIn('.underTxt', 800, 1200)
      window.onscroll = function () {
        if(!flag1) {
          console.log('scrolling')
          if (window.scrollY > 100) {
            let anim = anime({
              targets: '.line1 path',
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'cubicBezier(0.575, 0.015, 0.515, 1.025)',
              duration: 2700,
              begin: function (anim) {
                ClickHandler.AnimePresets.fadeIn('.line1', 400)
                ClickHandler.AnimePresets.fadeIn('.hobbiesTxt', 1200)
                flag1 = true;
                console.log('begin')
                //@ts-ignore
                document.querySelector('.line1').style.display = 'block'
              },
            })
          }
        }
      }
    }
  })
})


</script>

<script lang="ts">



export default {
  name: 'HomeView',
  // Your JavaScript code here
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dekko&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

@font-face {
  font-family: "Garamond Premier Pro Subhead";
  src: url("../assets/Garamond\ Premier\ Pro\ Subhead.otf") format("opentype");
}

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dekko&family=Lora:ital,wght@0,400..700;1,400..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');



@keyframes y {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }

}

:root {
  --italic-font: "EB Garamond", serif;
  --title-font: "Lora", serif;
}
* {
  overflow-y: hidden;
}

.hobbiesTxt {
  font-family: "Ubuntu", sans-serif;
  font-size: 3rem;
  font-weight: 600;

  color: #ffffff;
  position: absolute;
  top: 145%;
  left: 20%;
  background-color: transparent;
  opacity: 0;
  z-index: 4;
}

.underTxt {
  color: gray;
  position: absolute;
  top: 64%;
  right: 5%;
  font-size: 1rem;
  opacity: 0;
  text-align: right;
}

.Me {
  // z-index: 4;
  box-shadow: 2px 2px 20px 0px rgba(48, 48, 48, 0.148);
  opacity: 0;
  position: absolute;
  right: 3%;
  top: 10%;
  border-right: 80px;
}

.line {
  position: absolute;
  top: 5%;
  left: 16%;
  width: 1400px;
  z-index: 0;
  display: none;
}

.line1 {
  position: absolute;
  top: 65%;
  right: 6%;
  transform: scale(0.8);
  z-index: 0;
  display: block;
  opacity: 0;
  background: transparent;
}

.btnx {
  font-family: "Ubuntu", sans-serif;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: #ffffff;
  color: #000000;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  margin-left: 100px;
  font-weight: 600;
  position: absolute;
  top: 300px;
  left: 0px;
}

.btnx :hover {
  animation: y 0.5s infinite;
}

.title {
  font-weight: 600;

  &::after {
    content: "";
    display: inliune-block;
    border-right: #ffffff 2px solid;
    padding-left: 10px;
    animation: opacity 0.5s infinite;
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}

.title span {
  font-size: 4rem;
}

.sx {
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lora", serif;
  font-style: normal;
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: absolute;
  top: 100px;
  left: 100px;
}

.italics {
  font-style: italic;
  transform: rotate(20);
}

.x {
  font-family: "Ubuntu", sans-serif;
  font-size: 2.2rem;
  position: absolute;
  top: 120px;
  color: rgb(213, 213, 213);
  opacity: 0.8;
  background: transparent;
}
</style>
