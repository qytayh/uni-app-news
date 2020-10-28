<template>
	<view>
		<!-- 基础卡片 -->
		<view class="list-card" v-if="mode==='base'">
			<view class="listcard-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</text>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							前端
						</view>
					</view>
					<view class="listcard-content_des-browe">
						120浏览
					</view>
				</view>
			</view>

		</view>
		<!-- 多图模式 -->
		<view class="list-card mode-column" v-if="mode==='column'">
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</text>
				</view>
				<view class="listcard-image">
					<view v-for="(item,index) in 3" :key="index" class="listcard-image_item">
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							前端
						</view>
					</view>
					<view class="listcard-content_des-browe">
						120浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="list-card mode-image" v-if="mode==='image'">
			<view class="listcard-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</text>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							前端
						</view>
					</view>
					<view class="listcard-content_des-browe">
						120浏览
					</view>
				</view>
			</view>
		
		</view>

	</view>
</template>

<script>
	export default {
		props:{
			mode:{
				type:String,
				default:'base'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-card {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color:#000, $alpha:0.1);
		box-sizing: border-box;

		.listcard-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}

		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.listcard-content_title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;

				text {
					word-break:break-all;//自动换行
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.listcard-content_des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content_des-label {
					display: flex;
					.listcard-content_des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}

				.listcard-content_des-browe {
					color: #999;
					line-height: 1.5;
				}
			}
		}
		&.mode-column{
			.listcard-content{
				width:100%;
				padding-left: 0;
			}
			.listcard-image{
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;
				.listcard-image_item{
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child{
						margin-left: 0px;
					}
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.listcard-content_des{
				margin-top: 10px;
			}
		}
		&.mode-image{
			flex-direction: column;
			.listcard-image{
				width: 100%;
				height: 100px;
			}
			.listcard-content{
				padding-left: 0;
				margin-top: 10px;
				.listcard-content_des{
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
