//= require "Utils"

(function() {

    window.Node = {
        MAX_NODE_SIZE: 15,
    
        init: function(x, y, size, color) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.calculateVelocity();
        },
        
        calculateVelocity: function() {
            var maxVelocity = this.MAX_NODE_SIZE - this.size;
            var minVelocity = -(maxVelocity / 2);
            this.velocityx = Utils.random(-5, maxVelocity);
            this.velocityy = Utils.random(-5, maxVelocity);
        },

        distance: function(other) {
                var a = other.y - this.y;
                var b = other.x - this.x;
                return Math.sqrt((a * a) + (b * b));
        },
        
        move: function(nodeGardenSize) {
            this.x += this.velocityx;
            this.y += this.velocityy;
            if (this.x > nodeGardenSize - (this.size / 2 + 1) || this.x < 0) this.velocityx *= -1;
            if (this.y > nodeGardenSize - (this.size / 2 + 1) || this.y < 0) this.velocityy *= -1;
        }
    }


})();