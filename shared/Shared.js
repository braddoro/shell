isc.Shared = {
	epicListDS: isc.myDataSource.create({
		dataURL: serverPath + "Epics.php",
		fields:[
			{name: "epicID", type: "sequence", primaryKey: true},
			{name: "epicName", type: "text"}
		]
	})
};
