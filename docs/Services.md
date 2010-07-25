Services
========

Should Toolbox and styles be grouped as part of the same service? (since they are mutually exclusive when determining
what to add to the stage.

Should there be a single persistence service or separate for settings projects?

Should we persist per project settings separately? YES 
* collapse state of project viewer items
* saved styles (should be exportable)
* colours (should be exportable)

* getSettings()
    * saveSettings(key, value)
    * loadSettings(key)

* getProjects()
    * listProjects()
    * saveProject(name, project)
    * loadProject(name)

* getToolbox()
    * selectedTool
    * addTool()
    * removeTool()
    * selectTool()
    
* getHistoryService()
    * addHistoryItem()
    * removeHistoryItem()
    * undo()
    * redo()
    
* getActors()
    * select(actor)
    * select(callback) [event]

* getProperties()
* getStyles()
    * selectedStyle
    * saveStyle(name, style)
    * retrieveStyle(name)

* getClipboard()
    * addClipboardItem(item)
    * removeClipboardItem(item)