# Change Log
All notable changes to the "copy-current-file-path" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.2]
- Initial release

## [0.0.3]
- Add the ability to toggle alerts visibility when a path is copied
    - ![Demo configuration](https://i.imgur.com/fRp5GhTh.gif)
- Fix dependencies vulnerabilities
- Add demo

## [0.0.4]
- Add the ability to change the separator
    - by default is `/`, changing it in the settings to `.` for example will result in `app.controllers.application_controller.rb` being copied to the clipboard
- Fix the plugin not working when running in a container using `code tunnel` by using vscode's built-in clipboard writeText method and remove the `copy-paste` dependency - thanks to [@undecided](https://github.com/undecided)

## [0.0.5]
- Update changelog
