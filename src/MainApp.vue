<template>
	<SidebarMenu 
		:show-menu="showSidebarMenu"
		@close-sidebar-menu="hideMenu">
	</SidebarMenu>

	<router-view></router-view>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import SidebarMenu from './components/SidebarMenu.vue';

export default {
	name: 'MainApp',

	components: {
		Home,
		About,
		SidebarMenu
	},

	data() {
		return {
			showSidebarMenu: false
		}
	},

	methods: {
		showMenu() {
			this.showSidebarMenu = true;
			document.body.classList.add('opened-sidebar');
		},

		hideMenu() {
			this.showSidebarMenu = false;
			document.body.classList.remove('opened-sidebar');
		},
	},

	mounted() {
		this.emitter.on('open-sidebarMenu', this.showMenu);
	}
}
</script>

<style>

</style>
