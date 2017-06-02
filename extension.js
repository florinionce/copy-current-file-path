// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var ncp = require("copy-paste");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "copy-current-file-path" is now active!');



    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.copyCurrentPath', function () {
        // The code you place here will be executed every time your command is executed

        var editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showInformationMessage("You need to have a file opened.");
            return; // No open text editor
        }

        var filePath = editor.document.fileName.replace(vscode.workspace.rootPath + '/', '');
        console.log(filePath)
        vscode.window.showInformationMessage(filePath);

        ncp.copy(filePath, function () {});

    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;