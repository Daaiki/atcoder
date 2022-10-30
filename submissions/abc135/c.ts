import { readFileSync } from 'fs'

// wa
const main = (arg: string) => {
  const [arg1, ...arg2] = arg.trim().split('\n')
  const [N, A, B] = [+arg1, ...arg2.map(line => line.split(' ').map(x => +x))]

  let ans = 0
  for (let i = 0; i < N; i++) {

  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))