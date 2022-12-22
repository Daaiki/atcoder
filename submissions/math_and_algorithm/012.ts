import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  console.log(isPrime(N) ? 'Yes' : 'No')
}

const isPrime = (n: number) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

main(readFileSync('/dev/stdin', 'utf-8'))