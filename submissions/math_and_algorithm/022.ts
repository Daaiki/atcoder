import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  const MAX_COUNT = 99999
  
  const counts = new Array(MAX_COUNT).fill(0)
  for (let i = 0; i < N; i++) {
    counts[A[i]-1]++
  }

  let ans = 0
  for (let i = 0; i < Math.floor(MAX_COUNT/2); i++) {
    ans += counts[i]*counts[MAX_COUNT-1-i]
  }
  ans += (counts[49999] * (counts[49999] - 1)) / 2

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))