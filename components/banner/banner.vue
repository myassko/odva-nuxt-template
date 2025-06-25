<script setup>
defineProps(['textHtml', 'bgColor', 'img']);
</script>

<template>
	<div class="banner_container">
		<div
			class="banner_container__body"
			:style="{ backgroundColor: bgColor }"
		>
			<div
				class="banner__text"
				v-html="textHtml"
			/>
			<img
				:src="img"
				alt=""
			>
		</div>
	</div>
</template>

<style scoped>
.banner_container {
  max-width: 360px;
  margin-top: 30px;
}

.banner_container__body {
  align-items: center;
  display: flex;
  border-radius: 5px;
  padding: 20px 25px;
  gap: 10px;
}

.banner__text:first-child{
  font-size: 16px;
  line-height: 1.4;
  color: #fff;
  position: relative;
}
@media (max-width: 380px) {
    .banner_container__body{
    margin: 0px 10px;
    }
	.banner_container{
		margin-top: 0px;
		max-width: 100%;
	}
}
</style>
