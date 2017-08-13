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
	})
};
