import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  const args = arg.trim().split('\n')
  const [] = args.map(line => line.split(' ').map(x => +x))
}

main(readFileSync('/dev/stdin', 'utf-8'))