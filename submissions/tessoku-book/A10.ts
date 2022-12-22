import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, K]] = args.map(line => line.split(' ').map(x => +x))
}

main(readFileSync('/dev/stdin', 'utf-8'))