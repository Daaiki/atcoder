import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], A, B] = args.map(line => line.split(' ').map(x => +x))

  let ans = 0
  for (let i = 0; i < N; i++) {
    ans += 1/3 * A[i] + 2/3 * B[i]
  }
  
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))