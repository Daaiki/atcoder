import { readFileSync } from 'fs'

const main = (arg: string) => {
  const A = arg.trim().split(' ').map(x => +x)

  const sum = A.reduce((sum, x) => sum += x)

  console.log(sum)
}

main(readFileSync('/dev/stdin', 'utf-8'))