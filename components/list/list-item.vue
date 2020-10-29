<template>
	<list-scroll class="list-scroll">
			<list-card :item="v" v-for="(v,i) in list" :key="index"></list-card>
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
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
