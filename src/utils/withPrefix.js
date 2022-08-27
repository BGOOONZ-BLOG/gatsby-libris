const { withPrefix: gatsbyWithPrefix } = require("gatsby");
const _ = require("lodash");

export default function withPrefix(url) {
  return !url ? url : !(!(_.startsWith(url, "#") ||
  _.startsWith(url, "http://")) &&
  !_.startsWith(url, "https://")) ? url : gatsbyWithPrefix(url);
}
