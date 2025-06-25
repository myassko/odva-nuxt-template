<script setup>
import InputEmail from '@/components/subscription/InputEmail';
</script>

<template>
	<div class="subscription">
		<p class="subscription__text">
			Скидка <span class="subscription_sale"> 200 ₽</span>при подписке на рассылку Издательства
		</p>
		<InputEmail />
		<button class="subscription__button">
			Подписаться
		</button>
	</div>
</template>

<style scoped>
    .subscription{
        margin: auto;
        margin-bottom:30px;
        display: flex;
        gap:14px;
        padding: 33px 45px;
        background: rgba(2, 136, 209, 1);
        color: white;
        border-radius: 5px;
        align-items: center;
        margin-right: 113px;
        margin-left: 113px;
    }
    .subscription__button{
        padding: 10px 25px;
        border: 1px solid white;
        border-radius: 5px;
    }
    .subscription__text{
        display: flex;
        align-items: center;
        font-family: Roboto;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0%;

    }
    .subscription_sale{
         position: relative;
        display: inline-block;
        padding: 0 10px;
        font-weight: bold;
        color: white;
        z-index: 1;
        font-family: Roboto;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0%;
    }
    .subscription_sale::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('/images/sale.png');
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
    }
    @media (max-width: 380px) {
        .subscription{
            display: flex;
            flex-direction: column;
            margin-right: 0px;
            margin-left: 0px;
            padding: 20px 10px;
            max-width: 355px;
            /* margin-right: 10px;
            margin-left: 10px; */
            margin: auto;
        }
        .subscription__button{
            width: 100%;
            padding: 10px 0px;
        }
        .subscription__text{
            display: block;
            font-family: Roboto;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0%;
        }
    }
</style>
