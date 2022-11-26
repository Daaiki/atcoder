import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, K] = arg.trim().split(' ').map(x => +x)

  const ans = K * Math.pow(K-1, N-1)
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))