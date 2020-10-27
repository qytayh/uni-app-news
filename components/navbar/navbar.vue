<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight+'px'}"></view>
			<!-- 导航栏 -->
			<view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uni-app,vue</view>
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:'',
				navBarHeight:45,
				windowWidth:375
			};
		},
		created() {
			//获取手机系统信息
			const info=uni.getSystemInfoSync()
			this.statusBarHeight=info.statusBarHeight
			this.windowWidth=info.windowWidth
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//以下代码在h5 app 阿里小程序中不起效
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (胶囊底部高度-状态栏高度)+(胶囊顶部高度-状态栏内的高度)
			this.navBarHeight = (menuButtonInfo.bottom-info.statusBarHeight)+(menuButtonInfo.top-info.statusBarHeight)
			this.windowWidth=menuButtonInfo.left
			//#endif
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 99;
			// height: 45px;
			background-color: $mk-base-color;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 10px;
				// height: 45px;
				box-sizing: border-box;
				.navbar-search {
					display: flex;
					width: 100%;
					align-items: center;
					border-radius: 30px;
					height: 30px;
					background-color: #fff;
					padding: 0 10px;

					.navbar-search_icon {
						margin-right: 10px;
					}

					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}


		}

	}
</style>
