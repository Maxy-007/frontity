import Root from "./components"
import link from "@frontity/html2react/processors/link";

const frontity = {
  name: "frontity",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default frontity