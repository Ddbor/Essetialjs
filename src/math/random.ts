/**
 * 生成一个min-max之间的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 返回一个min-max之间的随机数
 * @example
 * random(1, 5)
 * // => 3
 */
function random(min: number, max: number) {
  // Math.random包含0，不包含1，所以要加1
  // 先生成一个0-1的随机数，再乘以max-min+1，再加上min，就是一个min-max的随机数
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default random
