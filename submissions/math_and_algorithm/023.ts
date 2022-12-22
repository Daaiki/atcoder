import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], B, R] = args.map(line => line.split(' ').map(x => +x))

  let ans = (B.reduce((sum, x) => sum+=x)/N) + (R.reduce((sum, x) => sum+=x)/N)
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))