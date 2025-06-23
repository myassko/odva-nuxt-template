<script setup>
defineProps(['icon_feature', 'title_feature', 'content_feature']);
</script>

<template>
	<div class="card-feature">
		<img
			class="card-feature__icon_feature"
			:src="icon_feature"
			alt=""
		>
		<div class="card-feature__text-content">
			<p class="card-feature__title_feature">
				{{ title_feature }}
			</p>
			<p class="card-feature__content_feature">
				{{ content_feature }}
			</p>
		</div>
	</div>
</template>

 <style scoped>
    .card-feature{
        /* max-width: 263px; */
        /* padding: 42px 20px; */
        margin: auto;
        display: flex;
		align-items: center;
    }
	.card-feature__content_feature{
		font-family: Roboto;
		font-weight: 400;
		font-size: 12px;
		line-height: 19px;
		letter-spacing: 3%;
		color: rgb(114, 114, 114);
	}
	.card-feature__title_feature{
		font-family: Roboto;
		font-weight: 700;
		font-size: 16px;
		line-height: 25px;
	}
 </style>
