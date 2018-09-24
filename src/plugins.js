const bsJsCDN = 'https://unpkg.com/bootstrap/js/dist/'
const bsScssCDN = 'https://unpkg.com/bootstrap/scss/'

const plugins = {
  Alert: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}alert.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_gradients.scss`,
      `${bsScssCDN}mixins/_alert.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_transitions.scss`,
      `${bsScssCDN}_alert.scss`,
    ],
  },
  Button: {
    js: [
      `${bsJsCDN}button.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_gradients.scss`,
      `${bsScssCDN}mixins/_box-shadow.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}mixins/_buttons.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_buttons.scss`,
      `${bsScssCDN}_button-group.scss`,
      `${bsScssCDN}_close.scss`,
    ],
  },
  Carousel: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}carousel.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_carousel.scss`,
    ],
  },
  Collapse: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}collapse.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_transitions.scss`,
    ],
  },
  Dropdown: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}dropdown.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_box-shadow.scss`,
      `${bsScssCDN}mixins/_caret.scss`,
      `${bsScssCDN}mixins/_nav-divider.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}mixins/_gradients.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_dropdown.scss`,
    ],
  },
  Modal: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}modal.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_box-shadow.scss`,
      `${bsScssCDN}mixins/_breakpoints.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_transitions.scss`,
      `${bsScssCDN}_modal.scss`,
    ],
  },
  Popover: {
    js: [
      `${bsJsCDN}tooltip.js`,
      `${bsJsCDN}popover.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_box-shadow.scss`,
      `${bsScssCDN}mixins/_reset-text.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_popover.scss`,
    ],
  },
  Scrollspy: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}scrollspy.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_breakpoints.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_nav.scss`,
      `${bsScssCDN}_navbar.scss`,
    ],
  },
  Tab: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}tab.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_breakpoints.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}mixins/_list-group.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_nav.scss`,
      `${bsScssCDN}_navbar.scss`,
      `${bsScssCDN}_list-group.scss`,
      `${bsScssCDN}_transitions.scss`,
    ],
  },
  Tooltip: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}tooltip.js`,
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_reset-text.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_transitions.scss`,
      `${bsScssCDN}_tooltip.scss`,
    ],
  },
}


export {
  plugins,
}
