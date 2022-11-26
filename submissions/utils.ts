import { make_pair } from 'tstl'
import type { Pair } from 'tstl'

/**
 * nの約数を列挙する: O(√n)
 * @param n - 整数n
 * @return 約数が配列になって返る
 */
export const enumDiv = (n: number) => {
  let ret: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      ret.push(i)
      if (i * i !==n) ret.push(n / i)
    }
  }

  return ret
}

/**
 * nが素数かどうか判定する: O(√n)
 * @param n - 整数n
 * @return - nが素数かどうかの真偽値が返る
 */
export const isPrime = (n: number) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * n以下の素数を全て見つけ出す: O(nloglogn)
 * エラトステネスの篩
 * @param n - 整数n
 * @return - nまでの数字が素数か判定したベクトル（i番目がtrueならiは素数）
 */
export const makeIsPrime = (n: number) => {
  let prime: boolean[] = Array(n).fill(false)
  if (n >= 0) prime[0] = false
  if (n >= 1) prime[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (!prime[i]) continue
    for (let j = i * i; j <= n; j += i) {
      prime[j] = false
    }
  }
  return prime
}

/**
 * nを素因数分解する: O(√n)前後
 * @param n - 整数n
 * @return - nの素因数分解
 */
export const primeFactor = (n: number) => {
  let ret: Pair<number, number>[] = []

  for (let i = 2; i * i <= n; i++) {
    if (n % i != 0) continue
    let tmp = 0
    while (n % i == 0) {
      tmp++
      n /= i
    }
    ret.push(make_pair(i, tmp))
  }
  if (n != 1) ret.push(make_pair(n, 1))

  return ret
}

/**
 * 累積和の配列を返す
 * @param array 
 * @return - arrayの累積和
 */
export const accumulate = (array: number[]) => {
  const ret: number[] = [0]
  for (let i = 0; i < array.length; i++) {
    ret[i+1] = ret[i] + array[i]
  }

  return ret
}