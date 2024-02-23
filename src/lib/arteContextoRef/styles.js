export let styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "artistsTermsArteConTexto",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "width" : 35.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 35.0,
      "background-color" : "rgb(137,208,245)",
      "border-color" : "rgb(204,204,204)",
      "border-width" : 1.0,
      "font-size" : 8,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[artistTerm = 'REF']",
    "css" : {
      "background-color" : "rgb(27,158,119)"
    }
  }, {
    "selector" : "node[artistTerm = 'TERM']",
    "css" : {
      "background-color" : "rgb(117,112,179)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "width" : 0.75,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "opacity" : 0.5882352941176471,
      "font-size" : 2,
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)",
      "target-arrow-color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "target-arrow-shape" : "none",
      "content" : "data(authors)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]