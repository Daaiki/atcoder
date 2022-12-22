import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...h] = args.flatMap(line => line.split(' ').map(x => +x))

  const dp: number[] = [0, Math.abs(h[0]-h[1])]
  for (let i = 2; i < N; i++) {
    dp[i] = Math.min(dp[i-1]+Math.abs(h[i]-h[i-1]), dp[i-2]+Math.abs(h[i]-h[i-2]))
  }
  console.log(dp)
  
  console.log(dp[N-1])
}

main(readFileSync('/dev/stdin', 'utf-8'))