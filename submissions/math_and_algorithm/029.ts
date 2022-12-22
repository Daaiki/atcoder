import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  const dp: number[] = [1, 1]
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }

  console.log(dp[N])
}

main(readFileSync('/dev/stdin', 'utf-8'))