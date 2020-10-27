<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list='tabList' @tab='tab'></tab>
		<view v-for="(item,index) in 100" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel(){
				this.$http({url:'get_label'}).then(res=>{
					this.tabList=res.data
				})
			},
			tab({data,index}){
				console.log({data,index})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
