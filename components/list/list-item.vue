<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<list-card :item="v" v-for="(v,i) in list" :key="i"></list-card>
		<uni-load-more iconType="snow" v-if="list.length==0||list.length>5" :status="load"></uni-load-more>
	</list-scroll>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			load:{
				type:String,
				default(){
					return "loading"
				}
			}
		},
		methods:{
			loadmore(){
				this.$emit('loadmore')
			}
			
		},
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
