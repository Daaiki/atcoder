import { readFileSync } from 'fs'

const main = (arg: string) => {
  const K = BigInt(arg.trim())

  const ans = K.toString(2).replace(/1/g, '2')

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))