import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [[N, K], A] = arg.trim().split('\n').map(line => line.split(' ').map(x => +x))
  
  for (let i = 0; i < K; i++) {
    A.shift()
    A.push(0)
  }
  
  console.log(A.join(' '))
}

main(readFileSync('/dev/stdin', 'utf-8'))