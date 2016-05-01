var Test = (function () {
    function Test() {
    }
    Test.prototype.test = function () {
        console.log("this is a test function");
    };
    Test.prototype.test2 = function () {
        return "Another One";
    };
    return Test;
}());
