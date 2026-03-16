export const CLAUDE_MODEL = 'claude-sonnet-4-6';

/**
 * JSON 格式要求，嵌入 system prompt 中约束 Claude 输出结构
 */
export const JSON_FORMAT_INSTRUCTION = `

请严格按照以下 JSON 格式返回结果，不要包含任何额外文字，只返回纯 JSON：
{
  "names": [
    {
      "fullName": "完整姓名",
      "givenName": "名（不含姓）",
      "pinyin": "全名拼音",
      "summary": "简要含义（15字以内）",
      "tags": ["标签1", "标签2"],
      "characters": [
        {
          "char": "单个汉字",
          "pinyin": "拼音",
          "strokes": 笔画数,
          "fiveElements": "五行属性",
          "meaning": "字义解释"
        }
      ],
      "overallMeaning": "整体寓意（100字左右）",
      "poetryReference": "诗词典故出处",
      "namingReason": "起名理由（200字左右）"
    }
  ]
}`;
