class SingleTon {
  private static instance: SingleTon;

  private age = 0;

  public static getInstance() {
    if (!SingleTon.instance) {
      console.log('jontyy');
      SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance;
  }
}

const instance1 = SingleTon.getInstance();
const instance2 = SingleTon.getInstance();
console.log(instance1, instance2, instance2 === instance1);
export {};
