isc.defineClass("Tasks", "myWindow").addProperties({
	title: "Task Entry",
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.TasksDS = isc.myDataSource.create({
			parent: this,
			dataURL: serverPath + "Tasks.php",
			fields:[
				{name: "taskID", primaryKey: true, type: "sequence", canEdit: false, detail: true},
				{name: "userID", type: "integer", defaultValue: 1, detail: true},
				{name: "duration", type: "float", required: true},
				{name: "taskCategoryID", type: "integer", optionDataSource: isc.Shared.taskTypesDS, displayField: "taskType", valueField: "taskTypeID", required: true},
				{name: "projectID", type: "integer", optionDataSource: isc.Shared.taskProjectsDS, displayField: "projectName", valueField: "projectID", required: true},
				{name: "taskDate", title: "Date", useTextField: true, editorType: "DateItem", validators: [{type: "isDate"}], defaultValue: new Date()},
				{name: "ticketCode", type: "text"},
				{name: "description", type: "text", width: "*"},
				{name: "lastChangeDate", canEdit: false, detail: true}
			]
		});
		this.TasksLG = isc.myListGrid.create({
			parent: this,
			showFilterEditor: true,
			dataSource: this.TasksDS,
			rowContextClick: function(record, rowNum, colNum){
				this.parent.localContextMenu.showContextMenu();
				return false;
			},
			rowDoubleClick: function(record, recordNum, fieldNum, keyboardGenerated) {
				this.startEditing(recordNum);
			}
		});
		this.localContextMenu = isc.myContextMenu.create({
			parent: this,
			callingListGrid: this.TasksLG
		});
		this.addItem(isc.myVLayout.create({members: [this.TasksLG]}));
	}
});
