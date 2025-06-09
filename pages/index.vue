<script setup>
// поменял использование апи ( также, когда мы используем useFetch лучше не вызывать тоаст, так как на сервере он не может появится => будут возникать ошибки)
const { auth } = useApi();

const isLogged = async () =>
{
	const { data, error } = await auth.isLogged();

	if (error.value || !data.value)
	{
		return;
	};
};

await isLogged();

// работа со стором
const { userStore } = useStore();
</script>

<template>
	<div>
		<h1 class="show">
			Главная страница (тайтл показывается только на десктопе)
		</h1>
		<ui-button
			@click="() => {
				useToast(
					'Тестовое уведомление',
				);
			}"
		>
			Показать уведомление
		</ui-button>
		<ui-button
			@click="() => {
				useToast(
					'Тестовое уведомление с ошибкой',
					'destructive',
				)
			}"
		>
			Показать уведомление с ошибкой
		</ui-button>
		<ui-button
			@click="() => {
				userStore.changeName('ЛЕГЕНДА');
			}"
		>
			Поменять имя пользователя
		</ui-button>

		Имя пользователя {{ userStore.name }}

		<!-- использование иконок -->
		<icons-burger />
	</div>
</template>

<style lang="scss">
	.show
	{
		display: none;
		color: $main;
		font-size: 32px;

		@include mq($desktop)
		{
			display: block;
		}
	}
</style>
