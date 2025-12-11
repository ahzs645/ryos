import { getCreatorConfig, getOSConfig, getAIConfig } from "@/lib/config";

const creatorConfig = getCreatorConfig();
const osConfig = getOSConfig();
const aiConfig = getAIConfig();

export const helpItems = [
  {
    icon: "💻",
    title: "Basic Commands",
    description:
      "Use commands like ls, cd, cat, pwd, clear, and touch to navigate and manage files.",
  },
  {
    icon: "🧭",
    title: "Navigation",
    description:
      "Browse the same virtual file system as Finder with familiar Unix commands.",
  },
  {
    icon: "⌨️",
    title: "Command History",
    description:
      "Press ↑ / ↓ arrows to cycle through previous commands and re-run them quickly.",
  },
  {
    icon: "🤖",
    title: "AI Assistant",
    description:
      `Type "${aiConfig.handle} <prompt>" to chat with ${aiConfig.name} AI directly inside the terminal.`,
  },
  {
    icon: "📝",
    title: "File Editing",
    description:
      "Open documents in TextEdit (edit) or Vim-style editor (vim) right from the prompt.",
  },
  {
    icon: "🔊",
    title: "Terminal Sounds",
    description:
      "Distinct sounds for output, errors & AI replies. Toggle in View ▸ Sounds.",
  },
];

export const appMetadata = {
  name: "Terminal",
  version: "1.0",
  creator: {
    name: creatorConfig.name,
    url: creatorConfig.url,
  },
  github: osConfig.githubUrl,
  icon: "/icons/default/terminal.png",
};
