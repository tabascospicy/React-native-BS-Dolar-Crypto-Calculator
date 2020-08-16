import {theme} from "../interfaces/interfaces";
interface SupportedThemes {
  dark : theme,
  light : theme
}
const dark:theme = {
  primary : "#091945",
  secondary : "#6170ff",
  warning : "red",
  info : "grey",
  success : "blue",
  light:"#0d1e4c",
  strong:"#1a2a56",
  white:"#ffff",
  black:"#00000",
  font:"#ffff",
  dark:"#00000",
  grey:"grey"
}



const light : theme = {
  primary : "#FCFCFC",
  strong : "#C2E4FF",
  secondary:"#005598",
  warning : "red",
  info : "grey",
  success : "blue",
  light:"#FCFCFC",
  white:"#ffff",
  black:"#00000",
  dark:"#00000",
  font:"#002C52",
  grey:"grey",
}
const Colors : theme = dark;

export const  ColorsThemes : SupportedThemes  = {light,dark};

export default Colors;