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
		<div class="card-feature-desktop">
			<CardFeature
				icon_feature="/images/Frame 3.svg"
				title_feature="Безопасная оплата"
				content_feature="Плати безопасно и легко онлайн на нашем сайте."
			/>
		</div>
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

		<div class="card-feature-adaptiv">
			<CardFeature
				icon_feature="/images/Frame 3.svg"
				title_feature="Безопасная оплата"
				content_feature="Плати безопасно и легко онлайн на нашем сайте."
			/>
		</div>
	</div>
</template>

<style scoped>
	.card-feature-cont{
		display: flex;
		gap: 30px;
		margin: auto;
		margin-top:42px;
		margin-bottom: 42px;
		margin-left: 113px;
		margin-right: 113px;
		align-items: center;
	}
	.card-feature-adaptiv{
		display: none;
	}
	@media (max-width: 380px) {
		.card-feature-cont{
			display: inline;
			margin-left: 20px;
			margin-right: 20px;
		}
		.card-feature-desktop{
			display: none;
		}
		.card-feature-adaptiv{
			display: inline;
		}
	}
</style>
