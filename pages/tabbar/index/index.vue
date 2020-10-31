<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list='tabList' @tab='tab' :tabIndex='tabIndex'></tab>
		<view class="home-list">
			<list class='list-scroll' :activeIndex="activeIndex" :tab="tabList" @change='change'></list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				tabList: [],
				tabIndex:0,
				activeIndex:0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			change(e){
				this.tabIndex=e
				this.activeIndex=e
			},
			getLabel() {
				this.$http({
					url: 'get_label'
				}).then(res => {
					res.data.unshift({
						name:"全部"
					})
					this.tabList = res.data
				})
			},
			tab({data,index}) {
				this.activeIndex=index
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.list-scroll {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
