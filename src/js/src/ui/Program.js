//= require <jquery-1.4.2>
//= require <chain.js>
//= require "../Stage"
//= require "../Animation"
//= require "../Color"
//= require "../Circle"

//= require "../ColorPicker"
//= require "../ShapeSelector"

(function() {
       
    $(document).ready(function() {
        var $canvas = $('#tile-canvas'),
            $actors = $('#actors'),
            $strokeColorPicker = $('#control-stroke-colour'),
            $shapeSelector = $('#shapes'),
            stage = Object.create(Stage);
            
        stage.init('tile-canvas', 20, 400);
        
        $canvas.click(function(evt) {
            var newColor = $strokeColorPicker.data('SelectedColor'),
                selectedShape = $shapeSelector.data('SelectedShape'),
                newRect,
                newBallAnimation = Object.create(Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;
            
            
            // create a new ball and attach an animation
            switch (selectedShape) {
                case 'Circle':
                    newRect = Object.create(Circle);
                    newRect.init(newX, newY, 50, newColor);
                    break;
                case 'Rectangle':
                    newRect = Object.create(Rectangle);
                    newRect.init(newX, newY, 75, 50, newColor);
                    break;
            }
           
            
            newBallAnimation.init(stage, 2000, newX, newX + 300, newRect, 'x', false, Easing.easeOutSine); 

            // add the new ball to the actors pallette
            $actors.items('add', { name: selectedShape, obj: newRect }).chain();
            
            // put the ball on the stage
            stage.actors.push(newRect);
            stage.animations.push(newBallAnimation);
            newRect.draw(stage);
            if (stage.isRunning) newBallAnimation.start();
        });
        
        $strokeColorPicker.colorPicker();
        $shapeSelector.shapeSelector();
        $('#stage-start').click(function() { stage.start(); });
        $('#stage-stop').click(function() { stage.stop(); });
        $('#stage-rewind').click(function() { stage.rewind(); });
    });
})();