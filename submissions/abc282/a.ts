import { readFileSync } from 'fs'

const main = (arg: string) => {
  const K = +arg.trim()

  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const ans: string[]  = []
  for (let i = 0; i < K; i++) ans.push(a[i])

  console.log(ans.join(''))
}

main(readFileSync('/dev/stdin', 'utf-8'))