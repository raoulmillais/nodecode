//= require <jquery-1.4.2>
//= require "init"

(function($) {
    
    // Should provide all required toolbox info to requesters and is resposible for
    // rewiring editor click handler when new tools are selected.
    window.webscenator.services.ToolboxService = {
        
    
        init: function(environment) { 
            console.log('Initialising webscenator.services.ToolboxService');
            this.environment = environment;

            console.log(' Initialising ToolboxService UI');
            this.$strokeColorPicker = $('#stroke-color');
            this.$fillColorPicker = $('#fill-color');
            this.$strokeWeight = $('#stroke-weight'),
            $('.color-picker').colorPicker();
            
            this.$shapeSelector = $('#shapes').shapeSelector();
        },
        
        getSelectedTool: function() {
            return this.$shapeSelector.data('SelectedShape');
        },
        
        getSelectedStyle: function() {
            return {
                stroke: this.$strokeColorPicker.data('SelectedColor'),
                fill: this.$fillColorPicker.data('SelectedColor'),
                strokeWeight: parseInt(this.$strokeWeight.val())
            };
        },
        
        destroy: function() {
            // TODO: (optional) Save project settings
            // TODO: (optional) Save global settings
            // TODO: (optional) Save project state
        }
    
    };

})(jQuery);