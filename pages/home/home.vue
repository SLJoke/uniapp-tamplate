<template>
	<view class="home">
		<view class="txt u-line-3">clickksak江户时代到付即可的速度加快扣sddsdsdsdsdsdsddsdsdsds税的加快速度较快的数据库加快速度可减少对健康首都科技界可是大家看见盛开的季节看电视剧健康健康的环境会计会计师的空间</view>
		<u--form>
			<u-form-item>
				<u--input
					v-model="keywords"
					placeholder="plase input"
					@confirm="search"
				></u--input>
			</u-form-item>
		</u--form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			keywords: ''
		}
	},
	methods: {
		search() {
			uni.$u.toast(this.keywords)
		}
	}
}
</script>

<style lang="scss" scoped>
.home {
	padding: 30rpx;
	.txt {
		background-image: linear-gradient(
			to right,
			#d32f32,
			#dfdf2f,
			#850caa,
			#884316,
			#0caa1a,
			#0c36aa
		);
		background-clip: text;
		color: transparent;
	}
}
</style>

<style>
page {
	height: 100%;
	background: #f5f5f5;
}
</style>