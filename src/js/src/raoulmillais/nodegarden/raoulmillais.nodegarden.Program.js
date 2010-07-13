//= require <jquery-1.4.2>
//= require "raoulmillais.nodegarden.Node"
//= require "../raoulmillais.Color"

(function($) {
    var config = {
        FPS: 20,
        INITIAL_NODE_COUNT: 35,
        GLOBAL_MAX_SIZE = 15,
        R: 201,
        G: 255,
        B: 32,
        A: 1.0
    },
        nodes = [];
    
    var setup = function() {
        // size(nodeGardenSize, nodeGardenSize);
        // background(25, 25, 26);
        var color = Object.create(raoulmillais.Color);
        color.init(config.R, config.G, config.B, config.A);
        for (var i = 0; i < config.INITIAL_NODE_COUNT; i++) {
            nodes[i] = Object.create(raoulmillais.Node);
            nodes[i].init(random(1, nodeGardenSize), random(1, nodeGardenSize), 1, random(2, globalMaxSize), color);
            nodes[i].red = nodeRedValue;
            nodes[i].blue = nodeBlueValue;
            nodes[i].green = nodeGreenValue;
        }
    };
    
    var eventLoop = function() {
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext('2d');
    
    };

    $('document').ready(function() {
        setup();
        window.setInterval(eventLoop, 1000 / config.FPS);
    });
})(jQuery);