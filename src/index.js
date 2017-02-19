import spring from 'css-spring'

const importLocalName = (name, state) => {
  const imports = state.file.metadata.modules.imports
  const springImports = imports.find((x) => x.source === 'css-spring')

  if (springImports) {
    const specifier = springImports.specifiers.find((x) => x.imported === name)
    if (specifier) {
      return specifier.local
    }
  }

  return name === 'default' ? 'spring' : name
}

module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.callee.name !== importLocalName('default', state)) {
          return
        }

        if (!t.isObjectExpression(path.node.arguments[0])) {
          return
        }

        if (!t.isObjectExpression(path.node.arguments[1])) {
          return
        }

        path.node = t.objectExpression([])
      }
    }
  };
};
