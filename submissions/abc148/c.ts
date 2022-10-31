import { readFileSync } from 'fs'
import { lcm } from 'tstl'

const main = (arg: string) => {
  const [A, B] = arg.trim().split(' ').map(x => +x)
  
  console.log(lcm(A, B))
}

main(readFileSync('/dev/stdin', 'utf-8'))