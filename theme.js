import theme from "mdx-deck/themes";

const regularTextSize = {
  fontSize: "1em"
};
export default {
  ...theme,
  h1: {
    fontSize: "2.618em",
    color: "#a3bf61"
  },
  pre: {
    backgroundColor: "#3a3a3c",
    color: "#93af51"
  },
  code: { color: "#4b4b4b" },
  h2: {
    fontSize: "1.68em",
    color: "black"
  },
  p: {
    ...regularTextSize
  },
  ul: {
    ...regularTextSize
  },

  blockquote: {
    fontStyle: "italic"
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
