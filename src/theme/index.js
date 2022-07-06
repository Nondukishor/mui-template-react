import { createTheme } from '@mui/system';
import shadows from './shadows';
export const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

const theme = createTheme({
  direction: 'ltr',
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    up: () => {},
    down: () => {},
    only: () => {},
    not: () => {},
    unit: 'px',
  },
  components: {},
  palette: {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    secondary: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    error: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    warning: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    info: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    success: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    grey: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    contrastThreshold: 3,
    getContrastText: () => {},
    argumentColor: () => {},
    tonalOffset: 0.2,
    text: {
      primary: '',
      secondary: '',
      disabled: '',
    },
    background: {
      paper: '#fff',
      default: '#000',
    },
    action: {
      active: '',
      hover: '',
      hoverOpacity: '',
      selected: '',
      selectedOpacity: '',
      disabledBackground: '',
      focus: '',
      focusOpacity: '',
      activatedOpacity: '',
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  shape: {
    borderRadius: 4,
  },
  mixins: {},
  shadows,
  typography: {
    htmlFontSize: 16,
    pxToRem: () => {},
    fontFamily: '',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
  },
  transitions: {
    getHeightDuration: () => {},
    create: {},
    easing,
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  overrides: {
    MuiAlert: {
      root: {},
      filled: {},
      outlined: {},
      standard: {},
      standardSuccess: {},
      standardInfo: {},
      standardWarning: {},
      standardError: {},
      outlinedSuccess: {},
      outlinedInfo: {},
      outlinedWarning: {},
      outlinedError: {},
      filledSuccess: {},
      filledInfo: {},
      filledWarning: {},
      filledError: {},
      icon: {},
      message: {},
      action: {},
    },
    MuiAlertTitle: {
      root: {},
    },
    MuiAppBar: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `position="fixed"`. */
      positionFixed: {},
      /** Styles applied to the root element if `position="absolute"`. */
      positionAbsolute: {},
      /** Styles applied to the root element if `position="sticky"`. */
      positionSticky: {},
      /** Styles applied to the root element if `position="static"`. */
      positionStatic: {},
      /** Styles applied to the root element if `position="relative"`. */
      positionRelative: {},
      /** Styles applied to the root element if `color="default"`. */
      colorDefault: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit: {},
      /** Styles applied to the root element if `color="transparent"`. */
      colorTransparent: {},
    },
    MuiAutocomplete: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
      /** State class applied to the root element if focused. */
      focused: {},
      /** Styles applied to the tag elements, e.g. the chips. */
      tag: {},
      /** Styles applied to the tag elements, e.g. the chips if `size="small"`. */
      tagSizeSmall: {},
      /** Styles applied to the tag elements, e.g. the chips if `size="medium"`. */
      tagSizeMedium: {},
      /** Styles applied when the popup icon is rendered. */
      hasPopupIcon: {},
      /** Styles applied when the clear icon is rendered. */
      hasClearIcon: {},
      /** Styles applied to the Input element. */
      inputRoot: {},
      /** Styles applied to the input element. */
      input: {},
      /** Styles applied to the input element if the input is focused. */
      inputFocused: {},
      /** Styles applied to the endAdornment element. */
      endAdornment: {},
      /** Styles applied to the clear indicator. */
      clearIndicator: {},
      /** Styles applied to the popup indicator. */
      popupIndicator: {},
      /** Styles applied to the popup indicator if the popup is open. */
      popupIndicatorOpen: {},
      /** Styles applied to the popper element. */
      popper: {},
      /** Styles applied to the popper element if `disablePortal={true}`. */
      popperDisablePortal: {},
      /** Styles applied to the Paper component. */
      paper: {},
      /** Styles applied to the listbox component. */
      listbox: {},
      /** Styles applied to the loading wrapper. */
      loading: {},
      /** Styles applied to the no option wrapper. */
      noOptions: {},
      /** Styles applied to the option elements. */
      option: {},
      /** Styles applied to the group's label elements. */
      groupLabel: {},
      /** Styles applied to the group's ul elements. */
      groupUl: {},
    },
    MuiAvatar: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if not `src` or `srcSet`. */
      colorDefault: {},
      /** Styles applied to the root element if `variant="circular"`. */
      circular: {},
      /** Styles applied to the root element if `variant="rounded"`. */
      rounded: {},
      /** Styles applied to the root element if `variant="square"`. */
      square: {},
      /** Styles applied to the img element if either `src` or `srcSet` is defined. */
      img: {},
      /** Styles applied to the fallback icon */
      fallback: {},
    },
    MuiAvatarGroup: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the avatar elements. */
      avatar: {},
    },
    MuiBackdrop: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `invisible={true}`. */
      invisible: {},
    },
    MuiBadge: {
      /** Class name applied to the root element. */
      root: {},
      /** Class name applied to the badge `span` element. */
      badge: {},
      /** Class name applied to the badge `span` element if `variant="dot"`. */
      dot: {},
      /** Class name applied to the badge `span` element if `variant="standard"`. */
      standard: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }}`. */
      anchorOriginTopRight: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }}`. */
      anchorOriginBottomRight: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }}`. */
      anchorOriginTopLeft: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }}`. */
      anchorOriginBottomLeft: {},
      /** State class applied to the badge `span` element if `invisible={true}`. */
      invisible: {},
      /** Styles applied to the badge `span` element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the badge `span` element if `color="secondary"`. */
      colorSecondary: {},
      /** Styles applied to the badge `span` element if `color="error"`. */
      colorError: {},
      /** Styles applied to the badge `span` element if `color="info"`. */
      colorInfo: {},
      /** Styles applied to the badge `span` element if `color="success"`. */
      colorSuccess: {},
      /** Styles applied to the badge `span` element if `color="warning"`. */
      colorWarning: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangular"`. */
      anchorOriginTopRightRectangular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangular"`. */
      anchorOriginBottomRightRectangular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangular"`. */
      anchorOriginTopLeftRectangular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangular"`. */
      anchorOriginBottomLeftRectangular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }} overlap="circular"`. */
      anchorOriginTopRightCircular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circular"`. */
      anchorOriginBottomRightCircular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }} overlap="circular"`. */
      anchorOriginTopLeftCircular: {},
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circular"`. */
      anchorOriginBottomLeftCircular: {},
      /** Class name applied to the badge `span` element if `overlap="rectangular"`. */
      overlapRectangular: {},
      /** Class name applied to the badge `span` element if `overlap="circular"`. */
      overlapCircular: {},
    },
    MuiBottomNavigation: { roor: {} },
    MuiBottomNavigationAction: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if selected. */
      selected: {},
      /** State class applied to the root element if `showLabel={false}` and not selected. */
      iconOnly: {},
      /** Styles applied to the label's span element. */
      label: {},
    },
    MuiBreadcrumbs: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the ol element. */
      ol: {},
      /** Styles applied to the li element. */
      li: {},
      /** Styles applied to the separator element. */
      separator: {},
    },
    MuiButton: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="text"`. */
      text: {},
      /** Styles applied to the root element if `variant="text"` and `color="inherit"`. */
      textInherit: {},
      /** Styles applied to the root element if `variant="text"` and `color="primary"`. */
      textPrimary: {},
      /** Styles applied to the root element if `variant="text"` and `color="secondary"`. */
      textSecondary: {},
      /** Styles applied to the root element if `variant="text"` and `color="success"`. */
      textSuccess: {},
      /** Styles applied to the root element if `variant="text"` and `color="error"`. */
      textError: {},
      /** Styles applied to the root element if `variant="text"` and `color="info"`. */
      textInfo: {},
      /** Styles applied to the root element if `variant="text"` and `color="warning"`. */
      textWarning: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="inherit"`. */
      outlinedInherit: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="success"`. */
      outlinedSuccess: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="error"`. */
      outlinedError: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="info"`. */
      outlinedInfo: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
      outlinedWarning: {},
      /** Styles applied to the root element if `variant="contained"`. */
      contained: {},
      /** Styles applied to the root element if `variant="contained"` and `color="inherit"`. */
      containedInherit: {},
      /** Styles applied to the root element if `variant="contained"` and `color="primary"`. */
      containedPrimary: {},
      /** Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
      containedSecondary: {},
      /** Styles applied to the root element if `variant="contained"` and `color="success"`. */
      containedSuccess: {},
      /** Styles applied to the root element if `variant="contained"` and `color="info"`. */
      containedInfo: {},
      /** Styles applied to the root element if `variant="contained"` and `color="error"`. */
      containedError: {},
      /** Styles applied to the root element if `variant="contained"` and `color="warning"`. */
      containedWarning: {},
      /** Styles applied to the root element if `disableElevation={true}`. */
      disableElevation: {},
      /** State class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit: {},
      /** Styles applied to the root element if `size="small"` and `variant="text"`. */
      textSizeSmall: {},
      /** Styles applied to the root element if `size="medium"` and `variant="text"`. */
      textSizeMedium: {},
      /** Styles applied to the root element if `size="large"` and `variant="text"`. */
      textSizeLarge: {},
      /** Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      outlinedSizeSmall: {},
      /** Styles applied to the root element if `size="medium"` and `variant="outlined"`. */
      outlinedSizeMedium: {},
      /** Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: {},
      /** Styles applied to the root element if `size="small"` and `variant="contained"`. */
      containedSizeSmall: {},
      /** Styles applied to the root element if `size="medium"` and `variant="contained"`. */
      containedSizeMedium: {},
      /** Styles applied to the root element if `size="large"` and `variant="contained"`. */
      containedSizeLarge: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** Styles applied to the root element if `size="large"`. */
      sizeLarge: {},
      /** Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
      /** Styles applied to the startIcon element if supplied. */
      startIcon: {},
      /** Styles applied to the endIcon element if supplied. */
      endIcon: {},
      /** Styles applied to the icon element if supplied and `size="small"`. */
      iconSizeSmall: {},
      /** Styles applied to the icon element if supplied and `size="medium"`. */
      iconSizeMedium: {},
      /** Styles applied to the icon element if supplied and `size="large"`. */
      iconSizeLarge: {},
    },
    MuiButtonBase: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if keyboard focused. */
      focusVisible: {},
    },
    MuiButtonGroup: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="contained"`. */
      contained: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="text"`. */
      text: {},
      /** Styles applied to the root element if `disableElevation={true}`. */
      disableElevation: {},
      /** State class applied to the child elements if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the children. */
      grouped: {},
      /** Styles applied to the children if `orientation="horizontal"`. */
      groupedHorizontal: {},
      /** Styles applied to the children if `orientation="vertical"`. */
      groupedVertical: {},
      /** Styles applied to the children if `variant="text"`. */
      groupedText: {},
      /** Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
      groupedTextHorizontal: {},
      /** Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
      groupedTextVertical: {},
      /** Styles applied to the children if `variant="text"` and `color="primary"`. */
      groupedTextPrimary: {},
      /** Styles applied to the children if `variant="text"` and `color="secondary"`. */
      groupedTextSecondary: {},
      /** Styles applied to the children if `variant="outlined"`. */
      groupedOutlined: {},
      /** Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
      groupedOutlinedHorizontal: {},
      /** Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
      groupedOutlinedVertical: {},
      /** Styles applied to the children if `variant="outlined"` and `color="primary"`. */
      groupedOutlinedPrimary: {},
      /** Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
      groupedOutlinedSecondary: {},
      /** Styles applied to the children if `variant="contained"`. */
      groupedContained: {},
      /** Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
      groupedContainedHorizontal: {},
      /** Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
      groupedContainedVertical: {},
      /** Styles applied to the children if `variant="contained"` and `color="primary"`. */
      groupedContainedPrimary: {},
      /** Styles applied to the children if `variant="contained"` and `color="secondary"`. */
      groupedContainedSecondary: {},
    },
    MuiCard: { root: {} },
    MuiCardActionArea: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the ButtonBase root element if the action area is keyboard focused. */
      focusVisible: {},
      /** Styles applied to the overlay that covers the action area when it is keyboard focused. */
      focusHighlight: {},
    },
    MuiCardActions: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element unless `disableSpacing={true}`. */
      spacing: {},
    },
    MuiCardContent: { root: {} },
    MuiCardHeader: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the avatar element. */
      avatar: {},
      /** Styles applied to the action element. */
      action: {},
      /** Styles applied to the content wrapper element. */
      content: {},
      /** Styles applied to the title Typography element. */
      title: {},
      /** Styles applied to the subheader Typography element. */
      subheader: {},
    },
    MuiCardMedia: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
      media: {},
      /** Styles applied to the root element if `component="picture or img"`. */
      img: {},
    },
    MuiCheckbox: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `checked={true}`. */
      checked: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if `indeterminate={true}`. */
      indeterminate: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
    },
    MuiChip: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
      clickable: {},
      /** Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
      clickableColorPrimary: {},
      /** Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
      clickableColorSecondary: {},
      /** Styles applied to the root element if `onDelete` is defined. */
      deletable: {},
      /** Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
      deletableColorPrimary: {},
      /** Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
      deletableColorSecondary: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="filled"`. */
      filled: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {},
      /** Styles applied to the avatar element. */
      avatar: {},
      /** Styles applied to the avatar element if `size="small"`. */
      avatarSmall: {},
      /** Styles applied to the avatar element if `size="medium"`. */
      avatarMedium: {},
      /** Styles applied to the avatar element if `color="primary"`. */
      avatarColorPrimary: {},
      /** Styles applied to the avatar element if `color="secondary"`. */
      avatarColorSecondary: {},
      /** Styles applied to the icon element. */
      icon: {},
      /** Styles applied to the icon element if `size="small"`. */
      iconSmall: {},
      /** Styles applied to the icon element if `size="medium"`. */
      iconMedium: {},
      /** Styles applied to the icon element if `color="primary"`. */
      iconColorPrimary: {},
      /** Styles applied to the icon element if `color="secondary"`. */
      iconColorSecondary: {},
      /** Styles applied to the label `span` element. */
      label: {},
      /** Styles applied to the label `span` element if `size="small"`. */
      labelSmall: {},
      /** Styles applied to the label `span` element if `size="medium"`. */
      labelMedium: {},
      /** Styles applied to the deleteIcon element. */
      deleteIcon: {},
      /** Styles applied to the deleteIcon element if `size="small"`. */
      deleteIconSmall: {},
      /** Styles applied to the deleteIcon element if `size="medium"`. */
      deleteIconMedium: {},
      /** Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`. */
      deleteIconColorPrimary: {},
      /** Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`. */
      deleteIconColorSecondary: {},
      /** Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
      deleteIconOutlinedColorPrimary: {},
      /** Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
      deleteIconOutlinedColorSecondary: {},
      /** State class applied to the root element if keyboard focused. */
      focusVisible: {},
    },
    MuiCircularProgress: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="determinate"`. */
      determinate: {},
      /** Styles applied to the root element if `variant="indeterminate"`. */
      indeterminate: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
      /** Styles applied to the svg element. */
      svg: {},
      /** Styles applied to the `circle` svg path. */
      circle: {},
      /** Styles applied to the `circle` svg path if `variant="determinate"`. */
      circleDeterminate: {},
      /** Styles applied to the `circle` svg path if `variant="indeterminate"`. */
      circleIndeterminate: {},
      /** Styles applied to the `circle` svg path if `disableShrink={true}`. */
      circleDisableShrink: {},
    },
    MuiCollapse: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `orientation="horizontal"`. */
      horizontal: {},
      /** Styles applied to the root element when the transition has entered. */
      entered: {},
      /** Styles applied to the root element when the transition has exited and `collapsedSize` = 0px. */
      hidden: {},
      /** Styles applied to the outer wrapper element. */
      wrapper: {},
      /** Styles applied to the inner wrapper element. */
      wrapperInner: {},
    },
    MuiContainer: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `disableGutters={true}`. */
      disableGutters: {},
      /** Styles applied to the root element if `fixed={true}`. */
      fixed: {},
      /** Styles applied to the root element if `maxWidth="xs"`. */
      maxWidthXs: {},
      /** Styles applied to the root element if `maxWidth="sm"`. */
      maxWidthSm: {},
      /** Styles applied to the root element if `maxWidth="md"`. */
      maxWidthMd: {},
      /** Styles applied to the root element if `maxWidth="lg"`. */
      maxWidthLg: {},
      /** Styles applied to the root element if `maxWidth="xl"`. */
      maxWidthXl: {},
    },
    MuiDialog: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the container element if `scroll="paper"`. */
      scrollPaper: {},
      /** Styles applied to the container element if `scroll="body"`. */
      scrollBody: {},
      /** Styles applied to the container element. */
      container: {},
      /** Styles applied to the Paper component. */
      paper: {},
      /** Styles applied to the Paper component if `scroll="paper"`. */
      paperScrollPaper: {},
      /** Styles applied to the Paper component if `scroll="body"`. */
      paperScrollBody: {},
      /** Styles applied to the Paper component if `maxWidth=false`. */
      paperWidthFalse: {},
      /** Styles applied to the Paper component if `maxWidth="xs"`. */
      paperWidthXs: {},
      /** Styles applied to the Paper component if `maxWidth="sm"`. */
      paperWidthSm: {},
      /** Styles applied to the Paper component if `maxWidth="md"`. */
      paperWidthMd: {},
      /** Styles applied to the Paper component if `maxWidth="lg"`. */
      paperWidthLg: {},
      /** Styles applied to the Paper component if `maxWidth="xl"`. */
      paperWidthXl: {},
      /** Styles applied to the Paper component if `fullWidth={true}`. */
      paperFullWidth: {},
      /** Styles applied to the Paper component if `fullScreen={true}`. */
      paperFullScreen: {},
    },
    MuiDialogActions: {
      /** Styles applied to the root element. */ root: {},
      /** Styles applied to the root element unless `disableSpacing={true}`. */
      spacing: {},
    },
    MuiDialogContent: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `dividers={true}`. */
      dividers: {},
    },
    MuiDialogContentText: { root: {} },
    MuiDialogTitle: { root: {} },
    MuiDivider: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `absolute={true}`. */
      absolute: {},
      /** Styles applied to the root element if `variant="inset"`. */
      inset: {},
      /** Styles applied to the root element if `variant="fullWidth"`. */
      fullWidth: {},
      /** Styles applied to the root element if `light={true}`. */
      light: {},
      /** Styles applied to the root element if `variant="middle"`. */
      middle: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the root element if `flexItem={true}`. */
      flexItem: {},
      /** Styles applied to the root element if divider have text. */
      withChildren: {},
      /** Styles applied to the root element if divider have text and `orientation="vertical"`. */
      withChildrenVertical: {},
      /** Styles applied to the root element if `textAlign="right" orientation="horizontal"`. */
      textAlignRight: {},
      /** Styles applied to the root element if `textAlign="left" orientation="horizontal"`. */
      textAlignLeft: {},
      /** Styles applied to the span children element if `orientation="horizontal"`. */
      wrapper: {},
      /** Styles applied to the span children element if `orientation="vertical"`. */
      wrapperVertical: {},
    },
    MuiDrawer: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="permanent or persistent"`. */
      docked: {},
      /** Styles applied to the Paper component. */
      paper: {},
      /** Styles applied to the Paper component if `anchor="left"`. */
      paperAnchorLeft: {},
      /** Styles applied to the Paper component if `anchor="right"`. */
      paperAnchorRight: {},
      /** Styles applied to the Paper component if `anchor="top"`. */
      paperAnchorTop: {},
      /** Styles applied to the Paper component if `anchor="bottom"`. */
      paperAnchorBottom: {},
      /** Styles applied to the Paper component if `anchor="left"` and `variant` is not "temporary". */
      paperAnchorDockedLeft: {},
      /** Styles applied to the Paper component if `anchor="top"` and `variant` is not "temporary". */
      paperAnchorDockedTop: {},
      /** Styles applied to the Paper component if `anchor="right"` and `variant` is not "temporary". */
      paperAnchorDockedRight: {},
      /** Styles applied to the Paper component if `anchor="bottom"` and `variant` is not "temporary". */
      paperAnchorDockedBottom: {},
      /** Styles applied to the Modal component. */
      modal: {},
    },
    MuiAccordion: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element unless `square={true}`. */
      rounded: {},
      /** State class applied to the root element if `expanded={true}`. */
      expanded: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element unless `disableGutters={true}`. */
      gutters: {},
      /** Styles applied to the region element, the container of the children. */
      region: {},
    },
    MuiAccordionActions: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element unless `disableSpacing={true}`. */
      spacing: {},
    },
    MuiAccordionDetails: { root: {} },
    MuiAccordionSummary: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
      expanded: {},
      /** State class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element unless `disableGutters={true}`. */
      gutters: {},
      /** Styles applied to the children wrapper element unless `disableGutters={true}`. */
      contentGutters: {},
      /** Styles applied to the children wrapper element. */
      content: {},
      /** Styles applied to the `expandIcon`'s wrapper element. */
      expandIconWrapper: {},
    },
    MuiFab: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `color="primary"`. */
      primary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      secondary: {},
      /** Styles applied to the root element if `variant="extended"`. */
      extended: {},
      /** Styles applied to the root element if `variant="circular"`. */
      circular: {},
      /** State class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit: {},
      /** Styles applied to the root element if `size="small"``. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"``. */
      sizeMedium: {},
    },
    MuiFilledInput: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if color secondary. */
      colorSecondary: {},
      /** Styles applied to the root element unless `disableUnderline={true}`. */
      underline: {},
      /** State class applied to the root element if the component is focused. */
      focused: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},
      /** Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** Styles applied to the input element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `multiline={true}`. */
      multiline: {},
      /** Styles applied to the root element if `hiddenLabel={true}`. */
      hiddenLabel: {},
      /** Styles applied to the input element. */
      input: {},
      /** Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {},
      /** Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
      inputHiddenLabel: {},
      /** Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {},
      /** Styles applied to the input element if `startAdornment` is provided. */
      inputAdornedStart: {},
      /** Styles applied to the input element if `endAdornment` is provided. */
      inputAdornedEnd: {},
    },
    MuiFormControl: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `margin="normal"`. */
      marginNormal: {},
      /** Styles applied to the root element if `margin="dense"`. */
      marginDense: {},
      /** Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
    },
    MuiFormControlLabel: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `labelPlacement="start"`. */
      labelPlacementStart: {},
      /** Styles applied to the root element if `labelPlacement="top"`. */
      labelPlacementTop: {},
      /** Styles applied to the root element if `labelPlacement="bottom"`. */
      labelPlacementBottom: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the label's Typography component. */
      label: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
    },
    MuiFormGroup: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `row={true}`. */
      row: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
    },
    MuiFormHelperText: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
      contained: {},
      /** State class applied to the root element if `focused={true}`. */
      focused: {},
      /** State class applied to the root element if `filled={true}`. */
      filled: {},
      /** State class applied to the root element if `required={true}`. */
      required: {},
    },
    MuiFormLabel: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if the color is secondary. */
      colorSecondary: {},
      /** State class applied to the root element if `focused={true}`. */
      focused: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** State class applied to the root element if `filled={true}`. */
      filled: {},
      /** State class applied to the root element if `required={true}`. */
      required: {},
      /** Styles applied to the asterisk element. */
      asterisk: {},
    },
    MuiGrid: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `container={true}`. */
      container: {},
      /** Styles applied to the root element if `item={true}`. */
      item: {},
      /** Styles applied to the root element if `zeroMinWidth={true}`. */
      zeroMinWidth: {},
      /** Styles applied to the root element if `direction="column"`. */
      'direction-xs-column': {},
      /** Styles applied to the root element if `direction="column-reverse"`. */
      'direction-xs-column-reverse': {},
      /** Styles applied to the root element if `direction="row-reverse"`. */
      'direction-xs-row-reverse': {},
      /** Styles applied to the root element if `wrap="nowrap"`. */
      'wrap-xs-nowrap': {},
      /** Styles applied to the root element if `wrap="reverse"`. */
      'wrap-xs-wrap-reverse': {},
      'spacing-xs-1': {},
      'spacing-xs-2': {},
      'spacing-xs-3': {},
      'spacing-xs-4': {},
      'spacing-xs-5': {},
      'spacing-xs-6': {},
      'spacing-xs-7': {},
      'spacing-xs-8': {},
      'spacing-xs-9': {},
      'spacing-xs-10': {},
      'grid-xs-auto': {},
      'grid-xs-true': {},
      'grid-xs-1': {},
      'grid-xs-2': {},
      'grid-xs-3': {},
      'grid-xs-4': {},
      'grid-xs-5': {},
      'grid-xs-6': {},
      'grid-xs-7': {},
      'grid-xs-8': {},
      'grid-xs-9': {},
      'grid-xs-10': {},
      'grid-xs-11': {},
      'grid-xs-12': {},
    },
    MuiIcon: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
      /** Styles applied to the root element if `color="action"`. */
      colorAction: {},
      /** Styles applied to the root element if `color="error"`. */
      colorError: {},
      /** Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {},
      /** Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit: {},
      /** Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {},
      /** Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {},
    },
    MuiIconButton: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `edge="start"`. */
      edgeStart: {},
      /** Styles applied to the root element if `edge="end"`. */
      edgeEnd: {},
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** Styles applied to the root element if `size="large"`. */
      sizeLarge: {},
    },
    MuiImageList: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="masonry"`. */
      masonry: {},
      /** Styles applied to the root element if `variant="quilted"`. */
      quilted: {},
      /** Styles applied to the root element if `variant="standard"`. */
      standard: {},
      /** Styles applied to the root element if `variant="woven"`. */
      woven: {},
    },
    MuiImageListItem: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to an `img` element to ensure it covers the item. */
      img: {},
      /** Styles applied to the root element if `variant="standard"`. */
      standard: {},
      /** Styles applied to the root element if `variant="woven"`. */
      woven: {},
      /** Styles applied to the root element if `variant="masonry"`. */
      masonry: {},
      /** Styles applied to the root element if `variant="quilted"`. */
      quilted: {},
    },
    MuiImageListItemBar: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `position="bottom"`. */
      positionBottom: {},
      /** Styles applied to the root element if `position="top"`. */
      positionTop: {},
      /** Styles applied to the root element if `position="below"`. */
      positionBelow: {},
      /** Styles applied to the title and subtitle container element. */
      titleWrap: {},
      /** Styles applied to the title and subtitle container element if `position="below"`. */
      titleWrapBelow: {},
      /** Styles applied to the container element if `actionPosition="left"`. */
      titleWrapActionPosLeft: {},
      /** Styles applied to the container element if `actionPosition="right"`. */
      titleWrapActionPosRight: {},
      /** Styles applied to the title container element. */
      title: {},
      /** Styles applied to the subtitle container element. */
      subtitle: {},
      /** Styles applied to the actionIcon if supplied. */
      actionIcon: {},
      /** Styles applied to the actionIcon if `actionPosition="left"`. */
      actionIconActionPosLeft: {},
    },
    MuiInput: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},
      /** Styles applied to the root element if the component is focused. */
      focused: {},
      /** Styles applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if color secondary. */
      colorSecondary: {},
      /** Styles applied to the root element unless `disableUnderline={true}`. */
      underline: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** Styles applied to the input element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `multiline={true}`. */
      multiline: {},
      /** Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
      /** Styles applied to the input element. */
      input: {},
      /** Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {},
      /** Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {},
      /** Styles applied to the input element if `type="search"`. */
      inputTypeSearch: {},
    },
    MuiInputAdornment: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="filled"`. */
      filled: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="standard"`. */
      standard: {},
      /** Styles applied to the root element if `position="start"`. */
      positionStart: {},
      /** Styles applied to the root element if `position="end"`. */
      positionEnd: {},
      /** Styles applied to the root element if `disablePointerEvents={true}`. */
      disablePointerEvents: {},
      /** Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
      hiddenLabel: {},
      /** Styles applied if the adornment is used inside <FormControl size="small" />. */
      sizeSmall: {},
    },
    MuiInputBase: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},
      /** Styles applied to the root element if the component is focused. */
      focused: {},
      /** Styles applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},
      /** Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** Styles applied to the input element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `multiline={true}`. */
      multiline: {},
      /** Styles applied to the root element if the color is secondary. */
      colorSecondary: {},
      /** Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
      /** Styles applied to the root element if `hiddenLabel={true}`. */
      hiddenLabel: {},
      /** Styles applied to the input element. */
      input: {},
      /** Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {},
      /** Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {},
      /** Styles applied to the input element if `type="search"`. */
      inputTypeSearch: {},
      /** Styles applied to the input element if `startAdornment` is provided. */
      inputAdornedStart: {},
      /** Styles applied to the input element if `endAdornment` is provided. */
      inputAdornedEnd: {},
      /** Styles applied to the input element if `hiddenLabel={true}`. */
      inputHiddenLabel: {},
    },
    MuiInputLabel: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `focused={true}`. */
      focused: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** State class applied to the root element if `required={true}`. */
      required: {},
      /** State class applied to the asterisk element. */
      asterisk: {},
      /** Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the input element if `shrink={true}`. */
      shrink: {},
      /** Styles applied to the input element unless `disableAnimation={true}`. */
      animated: {},
      /** Styles applied to the root element if `variant="filled"`. */
      filled: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="standard"`. */
      standard: {},
    },
    MuiLinearProgress: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
      colorPrimary: {},
      /** Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
      colorSecondary: {},
      /** Styles applied to the root element if `variant="determinate"`. */
      determinate: {},
      /** Styles applied to the root element if `variant="indeterminate"`. */
      indeterminate: {},
      /** Styles applied to the root element if `variant="buffer"`. */
      buffer: {},
      /** Styles applied to the root element if `variant="query"`. */
      query: {},
      /** Styles applied to the additional bar element if `variant="buffer"`. */
      dashed: {},
      /** Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
      dashedColorPrimary: {},
      /** Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
      dashedColorSecondary: {},
      /** Styles applied to the layered bar1 and bar2 elements. */
      bar: {},
      /** Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
      barColorPrimary: {},
      /** Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
      barColorSecondary: {},
      /** Styles applied to the bar1 element if `variant="indeterminate or query"`. */
      bar1Indeterminate: {},
      /** Styles applied to the bar1 element if `variant="determinate"`. */
      bar1Determinate: {},
      /** Styles applied to the bar1 element if `variant="buffer"`. */
      bar1Buffer: {},
      /** Styles applied to the bar2 element if `variant="indeterminate or query"`. */
      bar2Indeterminate: {},
      /** Styles applied to the bar2 element if `variant="buffer"`. */
      bar2Buffer: {},
    },
    MuiLink: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `underline="none"`. */
      underlineNone: {},
      /** Styles applied to the root element if `underline="hover"`. */
      underlineHover: {},
      /** Styles applied to the root element if `underline="always"`. */
      underlineAlways: {},
      /** Styles applied to the root element if `component="button"`. */
      button: {},
      /** State class applied to the root element if the link is keyboard focused. */
      focusVisible: {},
    },
    MuiList: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element unless `disablePadding={true}`. */
      padding: {},
      /** Styles applied to the root element if dense. */
      dense: {},
      /** Styles applied to the root element if a `subheader` is provided. */
      subheader: {},
    },
    MuiListItem: {
      /** Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
      root: {},
      /** Styles applied to the container element if `children` includes `ListItemSecondaryAction`. */
      container: {},
      /** State class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
      focusVisible: {},
      /** Styles applied to the component element if dense. */
      dense: {},
      /** Styles applied to the component element if `alignItems="flex-start"`. */
      alignItemsFlexStart: {},
      /** State class applied to the inner `component` element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the inner `component` element if `divider={true}`. */
      divider: {},
      /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
      gutters: {},
      /** Styles applied to the root element unless `disablePadding={true}`. */
      padding: {},
      /** Styles applied to the inner `component` element if `button={true}`. */
      button: {},
      /** Styles applied to the component element if `children` includes `ListItemSecondaryAction`. */
      secondaryAction: {},
      /** State class applied to the root element if `selected={true}`. */
      selected: {},
    },
    MuiListItemButton: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the `component`'s `focusVisibleClassName` prop. */
      focusVisible: {},
      /** Styles applied to the component element if dense. */
      dense: {},
      /** Styles applied to the component element if `alignItems="flex-start"`. */
      alignItemsFlexStart: {},
      /** State class applied to the inner `component` element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the inner `component` element if `divider={true}`. */
      divider: {},
      /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
      gutters: {},
      /** State class applied to the root element if `selected={true}`. */
      selected: {},
    },
    MuiListItemAvatar: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
      alignItemsFlexStart: {},
    },
    MuiListItemIcon: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
      alignItemsFlexStart: {},
    },
    MuiListItemSecondaryAction: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element when the parent `ListItem` has `disableGutters={true}`. */
      disableGutters: {},
    },
    MuiListItemText: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the Typography component if primary and secondary are set. */
      multiline: {},
      /** Styles applied to the Typography component if dense. */
      dense: {},
      /** Styles applied to the root element if `inset={true}`. */
      inset: {},
      /** Styles applied to the primary `Typography` component. */
      primary: {},
      /** Styles applied to the secondary `Typography` component. */
      secondary: {},
    },
    MuiListSubheader: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit: {},
      /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
      gutters: {},
      /** Styles applied to the root element if `inset={true}`. */
      inset: {},
      /** Styles applied to the root element unless `disableSticky={true}`. */
      sticky: {},
    },
    MuiMenu: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the Paper component. */
      paper: {},
      /** Styles applied to the List component via `MenuList`. */
      list: {},
    },
    MuiMenuItem: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if keyboard focused. */
      focusVisible: {},
      /** Styles applied to the root element if dense. */
      dense: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `divider={true}`. */
      divider: {},
      /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
      gutters: {},
      /** State class applied to the root element if `selected={true}`. */
      selected: {},
    },
    MuiMobileStepper: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `position="bottom"`. */
      positionBottom: {},
      /** Styles applied to the root element if `position="top"`. */
      positionTop: {},
      /** Styles applied to the root element if `position="static"`. */
      positionStatic: {},
      /** Styles applied to the dots container if `variant="dots"`. */
      dots: {},
      /** Styles applied to each dot if `variant="dots"`. */
      dot: {},
      /** Styles applied to a dot if `variant="dots"` and this is the active step. */
      dotActive: {},
      /** Styles applied to the Linear Progress component if `variant="progress"`. */
      progress: {},
    },
    MuiModal: {
      root: {},
    },
    MuiNativeSelect: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the select component `select` class. */
      select: {},
      /** Styles applied to the select component if `multiple={true}`. */
      multiple: {},
      /** Styles applied to the select component if `variant="filled"`. */
      filled: {},
      /** Styles applied to the select component if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the select component if `variant="standard"`. */
      standard: {},
      /** State class applied to the select component `disabled` class. */
      disabled: {},
      /** Styles applied to the icon component. */
      icon: {},
      /** Styles applied to the icon component if the popup is open. */
      iconOpen: {},
      /** Styles applied to the icon component if `variant="filled"`. */
      iconFilled: {},
      /** Styles applied to the icon component if `variant="outlined"`. */
      iconOutlined: {},
      /** Styles applied to the icon component if `variant="standard"`. */
      iconStandard: {},
      /** Styles applied to the underlying native input component. */
      nativeInput: {},
    },
    MuiOutlinedInput: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if the color is secondary. */
      colorSecondary: {},
      /** Styles applied to the root element if the component is focused. */
      focused: {},
      /** Styles applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},
      /** Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
      /** Styles applied to the input element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `multiline={true}`. */
      multiline: {},
      /** Styles applied to the NotchedOutline element. */
      notchedOutline: {},
      /** Styles applied to the input element. */
      input: {},
      /** Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {},
      /** Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {},
      /** Styles applied to the input element if `startAdornment` is provided. */
      inputAdornedStart: {},
      /** Styles applied to the input element if `endAdornment` is provided. */
      inputAdornedEnd: {},
    },
    MuiPagination: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the ul element. */
      ul: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="text"`. */
      text: {},
    },
    MuiPaginationItem: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `type="page"`. */
      page: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="large"`. */
      sizeLarge: {},
      /** Styles applied to the root element if `variant="text"`. */
      text: {},
      /** Styles applied to the root element if `variant="text"` and `color="primary"`. */
      textPrimary: {},
      /** Styles applied to the root element if `variant="text"` and `color="secondary"`. */
      textSecondary: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {},
      /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {},
      /** Styles applied to the root element if `rounded="true"`. */
      rounded: {},
      /** Styles applied to the root element if `type="start-ellipsis"` or `type="end-ellipsis"`. */
      ellipsis: {},
      /** Styles applyed to the root element if `type="first"` or type="last". */
      firstLast: {},
      /** Styles applyed to the root element if `type="previous"` or type="next". */
      previousNext: {},
      /** State class applied to the root element if keyboard focused. */
      focusVisible: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if `selected={true}`. */
      selected: {},
      /** Styles applied to the icon to display. */
      icon: {},
    },
    MuiPaper: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element unless `square={true}`. */
      rounded: {},
      /** Styles applied to the root element if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the root element if `variant="elevation"`. */
      elevation: {},
      elevation0: {},
      elevation1: {},
      elevation2: {},
      elevation3: {},
      elevation4: {},
      elevation5: {},
      elevation6: {},
      elevation7: {},
      elevation8: {},
      elevation9: {},
      elevation10: {},
      elevation11: {},
      elevation12: {},
      elevation13: {},
      elevation14: {},
      elevation15: {},
      elevation16: {},
      elevation17: {},
      elevation18: {},
      elevation19: {},
      elevation20: {},
      elevation21: {},
      elevation22: {},
      elevation23: {},
      elevation24: {},
    },
    MuiPopover: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the Paper component. */
      paper: {},
    },
    MuiRadio: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `checked={true}`. */
      checked: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
    },
    MuiRating: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** Styles applied to the root element if `size="large"`. */
      sizeLarge: {},
      /** Styles applied to the root element if `readOnly={true}`. */
      readOnly: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if keyboard focused. */
      focusVisible: {},
      /** Visually hide an element. */
      visuallyHidden: {},
      /** Styles applied to the label elements. */
      label: {},
      /** Styles applied to the label of the "no value" input when it is active. */
      labelEmptyValueActive: {},
      /** Styles applied to the icon wrapping elements. */
      icon: {},
      /** Styles applied to the icon wrapping elements when empty. */
      iconEmpty: {},
      /** Styles applied to the icon wrapping elements when filled. */
      iconFilled: {},
      /** Styles applied to the icon wrapping elements when hover. */
      iconHover: {},
      /** Styles applied to the icon wrapping elements when focus. */
      iconFocus: {},
      /** Styles applied to the icon wrapping elements when active. */
      iconActive: {},
      /** Styles applied to the icon wrapping elements when decimals are necessary. */
      decimal: {},
    },
    MuiScopedCssBaseline: { root: {} },
    MuiSelect: {
      /** Styles applied to the select component `select` class. */
      select: {},
      /** Styles applied to the select component if `multiple={true}`. */
      multiple: {},
      /** Styles applied to the select component if `variant="filled"`. */
      filled: {},
      /** Styles applied to the select component if `variant="outlined"`. */
      outlined: {},
      /** Styles applied to the select component if `variant="standard"`. */
      standard: {},
      /** State class applied to the select component `disabled` class. */
      disabled: {},
      /** Styles applied to the icon component. */
      icon: {},
      /** Styles applied to the icon component if the popup is open. */
      iconOpen: {},
      /** Styles applied to the icon component if `variant="filled"`. */
      iconFilled: {},
      /** Styles applied to the icon component if `variant="outlined"`. */
      iconOutlined: {},
      /** Styles applied to the icon component if `variant="standard"`. */
      iconStandard: {},
      /** Styles applied to the underlying native input component. */
      nativeInput: {},
    },
    MuiSkeleton: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="text"`. */
      text: {},
      /** Styles applied to the root element if `variant="rectangular"`. */
      rectangular: {},
      /** Styles applied to the root element if `variant="circular"`. */
      circular: {},
      /** Styles applied to the root element if `animation="pulse"`. */
      pulse: {},
      /** Styles applied to the root element if `animation="wave"`. */
      wave: {},
      /** Styles applied when the component is passed children. */
      withChildren: {},
      /** Styles applied when the component is passed children and no width. */
      fitContent: {},
      /** Styles applied when the component is passed children and no height. */
      heightAuto: {},
    },

    MuiSnackbar: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
      anchorOriginTopCenter: {},
      /** Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
      anchorOriginBottomCenter: {},
      /** Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
      anchorOriginTopRight: {},
      /** Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
      anchorOriginBottomRight: {},
      /** Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
      anchorOriginTopLeft: {},
      /** Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
      anchorOriginBottomLeft: {},
    },
    MuiSnackbarContent: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the message wrapper element. */
      message: {},
      /** Styles applied to the action wrapper element if `action` is provided. */
      action: {},
    },
    MuiSpeedDial: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the Fab component. */
      fab: {},
      /** Styles applied to the root element if direction="up" */
      directionUp: {},
      /** Styles applied to the root element if direction="down" */
      directionDown: {},
      /** Styles applied to the root element if direction="left" */
      directionLeft: {},
      /** Styles applied to the root element if direction="right" */
      directionRight: {},
      /** Styles applied to the actions (`children` wrapper) element. */
      actions: {},
      /** Styles applied to the actions (`children` wrapper) element if `open={false}`. */
      actionsClosed: {},
    },
    MuiSpeedDialAction: {
      /** Styles applied to the Fab component. */
      fab: {},
      /** Styles applied to the Fab component if `open={false}`. */
      fabClosed: {},
      /** Styles applied to the root element if `tooltipOpen={true}`. */
      staticTooltip: {},
      /** Styles applied to the root element if `tooltipOpen={true}` and `open={false}`. */
      staticTooltipClosed: {},
      /** Styles applied to the static tooltip label if `tooltipOpen={true}`. */
      staticTooltipLabel: {},
      /** Styles applied to the root element if `tooltipOpen={true}` and `tooltipPlacement="left"`` */
      tooltipPlacementLeft: {},
      /** Styles applied to the root element if `tooltipOpen={true}` and `tooltipPlacement="right"`` */
      tooltipPlacementRight: {},
    },
    MuiSpeedDialIcon: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the icon component. */
      icon: {},
      /** Styles applied to the icon component if `open={true}`. */
      iconOpen: {},
      /** Styles applied to the icon when an `openIcon` is provided and if `open={true}`. */
      iconWithOpenIconOpen: {},
      /** Styles applied to the `openIcon` if provided. */
      openIcon: {},
      /** Styles applied to the `openIcon` if provided and if `open={true}`. */
      openIconOpen: {},
    },
    MuiStep: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `orientation="horizontal"`. */
      horizontal: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the root element if `alternativeLabel={true}`. */
      alternativeLabel: {},
      /** State class applied to the root element if `completed={true}`. */
      completed: {},
    },

    MuiStepConnector: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `orientation="horizontal"`. */
      horizontal: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the root element if `alternativeLabel={true}`. */
      alternativeLabel: {},
      /** State class applied to the root element if `active={true}`. */
      active: {},
      /** State class applied to the root element if `completed={true}`. */
      completed: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the line element. */
      line: {},
      /** Styles applied to the root element if `orientation="horizontal"`. */
      lineHorizontal: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      lineVertical: {},
    },

    MuiStepIcon: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the SVG text element. */
      text: {},
      /** State class applied to the root element if `active={true}`. */
      active: {},
      /** State class applied to the root element if `completed={true}`. */
      completed: {},
      /** State class applied to the root element if `error={true}`. */
      error: {},
    },
    MuiStepLabel: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `orientation="horizontal"`. */
      horizontal: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the label element that wraps `children`. */
      label: {},
      /** State class applied to the label element if `active={true}`. */
      active: {},
      /** State class applied to the label element if `completed={true}`. */
      completed: {},
      /** State class applied to the root and label elements if `error={true}`. */
      error: {},
      /** State class applied to the root and label elements if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the `icon` container element. */
      iconContainer: {},
      /** State class applied to the root and icon container and label if `alternativeLabel={true}`. */
      alternativeLabel: {},
      /** Styles applied to the container element which wraps label and `optional`. */
      labelContainer: {},
    },
    MuiStepper: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `orientation="horizontal"`. */
      horizontal: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the root element if `alternativeLabel={true}`. */
      alternativeLabel: {},
    },
    MuiSvgIcon: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {},
      /** Styles applied to the root element if `color="action"`. */
      colorAction: {},
      /** Styles applied to the root element if `color="error"`. */
      colorError: {},
      /** Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {},
      /** Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit: {},
      /** Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {},
      /** Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {},
    },
    MuiSwitch: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `edge="start"`. */
      edgeStart: {},
      /** Styles applied to the root element if `edge="end"`. */
      edgeEnd: {},
      /** Styles applied to the internal `SwitchBase` component's `root` class. */
      switchBase: {},
      /** Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
      colorPrimary: {},
      /** Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
      colorSecondary: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** State class applied to the internal `SwitchBase` component's `checked` class. */
      checked: {},
      /** State class applied to the internal SwitchBase component's disabled class. */
      disabled: {},
      /** Styles applied to the internal SwitchBase component's input element. */
      input: {},
      /** Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
      thumb: {},
      /** Styles applied to the track element. */
      track: {},
    },
    MuiTab: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if both `icon` and `label` are provided. */
      labelIcon: {},
      /** Styles applied to the root element if the parent [`Tabs`](/material-ui/api/tabs/) has `textColor="inherit"`. */
      textColorInherit: {},
      /** Styles applied to the root element if the parent [`Tabs`](/material-ui/api/tabs/) has `textColor="primary"`. */
      textColorPrimary: {},
      /** Styles applied to the root element if the parent [`Tabs`](/material-ui/api/tabs/) has `textColor="secondary"`. */
      textColorSecondary: {},
      /** State class applied to the root element if `selected={true}` (controlled by the Tabs component). */
      selected: {},
      /** State class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
      disabled: {},
      /** Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
      fullWidth: {},
      /** Styles applied to the root element if `wrapped={true}`. */
      wrapped: {},
      /** Styles applied to the wrapper element of `icon` if `icon` is provided. */
      iconWrapper: {},
    },
    MuiTable: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `stickyHeader={true}`. */
      stickyHeader: {},
    },
    MuiTableBody: {
      /** Styles applied to the root element. */ root: {},
    },
    MuiTableCell: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="head"` or `context.table.head`. */
      head: {},
      /** Styles applied to the root element if `variant="body"` or `context.table.body`. */
      body: {},
      /** Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
      footer: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** Styles applied to the root element if `padding="checkbox"`. */
      paddingCheckbox: {},
      /** Styles applied to the root element if `padding="none"`. */
      paddingNone: {},
      /** Styles applied to the root element if `align="left"`. */
      alignLeft: {},
      /** Styles applied to the root element if `align="center"`. */
      alignCenter: {},
      /** Styles applied to the root element if `align="right"`. */
      alignRight: {},
      /** Styles applied to the root element if `align="justify"`. */
      alignJustify: {},
      /** Styles applied to the root element if `context.table.stickyHeader={true}`. */
      stickyHeader: {},
    },
    MuiTableContainer: {
      /** Styles applied to the root element. */
      root: {},
    },
    MuiTableFooter: {
      /** Styles applied to the root element. */
      root: {},
    },
    MuiTableHead: { root: {} },
    MuiTablePagination: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the Toolbar component. */
      toolbar: {},
      /** Styles applied to the spacer element. */
      spacer: {},
      /** Styles applied to the select label Typography element. */
      selectLabel: {},
      /** Styles applied to the Select component `root` element. */
      selectRoot: {},
      /** Styles applied to the Select component `select` class. */
      select: {},
      /** Styles applied to the Select component `icon` class. */
      selectIcon: {},
      /** Styles applied to the Select component `root` element. */
      input: {},
      /** Styles applied to the MenuItem component. */
      menuItem: {},
      /** Styles applied to the displayed rows Typography element. */
      displayedRows: {},
      /** Styles applied to the internal `TablePaginationActions` component. */
      actions: {},
    },
    MuiTableRow: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `selected={true}`. */
      selected: {},
      /** State class applied to the root element if `hover={true}`. */
      hover: {},
      /** Styles applied to the root element if table variant="head". */
      head: {},
      /** Styles applied to the root element if table variant="footer". */
      footer: {},
    },
    MuiTableSortLabel: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `active={true}`. */
      active: {},
      /** Styles applied to the icon component. */
      icon: {},
      /** Styles applied to the icon component if `direction="desc"`. */
      iconDirectionDesc: {},
      /** Styles applied to the icon component if `direction="asc"`. */
      iconDirectionAsc: {},
    },
    MuiTabs: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** Styles applied to the flex container element. */
      flexContainer: {},
      /** Styles applied to the flex container element if `orientation="vertical"`. */
      flexContainerVertical: {},
      /** Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
      centered: {},
      /** Styles applied to the tablist element. */
      scroller: {},
      /** Styles applied to the tablist element if `!variant="scrollable"`. */
      fixed: {},
      /** Styles applied to the tablist element if `variant="scrollable"` and `orientation="horizontal"`. */
      scrollableX: {},
      /** Styles applied to the tablist element if `variant="scrollable"` and `orientation="vertical"`. */
      scrollableY: {},
      /** Styles applied to the tablist element if `variant="scrollable"` and `visibleScrollbar={false}`. */
      hideScrollbar: {},
      /** Styles applied to the ScrollButtonComponent component. */
      scrollButtons: {},
      /** Styles applied to the ScrollButtonComponent component if `allowScrollButtonsMobile={true}`. */
      scrollButtonsHideMobile: {},
      /** Styles applied to the TabIndicator component. */
      indicator: {},
    },
    MuiTextField: { root: {} },
    MuiToggleButton: {
      /** Styles applied to the root element. */
      root: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** State class applied to the root element if `selected={true}`. */
      selected: {},
      /** State class applied to the root element if `color="standard"`. */
      standard: {},
      /** State class applied to the root element if `color="primary"`. */
      primary: {},
      /** State class applied to the root element if `color="secondary"`. */
      secondary: {},
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall: {},
      /** Styles applied to the root element if `size="medium"`. */
      sizeMedium: {},
      /** Styles applied to the root element if `size="large"`. */
      sizeLarge: {},
    },
    MuiToggleButtonGroup: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `orientation="vertical"`. */
      vertical: {},
      /** State class applied to the root element if `disabled={true}`. */
      disabled: {},
      /** Styles applied to the children. */
      grouped: {},
      /** Styles applied to the children if `orientation="horizontal"`. */
      groupedHorizontal: {},
      /** Styles applied to the children if `orientation="vertical"`. */
      groupedVertical: {},
    },
    MuiToolbar: {
      /** Styles applied to the root element. */ root: {},
      /** Styles applied to the root element unless `disableGutters={true}`. */
      gutters: {},
      /** Styles applied to the root element if `variant="regular"`. */
      regular: {},
      /** Styles applied to the root element if `variant="dense"`. */
      dense: {},
    },
    MuiTooltip: {
      /** Styles applied to the Popper component. */
      popper: {},
      /** Styles applied to the Popper component unless `disableInteractive={true}`. */
      popperInteractive: {},
      /** Styles applied to the Popper component if `arrow={true}`. */
      popperArrow: {},
      /** Styles applied to the Popper component unless the tooltip is open. */
      popperClose: {},
      /** Styles applied to the tooltip (label wrapper) element. */
      tooltip: {},
      /** Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
      tooltipArrow: {},
      /** Styles applied to the arrow element. */
      arrow: {},
      /** Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
      touch: {},
      /** Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
      tooltipPlacementLeft: {},
      /** Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
      tooltipPlacementRight: {},
      /** Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
      tooltipPlacementTop: {},
      /** Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
      tooltipPlacementBottom: {},
    },
    MuiTouchRipple: {
      /** Styles applied to the root element. */ root: {},
      /** Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {},
      /** Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {},
      /** Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {},
      /** Styles applied to the internal `Ripple` components `child` class. */
      child: {},
      /** Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {},
      /** Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {},
    },
    MuiTypography: {
      /** Styles applied to the root element. */
      root: {},
      /** Styles applied to the root element if `variant="body2"`. */
      body2: {},
      /** Styles applied to the root element if `variant="body1"`. */
      body1: {},
      /** Styles applied to the root element if `variant="caption"`. */
      caption: {},
      /** Styles applied to the root element if `variant="button"`. */
      button: {},
      /** Styles applied to the root element if `variant="h1"`. */
      h1: {},
      /** Styles applied to the root element if `variant="h2"`. */
      h2: {},
      /** Styles applied to the root element if `variant="h3"`. */
      h3: {},
      /** Styles applied to the root element if `variant="h4"`. */
      h4: {},
      /** Styles applied to the root element if `variant="h5"`. */
      h5: {},
      /** Styles applied to the root element if `variant="h6"`. */
      h6: {},
      /** Styles applied to the root element if `variant="subtitle1"`. */
      subtitle1: {},
      /** Styles applied to the root element if `variant="subtitle2"`. */
      subtitle2: {},
      /** Styles applied to the root element if `variant="overline"`. */
      overline: {},
      /** Styles applied to the root element if `variant="inherit"`. */
      inherit: {},
      /** Styles applied to the root element if `align="left"`. */
      alignLeft: {},
      /** Styles applied to the root element if `align="center"`. */
      alignCenter: {},
      /** Styles applied to the root element if `align="right"`. */
      alignRight: {},
      /** Styles applied to the root element if `align="justify"`. */
      alignJustify: {},
      /** Styles applied to the root element if `nowrap={true}`. */
      noWrap: {},
      /** Styles applied to the root element if `gutterBottom={true}`. */
      gutterBottom: {},
      /** Styles applied to the root element if `paragraph={true}`. */
      paragraph: {},
    },
  },
});

export default theme;
