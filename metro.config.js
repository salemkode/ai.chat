const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro"); // <-- add this import

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// your metro modifications
module.exports = withUniwindConfig(config, {
    cssEntryFile: "./src/global.css", // <- path to global.css file
    dtsFile: "./src/uniwind-types.d.ts", // path where we gonna auto-generate typings
});
