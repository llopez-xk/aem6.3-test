var Auth = (function() {
    'use strict';
    // Only check required cookies
    var config = {
        loginUrl: 'cgi-bin/site_login.cgi',
        logoutUrl:'cgi-bin/login/logout.cgi',
        cookies: {
            latam: {
                userData: 'latam_user_data'
            }
        }
    },
        configureUrls = function( newURLs ) {
            for (var prop in newURLs) {
                if (newURLs.hasOwnProperty(prop) && config.hasOwnProperty(prop) && ( prop === 'loginUrl' || prop === 'logoutUrl') ) {
                    config[prop] = newURLs[prop];
                }
            }
        },
        normalizeCookieName = function( cookieName ) {
            var equalSignPos = cookieName.indexOf('=');
            if( equalSignPos === -1 ) {
                return cookieName + '=';
            } else if( equalSignPos !== (cookieName.length - 1) ) {
                return cookieName.substring(0, equalSignPos + 1);
            }
            return cookieName;
        },
        checkCookie = function( cookieName ) {
            var name = normalizeCookieName( cookieName ),
                ca = [],
                check = false;
            if( !!document.cookie ) {
                ca = document.cookie.split(';');
                check = ca.some(function(current) {
                    while (current.charAt(0) === ' ') {
                        current = current.substring(1);
                    }
                    if (current.indexOf(name) === 0 && current.substring(current.indexOf('=')+1) !== '') {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
            return check;
        },
        isLoggedIn = function() {
            var site, flag;
            for( site in config.cookies ) {
                flag = Object.keys(config.cookies[site]).every(function( currentCookie ) {
                    return checkCookie( config.cookies[site][currentCookie] );
                });
                if(flag) {
                    return true;
                }
            }
            return false;
        },
        toLogin = function() {
            return window.location.href = config.loginUrl;
        },
        toLogout = function() {
            return window.location.href = config.logoutUrl;
        },
        getCookieValue = function( cookieName ) {
            var name = normalizeCookieName( cookieName ),
                ca = [],
                i = 0,
                c;
            if( !!document.cookie ) {
                ca = document.cookie.split(';');
                for(; i < ca.length; i++) {
                    c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return decodeURIComponent(c.substring(name.length, c.length));
                    }
                }
            }
            return '';
        },
        getLatamUserData = function() {
            var categoryData,
                cookieData = getCookieValue( config.cookies.latam.userData );
            cookieData = (cookieData.indexOf('%3B') !== -1) ? cookieData.split('%3B') : cookieData.split(';');
            return {
                site:         'latam',
                name:         cookieData[0].toLowerCase(),
                lastName:     cookieData[1].toLowerCase() || '',
                gender:       cookieData[2] || 'U',
                kms:          cookieData[3] || '0',
                categoryCode: cookieData[4] || '',
                categoryName: cookieData[5] || '',
                program:      cookieData[6] || ''
            };
        },
        getUserData = function() {
            var cookieSite, site, flag;
            for( cookieSite in config.cookies ) {
                flag = Object.keys(config.cookies[cookieSite]).every(function( currentCookie ) {
                    return checkCookie( config.cookies[cookieSite][currentCookie] );
                });
                
                if(flag) {
                    site = cookieSite;
                }
            }
            
            if( !!site ) {
                return getLatamUserData();
            } else {
                return {};
            }
        };
    
    return {
        configureUrls: configureUrls,
        isLoggedIn: isLoggedIn,
        toLogin: toLogin,
        toLogout: toLogout,
        getUserData: getUserData
    };
}());
