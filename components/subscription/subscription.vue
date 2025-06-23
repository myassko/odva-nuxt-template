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
        max-width: 1150px;
        margin: auto;
        margin-bottom:30px;
        display: flex;
        gap:14px;
        padding: 33px 45px;
        background: rgba(2, 136, 209, 1);
        color: white;
        border-radius: 5px;
        align-items: center;
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
</style>
