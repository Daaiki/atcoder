import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [A, B, C, D, E, F] = arg.trim().split(' ').map(x => BigInt(x))

  const ans = ((A * B * C) - (D * E * F)) % 998244353n
  console.log(String(ans))
}

main(readFileSync('/dev/stdin', 'utf-8'))