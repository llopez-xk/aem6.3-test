;window.StickyHeader = function(targetElement, hiddenClass, visibleClass, headerHeight, animationHeightThreshold) {
    'use strict';

    /**
     * A module to hide and show a header based on user scrolling
     * @constructor
     */
    var StickyHeader = function(targetElement, hiddenClass, visibleClass, headerHeight, animationHeightThreshold) {

        // ensure fn is called with new
        if (!(this instanceof StickyHeader)) {
            return new StickyHeader(targetElement, hiddenClass, visibleClass, headerHeight, animationHeightThreshold);
        }

        this.$el = document.querySelector(targetElement);

        // css classes
        this.classHidden = hiddenClass;
        this.classVisible = visibleClass;

        // variables
        this.ticking = false;
        this.latestScrollY = 0;
        this.previousY = 0;

        // constants
        this.HEADER_HEIGHT = headerHeight; // it must be a hardcoded number, otherwise you will get a performance bottleneck
        this.ANIMATION_HEIGHT_THRESHOLD = animationHeightThreshold; // gets hidden/visible once scrolled past this point

        // kick off
        this._init();
    };

    /**
     * kick off
     */
    StickyHeader.prototype._init = function() {
        // attach scroll event to window
        window.addEventListener('scroll', this._onScroll.bind(this));

    };

    /**
     * shows header
     */
    StickyHeader.prototype._stick = function() {
        this.$el.classList.remove(this.classHidden);
        this.$el.classList.add(this.classVisible);
    };

    /**
     * hides header
     */
    StickyHeader.prototype._unStick = function() {
        this.$el.classList.remove(this.classVisible);
        this.$el.classList.add(this.classHidden);
    };

    /**
     * figures out whether we need to hide or show the header
     * called inside a requestAnimationFrame
     */
    StickyHeader.prototype._update = function() {
        // reset the tick so we can capture the next onScroll
        this.ticking = false;

        if (this.latestScrollY > this.ANIMATION_HEIGHT_THRESHOLD) { // scrolled past the header
			this._stick();

        } else if (this.latestScrollY <= this.HEADER_HEIGHT) { // at the top of the page everything is removed
            this.$el.classList.remove(this.classHidden);
            this.$el.classList.remove(this.classVisible);

        } else if (this.latestScrollY <= this.ANIMATION_HEIGHT_THRESHOLD) { // almost at the top of the page
            this._unStick();
            
        }

        this.previousY = this.latestScrollY; // update our Y position record
    };

    /**
     * checks whether an update is currently taking place, if not calls an update
     * via requestAnimationFrame
     */
    StickyHeader.prototype._requestTick = function() {
        if (!this.ticking) {
            requestAnimationFrame(this._update.bind(this));
        }

        this.ticking = true;
    };

    /**
     * cross browser window scroll Y position
     * @return {Number} Current window.scrollY position
     */
    StickyHeader.prototype._getY = function() {
        return window.pageYOffset;
    };

    /**
     * scroll handler
     * updates perviousY record and sets latestY record to current scroll position
     * calls requestTick
     */
    StickyHeader.prototype._onScroll = function() {
        this.previousY = this.latestScrollY;
        this.latestScrollY = this._getY(); // current scroll position
        this._requestTick();
    };

    // instantiate the module
    return new StickyHeader(targetElement, hiddenClass, visibleClass, headerHeight, animationHeightThreshold);

};