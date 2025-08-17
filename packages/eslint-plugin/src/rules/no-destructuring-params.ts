import type { Rule } from 'eslint';

export const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow destructuring in function parameters',
      recommended: false,
    },
    fixable: undefined,
    schema: [],
    messages: {
      noDestructuringParams:
        'Avoid destructuring in function parameters. Consider using a regular parameter and destructuring inside the function body instead.',
    },
  },
  create(context: Rule.RuleContext) {
    function checkFunction(node: any) {
      if (node.params) {
        for (const param of node.params) {
          // Check for direct destructuring patterns
          if (param.type === 'ObjectPattern' || param.type === 'ArrayPattern') {
            context.report({
              node: param,
              messageId: 'noDestructuringParams',
            });
          }
          // Check for destructuring with default values (AssignmentPattern)
          else if (
            param.type === 'AssignmentPattern' &&
            (param.left.type === 'ObjectPattern' || param.left.type === 'ArrayPattern')
          ) {
            context.report({
              node: param,
              messageId: 'noDestructuringParams',
            });
          }
        }
      }
    }

    return {
      FunctionDeclaration: checkFunction,
      FunctionExpression: checkFunction,
      ArrowFunctionExpression: checkFunction,
    };
  },
};

export default rule;
