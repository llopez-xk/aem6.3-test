/**
 * @ngdoc rate
 * @name rate
 *
 * @description
 * rate is a directive that render's a Rate object, it requires a rate-id param on the HTML
 * to get the Rate Object from the 'app' global variable using the dataRates.getRate method
 * (tpl matacalendario, promocionesLAN, promocionesTAM: fide & base, campaign, bannerDeTarifasTAM,
 * latam/tarifasLatamLan, destinos-ofertas/*: subHomeFidelizacion, home, d&o)
 */
app.directive('rate', ['dataRates', 'ngDialog', 'dataRatesConditions', '$templateCache', '$rootScope', '$window', function(dataRates, ngDialog, dataRatesConditions, $templateCache, $rootScope, $window) {
  var rateLink = function(scope, element, attrs) {
    if(typeof scope.showInMobile !== 'undefined'){
      if(!$window.viewport.isDesktop() && !scope.showInMobile){
        return;
      }
    }

    scope.goToRateLink = function(e){
      if(Latam.authoring == undefined && (!e.target.parentElement.className.includes('Rate-conditionsLink') && !e.target.className.includes('Rate-conditionsLink'))){
        var element = angular.element(e.currentTarget);
        var link = ($(element)).attr("link");
        if(link){
          window.location = link;
        }
      }
    }


    scope.rateCardHidden = (typeof attrs.rateCardHidden != "undefined") ? attrs.rateCardHidden : false;
    var rateId = attrs.rateId,
    display = {},
    offerTypes = {
      pasaje: 'PASAJE',
      canje: 'CANJE',
      dinero: 'DINERO',
      auto: 'AUTO',
      hotel: 'HOTEL'
    },
    packageNames = [
      offerTypes.auto,
      offerTypes.hotel
    ],
    currencies = {
      euro: '€',
      KMS: 'KMS'
    },
    buttonTitle,
    buttonLabel,
    purchaseLinkName = 'purchase',
    conditionsLinkName = 'conditions',
    conditionsLink = element.find('.Rate-conditionsLink'),

    componentName = 'Rate-DestinationCard-box',
    componentContainer = 'Rate-DestinationCard',
    component = element.find( '.' + componentName ),
    buttonClass = componentContainer + '-expandButton',
    expandButton = element.find( '.' + buttonClass ),
    collapsible = element.find( '#' + componentContainer + '-collapsible' ),
    iconButton = element.find( '#' + componentContainer + '-icon-button' ),
    spanLinearGradient = element.find( '#' + componentContainer + '-linear-gradient' ),

    toggleCard = function () {
      component.toggleClass( componentName + '--expanded' );
      expandButton.toggleClass( buttonClass + '--expanded' );
      toggleCollapsibleAria();
      scope.$emit('IsotopeItemsAdded');
    },
    toggleCollapsibleAria = function () {
      if( expandButton.attr( 'aria-expanded' ) === 'true' ) {
        expandButton.attr( 'aria-expanded', 'false' );
        collapsible.attr('aria-hidden', 'true' );
        iconButton.attr('class', 'icon icon-caret-up icon-small' );
        spanLinearGradient.attr('class', 'none-Rate-DestinationCard-linear-gradient' );
      } else {
        expandButton.attr( 'aria-expanded', 'true' );
        collapsible.attr('aria-hidden', 'false' );
        iconButton.attr('class', 'icon icon-caret-down icon-small' );
        spanLinearGradient.attr('class', 'Rate-DestinationCard-linear-gradient' );
      }
    },

    loadConditions = function(e){
      e.preventDefault();
      if( !!scope.rateConditionsLink ) {
        dataRatesConditions.getRateConditions( scope.rateConditionsLink ).then(function( conditions ) {
          ngDialog.open({
            template: 'ModalTerms',
            data: {
              conditions: conditions.terms
            },
            ariaRole: 'dialog',
            className: 'modalTerms'
          });
        });
      }
    },
    showRate = function() {
      dataRates.getRate(scope.rateId).then(function(rate) {
        scope.rate = rate;
        // Get some labels from globalAEMConfig for cards
        scope.cardDiscountLabel = app.ratesLabels? app.ratesLabels.CARD_ELEMENTO_DESCUENTO || '': '';
        scope.cardStockLabel = app.ratesLabels? app.ratesLabels.CARD_TEXTO_STOCK_CUPO || '': '';
        scope.cardPriceFromLabel = app.ratesLabels? app.ratesLabels.CARD_TEXTO_PRECIO_DESDE || '': '';
        scope.milesSign = app.milesSign;

        // Display rules to clean the view
        if( !!scope.rate.pricing.primary ) {
          display.primaryEuro   = scope.rate.pricing.primary.currencyDisplay === currencies.euro ? true : false;
          display.KMS           = scope.rate.pricing.primary.currency === currencies.KMS ? true : false;
          display.primaryAmount = !!scope.rate.pricing.primary.amountDisplay;
          display.primaryEuroKMS= ( (display.primaryEuro || display.KMS) && display.primaryAmount) ? true : false;
          display.lastAmount    = !!scope.rate.pricing.primary.lastAmount && scope.rate.pricing.primary.lastAmount !== '0' ? true : false;
          display.cuotaNumber   = !!scope.rate.pricing.primary.cuotaNumber && scope.rate.pricing.primary.cuotaNumber !== '0' ? true : false;
        }

        if( !!scope.rate.pricing.discount ) {
          display.discount = !!scope.rate.pricing.discount && scope.rate.pricing.discount !== '0' ? true : false;
        }

        if( !!scope.rate.pricing.secondary ) {
          display.secondaryEuro   = scope.rate.pricing.secondary.currencyDisplay === currencies.euro ? true : false;
          display.secondaryAmount = !!scope.rate.pricing.secondary.amountDisplay;
        }

        scope.display = display;

        if ( !!scope.rate.type ){
          if( attrs.rateButton ) {
            buttonTitle = attrs.rateButtonTitle;
            buttonLabel = attrs.rateButton;
          } else if( scope.rate.type.indexOf(offerTypes.canje) !== -1 && !!app.ratesConfig.buttons.exchange ) {
            //When rate is type of 'CANJE' switch the purchase button from buy to exchange
            buttonTitle = app.ratesConfig.buttons.exchange.title;
            buttonLabel = app.ratesConfig.buttons.exchange.label;
          } else if( app.ratesConfig != undefined && !!app.ratesConfig.buttons.buy ) {
            buttonTitle = app.ratesConfig.buttons.buy.title;
            buttonLabel = app.ratesConfig.buttons.buy.label;
          }

          // Set the buy button label and title
          scope.rateButtonTitle = buttonTitle;
          scope.rateButton      = buttonLabel;
          // Set text "from" in template
          if( !! attrs.rateFrom ) {
            scope.rateFrom = attrs.rateFrom;
          }

          // Determine if the current rate is a LANTOURS package, so it doesn't show origin text i.e.
          scope["package"] = scope.rate.type.some( function(current) {
            if( packageNames.indexOf( current ) !== -1 ) return true;
            return false;
          });

          // Determine a single main-icon for those cards that only show one icon
          scope["singleIcon"] = scope.rate.type.length > 1 ? 'PROGRAMA' : scope.rate.type[0];

        }

        if( !!scope.rate.links ) {
          scope.rate.links.forEach(function(current) {
            if( current.rel === purchaseLinkName ) {
              scope.rateAnchor = attrs.rateAnchor || current.href;
            } else if( current.rel === conditionsLinkName ) {
              // Set rate conditions button
              scope.rateConditionsLink = current.href;
              if( app.ratesConfig != undefined){
                scope.rateConditions      = app.ratesConfig.buttons.conditions.label;
                scope.rateConditionsTitle = app.ratesConfig.buttons.conditions.title;
              }
              conditionsLink.on('click', loadConditions);
            }
          });
        }

        // Conditions
        dataRatesConditions.getRateConditions( scope.rateConditionsLink ).then(function( conditions ) {
          scope.rateConditionsText = conditions.terms;
          $rootScope.$broadcast("isTermsLoaded", conditions.terms);
        });

        // Destination landing ready event
        scope.$emit('IsotopeItemsAdded');
      });
    };

    if (app.ratesData) {
      showRate();
    } else {
      $rootScope.$on('isRatesLoaded', showRate);
    }

    if( !$window.viewport.isDesktop() ) {
      toggleCollapsibleAria();
    }
    expandButton.on('click', toggleCard);
    scope.$emit('IsotopeItemsAdded');

    // Accordion effect for the cards in promotional section
    if( (attrs.isAccordionEnabled != "undefined") && attrs.isAccordionEnabled ){
        ListaPreciosPanel.initAccordion(element.get(0));
    }

  };

  return {
    restrict: 'A',
    scope: {
      rateColor: '@rateColor',
      rateImage: '@rateImage',
      rateImageAlt: '@rateImageAlt',
      rateCategory:'@rateCategory',
      rateId:'@rateId',
      showrate:'@showrate',
      showInMobile: '=showInMobile',
      rateCardHidden: '@rateCardHidden'
    },
    link: rateLink,
    template: function(elm, attrs) {
      if(attrs.showInMobile === "false" && !$window.viewport.isDesktop()){
        return false;
      }else {
        return $templateCache.get( attrs.templateUrl );
      }
    }
  };

}]);
