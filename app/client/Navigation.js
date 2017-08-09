isc.defineClass("Navigation", "Menu").addProperties({
	initWidget: function(initData){
		this.mainMenu = isc.myMenu.create({
			title: "...",
			showShadow: true,
			items: [
				{title: "Items", click: "isc.Items.create({test1: \"foo\", test2: 22, width: 500})"},
				{title: "UserStories", click: "isc.UserStories.create()"}
			]
		});
		this.menuBar = isc.MenuBar.create({
			menus: [this.mainMenu]
		});
	}
});
