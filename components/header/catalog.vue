<template>
	<div class="header__catalog">
		<button class="header__catalog-menu">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.33337 5.83333C3.33337 5.3731 3.70647 5 4.16671 5H15.8334C16.2936 5 16.6667 5.3731 16.6667 5.83333C16.6667 6.29357 16.2936 6.66667 15.8334 6.66667H4.16671C3.70647 6.66667 3.33337 6.29357 3.33337 5.83333ZM3.33337 10C3.33337 9.53976 3.70647 9.16667 4.16671 9.16667H11.6667C12.1269 9.16667 12.5 9.53976 12.5 10C12.5 10.4602 12.1269 10.8333 11.6667 10.8333H4.16671C3.70647 10.8333 3.33337 10.4602 3.33337 10ZM4.16671 13.3333C3.70647 13.3333 3.33337 13.7064 3.33337 14.1667C3.33337 14.6269 3.70647 15 4.16671 15H15.8334C16.2936 15 16.6667 14.6269 16.6667 14.1667C16.6667 13.7064 16.2936 13.3333 15.8334 13.3333H4.16671Z"
					fill="#1C294D"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.33398 10.0003C3.33398 9.54009 3.70708 9.16699 4.16732 9.16699H11.6673C12.1276 9.16699 12.5007 9.54009 12.5007 10.0003C12.5007 10.4606 12.1276 10.8337 11.6673 10.8337H4.16732C3.70708 10.8337 3.33398 10.4606 3.33398 10.0003Z"
					fill="#FC6E1D"
				/></svg>
			Каталог
		</button>
		<ul class="header__catalog-ul">
			<li class="header__catalog-item">
				<a
					class="header__catalog-link"
					href=""
				>Авторы</a>
			</li>
			<li class="header__catalog-item">
				<a
					class="header__catalog-link"
					href=""
				>Новинки</a>
			</li>
			<li class="header__catalog-item">
				<a
					class="header__catalog-link img-sale color-sale"
					href=""
				><svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.91819 1.91855C2.25361 1.58314 2.79744 1.58314 3.13286 1.91855L6.06389 4.8495C6.30837 4.73771 6.57322 4.66299 6.85107 4.63217L9.70855 4.31517C10.4864 4.22888 11.2613 4.50076 11.8147 5.05414L17.5786 10.8179C18.5849 11.8242 18.5849 13.4556 17.5786 14.4618L14.4614 17.579C13.4551 18.5852 11.8236 18.5852 10.8174 17.579L4.82788 11.5896C4.22584 10.9876 3.96006 10.1271 4.11777 9.29042L4.60307 6.71583C4.64788 6.47813 4.72471 6.25263 4.82881 6.04374L1.91819 3.13319C1.58277 2.79778 1.58277 2.25397 1.91819 1.91855ZM7.03955 8.25442L6.21628 7.43117L5.80585 9.6086C5.75328 9.88748 5.84187 10.1743 6.04255 10.375L12.032 16.3643C12.3675 16.6998 12.9113 16.6998 13.2467 16.3643L16.3639 13.2472C16.6993 12.9118 16.6993 12.368 16.3639 12.0326L10.6 6.26878C10.4155 6.08432 10.1572 5.99369 9.89796 6.02245L7.50261 6.28819L8.2744 7.05996C8.88948 6.88505 9.57852 7.03973 10.0628 7.52398C10.7743 8.2355 10.7743 9.3891 10.0628 10.1006C9.35125 10.8121 8.19762 10.8121 7.48608 10.1006C6.98657 9.60112 6.83773 8.88376 7.03955 8.25442Z"
						fill="#FF283D"
					/></svg>
					Скидки</a>
			</li>
			<li class="header__catalog-item">
				<a
					class="header__catalog-link"
					href=""
				>Партнёрам</a>
			</li>
			<li class="header__catalog-item">
				<a
					class="header__catalog-link"
					href=""
				>Мы </a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
    .header__catalog
    {
        display: flex;
        margin: auto;
        margin-top: 20px;
        gap:25px;
		margin-left: 113px;
		margin-right: 113px;
    }
    .header__catalog-menu
    {
        display: flex;
        gap:5px;
        align-items: end;
    }
    .header__catalog-ul{
        display: flex;
        gap:25px;
    }
    .img-sale
    {
        display: flex;
        align-items: end;
        gap:5px;
    }
    .color-sale{
        color:rgba(255, 40, 61, 1);
    }
	@media (max-width: 1500px) {
		.header__catalog{
			margin-left: 63px;
			margin-right: 63px;
		}
	}
</style>
