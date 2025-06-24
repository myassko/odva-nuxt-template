<script setup>
import NewsCard from '@/components/news/newsCard';

defineProps(['product_title']);
</script>

<template>
	<div>
		<div class="">
			<div class="product-slider__top">
				<h2 class="product-slider__title">
					{{ product_title }}
				</h2>
			</div>
		</div>
		<div class="new">
			<NewsCard
				img_news="/images/Mask Group.svg"
				date_news="16 июня 2020"
				article_title="Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..."
				news_description="18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
			/>
			<NewsCard
				img_news="/images/Rectangle 932.svg"
				date_news="16 июня 2020"
				article_title="Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..."
				news_description="18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
			/>
			<NewsCard
				img_news="/images/Rectangle 933.svg"
				date_news="16 июня 2020"
				article_title="Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..."
				news_description="18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
			/>
		</div>
	</div>
</template>

<style scoped>
.product-slider__title{
    font-family: 'Roboto';
    margin: auto;
    margin-bottom: 17px;
    padding-left: 20px;
    color: rgb(28, 41, 77);
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0px;
	margin-left: 113px;
	margin-right: 113px;

}
.new{
    display: flex;
    gap: 70px;
    margin: auto;
    border-top: 1px solid rgba(28, 41, 77, 0.15);
	padding-bottom: 25px;
	margin-bottom: 30px;
	margin-left: 113px;
	margin-right: 113px;
}
</style>
