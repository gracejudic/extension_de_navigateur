// ./variables.js

// éléments globaux à modifier
const ELEMENTS_TO_CHANGE = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "a",
  "li",
  "ul",
  "td",
  "span",
  "div",
  "body",
  "header",
  "th",
  "strong",
  "em",
  "main",
  "article",
  "aside",
  "summary",
  "code",
  "figcaption",
  "ytd-mini-guide-renderer",
];

// Variable pour suivre l'état (actif ou inactif) des différentes fonctions
let isExtensionOff = false,
  isColorChanged = false,
  isLineHeightIncreased = false,
  isFontChanged = false,
  isNightModeOnWeb = false,
  isSpeakingModeOn = false;
  nightModeState = false;
  isFontIncreased = false;

export default {
  ELEMENTS_TO_CHANGE,
  isExtensionOff,
  isColorChanged,
  isLineHeightIncreased,
  isFontChanged,
  isNightModeOnWeb,
  isSpeakingModeOn,
  nightModeState,
  isFontIncreased
};
