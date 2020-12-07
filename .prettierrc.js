module.exports = {
  printWidth: 100, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  singleQuote: true, // 使用单引号（默认false）
  semi: true, // 声明结尾使用分号(默认true)
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）,\
  htmlWhitespaceSensitivity: 'ignore', // 解决 包裹文字时候结束标签的结尾尖括号掉到了下一行 的问题
  vueIndentScriptAndStyle: false, // vue文件 script, style首层不缩进
};
