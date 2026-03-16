import { useMemo } from 'react';
import { getNameByIndex } from '../models/nameModel';

/**
 * 名字详情 Hook
 * 从名字列表中根据索引获取详情
 */
export function useNameDetail(nameList, index) {
  const detail = useMemo(() => {
    return getNameByIndex(nameList, index);
  }, [nameList, index]);

  return { detail, notFound: detail === null };
}
