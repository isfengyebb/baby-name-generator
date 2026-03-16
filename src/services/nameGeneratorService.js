import { getClaudeClient } from './claudeClient';
import { CLAUDE_MODEL, SYSTEM_INSTRUCTION, buildUserPrompt } from '../constants';

// 最大输出 token 数
const MAX_TOKENS = 4096;

/**
 * 调用 Claude API 生成宝宝名字
 * @param {Object} params - 起名参数
 * @param {string} params.surname - 姓氏
 * @param {string} params.gender - 性别 (male/female)
 * @param {string} params.birthDate - 出生日期
 * @param {string} [params.preference] - 偏好描述
 * @param {number} params.count - 生成数量
 * @returns {Promise<Object>} 原始 API 返回的 JSON 数据
 */
export async function generateNames(params) {
  const client = getClaudeClient();
  const userPrompt = buildUserPrompt(params);

  const response = await client.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: MAX_TOKENS,
    system: SYSTEM_INSTRUCTION,
    messages: [
      { role: 'user', content: userPrompt },
    ],
  });

  const rawText = response.content[0].text;
  const json = extractJSON(rawText);
  return JSON.parse(json);
}

/**
 * 从模型返回的文本中提取合法 JSON
 * 处理可能包含 markdown 代码块或前后多余文字的情况
 */
function extractJSON(text) {
  // 移除 markdown 代码块包裹
  const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const cleaned = codeBlockMatch ? codeBlockMatch[1].trim() : text.trim();

  // 尝试直接解析
  try {
    JSON.parse(cleaned);
    return cleaned;
  } catch {
    // 提取第一个 { 到最后一个 } 之间的内容
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      return cleaned.slice(start, end + 1);
    }
    return cleaned;
  }
}
