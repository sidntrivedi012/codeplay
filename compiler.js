// input->tokenizer = tokens
// tokens -> parser = ast
// ast-> transformer = newast
// newAST->codegenerator=output
const tk = require("./tokenizer");
const prs = require("./parser");
const transform = require("./transformer");
const cg = require("./codegen");

function compiler() {
  let input = "(add 2 (subtract 4 2))";
  let tokens = tk.tokenizer(input);
  let ast = prs.parser(tokens);
  let newast = transform.transformer(ast);
  console.log(newast);

  let output = cg.codegenerator(newast);
  // console.log(tokens);
  console.log(output);
}
compiler();
