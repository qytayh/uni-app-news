<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(v,i) in tab" :key="i">
			<list-item :list="listCatchData[i]"></list-item>
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
				list:[],
				listCatchData:{}
			};
		},
		methods:{
			change(e){
				this.getList(e.detail.current)
				this.$emit('change',e.detail.current)
			},
			getList(current){
				this.$http({url:'get_list',data:{
					name:this.tab[current].name
				}}).then(res=>{
					this.$set(this.listCatchData,current,res.data.data)
				})
			}
		},
		watch:{
			tab(newval){
				if(newval.length===0) return
				this.getList(this.activeIndex)
			}
		},
		created(){
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
