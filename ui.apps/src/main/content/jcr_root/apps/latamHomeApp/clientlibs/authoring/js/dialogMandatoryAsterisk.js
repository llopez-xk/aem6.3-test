Latam.authoring.dialogMandatoryAsterisk = {

    setMandatorySpan: function(field) {
        if (field){
            var mandatorySpan = document.createElement('span');
            mandatorySpan.setAttribute('class', 'cq-asterisk');
            mandatorySpan.innerHTML = "*";
            field.label.dom.appendChild(mandatorySpan);
        }
    },

    removeMandatorySpan: function(field) {
        if (field){ 
            if (field.label.dom.firstElementChild) {
                field.label.dom.removeChild(field.label.dom.firstElementChild);
            }
        }
    }
}