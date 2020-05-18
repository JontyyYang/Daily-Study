interface argsType {
  name: string,
    age ? : number,
}

interface returntype {
  totalMessage: string,
  runDemo: () => number

}

function createFactoryDemo(args: argsType): returntype {
  var obj = {
    totalMessage: args.name + (args.age ?? "demo"),
    runDemo: () => {
      return 1;
    },
  };
  return obj
}

const factoryDemo1 = createFactoryDemo({
  name: 'jontyy',
})

const factoryDemo2 = createFactoryDemo({
  name: "jinda",
  age: 18
});

console.log(factoryDemo1);
console.log(factoryDemo2);
console.log(factoryDemo1.runDemo())


export {}