<template>
	<div class="subscription__input">
		<input
			id=""
			class="subscription__input-mail"
			type="text"
			name=""
			placeholder="Введите ваш Email"
		>
	</div>
</template>

<style scoped>
    .subscription__input-mail{
        padding: 10px 280px 10px 13px;
        border-radius: 5px;
		padding: 10px 220px 10px 13px;
    }
	@media (max-width: 380px) {
		.subscription__input-mail{
			padding-right: 0px;
			width: 100%;
	}
	.subscription__input{
		width: 100%;
	}
}
</style>
