export let styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "artistsTermsPerformatus",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(204,204,204)",
      "background-color" : "rgb(137,208,245)",
      "width" : 35.0,
      "height" : 35.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "shape" : "ellipse",
      "border-opacity" : 1.0,
      "border-width" : 1.0,
      "text-opacity" : 1.0,
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
      "opacity" : 0.5882352941176471,
      "source-arrow-color" : "rgb(0,0,0)",
      "target-arrow-shape" : "none",
      "color" : "rgb(0,0,0)",
      "width" : 0.75,
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(132,132,132)",
      "text-opacity" : 1.0,
      "font-size" : 2,
      "source-arrow-shape" : "none",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "content" : "data(authors)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]