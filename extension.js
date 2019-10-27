const vscode = require('vscode');
const ncp = require('copy-paste');

function activate(context) {
    var filePath = "";
    var statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.command = 'extension.copyCurrentPath';
    statusBarItem.tooltip = 'Click to copy path';
    statusBarItem.text = "$(clippy) Pathify";
    statusBarItem.show();

    var disposable = vscode.commands.registerCommand('extension.copyCurrentPath', function () {
        var editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showInformationMessage("You need to have a file opened.");
            return;
        }

        filePath = editor.document.fileName.replace(vscode.workspace.rootPath + '/', '');
        statusBarItem.text = "$(checklist)   "+filePath;
        if (vscode.workspace.getConfiguration('pathify').showInformationMessageOnCopy) {
            vscode.window.showInformationMessage("Path "+filePath + " copied to clipboard");
        }

        ncp.copy(filePath, function () {});

        setTimeout(function(){
            statusBarItem.text = "$(clippy) Pathify";
        }, 5000);

        });

        context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

exports.deactivate = deactivate;
