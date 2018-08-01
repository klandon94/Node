var my_module = require('./my_module')(); // extra invocation parentheses -- doesn't work for some reason
console.log(my_module);
my_module.greet();
my_module.add(5,6);