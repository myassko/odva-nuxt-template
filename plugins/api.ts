export default defineNuxtPlugin({
	setup()
	{
		const api = $fetch.create({
			baseURL: useRuntimeConfig().public.baseUrl,
			headers: {
				Authorization: `Bearer ${useCookie('token').value || ''}`,
			},
		});

		return {
			provide: {
				api,
			},
		};
	},
});
