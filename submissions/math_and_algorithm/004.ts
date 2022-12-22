import { readFileSync } from 'fs'

const main = (arg: string) => {
  const A = arg.trim().split(' ').map(x => +x)

  console.log(A[0] * A[1] * A[2])
}

main(readFileSync('/dev/stdin', 'utf-8'))