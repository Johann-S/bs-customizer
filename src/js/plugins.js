import { bsJsCDN, bsScssCDN } from './config'

const jsPlugins = {
  Alert: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}alert.js`
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
      `${bsScssCDN}_alert.scss`
    ]
  },
  Button: {
    js: [
      `${bsJsCDN}button.js`
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
      `${bsScssCDN}_close.scss`
    ]
  },
  Carousel: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}carousel.js`
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_breakpoints.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_card.scss`,
      `${bsScssCDN}_carousel.scss`
    ]
  },
  Collapse: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}collapse.js`
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_transitions.scss`
    ]
  },
  Dropdown: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}dropdown.js`
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_deprecate.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_box-shadow.scss`,
      `${bsScssCDN}mixins/_caret.scss`,
      `${bsScssCDN}mixins/_nav-divider.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}mixins/_gradients.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_dropdown.scss`
    ]
  },
  Modal: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}modal.js`
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
      `${bsScssCDN}_modal.scss`
    ]
  },
  Popover: {
    js: [
      `${bsJsCDN}tooltip.js`,
      `${bsJsCDN}popover.js`
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_box-shadow.scss`,
      `${bsScssCDN}mixins/_reset-text.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_popover.scss`
    ]
  },
  Scrollspy: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}scrollspy.js`
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_breakpoints.scss`,
      `${bsScssCDN}mixins/_hover.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_nav.scss`,
      `${bsScssCDN}_navbar.scss`
    ]
  },
  Tab: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}tab.js`
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
      `${bsScssCDN}_transitions.scss`
    ]
  },
  Toast: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}toast.js`
    ],
    scss: [
      `${bsScssCDN}_toasts.scss`
    ]
  },
  Tooltip: {
    js: [
      `${bsJsCDN}util.js`,
      `${bsJsCDN}tooltip.js`
    ],
    scss: [
      `${bsScssCDN}_functions.scss`,
      `${bsScssCDN}_variables.scss`,
      `${bsScssCDN}mixins/_border-radius.scss`,
      `${bsScssCDN}mixins/_reset-text.scss`,
      `${bsScssCDN}mixins/_transition.scss`,
      `${bsScssCDN}_root.scss`,
      `${bsScssCDN}_transitions.scss`,
      `${bsScssCDN}_tooltip.scss`
    ]
  }
}

const scssPlugins = {
  Badge: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_badge.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}mixins/_transition.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_badge.scss`
  ],
  Borders: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}utilities/_borders.scss`
  ],
  Breadcrumb: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_breadcrumb.scss`
  ],
  ButtonGroup: jsPlugins.Button.scss,
  Card: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_card.scss`
  ],
  Clearfix: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_clearfix.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}utilities/_clearfix.scss`
  ],
  CloseIcon: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_close.scss`
  ],
  Code: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_box-shadow.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_code.scss`
  ],
  Colors: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_background-variant.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}mixins/_text-emphasis.scss`,
    `${bsScssCDN}mixins/_text-hide.scss`,
    `${bsScssCDN}mixins/_text-truncate.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}utilities/_text.scss`,
    `${bsScssCDN}utilities/_background.scss`
  ],
  Display: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_print.scss`,
    `${bsScssCDN}utilities/_display.scss`
  ],
  Embed: [
    `${bsScssCDN}utilities/_embed.scss`
  ],
  Flex: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}utilities/_flex.scss`
  ],
  Float: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_float.scss`,
    `${bsScssCDN}utilities/_float.scss`
  ],
  Forms: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_box-shadow.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_forms.scss`,
    `${bsScssCDN}mixins/_gradients.scss`,
    `${bsScssCDN}mixins/_transition.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_custom-forms.scss`,
    `${bsScssCDN}_forms.scss`
  ],
  Grid: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_grid-framework.scss`,
    `${bsScssCDN}mixins/_grid.scss`,
    `${bsScssCDN}_grid.scss`
  ],
  Images: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_box-shadow.scss`,
    `${bsScssCDN}mixins/_image.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_images.scss`
  ],
  InputGroup: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_input-group.scss`
  ],
  Jumbotron: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_jumbotron.scss`
  ],
  ListGroup: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}mixins/_list-group.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_list-group.scss`
  ],
  Media: [
    `${bsScssCDN}_media.scss`
  ],
  Navs: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_nav.scss`
  ],
  Navbar: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_navbar.scss`
  ],
  Overflow: [
    `${bsScssCDN}utilities/_overflow.scss`
  ],
  Pagination: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_lists.scss`,
    `${bsScssCDN}mixins/_pagination.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_pagination.scss`
  ],
  Position: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}utilities/_position.scss`
  ],
  Progress: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_border-radius.scss`,
    `${bsScssCDN}mixins/_box-shadow.scss`,
    `${bsScssCDN}mixins/_gradients.scss`,
    `${bsScssCDN}mixins/_transition.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_progress.scss`
  ],
  Reboot: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}vendor/_rfs.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_reboot.scss`
  ],
  Screenreaders: [
    `${bsScssCDN}mixins/_screen-reader.scss`,
    `${bsScssCDN}utilities/_screenreaders.scss`
  ],
  Shadows: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}utilities/_shadows.scss`
  ],
  Sizing: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}utilities/_sizing.scss`
  ],
  Spacing: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}utilities/_spacing.scss`
  ],
  Spinners: [
    `${bsScssCDN}_spinners.scss`
  ],
  StretchedLink: [
    `${bsScssCDN}utilities/_stretched-link.scss`
  ],
  Tables: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}mixins/_table-row.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_tables.scss`
  ],
  Text: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_breakpoints.scss`,
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_hover.scss`,
    `${bsScssCDN}mixins/_text-emphasis.scss`,
    `${bsScssCDN}mixins/_text-hide.scss`,
    `${bsScssCDN}mixins/_text-truncate.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}utilities/_text.scss`
  ],
  Type: [
    `${bsScssCDN}_functions.scss`,
    `${bsScssCDN}_variables.scss`,
    `${bsScssCDN}mixins/_lists.scss`,
    `${bsScssCDN}_root.scss`,
    `${bsScssCDN}_type.scss`
  ],
  VerticalAlign: [
    `${bsScssCDN}utilities/_align.scss`
  ],
  Visibility: [
    `${bsScssCDN}mixins/_deprecate.scss`,
    `${bsScssCDN}mixins/_visibility.scss`,
    `${bsScssCDN}utilities/_visibility.scss`
  ]
}

export {
  jsPlugins,
  scssPlugins
}
