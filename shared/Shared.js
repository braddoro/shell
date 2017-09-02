isc.Shared = {
	epicListDS: isc.myDataSource.create({
		dataURL: serverPath + "Epics.php",
		fields:[
			{name: "epicID", type: "sequence", primaryKey: true},
			{name: "epicName", type: "text"}
		]
	}),
	projectListDS: isc.myDataSource.create({
		dataURL: serverPath + "Projects.php",
		fields:[
			{name: "projectID", type: "sequence", primaryKey: true},
			{name: "projectName", type: "text"}
		]
	}),
	taskTypesDS: isc.myDataSource.create({
		dataURL: serverPath + "TaskTypes.php",
		fields:[
			{name: "taskTypeID", type: "sequence", primaryKey: true},
			{name: "taskType", type: "text"}
		]
	}),
	taskProjectsDS: isc.myDataSource.create({
		dataURL: serverPath + "TaskProjects.php",
		fields:[
			{name: "projectID", type: "sequence", primaryKey: true},
			{name: "projectName", type: "text"},
			{name: "projectCode", type: "text"}
		]
	})
};
