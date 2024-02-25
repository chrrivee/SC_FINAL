<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<header>
		<div clas="container">
			<div class="header">
				<a class="menu-icon" href="/">
					<svg style="margin-left: 20px; overflow: hidden; background: transparent;" xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
					</svg>

				</a>
				<!--style="transform: scale(1.5); margin-left: 10px;-->
				<div class="header-menu">
					<nav>
						<RouterLink to="/">Home</RouterLink>
						<RouterLink to="/about">About</RouterLink>
						<RouterLink to="/services">Services</RouterLink>
					</nav>
				</div>
				<div class="header-icons">
					<RouterLink to="/contact"> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg" style="transform: scale(1.2); margin-right: 20px; background: transparent;">

							<path stroke-linecap="round" stroke-linejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />

						</svg>
					</RouterLink>
				</div>
			</div>

		</div>
	</header>
	
	<RouterView />
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
	--body-color: #2c2d2a;
	--savanna-bg: #e9bf8b;
	--beach-bg: #e7dfcf;
	--glacier-bg: #b6d6c8;
	--coral-bg: #e86357;
	--arrow-fill: #333231;
	--body-font: "Hack", monospace;
	--italic-font: "EB Garamond", serif;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
	text-decoration: none;
	background-color: transparent;
}
svg {
	fill: none;
}

a {
	text-decoration: none;
	color: #ffffff;

	transition: color 0.3s ease;
}

a:hover {
	color: rgb(70, 145, 178);
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
	font-family: "Poppins", sans-serif;
	backdrop-filter: blur(20px);
	display: flex;
	align-items: center;
	height: 62px;
	width: 100%;
	white-space: nowrap;
	flex-shrink: 0;
	font-weight: 600;
	font-size: 15px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--beach-bg);
	z-index: 100;

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
