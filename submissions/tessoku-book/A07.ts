import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[D], [N], ...LR] = args.map(line => line.split(' ').map(x => +x))

  const upDowns: number[] = Array(D+1).fill(0)
  for (let i = 0; i < N; i++) {
    const [L, R] = LR[i]
    upDowns[L-1]++
    upDowns[R]--
  }
  
  const sums: number[] = [upDowns[0]]
  for (let i = 1; i < D; i++) sums[i] = sums[i-1] + upDowns[i]
  
  console.log(sums.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))