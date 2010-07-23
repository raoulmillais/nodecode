Immediate
---------

# Create class to represent drawing surface, encapsulating stage
# Fix Rectangle rendering bug (top left corner not joining)

# Abstract plugin creation logic
# Reorderable items in project viewer
# Groupable items in project viewer
# Swappable tool handlers (for interacting with the editor)
# Integrate opacity with 3rd party color picker plugin


Mid-term
--------

# Refactor classes into namespaces
# Create build batch script using sprockets
# Name animation framework
# Name WebDE


Featurelist
===========

# Saved styles
# Multiple level undo
# Copy, Cut and Paste
# Animation property editor
# Integrate animations into actors pallette
# Save projects
# Group actors
# Remove actors
# Integrate with Node.js
# i18n
# Browser feature detection with intelligent disabling of features

Environment
===========

Contains drawing surface
Contains docks
Docks contain palettes
Palettes implement UI for services

Services:
* Save state (settings): OnChange / OnClose?
* Load state at startup
* Save project
* Load project

Manages service lifecycle and allows access to services:
* init()
* destroy()

Services
========

Should Toolbox and styles be grouped as part of the same service? (since they are mutually exclusive when determining
what to add to the stage.

Should there be a single persistence service or separate for settings projects?

Should we persist per project settings separately?

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
    
* getHistory()
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