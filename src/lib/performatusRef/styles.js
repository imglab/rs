export let styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "artistsTermsPerformatus",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "width" : 35.0,
      "height" : 35.0,
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "font-size" : 8,
      "text-valign" : "center",
      "text-halign" : "center",
      "border-width" : 1.0,
      "text-opacity" : 1.0,
      "shape" : "ellipse",
      "border-color" : "rgb(204,204,204)",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[artistTerm = 'REF']",
    "css" : {
      "background-color" : "rgb(27,158,119)"
    }
  }, {
    "selector" : "node[artistTerm = 'TERMREF']",
    "css" : {
      "background-color" : "rgb(116,173,209)"
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
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "width" : 0.75,
      "opacity" : 0.5882352941176471,
      "source-arrow-shape" : "none",
      "font-size" : 2,
      "target-arrow-shape" : "none",
      "text-opacity" : 1.0,
      "line-color" : "rgb(132,132,132)",
      "content" : "data(authors)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]