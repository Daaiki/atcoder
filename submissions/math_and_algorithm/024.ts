import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], ...PQ] = args.map(line => line.split(' ').map(x => +x))

  let ans = 0
  for (let i = 0; i < N; i++) {
    const [P, Q] = PQ[i]
    ans += Q / P
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))