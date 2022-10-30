import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [M, D] = arg.trim().split(' ').map(x => +x)

  let counter = 0
  for (let m = 1; m <= M; m++) {
    for (let d = 10; d <= D; d++) {
      const d1 = d % 10
      const d10 = (d - d1) / 10

      if (d10 < 2 || d1 < 2) continue
      if (m === d1 * d10) counter++
    }
  }

  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf-8'))