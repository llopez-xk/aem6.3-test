(function(window) {
    window.Latam = window.Latam || {};
    Latam.Utils = Latam.Utils || {};
})(window);

Latam.Utils.parseLinkInfo = function parseLinkInfo(linkInfoData) {
    
    if (typeof linkInfoData !== 'string') {
        return linkInfoData;
    }
    
    try {
        return JSON.parse(linkInfoData);
    } catch (error) {
        linkInfoData = linkInfoData
        .replace(/[\{\}\[\]]/g, '')
        .replace(/&(lt|gt|quot);/g, '');

        return linkInfoData
        .split(',')
        .map(function(stringPart) {
            var retValue = stringPart.trim().split('=');
            for (i = 2; i < retValue.length; i++) {
                retValue[1] += "=" + retValue[i];
            }
            return retValue;
        })
        .reduce(function jsonify(previousItem, currentItem) {
            previousItem[currentItem[0]] = currentItem[1];
            return previousItem;
        }, {}/* Initital Value*/);
    }
};

latamCommonsApp.directive('latamLink', [function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            className: '@',
            linkId: '@'
        },
        link: function latamLink(scope, element, attrs) {
            if (angular.isObject(attrs.linkinfo)) {
                scope.linkInfo = attrs.linkinfo;
            } else {
                scope.linkInfo = Latam.Utils.parseLinkInfo(attrs.linkinfo);
            }
        },
        template: '<a href="{{::linkInfo.path}}" id="{{::id}}" class="{{::class}}" title="{{::linkInfo.alttext}}" target="{{::linkInfo.target}}">{{::linkInfo.title}}</a>'
    };

}]).directive('latamLinkTransclude', [function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            className: '@',
            linkId: '@'
        },
        link: function latamLinkTransclude(scope, element, attrs) {
            if (angular.isObject(attrs.linkinfo)) {
                scope.linkInfo = attrs.linkinfo;
            } else {
                scope.linkInfo = Latam.Utils.parseLinkInfo(attrs.linkinfo);
            }
        },
        template: '<a href="{{::linkInfo.path}}" id="{{::id}}" class="{{::class}}" target="{{::linkInfo.target}}" title="{{::linkInfo.alttext}}"ng-transclude></a>'
    };
}]);
