import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  console.log(2 * N + 3)
}

main(readFileSync('/dev/stdin', 'utf-8'))