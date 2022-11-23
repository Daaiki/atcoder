import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, X], P] = args.map(line => line.split(' ').map(x => +x))

  const ans = P.findIndex(x => x === X)
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))