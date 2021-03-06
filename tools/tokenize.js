const tokenize = (value) => {
  const tokens = [];

  let string = '';
  let inLink = false;
  let inItalic = false;
  let inBold = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (/\[/.test(char) && /\[/.test(value[i + 1])) {
      i += 1;
      string = '[[';
      inLink = true;
      continue;
    }

    if (/\*/.test(char) && /\*/.test(value[i + 1])) {
      inBold = !inBold;
    }

    if (/_/.test(char)) {
      inItalic = !inItalic;
    }

    if (/]/.test(char) && /]/.test(value[i + 1])) {
      i += 1;
      string += ']]';
      inLink = false;
      tokens.push(string.replace(/[\n\r]+/, ''));
      string = '';
      continue;
    }

    if (/\s/.test(char) && !(inLink || inItalic || inBold)) {
      tokens.push(string);
      string = '';
      continue;
    }

    string += char;
  }

  if (string && tokens.slice(-1)[0] !== string) {
    tokens.push(string);
  }

  return tokens;
};

export default tokenize;
