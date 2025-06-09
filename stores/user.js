import { defineStore } from 'pinia';

export const user = defineStore('user', {
	state: () => ({
		name: 'Леван',
	}),
	actions: {
		changeName(name)
		{
			this.name = name;
		},
	},
});
