<script setup>
import Header from '@/components/header/header';
import Slider from '@/components/slider/slider';
import Banner from '@/components/banner/banner';
import ProductOfTheDay from '@/components/ProductOfTheDay';
import ProductSlider from '@/components/productSlider/ProductSlider';
import Subscription from '@/components/subscription/subscription';
import FeatureSite from '@/components/featureSite/feature';
import News from '@/components/news/news';
import Footer from '@/components/footer/footer';
</script>

<template>
	<div class="">
		<Header />
		<div class="container">
			<div class="main-block">
				<Slider />
				<div class="banners-container">
					<Banner
						:text-html="`<span class='highlight-orange'>Бесплатно</span> доставим ваш заказ при покупке от 2000 ₽`"
						bg-color="rgba(109, 55, 143, 1)"
						img="/images/banner1.png"
					/>
					<Banner
						:text-html="`Скидка при регистрации до <span class='highlight-green'>15%</span>`"
						bg-color="rgba(255, 216, 239, 1)"
						img="/images/banner2.png"
					/>
				</div>
			</div>
			<div class="product-of-day">
				<ProductOfTheDay
					genre="Корпоративное право"
					countdown="08:56:31"
					img_book="/images/bookday.png"
					description="Инвестирование: способы, риски, субъекты : монография"
					publishing_house="Майфат А.В."
					price="4 450 ₽"
				/>
			</div>
		</div>
		<ProductSlider
			product_title="Новые поступления"
		/>
		<Subscription />
		<ProductSlider
			product_title="Готовятся к выходу"
		/>
		<FeatureSite />
		<News
			product_title="Новости"
		/>
		<Footer />
	</div>
</template>

<style scope lang="scss">
.banners-container
{
	max-width: 1150px;
	margin: auto;
	display: flex;
	gap: 30px;
	margin-bottom: 30px;
}
.container
{
	display: flex;
	max-width: 1150px;
	padding:0px;
}
.highlight-orange {
  position: relative;
  display: inline-block;
  font-weight: bold;
  color: white;
  padding: 2px 10px;
  z-index: 1;
}

.highlight-orange::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/Vector 161.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}

/* Зелёная подложка для "15%" */
.highlight-green {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 2px 10px;
  z-index: 1;
  color: #333;
}

.highlight-green::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/Vector 162.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}
</style>
