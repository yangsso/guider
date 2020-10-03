import { colors } from "@material-ui/core";

export default {
  primary: {
    contrastText: colors.common.white,
    dark: colors.purple[700],
    main: colors.purple[500],
    light: colors.purple[300],
  },
  secondary: {
    contrastText: colors.common.white,
    dark: colors.deepPurple.A700,
    main: colors.deepPurple.A400,
    light: colors.deepPurple.A200,
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: "#F4F6F8",
    paper: colors.common.white,
  },
  divider: colors.grey[300],
};
