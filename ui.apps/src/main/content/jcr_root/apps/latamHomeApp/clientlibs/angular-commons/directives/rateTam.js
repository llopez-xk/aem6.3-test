/**
* This directive renders a TAM rate object that is in the global
* app.ratesData variable
* @description
* (promocionesTAM, bannerDeTarifasTAM, destinos-ofertas/*: subHomeFidelizacion, home, d&o)
*/
app.directive('rateTam', ['$templateCache', '$compile', 'ngDialog', '$timeout', '$window', function($templateCache, $compile, ngDialog, $timeout, $window){
    var thisIsDesktop = function(){
        return $window.viewport.isDesktop();
    }
    return {
        restrict: 'A',
        scope: {
            rateColor: '@rateColor',
            rateImage: '@rateImage',
            rateButton: '@rateButton',
            rateConditions: '@rateConditions',
            offer : "=rateOffer",
            templateUrl: "=templateUrl",
            template: "@template",
            rateIndex: "=rateIndex",
            rateFidelizacion: "=rateFidelizacion",
            rateImageAlt: '@rateImageAlt',
            rateButtonTitle: '@rateButtonTitle',
            rateConditionsTitle: '@rateConditionsTitle',
            rateCategories:"=rateCategories",
            hasImage: '=hasImage',
            rateBannerColor: '=rateColorIndex',
            typeRow:'=typeRow',
            termsAndConditionsText:'@termsAndConditionsText',
            msjError: '=msjError'
        },
        link: function(scope, element, attribute) {

            if(!thisIsDesktop() && scope.rateIndex > 2){
                return;
            }

            scope.goToRateLinkTam = function(e){
                if(Latam.authoring == undefined && (!e.target.parentElement.className.includes('Rate-conditionsLink') && !e.target.className.includes('Rate-conditionsLink'))){
                    var element = angular.element(e.currentTarget);
                    var link = ($(element)).attr("linkRevenue") || ($(element)).attr("linkRedemption");
                    if(link){
                        window.location = link;
                    }
                }
            }
            $timeout(function () {
                var display = {},
                    currencies = {
                        euro: '€',
                        KMS: 'KMS'
                    },
                    colors = {
                        fidelization: ['yellowBanana', 'redCandy', 'greenPuertoRico'],
                        mix1: [ 'turquoises', 'purples', 'limeGreen', 'indigo', 'coral', 'burgundies', 'turquoises', 'purples', 'limeGreen'],
                        mix2: [ 'indigo', 'coral', 'burgundies', 'turquoises', 'purples', 'limeGreen', 'indigo', 'coral', 'burgundies'],
                        turquoises: 'turquoises',
                        purples: 'purples',
                        limeGreen: 'limeGreen',
                        indigo: 'indigo',
                        coral: 'coral',
                        burgundies: 'burgundies',
                        standard: 'whiteRed'
                    },
                    colRow = {
                        normal: 'col-xs-12 col-sm-6 col-md-4',
                        featured: 'col-xs-12 col-sm-6 col-md-8',
                        normal3c: 'col-xs-12 col-sm-4 col-md-4'
                    };

                scope.templateUrl = scope.template || scope.templateUrl;

                if(!scope.offer.isManualRate){
                    if (scope.offer.mock === true) {
                        scope.templateUrl = 'rate-mock';
                        scope.colRow = colRow[scope.typeRow] || colRow['normal3c'];
                        scope.mensaje = scope.msjError;
                    } else {
                        display.primaryEuro   = scope.offer.priceInformation.marketCurrencyCode === currencies.euro ? true : false;
                        display.KMS           = scope.offer.priceInformation.points && !scope.offer.priceInformation.price ? true : false;
                        display.priceKMS      = scope.offer.priceInformation.points && scope.offer.priceInformation.price ? true : false;
                        display.primaryEuroKMS= (display.primaryEuro || display.KMS) ? true : false;
                        if (scope.offer.priceInformation.installment === null) {
                            display.cuotaNumber = false;
                        } else {
                            display.cuotaNumber   = !!scope.offer.priceInformation.installment.price ? true : false;
                        }
                        scope.display = display;
                        scope.milesSign = app.milesSign;
                        scope.rateColor = scope.rateColor || colors.standard;
                        scope.colRow = colRow[scope.typeRow] || colRow['normal3c'];
                        function isArray(value) {
                            return Object.prototype.toString.call(value) === "[object Array]";
                        }

                        if(colors[scope.rateBannerColor]) {
                            if(isArray(colors[scope.rateBannerColor])){
                                scope.rateColor = colors[scope.rateBannerColor][scope.rateIndex] || colors['standard'] ;
                            }else{
                                scope.rateColor = colors[scope.rateBannerColor];
                            }
                        }else {
                            scope.rateColor = scope.rateColor || colors['standard'];
                        }

                        if( scope.hasImage ) {
                            if(scope.rateIndex >= 0 && scope.rateIndex <= 2) {
                                element.addClass('Rate--hasImage');
                            }
                        }
                    }

                    scope.rateConditions = scope.offer.fareRulesHTML;

                } else {
                    scope.rateConditions = scope.offer.rateConditions;

                }

                // Get rate cached template content and compile it
                element.html( $templateCache.get(scope.templateUrl) ).show();
                $compile(element.contents())(scope);

                //Load rate conditions
                element.find('.Rate-conditionsLink').on('click', function(e){
                    e.preventDefault();
                    ngDialog.open({
                        template: 'ModalTerms',
                        data: {
                            conditions: scope.rateConditions
                        },
                        ariaRole: 'dialog',
                        className: 'modalTerms'
                    });
                });
                // Destination landing ready event
                scope.$emit('IsotopeItemsAdded');

                // Accordion effect for the cards in promotional section
                if( (attribute.isAccordionEnabled != "undefined") && attribute.isAccordionEnabled ){
                    ListaPreciosPanel.initAccordion(element.get(0));
                }

            });
        }
    };
}]);
