import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, X, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  const xExists = A.filter(x => X === x).length > 0

  console.log(xExists ? 'Yes' : 'No')
}

main(readFileSync('/dev/stdin', 'utf-8'))