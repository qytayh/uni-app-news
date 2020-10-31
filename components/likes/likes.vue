<template>
	<view class="icons" @click.stop="likeTap">
		<uni-icons size="20" color="#f07373" :type="like?'heart-filled':'heart'"></uni-icons>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				like:false
			};
		},
		watch:{
			item(newval){
				this.like=this.item.is_like
			}
		},
		created(){
			this.like=this.item.is_like
		},
		methods:{
			likeTap(){
				this.like=!this.like
				this.setUpdateLikes()
			},
			setUpdateLikes(){
				uni.showLoading()
				this.$http({url:"update_likes",data:{article_id:this.item._id}}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':"取消收藏",
						icon:'none'
					})
				}).catch(e=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
.icons{
					display: flex;
					justify-content:center;
					align-items: center;
					width: 20px;
					height: 20px;
					position: absolute;
					top: 0;
					right: 0;
				}
</style>
