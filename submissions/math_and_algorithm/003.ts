import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  let ans = 0
  for (let i = 0; i < N; i++) ans += A[i]

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))