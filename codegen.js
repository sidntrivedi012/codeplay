function codegenerator(node) {
    switch(node.type){
        case 'Program':
            return node.body.map(codegenerator).join('\n')

        case 'ExpressionStatement':
            return(codegenerator(node.expression))+;


        case 'CallExpression`: return (
        codeGenerator(node.callee) +
                '(' +
                node.arguments.map(codeGenerator)
                    .join(', ') +
                ')'
        case 'Identifier':
            return node.name;

        case 'NumberLiteral':
            return node.value;

        case 'StringLiteral':
            return '"' + node.value + '"';

        default:
            throw new TypeError(node.type);
    }
}
    }
}
module.exports = { codegenerator };
