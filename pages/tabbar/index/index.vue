<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<view v-for="(item,index) in 100" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
</style>
