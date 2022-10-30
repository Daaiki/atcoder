import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...H] = args.flatMap(line => line.split(' ').map(x => +x))

  const ans = H.indexOf(Math.max(...H))
  console.log(ans + 1)
}

main(readFileSync('/dev/stdin', 'utf-8'))