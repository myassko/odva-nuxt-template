<script setup>
defineProps(['bestseller', 'promotion', 'img_book', 'genre', 'description', 'publishing_house', 'price', 'rating', 'recommendations', 'benefit', 'old_price']);
</script>

<template>
	<div class="product-card">
		<div class="product-card__bestseller-promotion">
			<div class="product-card__bestseller new-background">
				<p
					v-if="bestseller"
					class="product-card__bestseller-color new-color"
					:style="{ color: bestseller.textColor, backgroundColor: bestseller.bgColor }"
				>
					{{ bestseller.title }}
				</p>
			</div>
			<p
				v-if="promotion"
				class="product-card__promotion"
			>
				{{ promotion }}
			</p>
		</div>
		<img
			class="product-card__img_book"
			:src="img_book"
			alt=""
		>
		<div class="product-card__genre-description">
			<p class="product-card__genre">
				{{ genre }}
			</p>
			<p class="product-card__description">
				{{ description }}
			</p>
		</div>
		<p class="product-card__publishing_house">
			{{ publishing_house }}
		</p>
		<div />
		<div class="product-card__price">
			<p
				:style="{ color: price.color }"
				class="product-card__new-price"
			>
				{{ price.name }}
			</p>
			<p
				v-if="old_price"
				class="product-card__old-price"
			>
				{{ old_price }}
			</p>
			<p
				v-if="benefit"
				class="product-card__benefit"
			>
				Выгода {{ benefit }}
			</p>
		</div>
		<div class="product-card__rating-recommendations">
			<div class="product-card__rating">
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.5 10.7938L11.3625 13.125L10.3375 8.73125L13.75 5.775L9.25625 5.39375L7.5 1.25L5.74375 5.39375L1.25 5.775L4.6625 8.73125L3.6375 13.125L7.5 10.7938Z"
						fill="#FBC02D"
					/>
				</svg>
				<p class="product-card__rating-color">
					{{ rating }}
				</p>
			</div>
			<div class="product-card__recommendations">
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.1604 1.875C7.25917 1.875 6.55507 2.597 6.50958 3.4583C6.48986 3.83186 6.45758 4.2307 6.4067 4.54251C6.38804 4.65684 6.32635 4.82741 6.21418 5.04391C6.10592 5.25286 5.96836 5.47111 5.82844 5.67378C5.6894 5.87518 5.5535 6.05331 5.45215 6.18125C5.43557 6.20219 5.41996 6.22172 5.40547 6.23972L4.51043 6.49997C4.30084 6.34301 4.0403 6.25 3.75796 6.25H2.50398C1.81143 6.25 1.25 6.80964 1.25 7.5V11.875C1.25 12.5654 1.81143 13.125 2.50398 13.125H3.75796C4.14075 13.125 4.48348 12.954 4.71349 12.6845L4.71377 12.6847C5.31172 12.9744 5.96789 13.125 6.63275 13.125H11.3966C12.3302 13.125 13.1225 12.4424 13.2577 11.5216L13.7298 8.30731C13.896 7.17572 13.0159 6.16071 11.8687 6.16071H10.4499V4.15722C10.4499 2.89678 9.42485 1.875 8.1604 1.875ZM5.01195 11.4393L5.26205 11.5605C5.68915 11.7674 6.15785 11.875 6.63275 11.875H11.3966C11.7078 11.875 11.9719 11.6475 12.017 11.3405L12.489 8.12625C12.5444 7.74905 12.2511 7.41071 11.8687 7.41071H9.8229C9.47662 7.41071 9.19591 7.13089 9.19591 6.78571V4.15722C9.19591 3.58714 8.7323 3.125 8.1604 3.125C7.96179 3.125 7.77416 3.29049 7.76183 3.52401C7.74136 3.9116 7.70631 4.36389 7.64441 4.7432C7.59479 5.0473 7.46499 5.35379 7.32833 5.61753C7.18777 5.88882 7.01916 6.15398 6.86144 6.38242C6.70286 6.61213 6.54965 6.81281 6.43632 6.95589C6.37946 7.02767 6.33215 7.08556 6.2986 7.12604C6.28181 7.1463 6.26843 7.16223 6.25899 7.17341L6.24783 7.18657L6.24457 7.19039L6.24355 7.19158L6.24319 7.192L6.24305 7.19217C6.24299 7.19224 6.24293 7.1923 5.76675 6.78571L6.24293 7.1923C6.1637 7.28451 6.05924 7.35171 5.94232 7.38571L5.01195 7.65624V11.4393ZM3.75796 7.5H2.50398V8.75V10.625V11.875H3.75796V11.8304V10.625V8.75V7.5Z"
						fill="#7986CB"
					/>
				</svg>
				<p class="product-card__recommendations-color">
					{{ recommendations }}
				</p>
			</div>
		</div>
		<div class="product-card__card-fav">
			<div class="product-card__card">
				<button class="product-card__card-text">
					<svg
						class="product-card__card-img"
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
					<span class="product-card__cars-span">В корзину</span>
				</button>
			</div>
			<button class="product-card__favorites">
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
    .product-card__bestseller-promotion{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 15px;

    }
	.product-card__benefit{
		font-family: Roboto;
		font-weight: 400;
		font-size: 12px;
		line-height: 100%;
		letter-spacing: 0%;
		color: rgba(13, 185, 140, 1);
	}
	.product-card__price{
		display: flex;
		gap: 7px;
		align-items: center;
	}
    .product-card__promotion{
        color: rgb(255, 79, 82);
        border-radius: 5px;
        padding: 5px 10px;
        background: rgb(255, 238, 238);
        max-width: fit-content;
    }
    .product-card__bestseller-color{
        /* color: rgba(172, 142, 227, 1); */
        padding: 5px 10px;
        border-radius: 5px;
    }
    .product-card__bestseller{
        /* color: rgba(172, 142, 227, 1); */
        /* padding: 5px 10px; */
        /* background: rgba(238, 233, 247, 1); */
        border-radius: 5px;
    }
    .product-card__title-countdown{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .product-card__countdown{
        color: rgb(255, 122, 0);
        background: rgba(255, 122, 0, 0.15);
        padding: 5px 10px;
        border-radius: 5px;
    }
    .product-card__rating-recommendations{
        display: flex;
        gap:10px;
		margin-top: 8px;
    }
    .product-card__rating{
        display: flex;
        align-items: center;
        gap: 3px;
        background: rgb(251, 192, 45,0.15);
        padding: 5px 8px;
        border-radius:5px;
    }
    .product-card__rating-color{
        color: rgb(251, 192, 45);
		font-family: Roboto;
		font-weight: 500;
		font-size: 12px;
		line-height: 13px;
		letter-spacing: 0px;
		text-transform: uppercase;

    }
    .product-card__recommendations{
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 10px;
        background: rgba(121, 134, 203, 0.15);
        border-radius:5px;
    }
    .product-card__recommendations-color{
        color: rgb(121, 134, 203,1);
		font-family: Roboto;
		font-weight: 500;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: 0px;
    }
    .product-card{
        padding: 22px 0px;
		padding-left: 20px;
        position: relative;
    }
	.product-card:last-child{
		padding-right: 20px;
	}
	.product-card:not(:first-child){
		border-left: 2px solid rgba(28, 41, 77, 0.15);
	}
    .product-card__img_book{
        margin: auto;
    }
    .product-card__description{
        margin-bottom: 8px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.4px;
		color: rgba(28, 41, 77);
    }
    .product-card__publishing_house{
        margin-bottom: 8px;
        color:rgba(28, 41, 77, 1);
		font-family: Roboto;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
    }
    .product-card__card{
        display: flex;
    }
    .product-card__card-text{
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px 20px;
        border: 1px solid rgb(238, 238, 238);
        border-radius: 5px;
    }
    .product-card__new-price{
        font-weight: 700;
    }
    .product-card__card-fav{
        display: flex;
        gap: 10px;
        margin-top:12px;
    }
    .product-card__favorites{
        padding: 10px;
        border: 1px solid rgb(238, 238, 238);
        border-radius: 5px;
    }
    .product-card__genre{
        color: rgba(28, 41, 77, 0.5);
        margin-top:15px;
        margin-bottom:8px;
		font-family: Roboto;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
    }
    .product-card__cars-span{
		font-family: Roboto;
		font-weight: 500;
		font-size: 14px;
		line-height: 15px;
		letter-spacing: 0px;
		color: rgb(28, 41, 77);
	}
	.product-card__old-price{
		position: relative;
		color: rgba(28, 41, 77, 0.5);
		text-decoration: none;
		font-family: Roboto;
		font-weight: 400;
		font-size: 13px;
		line-height: 15px;
		letter-spacing: 0px;
		align-items: center;
		display: flex;
	}
	.product-card__old-price::before{
		content: "";
		border-bottom: 1px solid red;
		position: absolute;
		width: 100%;
		transform: rotate(-4deg);
	}
	@media (max-width: 380px) {
		.product-card:not(:first-child):not(:last-child){
			display: none;
		}
		.product-card:not(:first-child){
		padding-left: 10px;
	}
		.product-card__rating-recommendations{
		gap: 10px;
		margin-top: 8px;
		flex-direction: column;
	}
	.product-card__rating{
		width: fit-content;
	}
	.product-card__card-text{
		padding: 10px 13px;
	}
	.product-card__img_book{
		width: 126px;
	}
	.product-card__description{
		font-size: 13px;
	}
	.product-card__bestseller-color{
		font-family: Roboto;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0px;
		text-align: center;
	}
	.product-card__promotion{
		font-family: Roboto;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0px;
		text-align: center;
	}
	.product-card__cars-span{
		white-space: nowrap;
	}
	.product-card{
		padding-left: 10px;
	}
	.product-card__recommendations{
		width: fit-content;
		padding: 7px 10px;
	}
	.product-card__card-text{
		padding: 1px 6px;
	}
	.product-card__favorites{
		padding: 6px;
	}
	.product-card__description{
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 124px;
		word-break: break-all;
		font-size: 14px;
	}
}
</style>
