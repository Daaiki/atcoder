import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, K], h] = args.map(line => line.split(' ').map(x => +x))
  
  const dp: number[] = [0, Math.abs(h[0]-h[1])]

  for (let i = 2; i < N; i++) {
    const abss: number[] = []
    for (let j = 1; j <= K; j++) {
      if (i < j) break
      abss[j-1] = Math.abs(h[i]-h[i-j])+dp[i-j]
    }
    dp[i] = Math.min(...abss)
  }

  console.log(dp[N-1])
}

main(readFileSync('/dev/stdin', 'utf-8'))