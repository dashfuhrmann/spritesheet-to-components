import { load } from "cheerio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spriteSheetPath = path.join(__dirname, "src/assets/icons/sprite.svg");
const iconsDir = path.join(__dirname, "src/components/Icons");
const indexPath = path.join(iconsDir, "index.ts");

// Read the SVG sprite sheet file
const spriteSheet = fs.readFileSync(spriteSheetPath, "utf8");

// Load the SVG content using cheerio
const $ = load(spriteSheet, { xmlMode: true });

// Extract symbols and generate React components
const symbols = $("symbol").toArray();

symbols.forEach((symbol) => {
  const id = $(symbol).attr("id");
  const viewBox = $(symbol).attr("viewBox");
  const svgContent = $(symbol).html();

  // Convert kebab-case to PascalCase for the component name
  const componentName = id
    .replace(/-./g, (match) => match[1].toUpperCase())
    .replace(/^./, (match) => match.toUpperCase());

  const componentTemplate = `
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ${componentName} = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="${viewBox}"
    {...props}
    dangerouslySetInnerHTML={{ __html: \`${svgContent}\` }}
  />
  )
};

export default ${componentName};
  `;

  // Write the component file to the components directory
  const componentFilePath = path.join(
    __dirname,
    "src/components/Icons",
    `${componentName}.tsx`
  );
  fs.writeFileSync(componentFilePath, componentTemplate, "utf8");
});

// Get all .tsx files in the components directory
const files = fs.readdirSync(iconsDir).filter((file) => file.endsWith(".tsx"));

// Generate export statements
const exports = files
  .map((file) => {
    const name = path.basename(file, ".tsx");
    return `export { default as ${name} } from "./${name}";`;
  })
  .join("\n");

// Write the index.ts file
fs.writeFileSync(indexPath, exports, "utf8");
console.log(`Generated ${indexPath}`);
