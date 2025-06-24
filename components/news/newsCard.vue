<script setup>
defineProps(['img_news', 'date_news', 'article_title', 'news_description']);
</script>

<template>
	<div class="news-card">
		<img
			class="news-card__img"
			:src="img_news"
			alt=""
		>
		<div class="news-card__info-block">
			<p class="news-card__date">
				{{ date_news }}
			</p>
			<p class="news-card__article">
				{{ article_title }}
			</p>
			<p class="news-card__description">
				{{ news_description }}
			</p>
			<button class="news-card__read-button">
				Читать
			</button>
		</div>
	</div>
</template>

<style scoped>
    .news-card:first-child{
        padding-left: 17px;
        /* padding-right: 34px; */
    }
    .news-card:not(:first-child){
        padding-left: 34px;
        border-left: 1px solid rgba(28, 41, 77, 0.15);
        /* padding-right: 34px; */
    }

    .news-card__article {
       font-family: Roboto;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
        color: rgba(28, 41, 77, 1);
    }
    .news-card__date{
        font-family: Roboto;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0px;
        color: rgba(28, 41, 77, 0.5);
        margin-bottom: 5px;
    }
    .news-card__img{
        margin: 18px 0px;
    }
    .news-card__read-button{
        padding: 10px 67px;
        border: 1px solid rgba(28, 41, 77, 0.15);
        border-radius: 5px;
        margin-top: 12px;
    }
    .news-card__description{
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0px;
        color: rgba(40, 47, 54, 0.8);
    }
    @media (max-width: 380px) {
		.news-card:not(:first-child){
            display: none;
        }
	}
</style>
