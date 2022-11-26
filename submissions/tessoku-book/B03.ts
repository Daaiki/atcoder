import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue
      const exist = A.filter((x, index) => x + A[i] + A[j] === 1000 && index !== i && index !== j).length > 0
      if (exist) return console.log('Yes')
    }
  }

  console.log('No')
}

main(readFileSync('/dev/stdin', 'utf-8'))