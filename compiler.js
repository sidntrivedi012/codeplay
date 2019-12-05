// input->tokenizer = tokens
// tokens -> parser = ast
// ast-> transformer = newast
// newAST->codegenerator=output
const tk = require("./tokenizer");
const prs = require("./parser");
function compiler() {
  let input = "(add 2 (subtract 4 2))";
  let tokens = tk.tokenizer(input);
  // console.log(tokens);
  let ast = prs.parser(tokens);
  console.log(ast);
}
compiler();
