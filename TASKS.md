Immediate
---------

# Create class to represent drawing surface, encapsulating stage
# Create controller to coordinate communication between widgets

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
* getProperties()
* getStyles()
    * selectedStyle
    * saveStyle(name, style)
    * retrieveStyle(name)

* getClipboard()
    * addClipboardItem(item)
    * removeClipboardItem(item)