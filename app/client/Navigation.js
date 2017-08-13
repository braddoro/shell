isc.defineClass("Navigation", "Menu").addProperties({
	initWidget: function(initData){
		this.AgileMenu = isc.myMenu.create({
			title: "Agile",
			items: [
				{title: "Projecs", enabled: false, click: "isc.Epics.create()"},
				{title: "Epics", click: "isc.Epics.create()"},
				{title: "Sprints", enabled: false, click: "isc.Sprints.create()"},
				{title: "User Stories", click: "isc.UserStories.create()"}
			]
		});
		this.mainMenu = isc.myMenu.create({
			title: "...",
			showShadow: true,
			items: [
				{title: "Agile", submenu: this.AgileMenu},
				{isSeparator: true},
				{title: "Items", click: "isc.Items.create({test1: \"foo\", test2: 22, width: 500})"}
			]
		});
		this.menuBar = isc.MenuBar.create({
			menus: [this.mainMenu]
		});
	}
});
