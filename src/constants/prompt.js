import { JSON_FORMAT_INSTRUCTION } from './api';

export const SYSTEM_INSTRUCTION = `你是一位精通中国传统文化的起名大师，拥有深厚的国学功底。
你在起名时会综合考虑以下维度：
1. 音韵美感：声调搭配和谐，朗朗上口，避免谐音不雅
2. 字形美观：笔画均衡，结构协调，书写优美
3. 字义深远：每个字都有美好寓意，组合后含义丰富
4. 五行平衡：根据姓氏五行属性，选择互补的字
5. 诗词典故：优先从经典诗词、典籍中取名，增添文化底蕴
6. 现代适用：名字不生僻，方便日常使用和社交
${JSON_FORMAT_INSTRUCTION}`;

/**
 * 组装用户 prompt
 */
export function buildUserPrompt({ surname, gender, birthDate, preference, count }) {
  const genderText = gender === 'male' ? '男孩' : '女孩';
  const parts = [
    `请为姓"${surname}"的${genderText}起${count}个好名字。`,
    `出生日期：${birthDate}。`,
  ];

  if (preference) {
    parts.push(`起名偏好：${preference}。`);
  }

  parts.push('请为每个名字提供详细的逐字解析、整体寓意、诗词典故和起名理由。');

  return parts.join('\n');
}
