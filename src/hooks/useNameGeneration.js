import { useState, useCallback } from 'react';
import { generateNames } from '../services/nameGeneratorService';
import { transformNameList } from '../models/nameModel';

/**
 * 起名生成 Hook
 * 管理生成流程的 loading/error/data 状态
 */
export function useNameGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nameList, setNameList] = useState([]);

  const generate = useCallback(async (params) => {
    setLoading(true);
    setError(null);
    setNameList([]);

    try {
      const rawData = await generateNames(params);
      const transformed = transformNameList(rawData);

      if (transformed.length === 0) {
        throw new Error('No valid names returned from API.');
      }

      setNameList(transformed);
      return transformed;
    } catch (err) {
      const message = err.message || 'Unknown error occurred.';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setNameList([]);
  }, []);

  // 直接设置列表数据（用于从缓存恢复）
  const setList = useCallback((data) => {
    setNameList(data);
  }, []);

  return { loading, error, nameList, generate, reset, setList };
}
