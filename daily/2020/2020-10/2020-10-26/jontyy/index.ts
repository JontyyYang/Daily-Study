interface itemType {
  text: string;
  isDev?: boolean;
  isLink?: boolean;
  linkUrl?: string;
  isImg?: boolean;
  imgUrl?: string[];
}

interface itemArray {
  dataTime: string;
  version: string;
  changeItem: itemType;
  fixItem: itemType;
  featItem: itemType;
}

interface versionInfo {
  latestVersion: string;
  versionJson: itemArray[];
}

const defaultOption = {
  text: '',
  isDev: false,
  isLink: false,
  isImg: '',
  linkUrl: '',
  imgUrl: [],
};

const filterFix = (item: any) => {
  // 过滤fix的问题，转为固定文案
  // 修复了一些问题，提升了使用体验
};

const filterDev = (item: any) => {
  // 过滤dev的问题
};

const filterImgAndLink = (item: any) => {
  // 过滤img 和url同事存在的问题
};

const convert = (item: itemType) => {
  Object.assign(defaultOption, item);
  return item;
};

export {};
