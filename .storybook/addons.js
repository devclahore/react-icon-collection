import "@storybook/addon-knobs/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-storysource/register";
import "@storybook/addon-notes/register";
import "@storybook/addon-viewport/register";
import "@storybook/addon-backgrounds/register";
import "@storybook/addon-a11y/register";
import "@storybook/addon-links/register";
// import "storybook-readme/register";
import registerWithPanelTitle from "storybook-readme/registerWithPanelTitle";

window.STORYBOOK_GA_ID = "UA-145839845-1";

registerWithPanelTitle("Docs");
