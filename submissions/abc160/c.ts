import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [K, N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  let max = K - A[N-1] + A[0]
  for (let i = 1; i < N; i++) max = Math.max(max, A[i] - A[i-1])

	console.log(K - max)
}

main(readFileSync('/dev/stdin', 'utf-8'))