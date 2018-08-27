let code = `

let func = ()=>{};

let i = 10000;

for(a=0 ; a <= i; a++){
    func();
}

`;

console.time('normal');
eval(code);
console.timeEnd('normal');

let vm = require('vm');
let context = vm.createContext();
let script = new vm.Script(code);

console.time('vm');
script.runInContext(context);
console.timeEnd('vm');