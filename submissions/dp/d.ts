import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, W], ...wv] = args.map(line => line.split(' ').map(x => +x))

  const dp: number[][] = new Array(N+1).fill(0).map(_ => Array(W+1).fill(0))
  for (let i = 1; i <= N; i++) {   
    const [w, v] = wv[i-1]
    for (let j = 0; j <= W; j++) {
      if (j - w < 0) dp[i][j] = dp[i-1][j]
      else dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w]+v)
    }
  }

  console.log(dp[N][W])
}

main(readFileSync('/dev/stdin', 'utf-8'))