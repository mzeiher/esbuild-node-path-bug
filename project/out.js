var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

// node_modules/package-a/index.js
var require_package_a = __commonJS((exports2, module2) => {
  module2.exports.value = "1.0.0";
});

// ../NODE_PATH/node_modules/package-c/index.js
var package_c_exports = {};
var init_package_c = __esm(() => {
  module.exports.value = "1.0.0";
});

// ../NODE_PATH/node_modules/package-b/index.js
var require_package_b = __commonJS((exports2, module2) => {
  var package_c = (init_package_c(), package_c_exports);
  module2.exports.value = "package_c version:" + package_c.value;
});

// index.js
var package_a = require_package_a();
var package_b = require_package_b();
console.log(`package_a: ${package_a.value}`);
console.log(`package_b: ${package_b.value}`);
