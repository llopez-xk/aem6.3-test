function hideFields(fieldSelected, isChecked, value) {
    var fieldIds = ['site','creator','title','description','url','shorttwitterimg', 'largetwitterimg'];
    var option = fieldSelected.getValue();

	if (option === 'summarycard') {
        for (var i = 0; i < fieldIds.length; i++) {
            if (i === 1 || i === 6) { // hiding 'creator' and 'largetwitterimg' fields
                Latam.authoring.Utils.toggleField(fieldSelected,!isChecked,fieldIds[i]);
            } else {
                Latam.authoring.Utils.toggleField(fieldSelected,isChecked,fieldIds[i]);
            }
        }
    } else if (option == 'summarycardwithimage') {
		for (var i = 0; i < fieldIds.length; i++) {
            if (i === 4 || i === 5) { // hiding 'url' and 'shorttwitterimg' fields
                Latam.authoring.Utils.toggleField(fieldSelected,!isChecked,fieldIds[i]);
            } else {
                Latam.authoring.Utils.toggleField(fieldSelected,isChecked,fieldIds[i]);
            }
        }
    } else {
		for (var i = 0; i < fieldIds.length; i++) {
			Latam.authoring.Utils.toggleField(fieldSelected,!isChecked,fieldIds[i]);
        }
    }
}
