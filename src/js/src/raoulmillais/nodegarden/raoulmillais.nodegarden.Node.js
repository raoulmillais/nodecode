(function($) {
    var Node = {
        STROKE_WEIGHT: 3,
        
        x: 0,
        
        y: 0,
        
        z: 0,
        
        size: 0,
        
        color: null,
    
        init: function(xpos, ypos, zpos, nodeSize, nodeColor) {
            this.x = xpos;
            this.y = ypos;
            this.z = zpos;
            this.size = nodeSize;
            this.color = nodeColor;
            this.calculateVelocity();
        },
    
        grow: function() {
            this.size += currentSize;
            // TODO: log node id and size then check new maxPossible node size
            // TODO: adjust velocity after size adjustment
        },
    
        move: function() {
            x += velocityx;
            y += velocityy;
            if (x > nodeGardenSize - this.getRadius()) {
                x = nodeGardenSize - this.getRadius();
                velocityx *= -1;
            }
            if(x < this.getRadius()) {
                x = this.getRadius();
                velocityx *= -1;
            }
            if (y > nodeGardenSize - this.getRadius()) {
                y = nodeGardenSize - this.getRadius();
                velocityy *= -1;
            }        
            if (y < this.getRadius()) {
                y = this.getRadius();
                velocityy *= -1;
            }
        },
    
        getRadius: function() {
            return (size / 2 + Node.STROKE_WEIGHT /2);
        },
    
        calculateVelocity: function() {
            int maxVelocity = globalMaxSize - size;
            int minVelocity = -(maxVelocity / 2);
            velocityx = random(-5, maxVelocity);
            velocityy = random(-5, maxVelocity);
        }
    }
})(jQuery);