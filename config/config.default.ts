import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from "path";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538286151767_570';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    view: {
      mapping: {
        ".ejs": "ejs",
      }
    },
    ejs: {
      root: path.join(appInfo.baseDir, "app/tpl"),
    }
  };
};
