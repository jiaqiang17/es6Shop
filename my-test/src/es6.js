var babel = require('babel-core');

// 字符串转码
babel.transform("code();", options);
// => {code, map, ast}

// 文件转码(异步)
babel.transformFile('filename.js', options, function (err, result) {
    result;
});

// 文件转码(同步)
babel.transformFile('filename.js', options);
// => { code, map, ast }

// Babel AST转码
babel.transformFromAst(ast, code, options);
// => { code, map, ast }
