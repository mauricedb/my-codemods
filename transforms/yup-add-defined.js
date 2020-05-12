const propertyNamesToAddDefined = [
  "mixed",
  "string",
  "number",
  "boolean",
  "bool",
  "date",
  "array",
  "object",
];
const excludeIfCalling = ["notRequired", "required", "defined", "optional"];

module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.ImportDeclaration, {
      source: {
        type: "StringLiteral",
        value: "yup",
      },
    })
    .find(j.Identifier)
    .forEach((nodePath) => {
      const localYupName = nodePath.node.name;

      root
        .find(
          j.CallExpression,
          ({ callee }) =>
            callee.type === "MemberExpression" &&
            callee.object.name === localYupName &&
            propertyNamesToAddDefined.includes(callee.property.name)
        )
        .filter(
          (nodePath) =>
            !j(nodePath).closest(
              j.CallExpression,
              ({ callee }) =>
                callee.type === "MemberExpression" &&
                excludeIfCalling.includes(callee.property.name)
            ).length
        )
        .replaceWith(({ node }) =>
          j.callExpression(
            j.memberExpression(node, j.identifier("defined"), false),
            []
          )
        );
    });

  return root.toSource();
};

module.exports.parser = "tsx";
