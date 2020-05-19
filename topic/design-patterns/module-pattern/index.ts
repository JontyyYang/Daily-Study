interface modulePatternReturnType {
  name:string,
  publicFunction:()=>void,
  publicToPrivateFunction:()=>void,
}

const modulePattern = function (): modulePatternReturnType {
  const name = "模块模式";

  function privateFunction() {
    console.log("私有函数", name);
  }

  function publicFunction() {
    console.log("共有函数", name);
  }

  function publicToPrivateFunction() {
    console.log("共有模式调用私有模式", name);
    privateFunction();
  }
  return {
    name: name,
    publicFunction,
    publicToPrivateFunction,
  };
};

const moduleExample = modulePattern()
console.log(moduleExample.name);
moduleExample.publicFunction()
moduleExample.publicToPrivateFunction()