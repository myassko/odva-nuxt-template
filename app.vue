<script
	setup
	lang="ts"
>
import Toaster from '@/components/ui-kit/toast/Toaster.vue';
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Toaster />
	</div>
</template>
