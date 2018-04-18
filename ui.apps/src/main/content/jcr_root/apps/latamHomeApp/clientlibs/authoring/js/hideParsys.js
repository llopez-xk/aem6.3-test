function getParsysPlaceholder(componentElement, toggleOnLoad) {
    var parsysPlaceholder;
    
    CQ.WCM.on("editablesready", function(e) {
        parsysPlaceholder = (componentElement) ? CQ.WCM.getEditableFromDOM(componentElement) : null;
        
        if (toggleOnLoad) {
            toggleHandler();
        }
    });
    
    function toggleHandler() {    
        if (parsysPlaceholder) {
            parsysPlaceholder.setVisible(parsysPlaceholder.hidden);
        }
    }
    
    return {
        toggle: toggleHandler
    };
}

$(document).ready(function() {

    function addEventHandler(el, data) {
        
        var elementSelector = data.elementSelector,
            eventName = data.eventName,
            toggleOnLoad = (data.onLoad) ? data.onLoad : false,
            isAttributeSelector = elementSelector.indexOf('data-') != -1,
                parsysPlaceholder = getParsysPlaceholder(el[0], toggleOnLoad);
        
        if (elementSelector && isAttributeSelector) {
            elementSelector = '[' + elementSelector.replace(/\"/g, "'") + ']';
        }          
        
        $(elementSelector, el).on(eventName, function(e) {
            parsysPlaceholder.toggle();
        });
    }
    
    $("div[data-toggle-parsys]").each(function() {
        element = $(this);
        addEventHandler(element.parent(), element.data());
    });  
});