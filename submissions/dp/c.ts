import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], ...abcs] = args.map(line => line.split(' ').map(x => +x))
  
  const dp: number[][] = [[...abcs[0]]]

  for (let i = 1; i < N; i++) {
    dp[i] = []
    for (let j = 0; j < 3; j++) {
      const nums: number[] = []
      for (let k = 0; k < 3; k++) {
        if (j === k) continue
        nums[k] = dp[i-1][k]+abcs[i][j]
      }
      dp[i][j] = Math.max(...nums.filter(e => e))
    }
  }
  console.log(Math.max(...dp[N-1]))
}

main(readFileSync('/dev/stdin', 'utf-8'))