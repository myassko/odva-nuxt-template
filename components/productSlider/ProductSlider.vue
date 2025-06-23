<script setup>
import ProductCard from '@/components/productSlider/ProductCard';

defineProps(['product_title']);
</script>

<template>
	<div class="product-slider">
		<div class="product-slider__top">
			<h2 class="product-slider__title">
				{{ product_title }}
			</h2>
			<div class="product-slider__controls" />
		</div>
		<div class="product-slider__content">
			<ProductCard
				:bestseller="{ title: 'Бестселлер', textColor: 'rgba(172, 142, 227, 1)', bgColor: 'rgba(238, 233, 247, 1)' }"
				promotion="1+1=3"
				img_book="/images/image 142.png"
				genre="Корпоративное право"
				description="Инвестирование: способы, риски, субъекты : монография"
				publishing_house="Майфат А.В."
				:price="{ name: '4 450 ₽', color: 'rgba(28, 41, 77, 1)' }"
				rating="4.9"
				recommendations="89% рекомендуют"
			/>
			<ProductCard
				:bestseller="{ title: 'Новинка', textColor: 'rgba(61, 196, 126, 1)', bgColor: 'rgba(226, 246, 236, 1)' }"
				img_book="/images/image 140.png"
				genre="Договорное право"
				description="Договор коммерческой концессии (франчайзинг). Граж..."
				publishing_house="Багдасарян А.Ф."
				:price="{ name: '372 ₽', color: 'rgba(28, 41, 77, 1)' }"
				rating="4.9"
				recommendations="89% рекомендуют"
			/>
			<ProductCard
				img_book="/images/image 145.png"
				genre="Конкурентное право"
				description="Договор коммерческой концессии (франчайзинг). Граж..."
				publishing_house="Башлаков-Николаев И.В."
				:price="{ name: '984 ₽', color: 'rgba(253, 58, 58, 1)' }"
				rating="4.9"
				recommendations="89% рекомендуют"
				old_price="1 284 ₽"
				benefit="300 ₽"
			/>
			<ProductCard
				:bestseller="{ title: 'Бестселлер', textColor: 'rgba(172, 142, 227, 1)', bgColor: 'rgba(238, 233, 247, 1)' }"
				promotion="1+1=3"
				img_book="/images/image 142.png"
				genre="Корпоративное право"
				description="Инвестирование: способы, риски, субъекты : монография"
				publishing_house="Майфат А.В."
				:price="{ name: '450 ₽', color: 'rgba(28, 41, 77, 1)' }"
				rating="4.9"
				recommendations="89% рекомендуют"
			/>
			<!-- <ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard /> -->
		</div>
		<div class="product-slider__bottom">
			<a
				href="#"
				class="product-slider__all-link"
			>Показать все книги раздела</a>
		</div>
	</div>
</template>

<style scoped>
    .product-slider{
        max-width: 1150px;
        margin: auto;
    }
    .product-slider__content{
        display: flex;
        gap: 15px;
        border-top: 2px solid rgba(28, 41, 77, 0.15);
        border-bottom: 2px solid rgba(28, 41, 77, 0.15);
    }
    .product-slider__title{
        margin-bottom:18px;
		margin-top: 18px;
        padding-left: 20px;
		font-family: Roboto;
		font-weight: 700;
		font-size: 20px;
		line-height: 25px;
		letter-spacing: 0px;
		color:rgba(28, 41, 77, 1);

    }
    .product-slider__bottom{
        margin: 10px 0px;
        margin-bottom: 30px;
        text-align: center;
    }
</style>
