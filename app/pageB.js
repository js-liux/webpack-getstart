var common = require("./common");
require.ensure(["./shared.js"], function(require) {
  var shared = require("./shared");
  shared("This is page B");
});
