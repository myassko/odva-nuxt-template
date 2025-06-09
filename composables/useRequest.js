export const useRequest = (request, opts = {}) =>
{
	const config = useRuntimeConfig();

	const userAuth = useCookie('token');

	const options = {
		...opts,
		baseURL: config.public.api,
		headers: {
			Authorization: userAuth.value ? `Bearer ${userAuth.value}` : '',
		},
	};

	return useFetch(request, options);
};
