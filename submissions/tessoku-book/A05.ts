import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, K] = arg.trim().split(' ').map(x => +x)

  let counter = 0
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i + j >= K) continue
      if (K - i - j <= N) counter++
    }
  }

  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf-8'))