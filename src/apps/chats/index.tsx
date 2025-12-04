import { BaseApp } from "../base/types";
import { ChatsAppComponent } from "./components/ChatsAppComponent";
import { createAppMetadata } from "@/lib/appMetadata";
import { getAIConfig, getOSConfig } from "@/lib/config";

// Get config for dynamic help items
const aiConfig = getAIConfig();
const osConfig = getOSConfig();
const aiName = aiConfig.name;
const aiHandle = `@${aiConfig.handle}`;

export const helpItems = [
  {
    icon: "💬",
    title: `Chat with ${aiName}`,
    description: `Type your message to chat with ${aiName}, generate code, or get help with ${osConfig.name}.`,
  },
  {
    icon: "📝",
    title: "Create & Edit Files",
    description: `Ask ${aiName} to create HTML applets, edit documents, read files, or search the Applets Store.`,
  },
  {
    icon: "🚀",
    title: "Control Apps",
    description: `Ask ${aiName} to launch or close apps, switch themes, or control iPod playback.`,
  },
  {
    icon: "#️⃣",
    title: "Join Chat Rooms",
    description: `Connect with others in public chat rooms. Mention ${aiHandle} for AI responses.`,
  },
  {
    icon: "🎤",
    title: "Push to Talk",
    description:
      "Hold Space or tap the microphone button to record and send voice messages.",
  },
  {
    icon: "👋",
    title: "Nudge & DJ Mode",
    description: `Send 👋 nudge for context-aware tips. ${aiName} becomes a DJ when music is playing.`,
  },
];

export const appMetadata = createAppMetadata("Chats", "/icons/default/question.png", "1.0");

export const ChatsApp: BaseApp = {
  id: "chats",
  name: "Chats",
  icon: { type: "image", src: appMetadata.icon },
  description: `Chat with ${aiName}, your personal AI assistant`,
  component: ChatsAppComponent,
  helpItems,
  metadata: appMetadata,
};
