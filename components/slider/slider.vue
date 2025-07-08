<script setup>
import { onMounted } from 'vue';

onMounted(() =>
{
	let offset = 0;
	const slideWidth = 743;
	const slideCount = 4;
	const maxOffset = slideWidth * (slideCount - 1);

	const sliderLine = document.querySelector('.slider-line');
	const dots = document.querySelectorAll('.slider_img__pagin svg rect');

	const updatePagination = () =>
	{
		const activeIndex = offset / slideWidth;
		dots.forEach((dot, index) =>
		{
			dot.setAttribute('fill-opacity', index === activeIndex ? '1' : '0.5');
		});
	};

	document.querySelector('.slider_img__arrow-right-button').addEventListener('click', function ()
	{
		offset += slideWidth;
		if (offset > maxOffset)
		{
			offset = 0;
		}
		sliderLine.style.left = -offset + 'px';
		updatePagination();
	});

	document.querySelector('.slider_img__arrow-left-button').addEventListener('click', function ()
	{
		offset -= slideWidth;
		if (offset < 0)
		{
			offset = maxOffset;
		}
		sliderLine.style.left = -offset + 'px';
		updatePagination();
	});

	// Обработка кликов по чёрточкам
	dots.forEach((dot, index) =>
	{
		dot.parentNode.style.cursor = 'pointer';
		dot.parentNode.addEventListener('click', () =>
		{
			offset = index * slideWidth;
			sliderLine.style.left = -offset + 'px';
			updatePagination();
		});
	});

	updatePagination(); // Установить активную чёрточку при загрузке
});
</script>

<template>
	<div class="slider_img">
		<div class="slider-line">
			<img
				class=""
				src="/images/slaider.png"
				alt=""
			>
			<img
				class=""
				src="/images/slaider.png"
				alt=""
			>
			<img
				class=""
				src="/images/slaider.png"
				alt=""
			>
			<img
				class=""
				src="/images/slaider.png"
				alt=""
			>
		</div>
		<div class="slider_img__arrow">
			<button class="slider_img__arrow-left-button">
				<svg
					class="slider_img__arrow-left"
					width="8"
					height="12"
					viewBox="0 0 8 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.0893 0.41107C6.76386 0.0856329 6.23622 0.0856329 5.91079 0.41107L0.910786 5.41107C0.585349 5.73651 0.585349 6.26415 0.910786 6.58958L5.91079 11.5896C6.23622 11.915 6.76386 11.915 7.0893 11.5896C7.41473 11.2641 7.41473 10.7365 7.0893 10.4111L2.67855 6.00033L7.0893 1.58958C7.41473 1.26414 7.41473 0.736507 7.0893 0.41107Z"
						fill="#2A3D48"
						fill-opacity="0.5"
					/>
				</svg>
			</button>
			<button class="slider_img__arrow-right-button">
				<svg
					class="slider_img__arrow-right"
					width="8"
					height="12"
					viewBox="0 0 8 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.910704 0.41107C1.23614 0.0856329 1.76378 0.0856329 2.08921 0.41107L7.08921 5.41107C7.41465 5.73651 7.41465 6.26415 7.08921 6.58958L2.08921 11.5896C1.76378 11.915 1.23614 11.915 0.910704 11.5896C0.585267 11.2641 0.585267 10.7365 0.910704 10.4111L5.32145 6.00033L0.910704 1.58958C0.585267 1.26414 0.585267 0.736507 0.910704 0.41107Z"
						fill="#1C294D"
					/>
				</svg>
			</button>
		</div>
		<div class="slider_img__pagin">
			<svg
				width="25"
				height="2"
				viewBox="0 0 25 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="25"
					height="2"
					rx="1"
					fill="white"
				/>
			</svg>
			<svg
				width="25"
				height="2"
				viewBox="0 0 25 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="25"
					height="2"
					rx="1"
					fill="white"
					fill-opacity="0.5"
				/>
			</svg>
			<svg
				width="25"
				height="2"
				viewBox="0 0 25 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="25"
					height="2"
					rx="1"
					fill="white"
					fill-opacity="0.5"
				/>
			</svg>
			<svg
				width="25"
				height="2"
				viewBox="0 0 25 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="25"
					height="2"
					rx="1"
					fill="white"
					fill-opacity="0.5"
				/>
			</svg>
		</div>
	</div>
</template>

<style scoped>
    .slider_img
    {
		border: 2px solid black;
		position: relative;
        /* max-width: 1150px; */
        margin: auto;
        margin-top: 50px;
		overflow: hidden;
    }
	.slider-line{
		display: flex;
		width: 750px;
		height: 350px;
		position: relative;
		left: 0;
		transition: all ease 1s;
	}
	.slider_img__pagin{
		display: flex;
		gap:5px;
		position: absolute;
		bottom: 10px;
		right: 320px;
	}
	.slider_img__arrow{
		display: flex;
		position: absolute;
		top: 150px;
	}
	.slider_img__arrow-left-button{
		padding: 15px;
		background: rgba(255, 255, 255, 0.85);
		border-radius:5px;
		position: relative;
		right: -20px;
	}
	.slider_img__arrow-right-button{
		padding: 15px;
		background: rgba(255, 255, 255, 0.85);
		border-radius:5px;
		position: relative;
		left: 650px;
	}
	@media (max-width: 380px){
    .slider_img{
		width: 355px;
		margin-top: 10px;
	}
	.slider_img__pagin{
		right: 120px;
	}
	.slider_img__arrow{
		display: none;
	}
	.slider-line{

	}
	}
</style>
