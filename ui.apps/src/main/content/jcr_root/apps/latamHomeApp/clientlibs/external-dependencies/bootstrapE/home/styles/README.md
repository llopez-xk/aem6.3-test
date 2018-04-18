all innecessary less files were excluded (commented) to build (grunt dist) this bootstrap.min.css


file bootstrap.less config:
===========================

```bash
// Core variables and mixins
@import "variables.less";
@import "mixins.less";

// Reset and dependencies
@import "normalize.less";
//@import "print.less";
//@import "glyphicons.less";

// Core CSS
@import "scaffolding.less";
@import "type.less";
//@import "code.less";
@import "grid.less";
//@import "tables.less";
@import "forms.less";//bbox
//@import "buttons.less";

// Components
@import "component-animations.less";
@import "dropdowns.less";//bbox
@import "button-groups.less";
@import "input-groups.less";//bbox
//@import "navs.less";
//@import "navbar.less";
//@import "breadcrumbs.less";
//@import "pagination.less";
//@import "pager.less";
//@import "labels.less";
//@import "badges.less";
//@import "jumbotron.less";
//@import "thumbnails.less";
//@import "alerts.less";
//@import "progress-bars.less";
//@import "media.less";
//@import "list-group.less";
//@import "panels.less";
//@import "responsive-embed.less";
//@import "wells.less";
//@import "close.less";

// Components w/ JavaScript
@import "modals.less";//bbox
//@import "tooltip.less";
//@import "popovers.less";
//@import "carousel.less";

// Utility classes
@import "utilities.less";
@import "responsive-utilities.less";
```