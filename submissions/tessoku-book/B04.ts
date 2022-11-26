import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = arg.trim()

  console.log(parseInt(N, 2))
}

main(readFileSync('/dev/stdin', 'utf-8'))