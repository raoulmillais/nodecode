//= require "Color.js"

(function() {
    
    window.Circle = {

        init: function(x, y, size, color) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
        },
    
        draw: function(stage) {
            var radius = this.size / 2;
            stage.context.strokeStyle = this.color.toRGBAString(25, 240, 252, 0.5);
            stage.context.beginPath();
            stage.context.arc(this.x, this.y, radius, 0, Math.PI * 2, true);
            stage.context.stroke();
        }
    };
    
})();