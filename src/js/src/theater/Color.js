//= require "init"

(function() {
    
    theater.Color = {
        init: function(red, green, blue, alpha) {
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha || 1;
            
            return this;
        },
        
        toRGBAString: function() {
            return 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alpha + ')';
        },
        
        toRGBString: function() {
            return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
        },
        
        toHexString: function() {
            var hex = [
                this.red.toString(16),
                this.green.toString(16),
                this.blue.toString(16)
            ];
            
            for (var i = 0, l = hex.length; i < l; i++) {
                hex[i] = (hex[i].length == 1) 
                    ? '0' + hex[i]
                    : hex[i];
            }

            return '#' + hex.join('');
        }
    }
    
})();