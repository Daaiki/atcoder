import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  let ans = 0
  for (let i = 1; i <= N; i++) {
    ans += N/i
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))