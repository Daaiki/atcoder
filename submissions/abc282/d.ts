import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, M], ...uv] = args.map(line => line.split(' ').map(x => +x))


}

main(readFileSync('/dev/stdin', 'utf-8'))