//= require <jquery-1.4.2>
//= require <chain.js>
//= require "Object"
//= require "theater/Stage"
//= require "theater/Animation"
//= require "theater/Color"
//= require "theater/Circle"
//= require "theater/Rectangle"

//= require "jquery/ColorPicker"
//= require "jquery/Scrollable"
//= require "jquery/ShapeSelector"
//= require "jquery/PropertiesEditor"
//= require "jquery/Timer"

(function($) {
    
    $(document).ready(function() {
        var $canvas = $('#tile-canvas'),
            $actors = $('#actors'),
            $strokeColorPicker = $('#stroke-color'),
            $fillColorPicker = $('#fill-color'),
            $shapeSelector = $('#shapes'),
            $timer = $('#stage-timer'),
            stage = Object.create(theater.Stage),
            redrawStage;

        // Initialise stage
        stage.init('tile-canvas', 20, 400, function() {
            $timer.timer('update', this.time);
        });
        
        window.stage = stage;
        redrawStage = function() {
            stage.draw();
        }
        
        $canvas.click(function(evt) {
            // TODO: Remove dependency on specific UI elements and get data from services
            var strokeColor = $strokeColorPicker.data('SelectedColor'),
                fillColor = $fillColorPicker.data('SelectedColor'),
                selectedShape = $shapeSelector.data('SelectedShape'),
                strokeWeight = parseInt($('#stroke-weight').val()),
                newShape,
                newShapeAnimation = Object.create(theater.Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;
            
            // create a new ball and attach an animation
            switch (selectedShape) {
                case 'Circle':
                    newShape = Object.create(theater.Circle);
                    newShape.init(newX, newY, 50, { stroke: strokeColor, fill: fillColor, strokeWeight: strokeWeight });
                    break;
                case 'Rectangle':
                    newShape = Object.create(theater.Rectangle);
                    newShape.init(newX, newY, 75, 50, { stroke: strokeColor, fill: fillColor, strokeWeight: strokeWeight });
                    break;
            }
            
            newShapeAnimation.init(stage, 2000, newX, newX + 300, newShape, 'x', false, theater.Easing.easeOutSine); 

            // add the new ball to the actors palette
            $actors.items('add', { name: selectedShape, obj: newShape, animations: [ newShapeAnimation ] });
            
            // re-initalise palette scrollbars
            $('.palette .content').scrollable();
            
            // put the ball on the stage
            stage.actors.push(newShape);
            stage.animations.push(newShapeAnimation);
            newShape.draw(stage);
            if (stage.isRunning) newShapeAnimation.start();
        });
        
        
        // Initialise UI
        console.log('Initialising palettes');
        $('.palette .content').scrollable();
        
        
        console.log('Innitialising editor');
        function resizeViewport() {
            var editorHeight = $(window).height() - $('#top-activity-bar').height() - $('#bottom-dock').height() - 20;
            var editorWidth = $(window).width() - $('#right-dock').width();
            $('#editor').height(editorHeight);
            $('#editor').width(editorWidth);
        }
        resizeViewport();
        $(window).resize(resizeViewport);
        $('#editor').scrollable();

        
        console.log('Initialising docks');
        $('.dock > .content').scrollable({ reInitialiseOnResize: true });
        
        
        console.log('Initialising actors palette');
        $('#actors').items([]).chain(function() {
            var model = this.item();

            $(this).click(function() {
                var $self = $(this);
                $('#actors li').removeClass('selected');
                $self.toggleClass('selected');
                $('#properties-palette').propertiesEditor({ 
                    title: model.name + ' Properties', 
                    model: model.obj, 
                    propertyChange: redrawStage
                });
            });
        });

        console.log('Initialising tools palette');
        $('.color-picker').colorPicker();
        $shapeSelector.shapeSelector();
        
        console.log('Initialising stage controls');
        $timer.timer();
        $('#stage-start').click(function() { 
            stage.start(); 
            $timer.timer('start');
        });
        $('#stage-stop').click(function() { 
            stage.stop(); 
            $timer.timer('stop');
        });
        $('#stage-rewind').click(function() { 
            stage.rewind(); 
            $timer.timer('rewind');
        });
        $('#stage-refresh').click(redrawStage);
    });
})(jQuery);