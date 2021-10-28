const path = require("path")

const initializationOptions = {
  documentSelector: [{ scheme: 'file', language: 'vue' }],
  initializationOptions: {
    typescript: {
      serverPath: path.join(require.resolve("typescript"), "..", "tsserverlibrary.js"),
    },
    languageFeatures: {
      references: true,
      definition: true,
      typeDefinition: true,
      callHierarchy: true,
      hover: true,
      rename: true,
      renameFileRefactoring: true,
      signatureHelp: true,
      codeAction: true,
      workspaceSymbol: true,
      completion: {
        defaultTagNameCase: 'both',
        defaultAttrNameCase: 'kebabCase',
        getDocumentNameCasesRequest: false,
        getDocumentSelectionRequest: false,
      },
      schemaRequestService: { getDocumentContentRequest: true },
      diagnostics: true,
      documentHighlight: true,
      documentLink: true,
      codeLens: { showReferencesNotification: true },
      semanticTokens: false,
      schemaRequestService: { getDocumentContentRequest: true },
    },
    documentFeatures: {
      selectionRange: true,
      foldingRange: true,
      linkedEditingRange: true,
      documentSymbol: true,
      documentColor: true
    }
  }
}

exports.initializationOptions = initializationOptions
