import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, M, C], B, ...A] = args.map(line => line.split(' ').map(x => +x))

  let counter = 0
  for (let i = 0; i < N; i++) {
    let total = C
    for (let j = 0; j < M; j++) {
      total += A[i][j] * B[j]
    }
    if (total > 0) counter++
  }

  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf-8'))