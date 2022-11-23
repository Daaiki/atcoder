import { readFileSync } from 'fs'

// wa
const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], ...abcs] = args.map(line => line.split(' ').map(x => +x))
  
  const dp: number[][] = []

  for (let i = 1; i < N; i++) {
    dp[i] = [-1,-1,-1]
    dp[i][0] = Math.max(dp[i-1][1], dp[i-1][2])
    dp[i][1] = Math.max(dp[i-1][0], dp[i-1][2])
    dp[i][2] = Math.max(dp[i-1][0], dp[i-1][1])
  }
  console.log(dp)
}

main(readFileSync('/dev/stdin', 'utf-8'))