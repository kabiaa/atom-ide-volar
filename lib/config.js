const path = require("path")

const initializationOptions = {
  documentSelector: [{ scheme: 'file', language: 'vue' }],
  initializationOptions: {
    typescript: {
      tsdk: path.join(require.resolve("typescript"), ".."),
    }
  }
}

exports.initializationOptions = initializationOptions
