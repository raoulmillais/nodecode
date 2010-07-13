(function() {

    window.Utils = {
    
        random: function(min, max) {
            return Math.floor((max - min - 1) * Math.random()) + min;
        },
        
        toArray: function(enumerable) {
            return Array.prototype.slice.call(enumerable);
        }
        
    }

    // Object.create shim care of Douglas Crockford
    if (typeof Object.create !== 'function') {
        Object.create = function(theType) {
            function F() {};
            F.prototype = theType;
            return new F();
        }
    }
    
    Function.prototype.curry = function() {
        if (arguments.length < 1) return this;
        
        var self = this;
        var args = Utils.toArray(args);
        return function() {
            return self.apply(this, args.concat(Utils.toArray(arguments)));
        }
    }

})();