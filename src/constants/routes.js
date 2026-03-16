export const ROUTES = {
  HOME: '/',
  RESULT: '/result',
  DETAIL: '/detail/:index',
};

/**
 * 生成详情页路径
 */
export function getDetailPath(index) {
  return `/detail/${index}`;
}
