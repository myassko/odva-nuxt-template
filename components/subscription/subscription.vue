<script setup>
import InputEmail from '@/components/subscription/InputEmail';
</script>

<template>
	<div class="subscription">
		<p class="subscription__text">
			Скидка 200 ₽ при подписке на рассылку Издательства
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
    @media (max-width: 380px) {
        .subscription{
            display: flex;
            flex-direction: column;
            margin-right: 0px;
            margin-left: 0px;
            padding: 20px 10px;
            max-width: 355px;
            margin-right: 10px;
            margin-left: 10px;
        }
        .subscription__button{
            width: 100%;
            padding: 10px 0px;
        }
        .subscription__text{
            font-family: Roboto;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0%;
        }
    }
</style>
