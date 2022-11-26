import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, Q], A, ...LR] = args.map(line => line.split(' ').map(x => +x))

  const sums: number[] = [0]
  for (let i = 0; i < N; i++) sums[i+1] = sums[i]+A[i]

  const ans: number[] = []
  for (let i = 0; i < Q; i++) {
    const [L, R] = LR[i]
    ans[i] = sums[R] - sums[L-1] 
  }

  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))