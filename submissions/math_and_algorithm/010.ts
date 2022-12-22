import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  console.log(factorial(N))
}

const factorial = (n: number) => {
  let ret = 1
  for (let i = 2; i <= n; i++) {
    ret *= i
  }
  return ret
}

main(readFileSync('/dev/stdin', 'utf-8'))