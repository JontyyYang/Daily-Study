interface jontyyType {
  name: string;
}

interface jindaType {
  name: string;
}

const jontyy = (function (this: jontyyType, name: string): void {
  this.name = name;
} as any) as {
  new (name: string): void;
};

const jinda = (function (this: jindaType, name: string): void {
  this.name = name;
} as any) as {
  new (name: string): void;
};

const createDemo = (type: string) => {
  switch (type) {
    case 'jontyy':
      return new jontyy('jontyy');
      break;
    case 'jinda': {
      return new jinda('jinda');
    }
  }
};

const jindaTest = createDemo('jinda');
const jontyyTest = createDemo('jontyy');

console.log(jindaTest);
console.log(jontyyTest);

export {};
