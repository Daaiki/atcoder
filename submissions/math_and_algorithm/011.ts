import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  const primes = makePrime(N)

  console.log(primes.join(' '))
}

const makePrime = (n: number) => {
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

main(readFileSync('/dev/stdin', 'utf-8'))