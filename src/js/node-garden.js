(function($) {
    var Node = {
        STROKE_WEIGHT: 3,
    
        init: function(xpos, ypos, zpos, nodeSize) {
            this.x = xpos;
            this.y = ypos;
            this.z = zpos;
            this.size = nodeSize;
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
            if (x > nodeGardenSize - getRadius()) {
                x = nodeGardenSize - getRadius();
                velocityx *= -1;
            }
            if(x < getRadius()) {
                x = getRadius();
                velocityx *= -1;
            }
            if (y > nodeGardenSize - getRadius()) {
                y = nodeGardenSize - getRadius();
                velocityy *= -1;
            }        
            if (y < getRadius()) {
                y = getRadius();
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