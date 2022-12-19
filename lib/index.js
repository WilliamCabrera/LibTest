/* eslint-disable no-void */
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-multi-assign
exports.Fn1 = exports.Greeter = void 0;
const Greeter = function (name) {
  return "Hello 1 ".concat(name);
};
exports.Greeter = Greeter;
const DefaultFn = function () {
  return 0;
};
const Fn1 = function (name) {
  return "Hello ".concat(name);
};
exports.Fn1 = Fn1;
exports.default = DefaultFn;
