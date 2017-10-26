const vscode = require('vscode');
const ncp = require('copy-paste')

function activate(context) {
    var filePath = "";
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.command = 'extension.copyCurrentPath';
    statusBarItem.tooltip = 'Click to copy path';
    statusBarItem.text = "$(megaphone) Pathify"
    statusBarItem.show();
    var disposable = vscode.commands.registerCommand('extension.copyCurrentPath', function () {
        var editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showInformationMessage("You need to have a file opened.");
                return;
            }
            filePath = editor.document.fileName.replace(vscode.workspace.rootPath + '/', '');
            console.log(filePath)
            statusBarItem.text = "$(megaphone)"+filePath;
            vscode.window.showInformationMessage("Path "+filePath + " copied to clipboard");
            ncp.copy(filePath, function () {});
            setTimeout(function(){
                statusBarItem.text = "$(megaphone) Pathify";
            },5000)
        });
        context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;