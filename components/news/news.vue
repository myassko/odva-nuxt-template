<script setup>
import NewsCard from '@/components/news/newsCard';

defineProps(['product_title']);
</script>

<template>
	<div class="product-slider__h2">
		<div>
			<div class="product-slider__top">
				<h2 class="product-slider__title">
					{{ product_title }}
				</h2>
				<svg
					width="61"
					height="30"
					viewBox="0 0 61 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M44.4552 12.205C44.6179 12.0423 44.8817 12.0423 45.0444 12.205L47.5444 14.705C47.7071 14.8678 47.7071 15.1316 47.5444 15.2943L45.0444 17.7943C44.8817 17.957 44.6179 17.957 44.4552 17.7943C44.2925 17.6316 44.2925 17.3678 44.4552 17.205L46.6605 14.9997L44.4552 12.7943C44.2925 12.6316 44.2925 12.3678 44.4552 12.205Z"
						fill="#1C294D"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.5448 12.205C16.3821 12.0423 16.1183 12.0423 15.9556 12.205L13.4556 14.705C13.2929 14.8678 13.2929 15.1316 13.4556 15.2943L15.9556 17.7943C16.1183 17.957 16.3821 17.957 16.5448 17.7943C16.7075 17.6316 16.7075 17.3678 16.5448 17.205L14.3395 14.9997L16.5448 12.7943C16.7075 12.6316 16.7075 12.3678 16.5448 12.205Z"
						fill="#1C294D"
						fill-opacity="0.5"
					/>
					<rect
						x="0.5"
						y="0.5"
						width="60"
						height="29"
						rx="4.5"
						stroke="#1C294D"
						stroke-opacity="0.15"
					/>
					<rect
						x="30"
						y="1"
						width="1"
						height="28"
						fill="#1C294D"
						fill-opacity="0.15"
					/>
				</svg>
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
    margin-bottom: 17px;
    padding-left: 20px;
    color: rgb(28, 41, 77);
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0px;
	/* margin-left: 113px;
	margin-right: 113px; */

}
.new{
    display: flex;
    gap: 70px;
    margin: auto;
    border-top: 1px solid rgba(28, 41, 77, 0.15);
	padding-bottom: 25px;
	margin-bottom: 30px;
}
.product-slider__top{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.product-slider__h2{
	margin-right: 113px;
	margin-left: 113px;
}
</style>
