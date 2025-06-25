<template>
	<div class="info-web">
		<p class="info-web__publishing-house">
			© 2020 Издательство «Статут»
		</p>
		<ul class="info-web__data">
			<li class="info-web__address">
				ул. Лобачевского, 92, корп. 2 119454, г. Москва
			</li>
			<li class="info-web__address">
				Политика конфиденциальности
			</li>
			<li><a href="" /></li>
			<li><a href="" /></li>
			<li class="info-web__address">
				Договор оферты
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.info-web{
		display: flex;
		gap: 170px;
		margin: auto;
		padding: 45px 0px;
		margin-left: 113px;
		margin-right: 113px;
	}
	.info-web__data{
		display: flex;
		gap: 60px;
	}
	.info-web__address{
		font-family: Roboto;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0px;
		text-align: center;
		color: rgba(28, 41, 77, 0.8);
	}
	.info-web__publishing-house{
		font-family: Roboto;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0px;
		text-align: center;
		color: rgba(28, 41, 77, 0.8);
	}
	@media (max-width: 380px) {
		.info-web{
			flex-direction: column;
			margin-left: 0px;
			margin-right: 0px;
			gap: 0px;
		}
		.info-web__data{
			flex-direction: column;
			order: -1;
		}
		.info-web__address:first-child{
			order: 2;
		}
	}
</style>
