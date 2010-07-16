//= require <jquery-1.4.2>
//= require <chain.js>
//= require "../Stage"
//= require "../Animation"
//= require "../Color"
//= require "../Circle"
//= require "../ColorPicker"

(function() {
       
    $(document).ready(function() {
        var $canvas = $('#tile-canvas'),
            $actors = $('#actors'),
            $strokeColorPicker = $('#control-stroke-colour'),
            stage = Object.create(Stage);
            
        stage.init('tile-canvas', 20, 400);
        
        $canvas.click(function(evt) {
            var newColor = $strokeColorPicker.data('SelectedColor'),
                newBall = Object.create(Circle),
                newBallAnimation = Object.create(Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;
            
            
            // create a new ball and attach an animation
            newBall.init(newX, newY, 50, newColor);
            
            newBallAnimation.init(stage, 2000, newX, newX + 300, newBall, 'x', false, Easing.easeOutSine); 

            // add the new ball to the actors pallette
            $actors.items('add', { name: 'Circle', obj: newBall }).chain();
            
            // put the ball on the stage
            stage.actors.push(newBall);
            stage.animations.push(newBallAnimation);
            newBall.draw(stage);
            if (stage.isRunning) newBallAnimation.start();
        });
        
        $strokeColorPicker.colorPicker();
        $('#stage-start').click(function() { stage.start(); });
        $('#stage-stop').click(function() { stage.stop(); });
        $('#stage-rewind').click(function() { stage.rewind(); });
    });
})();