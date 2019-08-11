const fs = require("fs");
const path = require("path");

const generate = (key, iconListForStory) => {
  const iconDir = `./src/icons/${key}`;
  const iconIndexFile = `${iconDir}.tsx`;
  const relativeIconDir = `../../${key}`;

  let iconIndexOutput = `/**
 * Generated by scripts/generate-icons.js.
 * DO NOT EDIT!
 */

`;

  let iconListOutput = `/**
 * Generated by scripts/generate-icons.js.
 * DO NOT EDIT!
 */

import * as Icons from '${relativeIconDir}';

export const ICON_LIST = [
`;

  fs.readdirSync(iconDir).forEach(fileName => {
    const baseName = path.basename(fileName, ".tsx");
    const iconName = `Icon${baseName}`;
    iconIndexOutput += `export { default as ${iconName} }
      from './${key}/${baseName}';
`;
    iconListOutput += `  { icon: Icons.${iconName}, name: '${iconName}' },
`;
  });

  iconListOutput += "];";

  fs.writeFileSync(iconIndexFile, iconIndexOutput);
  fs.writeFileSync(iconListForStory, iconListOutput);
};
generate("green-energy-color", "./src/icons/__stories__/components/green-energy-color-list.ts");

generate("helmet-grey", "./src/icons/__stories__/components/helmet-grey-list.ts");

generate("home-grey", "./src/icons/__stories__/components/home-grey-list.ts");
generate("home-color", "./src/icons/__stories__/components/home-color-list.ts");

generate("kitchen-grey", "./src/icons/__stories__/components/kitchen-grey-list.ts");
generate("kitchen-color", "./src/icons/__stories__/components/kitchen-color-list.ts");

generate("knife-grey", "./src/icons/__stories__/components/knife-grey-list.ts");
generate("knife-color", "./src/icons/__stories__/components/knife-color-list.ts");

generate("law-grey", "./src/icons/__stories__/components/law-grey-list.ts");
generate("law-color", "./src/icons/__stories__/components/law-color-list.ts");

generate("leaf-grey", "./src/icons/__stories__/components/leaf-grey-list.ts");
generate("leaf-color", "./src/icons/__stories__/components/leaf-color-list.ts");

generate("lumberjack-grey", "./src/icons/__stories__/components/lumberjack-grey-list.ts");
generate("lumberjack-color", "./src/icons/__stories__/components/lumberjack-color-list.ts");

generate("mobile-ui-grey", "./src/icons/__stories__/components/mobile-ui-grey-list.ts");

generate("music-grey", "./src/icons/__stories__/components/music-grey-list.ts");
generate("music-color", "./src/icons/__stories__/components/music-color-list.ts");

generate("security-grey", "./src/icons/__stories__/components/security-grey-list.ts");
generate("security-color", "./src/icons/__stories__/components/security-color-list.ts");

generate("shopping-grey", "./src/icons/__stories__/components/shopping-grey-list.ts");
generate("shopping-color", "./src/icons/__stories__/components/shopping-color-list.ts");

generate("skull-grey", "./src/icons/__stories__/components/skull-grey-list.ts");
generate("skull-color", "./src/icons/__stories__/components/skull-color-list.ts");

generate("space-grey", "./src/icons/__stories__/components/space-grey-list.ts");
generate("space-color", "./src/icons/__stories__/components/space-color-list.ts");

generate("spring-grey", "./src/icons/__stories__/components/spring-grey-list.ts");
generate("spring-color", "./src/icons/__stories__/components/spring-color-list.ts");

generate("sweet-17-grey", "./src/icons/__stories__/components/sweet-17-grey-list.ts");
generate("sweet-17-color", "./src/icons/__stories__/components/sweet-17-color-list.ts");

generate("time-grey", "./src/icons/__stories__/components/time-grey-list.ts");
generate("time-color", "./src/icons/__stories__/components/time-color-list.ts");

generate("travel-grey", "./src/icons/__stories__/components/travel-grey-list.ts");
generate("travel-color", "./src/icons/__stories__/components/travel-color-list.ts");

generate("valentine-grey", "./src/icons/__stories__/components/valentine-grey-list.ts");
generate("valentine-color", "./src/icons/__stories__/components/valentine-color-list.ts");

generate("virtual-reality-grey", "./src/icons/__stories__/components/virtual-reality-grey-list.ts");
generate("virtual-reality-color", "./src/icons/__stories__/components/virtual-reality-color-list.ts");

generate("zoo-grey", "./src/icons/__stories__/components/zoo-grey-list.ts");
generate("zoo-color", "./src/icons/__stories__/components/zoo-color-list.ts");
