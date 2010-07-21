//= require <jquery-1.4.2>
//= require "init"

(function($) {
    
    // Should provide all required toolbox info to requesters and is resposible for
    // rewiring editor click handler when new tools are selected.
    window.webscenator.services.ToolboxService = {
    
        init: function(environment) { 
            console.log('Initialising webscenator.services.ToolboxService');
            this.environment = environment;
            // TODO: Initalise UI
        },
        
        getSelectedTool: function() {
            // TODO: Return selected tool from tool palette UI
            return;
        },
        
        getSelectedStyle: function() {
            // TODO: Return selected style from style palette UI
            return;
        },
        
        destroy: function() {
            // TODO: (optional) Save project settings
            // TODO: (optional) Save global settings
            // TODO: (optional) Save project state
        }
    
    };

})(jQuery);