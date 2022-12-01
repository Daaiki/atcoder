import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  const memo: bigint[] = [2n, 1n]

  const funcLucas = (n: number): bigint => {
    if (!memo[n]) memo[n] = funcLucas(n-1) + funcLucas(n-2)
    return BigInt(memo[n])
  }

  console.log(String(funcLucas(N)))
}


main(readFileSync('/dev/stdin', 'utf-8'))