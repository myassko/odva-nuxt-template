<script setup>
defineProps(['text', 'bg-color', 'img']);
</script>

<template>
	<div class="banner_container">
		<div
			class="banner_container__body"
			:style="{ backgroundColor: bgColor }"
		>
			<div class="banner__text">
				{{ text }}
			</div>
			<img
				:src="img"
				alt=""
			>
		</div>
	</div>
</template>

<style scoped>
    .banner_container{
        /* display: inline-block; */
        max-width: 360px;
        margin-top: 30px;
    }
    .banner_container__body{
        align-items: center;
        display: flex;
        border-radius: 5px;
        padding: 20px 25px;
    }
    .banner__text::after{
        display: block;
        text-align: center;
        content:"15%";
        width: 60px;
        background-image: url("public/images/Vector 162.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-origin: center center;
    }
</style>
