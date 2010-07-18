//= require "Color"

(function() {
    
    window.Circle = {

        init: function(x, y, size, style) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.style = style;
        },
    
        draw: function(stage) {
            var radius = this.size / 2;
            stage.context.strokeStyle = this.style.stroke.toRGBAString(25, 240, 252, 0.5);
            stage.context.fillStyle = this.style.fill.toRGBAString(25, 240, 252, 0.5);
            stage.context.beginPath();
            stage.context.arc(this.x, this.y, radius, 0, Math.PI * 2, true);

            if (this.style.fill.alpha != 0)
                stage.context.fill();
            if (this.style.stroke.alpha != 0)
                stage.context.stroke();
            }
    };
    
})();