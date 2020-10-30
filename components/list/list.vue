<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(v,i) in tab" :key="i">
			<list-item :list="listCatchData[i]" @loadmore='loadmore' :load="load[i].loading"></list-item>
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
				listCatchData:{},
				load:{},
				pageSize:5
			};
		},
		methods:{
			loadmore(){
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
			change(e){
				this.$emit('change',e.detail.current)
				if(!this.listCatchData[e.detail.current]||this.listCatchData[e.detail.current].length===0){
					this.getList(e.detail.current)
				}
			},
			getList(current){
				if(!this.load[current]){
					this.load[current]={
						page:1,
						loading:'loading'
					}
				}
				this.$http({url:'get_list',data:{
					name:this.tab[current].name,
					page:this.load[current].page,
					pageSize:this.pageSize
				}}).then(res=>{
					console.log(res)
					if(res.data.length===0){
						this.$set(this.load[current],'loading','noMore')
						this.$forceUpdate()//强制页面渲染
						return
					}
					let oldList=this.listCatchData[current]||[]
					oldList.push(...res.data)
					this.$set(this.listCatchData,current,oldList)
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
