<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(v,i) in tab" :key="index">
			<list-item :list="list"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		props:{
				tab:{
					type:Array,
					default(){
						return []
					}
				},
				activeIndex:{
					type:Number,
					default:0
				}
		},
		data() {
			return {
				list:[]
			};
		},
		methods:{
			change(e){
				this.getList(this.tab[e.detail.current].name)
				this.$emit('change',e.detail.current)
			},
			getList(name){
				this.$http({url:'get_list',data:{
					name
				}}).then(res=>{
					this.list=res.data.data
				})
			}
		},
		created(){
			this.getList('后端开发')
		},
		components:{listItem}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
