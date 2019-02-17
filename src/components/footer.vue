<template>
	<div>
		<ul class="footer">
			<router-link to="/film" tag="li" activeClass="active">
				<i class="iconfont icon-dianying"></i>
				<p>电影</p>
			</router-link>
			<router-link to="/cinema" tag="li" activeClass="active">
				<i class="iconfont icon-dianying"></i>
				<p>影院</p>
			</router-link>
			<router-link to="/tuan" tag="li" activeClass="active">
				<i class="iconfont icon-dianying"></i>
				<p>拼团</p>
			</router-link>
			<router-link to="/mine" tag="li" activeClass="active">
				<i class="iconfont icon-dianying"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>
<style scoped lang="scss">
	.footer{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
		display:flex;
		li{
			flex:1;
			height: 100%;
			text-align: center;
			margin-top: 10px;
			i{
				font-size: 20px;
				margin-bottom: 5px;
			}
		}
	}
	.active{
		color: orange;
	}
</style>