var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "A type-scripting greeting to you, " + name;
    };
    return Greeter;
})();
module.exports = Greeter;
