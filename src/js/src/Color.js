(function() {
    window.Color = {
        init: function(red, green, blue, alpha) {
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha || 1;
        },
        
        toRGBAString: function() {
            return 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alpha + ')';
        },
        
        toRGBString: function() {
            return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
        }
        
    }
})();