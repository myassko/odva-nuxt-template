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
        margin: auto;
		margin-left: 113px;
		margin-right: 113px;
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
	.product-slider__top{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/* ..........................................................АДАПТИВ.......................................................... */
@media (max-width: 380px) {
	.product-slider{
		margin-left: 20px;
		margin-right: 20px;
	}
}
</style>
