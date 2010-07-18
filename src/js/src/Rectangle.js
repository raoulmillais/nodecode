//= require "Color"

(function() {
    
    window.Rectangle = {

        init: function(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        },
    
        draw: function(stage) {
            var halfWidth = this.width / 2;
            var halfHeight = this.height / 2;
            
            stage.context.strokeStyle = this.color.toRGBAString(25, 240, 252, 0.5);
            stage.context.beginPath();

            stage.context.moveTo(this.x - halfWidth, this.y - halfHeight);
            stage.context.lineTo(this.x + halfWidth, this.y - halfHeight);
            stage.context.lineTo(this.x + halfWidth, this.y + halfHeight);
            stage.context.lineTo(this.x - halfWidth, this.y + halfHeight);
            stage.context.lineTo(this.x - halfWidth, this.y - halfHeight);
            
            stage.context.stroke();
        }
    };
    
})();