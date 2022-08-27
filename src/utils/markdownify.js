import marked from "marked";
import htmlToReact from "./htmlToReact";

export default function markdownify(markdown) {
  return !markdown ? null : htmlToReact(marked(markdown));
}
