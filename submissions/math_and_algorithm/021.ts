import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [n, r] = arg.trim().split(' ').map(x => +x)
  
  console.log(combNum(n, r))
}

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

main(readFileSync('/dev/stdin', 'utf-8'))
