//= require <jquery-1.4.2>
//= require <chain.js>
//= require "Object"
//= require "theater/Stage"
//= require "theater/Animation"
//= require "theater/Color"
//= require "theater/Circle"
//= require "theater/Rectangle"

//= require "jquery/ProjectViewer"
//= require "jquery/PropertiesEditor"
//= require "jquery/Scrollable"
//= require "jquery/StageControl"
//= require "jquery/Timer"

//= require "webscenator/Environment"

(function($) {
    
    $(document).ready(function() {
        var $canvas = $('#tile-canvas'),
            $projectViewer = $('#project-viewer'),
            stage = Object.create(theater.Stage),
            environment = Object.create(webscenator.Environment),
            redrawStage;

        environment.init();    
        
        // Initialise stage
        stage.init('tile-canvas', 20, 400);
        
        window.stage = stage;
        redrawStage = function() {
            stage.draw();
        }
        
        $canvas.click(function(evt) {
            // TODO: Remove dependency on specific UI elements and get data from services
            var selectedShape = environment.toolboxService.getSelectedTool(),
                selectedStyle = environment.toolboxService.getSelectedStyle(),
                newShape,
                newShapeAnimation = Object.create(theater.Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;
            
            // create a new ball and attach an animation
            switch (selectedShape) {
                case 'Circle':
                    newShape = Object.create(theater.Circle);
                    newShape.init(newX, newY, 50, selectedStyle);
                    break;
                case 'Rectangle':
                    newShape = Object.create(theater.Rectangle);
                    newShape.init(newX, newY, 75, 50, selectedStyle);
                    break;
            }
            
            newShapeAnimation.init(stage, 2000, newX, newX + 300, newShape, 'x', false, theater.Easing.easeOutSine); 

            // add the new ball to the actors palette
            $projectViewer.projectViewer('add', { name: selectedShape, obj: newShape, animations: [ newShapeAnimation ] });
            
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
        
        
        console.log('Initialising editor');
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
        $projectViewer.projectViewer({ 
            selectionChange: function(item) {
                $('#properties-palette').propertiesEditor({ 
                    title: item.name + ' Properties', 
                    model: item.obj, 
                    propertyChange: redrawStage
                });
            }
        });

        console.log('Initialising stage controls');
        $('#stage-control').stageControl({ stage: stage });
    });
})(jQuery);