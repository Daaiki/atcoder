import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, X], A] = args.map(line => line.split(' ').map(x => +x))

  if (A.findIndex(x => x === X) !== -1) console.log('Yes')
  console.log('No')
}

main(readFileSync('/dev/stdin', 'utf-8'))