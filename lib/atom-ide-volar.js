const path = require("path")
const { AutoLanguageClient } = require("atom-languageclient")
const { renameGrammarForScopeName } = require("./grammar")

class VolarLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["text.html.vue"]
  }
  getLanguageName() {
    return "Vue"
  }
  getServerName() {
    return "Volar"
  }

  startServerProcess() {
    atom.config.set('core.debugLSP', true)
    return super.spawnChildNode([require.resolve('@volar/server/bin/volar-server'), '--stdio'])
  }

  preInitialization() {
    renameGrammarForScopeName("text.html.vue", "Vue")
  }

  getInitializeParams(projectPath, process) {
    // const { initializationOptions } = require("./config")
    console.log("----------", super.getInitializeParams(projectPath, process));
    // console.log(path.join(projectPath, "node_modules/typescript/lib/typescript.js"));
    return {
      ...super.getInitializeParams(projectPath, process),
      documentSelector: [{ scheme: 'file', language: 'vue' }],
      initializationOptions: {
        typescript: {
          serverPath: path.join(require.resolve("typescript"), "..", "tsserverlibrary.js"),
        },
        languageFeatures: {
          hover: true,
          documentHighlight: true,
          callHierarchy: true,
          completion: {
            defaultTagNameCase: "both",
            defaultAttrNameCase: "kebabCase",
            getDocumentNameCasesRequest: false,
            getDocumentSelectionRequest: false,
          },
          diagnostics: true
        },
      }
    }
  }
}

module.exports = new VolarLanguageClient()
