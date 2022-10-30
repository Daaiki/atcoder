import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [arg1, arg2] = arg.trim().split('\n')
  const [N, B] = [+arg1, arg2.split(' ').map(x => +x)]

  let sum = B[0] + B[N-2]
  for (let i = 0; i < N-2; i++) sum += Math.min(B[i], B[i+1])
  
  console.log(sum)
}

main(readFileSync('/dev/stdin', 'utf-8'))