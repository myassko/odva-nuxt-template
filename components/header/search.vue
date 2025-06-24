<script>

</script>

<template>
	<div class="header__search">
		<form
			class="header__search-form"
			action=""
		>
			<input
				class="header__search-input"
				type="text"
				placeholder="Автор, название, ISBN"
			>
			<input
				class="header__search-input-adaptiv"
				type="text"
				placeholder="Что ищем?"
			>
			<button class="header__search-button">
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
						d="M1.66671 7.91699C1.66671 11.3688 4.46493 14.167 7.91671 14.167C9.35974 14.167 10.6885 13.6779 11.7464 12.8566C11.7863 12.9409 11.8411 13.0199 11.9108 13.0896L16.9108 18.0896C17.2362 18.415 17.7639 18.415 18.0893 18.0896C18.4147 17.7641 18.4147 17.2365 18.0893 16.9111L13.0893 11.9111C13.0196 11.8414 12.9406 11.7866 12.8563 11.7467C13.6777 10.6888 14.1667 9.36002 14.1667 7.91699C14.1667 4.46521 11.3685 1.66699 7.91671 1.66699C4.46493 1.66699 1.66671 4.46521 1.66671 7.91699ZM3.33337 7.91699C3.33337 5.38569 5.3854 3.33366 7.91671 3.33366C10.448 3.33366 12.5 5.38569 12.5 7.91699C12.5 10.4483 10.448 12.5003 7.91671 12.5003C5.3854 12.5003 3.33337 10.4483 3.33337 7.91699Z"
						fill="white"
					/></svg>
				Искать
			</button>
			<button class="header__search-button-adaptiv">
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.66666 6.91699C0.66666 10.3688 3.46488 13.167 6.91666 13.167C8.35969 13.167 9.6885 12.6779 10.7464 11.8566C10.7862 11.9409 10.841 12.0199 10.9107 12.0896L15.9107 17.0896C16.2362 17.415 16.7638 17.415 17.0893 17.0896C17.4147 16.7641 17.4147 16.2365 17.0893 15.9111L12.0893 10.9111C12.0195 10.8414 11.9405 10.7866 11.8562 10.7467C12.6776 9.68883 13.1667 8.36002 13.1667 6.91699C13.1667 3.46521 10.3684 0.666992 6.91666 0.666992C3.46488 0.666992 0.66666 3.46521 0.66666 6.91699ZM2.33333 6.91699C2.33333 4.38569 4.38536 2.33366 6.91666 2.33366C9.44797 2.33366 11.5 4.38569 11.5 6.91699C11.5 9.4483 9.44797 11.5003 6.91666 11.5003C4.38536 11.5003 2.33333 9.4483 2.33333 6.91699Z"
						fill="#1C294D"
						fill-opacity="0.5"
					/>
				</svg>
			</button>
		</form>
	</div>
</template>

<style scoped lang="scss">
.header__search
{
    display: flex;
    max-width: 1150px;
}
.header__search-form
{
    display: flex;
}
.header__search-input
{
    padding: 7px 295px 7px 15px;
    border: 1px solid rgba(223, 224, 225, 1);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none;
}
.header__search-input-adaptiv{
	display: none;
}
.header__search-button{
    // font-family: Roboto;
    // font-weight: 500;
    // font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
    padding: 10px 25px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    text-align: center;
    display: flex;
    color:white;
    background:rgba(255, 122, 0, 1);
}
.header__search-button-adaptiv{
	display: none;
}
// ..............................................................АДАПТИВ.............................................................
	@media (max-width: 380px) {
		.header__search-input-adaptiv{
			display: inline;
			padding: 7px 22px 7px 15px;
			border: 1px solid rgb(223, 224, 225);
			border-radius: 5px;
			max-width: 195px;
		}
		.header__search-input{
			display: none;
		}
		.header__search-button-adaptiv{
			display: inline;
			padding-right: 10px;
			position: absolute;
			right: 10px;
			bottom: 10px;
		}
		.header__search-form{
			position: relative;
		}
		.header__search-button{
			display: none;
		}
	}
</style>
