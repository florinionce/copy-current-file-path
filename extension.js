const vscode = require('vscode');
const path = require('path');

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

        const config = vscode.workspace.getConfiguration('pathify');

        filePath = editor.document.fileName.replace(vscode.workspace.rootPath + '/', '');
        statusBarItem.text = "$(checklist)   "+filePath;

        var separator = config.separator;
        filePath = filePath.split(path.sep).join(separator);


        if (config.showInformationMessageOnCopy) {
            vscode.window.showInformationMessage("Path "+filePath + " copied to clipboard");
        }
        vscode.env.clipboard.writeText(filePath);

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
