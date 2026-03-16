import Anthropic from '@anthropic-ai/sdk';

let clientInstance = null;

/**
 * 获取 Claude 客户端单例
 */
export function getClaudeClient() {
  if (clientInstance) {
    return clientInstance;
  }

  const baseURL = import.meta.env.VITE_ANTHROPIC_BASE_URL;
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('Missing VITE_ANTHROPIC_API_KEY environment variable. Please check your .env file.');
  }

  if (!baseURL) {
    throw new Error('Missing VITE_ANTHROPIC_BASE_URL environment variable. Please check your .env file.');
  }

  clientInstance = new Anthropic({
    baseURL,
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  return clientInstance;
}
