<script setup>
import CardFeature from '@/components/featureSite/CardFeature.vue';
</script>

<template>
	<div class="card-feature-cont">
		<CardFeature
			icon_feature="/images/Frame 2.svg"
			title_feature="Быстрая доставка"
			content_feature="Доставим бесплатно от 2000 ₽ по всей России"
		/>
		<CardFeature
			icon_feature="/images/Frame 3.svg"
			title_feature="Безопасная оплата"
			content_feature="Плати безопасно и легко онлайн на нашем сайте."
		/>
		<CardFeature
			icon_feature="/images/Frame 4.svg"
			title_feature="Бонусная программа"
			content_feature="Дополнительная скидка 15% при регистрации"
		/>
		<CardFeature
			icon_feature="/images/Frame 5.svg"
			title_feature="Большой выбор"
			content_feature="Ежегодно выходит в свет более 100 книг"
		/>
	</div>
</template>

<style scoped>
	.card-feature-cont{
		display: flex;
		gap: 30px;
		max-width: 1150px;
		margin: auto;
		margin-top:42px;
		margin-bottom: 42px;
	}
</style>
