define(["require", "exports"], function (require, exports) {
    "use strict";
    var Test = (function () {
        function Test() {
        }
        Test.prototype.test = function () {
            return "Hello World";
        };
        return Test;
    }());
    exports.Test = Test;
    console.log('test');
    exports.bill = "Hello World";
});
