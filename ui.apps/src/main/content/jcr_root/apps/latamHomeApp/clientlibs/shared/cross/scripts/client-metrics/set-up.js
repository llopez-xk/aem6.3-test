;MetricsRecorder = (function(window){
    
    var MetricsRecorder = {};
    const PREFIX_ANALYTICS = "time-";

    function getMaxTiming(array){
		return Math.max.apply(null, array);
    }

    function getRoundedTiming(a){
		return Math.floor(a);
    }


    function reportMarksToDynatrace(marks){
		if(typeof window.dT_ != 'undefined'){
            //JavaScript dynatrace agent is present

            marks.forEach(function (item) {
				if(item.value.length > 1){
                    dynaTrace.reportValue(item.name, getMaxTiming(item.value));
                }else{
                    dynaTrace.reportValue(item.name, item.value[0]);
                }
            }); 
        }
    }

    function reportMarksToAnalytics(marks){

        if(marks.length > 1){
            var mark = {};
            marks.forEach(function (item) {
                if(item.value.length > 1){
                    mark[PREFIX_ANALYTICS.concat(item.name)] = getRoundedTiming(getMaxTiming(item.value));
                }else{
                    mark[PREFIX_ANALYTICS.concat(item.name)] = getRoundedTiming(item.value[0]);
                }
            }); 

            mark['event']= 'evento-timing';

            dataLayer.push(mark);
        }
    }

    MetricsRecorder.reportMarks = function(marks) {
        if(Latam.authoring == undefined){ 
            reportMarksToDynatrace(marks);
            reportMarksToAnalytics(marks);
        }
    };
    
    return MetricsRecorder;
})(window);