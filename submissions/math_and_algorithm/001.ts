import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  console.log(5 + N)
}

main(readFileSync('/dev/stdin', 'utf-8'))