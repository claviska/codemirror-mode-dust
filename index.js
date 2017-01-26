// CodeMirror, copyright (c) by Marijn Haverbeke, Levi Lewis and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';
import 'codemirror/addon/mode/multiplex';

CodeMirror.defineSimpleMode("dust-tags", {
  start: [
    { regex: /\{!/, push: "comment", token: "comment" },
    { regex: /\{/, push: "dust", token: "tag" }
  ],
  dust: [
    { regex: /\}/, pop: true, token: "tag" },

    // Double and single quotes
    { regex: /"(?:[^\\"]|\\.)*"?/, token: "string" },
    { regex: /'(?:[^\\']|\\.)*'?/, token: "string" },

    // Dust keywords
    { regex: /[#\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[<\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[>\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[+\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[?\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[@\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[:\/]([A-Za-z_]\w*)/, token: "keyword" },
    { regex: /[\^\/]([A-Za-z_]\w*)/, token: "keyword" },

    // Numeral
    { regex: /\d+/i, token: "number" },

    // Atoms like = and .
    { regex: /=|~|@|true|false|>|<|:|\||\//, token: "atom" },

    // Paths
    { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: "variable-2" }
  ],
  comment: [
    { regex: /\}/, pop: true, token: "comment" },
    { regex: /./, token: "comment" }
  ]
});

CodeMirror.defineMode("dust", function(config, parserConfig) {
  var dust = CodeMirror.getMode(config, "dust-tags");
  if (!parserConfig || !parserConfig.base) return dust;
  return CodeMirror.multiplexingMode(
    CodeMirror.getMode(config, parserConfig.base),
    {open: "{", close: "}", mode: dust, parseDelimiters: true}
  );
});

CodeMirror.defineMIME("text/x-dust-template", "dust");
