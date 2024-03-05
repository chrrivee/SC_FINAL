<template>

  <head>
    <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'>
    <meta name="viewport" content="width=1920,height=927, initial-scale=1.0">
  </head>
  <div>
    <div class="sx">
      <h1 class="title"> <span class="title"> Hey! I'm <span class="hvr"> Sachman </span> </span> <br> </h1>
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

  <div class="anotherPic">
    <img src="https://unsplash.it/500/500">
    <h1>Oh! Look, another picture of me <br> <span>scroll down for my hobbies!</span></h1>
  </div>

  <h1 class="hobbiesTxt">
    ...And These are My Hobbies
    <br><span class="underText1">psst!.. click the image :) </span>
  </h1>
  <div class="cards" @click="function () {

  }">
    <div class="card">
      <div class="cvr"><img src="https://unsplash.it/500/500" alt="Avatar"></div>
      <div class="card__text">
        <h2>My hobbies!</h2>
        <p>Click to learn more</p>
      </div>
    </div>
  </div>

  <div class="hobby__list">
    <ol>
      <h1 class="c1">Reading</h1>
      <h1 class="c2">Photography</h1>
      <h1 class="c3">Programming</h1>
      <h1 class="c4">Music</h1>
      <h1 class="c5">Planes</h1>
    </ol>
  </div>


  <svg class="line1" viewBox="0 0 692 760" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M691 0V313H1V760" stroke="white" />
  </svg>

  <h1 id="schoolIX"
    style="color: rgb(156, 156, 156); position: absolute; top: 235%; left: 2%; font-size:0.8rem; transform: rotate(90deg); opacity: 0; font-family: 'Poppins' sans-serif; ">
    Here is a timeline of the schools i've been to!
  </h1>

  <div class="contTimeline">
    <svg class="timeline" viewBox="0 0 693 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 18H693M642 0V37M359 0V37M45 0V37" stroke="white" />
    </svg>
    <div class="schoolHolder">
      <div class="school l">
        <h1>St. Michaels Senior <br> Secondary School</h1>
        <p>Elementary to 8th grade, Delhi India</p>
      </div>
      <div class="school c">
        <h1>New Tech High <br> @ Coppell</h1>
        <p>9th grade to graduation</p>
      </div>
      <div class="school r">
        <h1>University of Massachusetts <br> Amherst</h1>
        <p>My goal university for BCSE in Computer Science</p>
      </div>
    </div>
    <div class="ttCircle">
      <div class="tooltip">
        <h1>Where I am right now!</h1>
        <p></p>
      </div>
      <div class="overlap"></div>
      <svg class="circle" style="transform: scale(0.03)" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg class="circle1" style="transform: scale(0.02)" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>
    </div>


  </div>



  <!-- Intersect and event managers(divs)-->
  <div class="WatcherH" style="position: absolute; top: 110;">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'
import { onMounted } from 'vue'
import anime from 'animejs'
import ClickHandler from '../components/logic'
import AnimePresets from '../components/logic'
import debug from '@/components/debug'

onMounted(() => {

  /* debug */
  let d = new debug({ w: "2%", h: "2%" }, "NE")

  console.log(d.effect());


  document.title = "Sachman's Portfolio"
  //@ts-ignore
  console.log('mounted', { w: window.innerWidth, h: window.innerHeight }, "aspect ratio", window.innerWidth / window.innerHeight)
  if (Math.round(window.innerWidth / window.innerHeight) != 2) {
    alert('Please use a 16:9 aspect ratio for the best experience')
  }



  const targetElement = document.querySelector('.anotherPic');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  let flagE = false;
  let overdrive0 = true;
  const callback = (entries: any[], observer: any) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      window.onscroll = () => {
        console.log(flagE, 'scrollingIns')
        flagE = true;
      }
      if (entry.isIntersecting && flagE && overdrive0) {

        overdrive0 = false;
      } else {
        console.log('Element is not intersecting', flagE);
      }
    });
  };



  const observer = new IntersectionObserver(callback, options);
  //@ts-ignore
  observer.observe(targetElement);

  //@ts-ignore
  let efx: boolean = ClickHandler.AnimePresets.typeWriter(document.querySelector('h1'), 100, false, true)
  ClickHandler.AnimePresets.fadeIn('.x', 1700, 2000)
  ClickHandler.AnimePresets.fadeIn('.btnx', 1900, 2900)
  ClickHandler.AnimePresets.fadeIn('.underText1', 1000, 4200)
  let flag = false;
  let flag1 = false;
  let flag2 = false;
  let inverter = false;

  //@ts-ignore
  document.querySelector('.cards').addEventListener('click', () => {
    if (!inverter) {
      console.log('clicked')
      anime({ targets: '.hobby__list', opacity: 1, duration: 600, easing: 'linear' })
      anime({
        targets: '.hobby__list',
        left: '30%',
        easing: 'cubicBezier(0.575, 0.015, 0.515, 1.025)',
        duration: 400,
        begin: function (anim) {
          inverter = false;
        },
        complete: function (anim) {
          inverter = true;
          if (!flag2) {
            ClickHandler.AnimePresets.fadeIn('.contTimeline', 2400, 600)
            anime({
              targets: '.circle',
              scale: [0.025, 0.03],
              opacity: [0.3, 0.7],
              duration: 600,
              easing: 'cubicBezier(.57,.2,.47,.83)',
              loop: true,
              direction: 'alternate',
              delay: 10
            })
            flag2 = true;
          }
        }
      })
    } else {
      anime({ targets: '.hobby__list', opacity: 0, duration: 800, easing: 'linear' })
      anime({
        targets: '.hobby__list',
        left: '10%',
        easing: 'cubicBezier(0.575, 0.015, 0.515, 1.025)',
        duration: 400,
        begin: function (anim) {
          inverter = true;
        },
        complete: function (anim) {
          inverter = false;
        }
      })
    }
  })

  let flag3 = true;
  //@ts-ignore
  document.querySelector(".overlap")?.addEventListener('click', () => {
    console.log('clicked')
    if (flag3) {
      anime({
        targets: '.tooltip',
        opacity: 1,
        duration: 400,
        easing: 'linear'
      })
      flag3 = false;
    } else {
      anime({
        targets: '.tooltip',
        opacity: 0,
        duration: 400,
        easing: 'linear'
      })
      flag3 = true;
    }
  })


  //@ts-ignore
  document.querySelector('.btnx').addEventListener('click', () => {

    console.log('clicked')
    if (!flag) {

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
        if (!flag1) {
          console.log('scrolling')
          if (window.scrollY > 100) {
            let anim = anime({
              targets: '.line1 path',
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'cubicBezier(0.575, 0.015, 0.515, 1.025)',
              duration: 2700,
              begin: function (anim) {
                ClickHandler.AnimePresets.fadeIn('.line1', 400)
                ClickHandler.AnimePresets.fadeIn('.hobbiesTxt', 2400, 2400)
                ClickHandler.AnimePresets.fadeIn('.cards', 2100, 2800)
                ClickHandler.AnimePresets.fadeIn('#schoolIX', 1200, 3200)
                console.log(ClickHandler.AnimePresets.fadeIn('.anotherPic', 1200, 60, true))
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

@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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



.WatcherH {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: transparent;
  opacity: 0;
  z-index: 0;
  background-color: #967bb6;
}

.cards {
  cursor: pointer;
  user-select: none;
  display: grid;
  row-gap: 20px;
  position: absolute;
  top: 160%;
  left: 3%;
  z-index: 10;
  background-color: transparent;
  opacity: 0;
}

.cards img {
  border-radius: 12px;
  background-color: transparent;
  transition: 1s ease;
  transform: scale(0.8);
}

.card {
  background-color: transparent;
  transition: 1s ease;
  border-radius: 10px;

  &:hover {
    img {
      opacity: 0.6;
    }

    .card__text {
      opacity: 1;
    }
  }
}



.contTimeline {
  opacity: 0;
  color: white;

  .circle {
    fill: #967bb6;
    position: absolute;
    top: 209.8%;
    left: 45%;
    z-index: 4;
    background-color: transparent;
    opacity: 1;


  }

  .circle1 {
    fill: #967bb6;
    position: absolute;
    top: 209.8%;
    left: 45%;
    z-index: 9;
    background-color: transparent;
    opacity: 1;
  }

  .overlap {
    position: absolute;
    top: 264.5%;
    left: 71.5%;
    width: 2%;
    height: 3.5%;
    z-index: 10;
    background-color: transparent;
    opacity: 1;
    cursor: pointer;
  }

  .ttCircle {

    .tooltip {
      transition: 1s ease;
      opacity: 0;
      position: absolute;
      top: 239.8%;
      left: 62.3%;
      border-radius: 12px;
      box-sizing: border-box;
      border: 3px solid #967bb6;
      width: 20%;
      height: 20%;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;

        color: white;
        text-align: center;
        justify-content: center;
        background-color: transparent;
      }

      background-color: rgb(39, 39, 39);

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px;
        border-style: solid;
        border-color: #967bb6 transparent transparent transparent;
      }
    }
  }





  .timeline {
    position: absolute;
    top: 260%;
    left: 0%;
    z-index: 0;
    background: transparent;
    transform: scale(0.8);
  }

  .schoolHolder {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 300px;
    user-select: none;
    position: absolute;
    top: 275%;
    left: 5%;

    .l {
      text-align: left;
    }

    .c {
      margin-left: -30px;
      text-align: center;
    }

    .r {
      margin-right: 120px;
      text-align: right;
    }
  }
}

.card__text {
  border-radius: 12px;
  transition: 1s ease;
  text-align: center;
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 12;
  background-color: transparent;
  width: 80%;
  height: 80%;
  backdrop-filter: blur(10px);

  & h2 {
    font-family: "Hack", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    background-color: transparent;
    margin-top: 40%;
    font-weight: 900;
    text-transform: capitalize;
  }

  & p {
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    background-color: transparent;
  }
}

.anotherPic {
  width: 100vw;
  position: absolute;
  top: 72%;
  left: 1%;
  z-index: 10;
  background-color: transparent;
  opacity: 0;

  img {
    border-radius: 12px;
    background-color: transparent;
    transition: 1s ease;
    transform: scale(0.6);
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    position: absolute;
    top: 20%;
    left: 22%;

    span {
      color: #7d7d7d;
      font-size: 1rem;
      font-weight: 400;
      background-color: transparent;
    }
  }
}

.underText1 {
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #bebebe;
  position: absolute;
  top: 3%;
  left: 0%;
  background-color: transparent;
  opacity: 0;
  z-index: 4;
}

.hobby__list {
  user-select: none;
  opacity: 0;
  transition: 1s ease;
  position: absolute;
  top: 165%;
  left: 10%;
  z-index: 12;
  background-color: transparent;
  width: 80%;
  height: 80%;
  background-color: transparent;

  ol {
    cursor: pointer;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #616161;
    background-color: transparent;

    h1 {
      transition: 0.5s cubic-bezier(.14, .04, .21, .89);
      background-color: transparent;
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 2rem;

      &:hover {
        transform: translateX(20px);
        color: #ffffff;
      }

    }
  }

  z-index: 5;
}



.hobbiesTxt {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 600;

  color: #ffffff;
  position: absolute;
  top: 142%;
  left: 20%;
  background-color: transparent;
  opacity: 0;
  z-index: 4;
  height: 2000px;
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
  border-radius: 5px;
  border: transparent;

  transition: 1s ease;


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
  }
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
  text-transform: capitalize;

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
  text-transform: capitalize;
  font-family: "Ubuntu", sans-serif;
  font-size: 2.2rem;
  position: absolute;
  top: 120px;
  color: rgb(213, 213, 213);
  opacity: 0.8;
  background: transparent;
}
</style>
