<template>
  <div class="sx">
    <h1 class="title"> <span class="title"> Hey! Im <span class="title italics"> Sachman </span> </span> <br>  </h1>
    <span class=" title x"> Welcome to my life!</span>
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

onMounted(() => {
  //@ts-ignore
  console.log(ClickHandler.AnimePresets.typeWriter(document.querySelector('h1'), 100, true))
  ClickHandler.AnimePresets.fadeIn('.x', 1700, 2000)
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

:root {
  --italic-font: "EB Garamond", serif;
  --title-font: "Lora", serif;
}
.title {
  font-family: "Lora", serif;
  font-weight: 600;
}
.title span {
  font-size: 4rem;
}
.sx {
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lora", serif;
  font-style: normal;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
   left: 100px;
}
.italics {
  font-style: italic;
  transform: rotate(20);
}

.x {
  font-size: 2.7rem;
  position: absolute;
  top: 80px;
  color: rgb(85, 85, 85);
  opacity: 0.8;
}
</style>
