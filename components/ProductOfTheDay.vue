<script setup>
defineProps(['countdown', 'img_book', 'genre', 'description', 'publishing_house', 'price']);
</script>

<template>
	<div class="product-of-the-day">
		<div class="product-of-the-day__title-countdown">
			<span class="product-of-the-day__title">Книга дня</span>
			<span class="product-of-the-day__countdown">{{ countdown }}</span>
		</div>
		<img
			class="product-of-the-day__img_book"
			:src="img_book"
			alt=""
		>
		<div class="product-of-the-day__genre-description">
			<p class="product-of-the-day__genre">
				{{ genre }}
			</p>
			<p class="product-of-the-day__description">
				{{ description }}
			</p>
		</div>
		<p class="product-of-the-day__publishing_house">
			{{ publishing_house }}
		</p>
		<span class="product-of-the-day__price">{{ price }}</span>
		<div class="product-of-the-day__card-fav">
			<div class="product-of-the-day__card">
				<button class="product-of-the-day__card-text">
					<svg
						class="product-of-the-day__card-img"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M2.49996 2.5C2.03972 2.5 1.66663 2.8731 1.66663 3.33333C1.66663 3.79357 2.03972 4.16667 2.49996 4.16667V3.33333L2.49997 4.16667H2.5H2.50014H2.50024H2.50036H2.5005H2.50067H2.50155H2.50277H2.50351H2.50391H2.50434H2.50624H2.50848H2.50909H2.50972H2.51105H2.54309H2.66272H3.07288H3.50144L5.43735 12.6847C5.53716 13.1239 5.96689 13.4025 6.40583 13.3186C6.45656 13.3283 6.50892 13.3333 6.56246 13.3333H15C15.3473 13.3333 15.6583 13.1179 15.7802 12.7926L18.2802 6.12594C18.3762 5.87002 18.3406 5.58332 18.1849 5.35867C18.0292 5.13403 17.7733 5 17.5 5H5.4L4.97924 3.14865C4.89301 2.76924 4.55571 2.5 4.16663 2.5H3.07288H2.66272H2.54309H2.538H2.53322H2.53207H2.53094H2.52874H2.52456H2.51717H2.51633H2.51551H2.51472H2.51394H2.51319H2.51246H2.51105H2.50624H2.50434H2.50391H2.50351H2.50277H2.50067H2.50036H2.50024H2.50014H2.5H2.49997L2.49996 3.33333V2.5ZM5.77879 6.66667L6.91515 11.6667H14.4225L16.2975 6.66667H5.77879ZM8.33329 14.1667C7.41282 14.1667 6.66663 14.9129 6.66663 15.8333C6.66663 16.7538 7.41282 17.5 8.33329 17.5C9.25377 17.5 9.99996 16.7538 9.99996 15.8333C9.99996 14.9129 9.25377 14.1667 8.33329 14.1667ZM11.6666 15.8333C11.6666 14.9129 12.4128 14.1667 13.3333 14.1667C14.2538 14.1667 15 14.9129 15 15.8333C15 16.7538 14.2538 17.5 13.3333 17.5C12.4128 17.5 11.6666 16.7538 11.6666 15.8333Z"
							fill="#FF7A00"
						/>
					</svg>
					<span class="product-of-the-day__card-span">В корзину</span>
				</button>
			</div>
			<button class="product-of-the-day__favorites">
				<svg
					class=""
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.66667 4.1818C6.66667 3.71884 7.03976 3.34353 7.5 3.34353H12.5C12.9602 3.34353 13.3333 3.71884 13.3333 4.1818V16.2339C13.3333 16.5967 12.9061 16.7882 12.6379 16.5454L10.5575 14.6619C10.2405 14.375 9.75945 14.375 9.44253 14.6619L7.36207 16.5454C7.09393 16.7882 6.66667 16.5967 6.66667 16.2339V4.1818ZM7.5 1.66699H12.5C13.8807 1.66699 15 2.79291 15 4.1818V16.2339C15 18.0482 12.8637 19.0053 11.523 17.7916L10 16.4128L8.47701 17.7916C7.13633 19.0053 5 18.0482 5 16.2339V4.1818C5 2.79291 6.11929 1.66699 7.5 1.66699Z"
						fill="#1C294D"
						fill-opacity="0.5"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<style scoped>
    .product-of-the-day__title-countdown{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
}
	.product-of-the-day__title{
		font-family: Roboto;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		letter-spacing: 0%;

	}
    .product-of-the-day__countdown{
        color: rgb(255, 122, 0);
        background: rgba(255, 122, 0, 0.15);
        padding: 5px 10px;
        border-radius: 5px;
		font-family: Roboto;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0%;
		text-align: center;
    }
    .product-of-the-day{
        max-width: 360px;
        margin-top:50px;
        margin-left: 30px;
        padding: 22px 20px;
    }
    .product-of-the-day__img_book{
        margin: auto;

    }
    .product-of-the-day__description{
        margin-bottom: 8px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.4px;
		color: rgba(28, 41, 77);
    }
    .product-of-the-day__publishing_house{
        margin-bottom: 8px;
        color:rgba(28, 41, 77, 1);
		font-family: Roboto;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
    }
    .product-of-the-day__card{
        display: flex;
    }
    .product-of-the-day__card-text{
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px 20px;
        border: 1px solid rgb(238, 238, 238);
        border-radius: 5px;
    }
    .product-of-the-day__price{
        margin-bottom: 8px;
        font-weight: 700;
    }
    .product-of-the-day__card-fav{
        display: flex;
        gap: 10px;
        margin-top:12px;
    }
    .product-of-the-day__favorites{
        padding: 10px;
        border: 1px solid rgb(238, 238, 238);
        border-radius: 5px;
    }
    .product-of-the-day__genre{
        color: rgba(28, 41, 77, 0.5);
        margin-top:15px;
        margin-bottom:8px;
		font-family: Roboto;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
    }
	.product-of-the-day__card-span{
		font-family: Roboto;
		font-weight: 500;
		font-size: 14px;
		line-height: 15px;
		letter-spacing: 0px;
		color: rgb(28, 41, 77);
	}
	@media (max-width: 380px){
    .product-of-the-day{
		margin-left: 0px;
		margin-right: 0px;
		margin-top: 10px;
	}
	.product-of-the-day__img_book{
		width: 133px;
	}
	.product-of-the-day__card{
		width: 100%;
	}
	.product-of-the-day__card-text{
		width: 100%;
	}
	}
</style>
