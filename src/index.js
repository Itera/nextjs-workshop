import "./main.scss";
import Reveal from "reveal.js";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Highlight from "reveal.js/plugin/highlight/highlight";
import "reveal.js/plugin/highlight/monokai.css";
import Markdown from "reveal.js/plugin/markdown/markdown";

let deck = new Reveal({
  plugins: [Markdown, Highlight],
});
deck.initialize({
  hash: true,
});
