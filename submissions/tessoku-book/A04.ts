import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  const ans = ('0000000000' + N.toString(2)).slice(-10)
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))