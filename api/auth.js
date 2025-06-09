import { Endpoints } from '~/constants';

export default {
	isLogged: async () =>
	{
		return await useRequest(Endpoints.AUTH_IS_LOGGED);
	},
};
