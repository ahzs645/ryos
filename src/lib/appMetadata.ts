/**
 * Shared app metadata helper
 * Provides consistent creator info across all apps
 */

import { getCreatorConfig, getOSConfig } from "./config";

export interface AppCreator {
  name: string;
  url: string;
}

export interface AppMetadata {
  name: string;
  version: string;
  creator: AppCreator;
  github: string;
  icon: string;
}

/**
 * Get the default creator info from config
 */
export function getDefaultCreator(): AppCreator {
  const config = getCreatorConfig();
  return {
    name: config.name,
    url: config.url,
  };
}

/**
 * Get the default GitHub URL from config
 */
export function getDefaultGithub(): string {
  return getOSConfig().githubUrl;
}

/**
 * Create app metadata with default creator and github from config
 */
export function createAppMetadata(
  name: string,
  icon: string,
  version: string = "1.0.0"
): AppMetadata {
  return {
    name,
    version,
    creator: getDefaultCreator(),
    github: getDefaultGithub(),
    icon,
  };
}
