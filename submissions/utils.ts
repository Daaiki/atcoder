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
    if (n % i === 0) return false
  }
  return true
}

/**
 * n以下の素数を全て見つけ出す: O(nloglogn)
 * エラトステネスの篩
 * @param n - 整数n
 * @return - nまでの素数を列挙
 */
export const makePrime = (n: number) => {
  const primes = new Array(n + 1).fill(true)
  const ret: number[] = []

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      ret.push(i)
      for (let j = i; j*i <= n+1; j++) {
        primes[j*i] = false;
      }
    }
  }

  return ret
}

/**
 * nを素因数分解する: O(√n)前後
 * @param n - 整数n
 * @return - nの素因数分解
 */
export const primeFactor = (n: number) => {
  let ret: Pair<number, number>[] = []

  for (let i = 2; i * i <= n; i++) {
    if (n % i !== 0) continue
    let ex = 0
    while (n % i === 0) {
      ex++
      n /= i
    }
    ret.push(make_pair(i, ex))
  }
  if (n !== 1) ret.push(make_pair(n, 1))

  return ret
}

/**
 * 累積和の配列を返す
 * @param n, array
 * @return - arrayの累積和
 */
export const accumulate = (n: number, array: number[]) => {
  const ret: number[] = [0]
  for (let i = 0; i < n; i++) {
    ret[i+1] = ret[i] + array[i]
  }

  return ret
}

/**
 * 二次元累積和を求める
 * @param matrix 
 * @return - matrixの累積和
 */
export const accumulates = (row: number, column: number, matrix: number[][]): number[][] => {
  const sum = [...Array(row + 1)].map(() => Array(column + 1).fill(0))

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      sum[i][j] = sum[i][j - 1] + sum[i - 1][j] - sum[i-1][j-1] + matrix[i - 1][j - 1]
    }
  }

  return sum
}

/**
 * 行列を転置する関数
 * @param a - 二次元配列
 * @return - 転置された二次元配列
 */
export const transpose = (a: string[][] | number[][]) => a[0].map((_, c) => a.map(r => r[c]))

/**
 * 組み合わせを列挙する関数
 * @param arr - 配列
 * @param k - 組み合わせの数
 * @return - 組み合わせを列挙した二次元配列
 */
const combination = <T>(arr: T[], k: number): T[][] => {
  let ret = []
  if (arr.length < k) {
    return []
  }
  if (k === 1) {
    for (let i = 0; i < arr.length; i++) {
      ret[i] = [arr[i]]
    }
  } else {
    for (let i = 0; i < arr.length - k + 1; i++) {
      let row = combination(arr.slice(i + 1), k - 1)
      for (let j = 0; j < row.length; j++) {
        ret.push([arr[i]].concat(row[j]))
      }
    }
  }
  return ret
}

// 組み合わせの総数
const combNum = (n: number, k: number) => {
  if (n < k) {
    return 0
  }
  const result = factorial(n) / (factorial(k) * factorial(n-k))
  return result 
}

// 階乗
const factorial = (n: number) => {
  let ret = 1
  for (let i = 2; i <= n; i++) {
    ret *= i
  }
  return ret
}

/**
 * グラフのクラス
 */
class Graph<T extends string | number> {
  adjacencyList: {
    [key in string | number]: T[]
  }

  constructor() {
    this.adjacencyList = {}
  }
  
  // nodeを追加する
  addVertex(vertex: T) {
    this.adjacencyList[vertex] = []
  }

  // エッジを追加する, 有向の場合は片方追加する
  addEdge(v1: T, v2: T) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  // エッジを削除する, 有向の場合は片方追加する
  removeEdge(vertex1: T, vertex2: T) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )
  }

  //ノードを削除
  removeVertex(vertex: T) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      if (adjacentVertex) this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  dfs(start: T) {
    //ノードを格納するスタック
    const stack = [start];
    //訪れた順番を格納
    const result: T[] = []
    //訪れたフラグ
    const visited: {[key in string | number]: boolean} = {}
    //訪問済みフラグを立てる
    visited[start] = true;
 
    while (stack.length) {
      // 現在のノード
      let currentVertex = stack.pop()

      if (currentVertex) {
        result.push(currentVertex)
        this.adjacencyList[currentVertex].forEach((neighbor: T) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor)
          }
        })
      }
    }
    return result
  }
}