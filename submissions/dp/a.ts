import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...h] = args.flatMap(line => line.split(' ').map(x => +x))
  
  const dp: number[] = [0]

  for (let i = 1; i < N; i++) {
    if (i === 1) {
      dp[i] = Math.abs(h[1] - h[0])
      continue
    }
    dp[i] = Math.min(Math.abs(h[i]-h[i-1])+dp[i-1], Math.abs(h[i]-h[i-2])+dp[i-2])
  }

  console.log(dp[N-1])
}

main(readFileSync('/dev/stdin', 'utf-8'))