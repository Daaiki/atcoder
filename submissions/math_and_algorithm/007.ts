import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, X, Y] = arg.trim().split(' ').map(x => +x)

  let ans = 0
  for (let i = 1; i <= N; i++) {
    if (i % X === 0 || i % Y === 0) ans++
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))