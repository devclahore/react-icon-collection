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
