/**
 * 创建一个函数，当调用次数大于等于n将触发回调
 * @param n 调用次数
 * @param callback 回调
 * @returns 返回新函数
 * @example
 *

  const arr = ['1', '2'];

  const fn = executeAfter(function() {
    console.log('done');
  }, arr.length)

  forEach(arr, function() {
    fn()
  })

 */
declare function executeAfter(callback: (...args: any) => any, n?: number): (...args: any) => any;
export default executeAfter;
