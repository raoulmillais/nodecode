//= require "Color"

(function() {
    
    window.Rectangle = {

        init: function(x, y, width, height, style) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.style = style;
        },
    
        draw: function(stage) {
            var halfWidth = this.width / 2;
            var halfHeight = this.height / 2;
            
            stage.context.strokeStyle = this.style.stroke.toRGBAString(25, 240, 252, 0.5);
            stage.context.lineWidth = this.style.strokeWeight;
            stage.context.fillStyle = this.style.fill.toRGBAString(25, 240, 252, 0.5);
            stage.context.beginPath();

            stage.context.moveTo(this.x - halfWidth, this.y - halfHeight);
            stage.context.lineTo(this.x + halfWidth, this.y - halfHeight);
            stage.context.lineTo(this.x + halfWidth, this.y + halfHeight);
            stage.context.lineTo(this.x - halfWidth, this.y + halfHeight);
            stage.context.lineTo(this.x - halfWidth, this.y - halfHeight);
            
            if (this.style.fill.alpha != 0)
                stage.context.fill();
            if (this.style.stroke.alpha != 0)
                stage.context.stroke();
        }
    };
    
})();