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
    return super.spawnChildNode([require.resolve('@volar/vue-language-server/bin/vue-language-server'), '--stdio'])
  }

  preInitialization() {
    renameGrammarForScopeName("text.html.vue", "Vue")
  }

  getInitializeParams(projectPath, process) {
    const { initializationOptions } = require("./config")
    return {
      ...super.getInitializeParams(projectPath, process),
      ...initializationOptions
    }
  }
}

module.exports = new VolarLanguageClient()
