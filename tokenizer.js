// tokenizer function for lexical analysis

function tokenizer(input) {
  let tokens = [];
  for (i = 0; i < input.length; ) {
    let ch = input[i];
    if (ch == "(") {
      tokens.push({
        type: "paren",
        value: "("
      });
      i++;
      continue;
    }
    if (ch == ")") {
      tokens.push({
        type: "paren",
        value: ")"
      });
      i++;
      continue;
    }
    let space = /\s/;
    if (space.test(ch)) {
      i++;
      continue;
    }
    //tokenizing numbers
    let numregex = /[0-9]/;
    if (numregex.test(ch)) {
      let value = "";
      while (numregex.test(ch)) {
        value += ch;
        ch = input[++i];
      }
      tokens.push({
        type: "number",
        value
      });
      continue;
    }
    //strings
    if (ch == '"') {
      let charvalue = "";
      let ch = input[++i];
      while (ch != '"') {
        charvalue += char;
        ch = input[++i];
      }
      tokens.push({
        type: "string",
        charvalue
      });
      i++;
      continue;
    }

    //functions tokenizer
    let charegex = /[a-z]/i;
    if (charegex.test(ch)) {
      let value = "";
      while (charegex.test(ch)) {
        value += ch;
        ch = input[++i];
      }
      tokens.push({
        type: "name",
        value
      });
    }
  }
  return tokens;
}

module.exports = { tokenizer };
