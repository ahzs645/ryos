/**
 * Frontend configuration loader for ryOS
 * Reads from Vite environment variables (VITE_ prefix)
 */

/**
 * Get creator/branding configuration
 */
export function getCreatorConfig() {
  return {
    name: import.meta.env.VITE_CREATOR_NAME || "Ryo Lu",
    url: import.meta.env.VITE_CREATOR_URL || "https://ryo.lu",
    email: import.meta.env.VITE_CREATOR_EMAIL || "me@ryo.lu",
    github: import.meta.env.VITE_CREATOR_GITHUB || "https://github.com/ryokun6",
    copyrightStartYear: import.meta.env.VITE_COPYRIGHT_START_YEAR || "1992",
  };
}

/**
 * Get AI assistant configuration
 */
export function getAIConfig() {
  return {
    name: import.meta.env.VITE_AI_ASSISTANT_NAME || "Ryo",
    handle: import.meta.env.VITE_AI_ASSISTANT_HANDLE || "ryo",
  };
}

/**
 * Get OS branding configuration
 */
export function getOSConfig() {
  return {
    name: import.meta.env.VITE_OS_NAME || "ryOS",
    url: import.meta.env.VITE_OS_URL || "https://os.ryo.lu",
    githubUrl:
      import.meta.env.VITE_OS_GITHUB_URL || "https://github.com/ryokun6/ryos",
  };
}

/**
 * Get social links configuration
 */
export function getSocialConfig() {
  return {
    twitter: import.meta.env.VITE_TWITTER_URL || "https://x.com/ryolu_",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "",
  };
}

/**
 * Get browser/Internet Explorer configuration
 */
export function getBrowserConfig() {
  return {
    defaultUrl: import.meta.env.VITE_BROWSER_DEFAULT_URL || "https://apple.com",
    defaultYear: import.meta.env.VITE_BROWSER_DEFAULT_YEAR || "2001",
    passthroughDomains: (
      import.meta.env.VITE_PASSTHROUGH_DOMAINS || "os.ryo.lu,ryo.lu"
    ).split(","),
    favoritePersonal: {
      title: import.meta.env.VITE_FAVORITE_PERSONAL_TITLE || "Ryo",
      url: import.meta.env.VITE_FAVORITE_PERSONAL_URL || "https://ryo.lu",
    },
  };
}

/**
 * Get default settings
 */
export function getDefaultSettings() {
  return {
    theme: import.meta.env.VITE_DEFAULT_THEME || "macosx",
    language: import.meta.env.VITE_DEFAULT_LANGUAGE || "en",
  };
}

/**
 * Get all configuration as a single object
 */
export function getAllConfig() {
  return {
    creator: getCreatorConfig(),
    ai: getAIConfig(),
    os: getOSConfig(),
    social: getSocialConfig(),
    browser: getBrowserConfig(),
    defaults: getDefaultSettings(),
  };
}

// Export config singleton for convenience
export const config = getAllConfig();
