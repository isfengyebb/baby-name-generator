/**
 * 将 API 返回的原始数据转换为组件可用结构
 * 补全缺失字段，确保数据完整性
 */
export function transformNameList(rawData) {
  if (!rawData || !Array.isArray(rawData.names)) {
    return [];
  }

  return rawData.names.map((item, index) => ({
    index,
    fullName: item.fullName || '',
    givenName: item.givenName || '',
    pinyin: item.pinyin || '',
    summary: item.summary || '',
    tags: Array.isArray(item.tags) ? item.tags : [],
    characters: transformCharacters(item.characters),
    overallMeaning: item.overallMeaning || '',
    poetryReference: item.poetryReference || '',
    namingReason: item.namingReason || '',
  }));
}

/**
 * 转换逐字解析数据
 */
function transformCharacters(characters) {
  if (!Array.isArray(characters)) {
    return [];
  }

  return characters.map((ch) => ({
    char: ch.char || '',
    pinyin: ch.pinyin || '',
    strokes: ch.strokes || 0,
    fiveElements: ch.fiveElements || '未知',
    meaning: ch.meaning || '',
  }));
}

/**
 * 从已转换的名字列表中获取指定索引的名字详情
 */
export function getNameByIndex(nameList, index) {
  const idx = Number(index);
  if (isNaN(idx) || idx < 0 || idx >= nameList.length) {
    return null;
  }
  return nameList[idx];
}
