import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { useThemeStore } from "./stores/useThemeStore";
import { useLanguageStore } from "./stores/useLanguageStore";
import { preloadFileSystemData } from "./stores/useFilesStore";
import { preloadIpodData } from "./stores/useIpodStore";
import { useCvStore } from "./stores/useCvStore";
import { initPrefetch } from "./utils/prefetch";
import "./lib/i18n";
import { primeReactResources } from "./lib/reactResources";
import { assetUrl, BASE_URL } from "./lib/utils";

// Debug: Log the base URL to help diagnose GitHub Pages deployment issues
console.log("[ryOS] BASE_URL:", BASE_URL, "| Full assetUrl test:", assetUrl("/test"));

// Prime React 19 resource hints before anything else runs
primeReactResources();

// ============================================================================
// FONT LOADING - Load fonts.css with correct base URL for GitHub Pages
// ============================================================================
const fontsLink = document.createElement("link");
fontsLink.rel = "stylesheet";
fontsLink.href = assetUrl("/fonts/fonts.css");
document.head.appendChild(fontsLink);

// ============================================================================
// CSS CUSTOM PROPERTIES - Set asset URLs with correct base path for GitHub Pages
// ============================================================================
const root = document.documentElement;
root.style.setProperty("--asset-brushed-metal", `url("${assetUrl("/assets/brushed-metal.jpg")}")`);
root.style.setProperty("--asset-button", `url("${assetUrl("/assets/button.svg")}")`);
root.style.setProperty("--asset-button-default", `url("${assetUrl("/assets/button-default.svg")}")`);
root.style.setProperty("--asset-videos-switch", `url("${assetUrl("/assets/videos/switch.png")}")`);
root.style.setProperty("--asset-pattern-7", `url("${assetUrl("/patterns/Property 1=7.svg")}")`);
root.style.setProperty("--asset-splash-macos", `url("${assetUrl("/assets/splash/macos.svg")}")`);
root.style.setProperty("--asset-videos-prev", `url("${assetUrl("/assets/videos/prev.png")}")`);
root.style.setProperty("--asset-videos-next", `url("${assetUrl("/assets/videos/next.png")}")`);
root.style.setProperty("--asset-wallpaper-default", `url("${assetUrl("/wallpapers/photos/aqua/water.jpg")}")`);
root.style.setProperty("--asset-icon-mac", `url("${assetUrl("/icons/default/mac.png")}")`);
root.style.setProperty("--asset-icon-apple", `url("${assetUrl("/icons/default/apple.png")}")`);
root.style.setProperty("--asset-icon-ie", `url("${assetUrl("/icons/default/ie.png")}")`);
root.style.setProperty("--asset-icon-trash-empty", `url("${assetUrl("/icons/default/trash-empty.png")}")`);
root.style.setProperty("--asset-icon-ipod", `url("${assetUrl("/icons/default/ipod.png")}")`);
root.style.setProperty("--asset-icon-question", `url("${assetUrl("/icons/default/question.png")}")`);
root.style.setProperty("--asset-icon-applications", `url("${assetUrl("/icons/default/applications.png")}")`);
root.style.setProperty("--asset-icon-disk", `url("${assetUrl("/icons/default/disk.png")}")`);
// Set the base URL as a string for JS components that need to construct paths
root.style.setProperty("--base-url", `"${import.meta.env.BASE_URL}"`);

// ============================================================================
// CHUNK LOAD ERROR HANDLING - Reload when old assets 404 after deployment
// ============================================================================
window.addEventListener("vite:preloadError", (event) => {
  console.warn("[ryOS] Chunk load failed, reloading for fresh assets...", event);
  window.location.reload();
});

// ============================================================================
// PRELOADING - Start fetching JSON data early (non-blocking)
// These run in parallel before React even mounts
// ============================================================================
preloadFileSystemData();
preloadIpodData();
// Load CV data for dynamic OS branding (if VITE_USE_CV_FOR_BRANDING is true)
if (import.meta.env.VITE_USE_CV_FOR_BRANDING === "true") {
  useCvStore.getState().loadCV();
}

// ============================================================================
// PREFETCHING - Cache icons, sounds, and app components after boot
// This runs during idle time to populate the service worker cache
// ============================================================================
initPrefetch();

// Hydrate theme and language from localStorage before rendering
useThemeStore.getState().hydrate();
useLanguageStore.getState().hydrate();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
