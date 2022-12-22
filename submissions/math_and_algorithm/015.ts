import { readFileSync } from 'fs'
import { gcd } from 'tstl'

const main = (arg: string) => {
  const [A, B] = arg.trim().split(' ').map(x => +x)

  console.log(gcd(A, B))
}

main(readFileSync('/dev/stdin', 'utf-8'))