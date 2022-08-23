<template>
	<view class="profile">
		<view class="box" v-for="(item, index) in 200" :class="`box${index + 1}`" :key="index"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style lang="scss" scoped>
.profile {
	height: 100vh;
	position: relative;
	overflow: hidden;

	@for $i from 1 through 200 {
		$random: random() * 100rpx;
		.box#{$i} {
			width: $random;
			height: $random;
			border-radius: 50%;
			background-color: hsla(random(360), 100%, 50%, .7);
			animation: dd#{$i} 3s infinite;
			position: absolute;
			top: random() * 100vh;
			left: random() * 100vw;
		}

		@keyframes dd#{$i} {
			$scale: random();
			0% { transform: scale($scale * 1) translateX($random); }
			50% { transform: scale(random() * 3) translateY(-$random); }
			100% { transform: scale($scale * 1) translateX($random); }
		}
	}
	
}
</style>