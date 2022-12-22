import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  console.log(A.sort((a, b) => a - b).join(' '))
}

main(readFileSync('/dev/stdin', 'utf-8'))