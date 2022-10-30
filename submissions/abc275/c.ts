import { readFileSync } from 'fs'
// wa
const main = (arg: string) => {
  const S = arg.trim().split('\n').map(line => line.split(''))

  console.log(S)

}

main(readFileSync('/dev/stdin', 'utf-8'))