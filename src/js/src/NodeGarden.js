//= require "Utils"

(function() {
    
    window.NodeGarden = {
        
        nodes: [],
        
        init: function(initialNodeCount, initialNodeColour, stage) {
            this.initialNodeCount = initialNodeCount;
            this.initialNodeColour = initialNodeColour;
            this.stage = stage;
        },
        
        populate: function() {
            for (i = 0; i < this.initialNodeCount; i++) {
                this.nodes[i] = Object.create(Node);
                this.nodes[i].init(Utils.random(1, this.stage.size), 
                    Utils.random(1, this.stage.size), 
                    Utils.random(2, Node.MAX_NODE_SIZE),
                    this.initialNodeColour);
            }
        }
    }
    
})();