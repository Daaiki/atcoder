import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...X] = args.flatMap(line => line.split(' ').map(x => +x))

  const P = Math.round(X.reduce((sum, x) => sum += x) / N)

  let ans = 0
  for (let i = 0; i < N; i++) {
    ans += Math.pow((X[i] - P), 2)
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))