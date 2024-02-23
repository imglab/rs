export let styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "artistsTermsIconica",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "width" : 35.0,
      "shape" : "ellipse",
      "border-color" : "rgb(204,204,204)",
      "background-color" : "rgb(137,208,245)",
      "font-size" : 8,
      "height" : 35.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "border-width" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
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
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "target-arrow-shape" : "none",
      "color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "line-style" : "solid",
      "font-size" : 2,
      "opacity" : 0.5882352941176471,
      "width" : 0.75,
      "source-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "source-arrow-shape" : "none",
      "content" : "data(authors)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]