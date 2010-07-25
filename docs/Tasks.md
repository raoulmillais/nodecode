* Create class to represent drawing surface, encapsulating stage
* Fix Rectangle rendering bug (top left corner not joining)
* Tidy up CSS
* Start unit testing!
** Which unit test framework?  QUnit for UI?
* Convert Properties editor to new plugin style allowing rebinding of model and title and destroy
* Swappable tool handlers (for interacting with the editor)
* Document widget lifecycle and responsibilities
** Unbinding all event handlers
** Namespace all events
** Persist settings
* Split plugins into two types - project plugins (which save project data too)
* Settings persistence (into local storage?)
* Per-project settings persistence
* Document extensibility points
* Investigate JavaScript memory leaks (DOM references trapped in closures)
** Pluggable backends (providing set of animation primitives which draw themselves)
** Services
** State manager

* Abstract plugin creation logic
* Reorderable items in project viewer
* Groupable items in project viewer
* Integrate opacity with 3rd party color picker plugin
* Pluggable rendering modules (I.E. svg, canvas etc)
* Name animation framework
* Name WebDE
* Native drag and drop
* Native clipboard support

Featurelist
===========

* Saved styles
* Multiple level undo
* Copy, Cut and Paste
* Animation property editor
* Integrate animations into actors palette
* Save projects
* Group actors
* Remove actors
* Integrate with Node.js
* i18n
* Browser feature detection with intelligent disabling of features
* Snapshot saving (I.E. versioning)
* Online collaboration (not realtime)
* Annotations

