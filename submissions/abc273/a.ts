import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  
  const ans = (n: number): number => {
    if (n === 0) return 1
    return n * ans(n - 1)
  }

  console.log(ans(N))
} 

main(readFileSync('/dev/stdin', 'utf-8'))