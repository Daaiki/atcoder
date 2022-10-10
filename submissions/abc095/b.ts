import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [arg1, ...arg2] = arg.trim().split('\n')
  const [N, X] = arg1.split(' ').map(x => +x)
  const m = arg2.map(x => +x)

  const totalGram = m.reduce((sum, x) => sum + x, 0)
  const minGram = Math.min(...m)

  const ans = Math.floor((X - totalGram) / minGram) + N
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))