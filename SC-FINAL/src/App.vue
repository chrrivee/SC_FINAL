<script setup lang="ts">
	import HomeView from './views/HomeView.vue';
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  <div clas="container">
    <div class="header">
		<a class="menu-icon" href="#">
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
			</svg>
		</a>
	
		<div class="header-menu">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/services">Services</RouterLink>
				<RouterLink to="/contact">Contact</RouterLink>
			</nav>
		</div>
		<div class="header-icons">
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
				<path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z" />
			</svg>
		</div>
  </div>
      
  </div>
  </header>
	<RouterView />
</template>

<style scoped lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");

:root {
	--body-color: #2c2d2a;
	--savanna-bg: #e9bf8b;
	--beach-bg: #e7dfcf;
	--glacier-bg: #b6d6c8;
	--coral-bg: #e86357;
	--arrow-fill: #333231;
	--body-font: "Montserrat", sans-serif;
	--italic-font: "EB Garamond", serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--body-font);
  text-decoration: none;
}
a {
  color: inherit;
}

.container {
	max-width: 1100px;
	border-radius: 4px;
	max-height: 680px;
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	scroll-behavior: smooth;
	background-color: #e6decf;
	padding: 0 30px;
	overflow-y: auto;
	overflow-x: hidden;
	position: relative;
		@media (max-width: 480px) {
		height: 100%;
		max-height: 100%;
	}
}

.logo {
	width: 116px;
}

.header {
	display: flex;
	align-items: center;
	height: 62px;
	width: 100%;
	white-space: nowrap;
	flex-shrink: 0;
	font-weight: 600;
	font-size: 15px;
	border-bottom: 1px solid rgba(44, 45, 42, 0.25);
	position: sticky;
	top: 0;
	left: 0;
	background-color: var(--beach-bg);
	z-index: 6;
	
	@media (max-width: 575px) {
		width: calc(100% + 20px);
    margin-left: -10px;
	}

	&-menu {
		display: flex;
		align-items: center;
		margin-left: auto;
		
		@media screen and (max-width: 740px) {
			display: none;
		}

		a:not(:first-child) {
			margin-left: 30px;
		}
	}

	.menu-icon {
		display: flex;
		align-items: center;
		margin-right: 20px;

		svg {
			width: 22px;
		}
	}

	&-icons {
		margin-left: auto;
		display: flex;
		align-items: center;

		svg {
			width: 18px;

			&:not(:last-child) {
				margin-right: 20px;
			}
		}
	}
}



header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
