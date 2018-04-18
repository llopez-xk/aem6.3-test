app.filter('milesFormatter',['$filter', function($filter) {
    return function(miles) {
        if(app.airline === "lan") {
            switch (app.lang) {
                case "en":
                    thouSep = ",";
                    break;
                default:
                    thouSep = ".";
            }
        }
        if(app.airline === "tam") {
            switch (app.lang) {
                case "es":
                    thouSep = ".";
                    break;
                case "pt":
                    thouSep = ".";
                    break;
                case "en":
                    thouSep = ",";
                    break;
                case "fr":
                    thouSep = ".";
                    break;
                case "de":
                    thouSep = ",";
                case "it":
                    thouSep = ",";
            }
        }

        var decPlaces = 0,
            decSep = decSep || ".";

        // Check for invalid miless
        var out = isNaN(miles) || miles === '' || miles === null ? 0.0 : miles;

        //Deal with the minus (negative numbers)
        var minus = miles < 0;
        out = Math.abs(out);
        out = $filter('number')(out, decPlaces);

        // Replace the thousand and decimal separators.
        // This is a two step process to avoid overlaps between the two
        if(thouSep != ",") out = out.replace(/\,/g, "T");
        if(decSep != ".") out = out.replace(/\./g, "D");

        out = out.replace(/T/g, thouSep);
        out = out.replace(/D/g, decSep);

        // Add the minus and the symbol
        if(minus){
            return "-" +out;
        }else{
            return out;
        }
    }
}]);
