import { user } from '@/stores/user.js';

export const useStore = () =>
{
	const userStore = user();

	return {
		userStore,
	};
};
