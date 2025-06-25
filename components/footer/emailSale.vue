<template>
	<div class="footer__email">
		<form
			class="footer__email-form"
			action=""
		>
			<input
				class="footer__email-input"
				type=""
				placeholder="Введите свой Email и получите скидку"
			>
			<input
				class="footer__email-input-adaptiv"
				type=""
				placeholder="Подписаться на рассылку"
			>
		</form>
		<button class="footer__email-tg-icon">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.8982 1.07111C19.8091 0.996269 19.6824 0.978905 19.5751 1.02664L0.172992 9.66668C0.068538 9.71321 0.00127346 9.8131 1.78558e-05 9.92347C-0.00123775 10.0338 0.0638145 10.1351 0.167252 10.1838L4 11.8416C4.10069 11.889 12 7.89921 12 7.89921L7.13411 13.1238C7.04792 13.2164 7 13.3381 7 13.4646V17.5C7 17.9501 7.54822 18.171 7.8603 17.8467L10.49 15.1136L14.4912 17.0546C14.5694 17.0904 14.66 17.0919 14.7394 17.0588C14.8189 17.0256 14.8794 16.9611 14.9054 16.8819L19.9862 1.37236C20.0218 1.26406 19.9871 1.14595 19.8982 1.07111Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
</template>

<style scoped>
    .footer__email{
        display: flex;
    }
    .footer__email-input{
        padding: 10px 176px 10px 15px;
        border: 1px solid rgb(223, 224, 225);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .footer__email-tg-icon{
        padding: 12px 15px;
        background: rgba(255, 92, 0, 1);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
	.footer__email-input-adaptiv{
		display: none;
	}
	@media (max-width: 380px) {
		.footer__email-tg-icon{
			padding: 10px 12px;
		}
		.footer__email-input{
			padding: 10px 176px 10px 15px;
			padding-right: 0px;
			width: 100%;
		}
		.footer__email-input-adaptiv{
		display: inline;
		padding: 10px 15px 10px 15px;
        border: 1px solid rgb(223, 224, 225);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
		width: 100%;
		font-family: Roboto;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0px;

	}
	.footer__email-input{
		display: none;
	}
	}
</style>
