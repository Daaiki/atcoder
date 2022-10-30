import { readFileSync } from 'fs'

var memo: number[] = [1]

const main = (arg: string) => {
  const N = +arg.trim()
  console.log(fun(N))
}

const fun = (N: number): number => {
  if (N === 0) return 1
  if (memo[N]) return memo[N]
  memo[N] = (fun(Math.floor(N / 2)) + fun(Math.floor(N / 3)))
  return memo[N]
}

main(readFileSync('/dev/stdin', 'utf-8'))
