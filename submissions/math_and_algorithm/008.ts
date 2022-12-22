import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, S] = arg.trim().split(' ').map(x => +x)

  let ans = 0
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      i + j <= S && ans++
    }
  }
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))