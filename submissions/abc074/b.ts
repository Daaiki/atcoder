import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, K, ...x] = args.flatMap(line => line.split(' ').map(x => +x))

  let ans = 0
  for (let i = 0; i < N; i++) ans += Math.min(x[i]*2, Math.abs(K-x[i])*2)

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))