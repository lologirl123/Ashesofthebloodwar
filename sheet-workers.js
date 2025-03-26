on("change:madness", function() {
  getAttrs(["madness"], function(values) {
    const madness = parseInt(values.madness) || 0;
    if (madness >= 3) {
      setAttrs({ madness_warning: "⚠ Madness is escalating!" });
    } else {
      setAttrs({ madness_warning: "" });
    }
  });
});
