import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  let [[N, M, T], A, ...XY] = args.map(line => line.split(' ').map(x => +x))

  for (let i = 0; i < N; i++) {
    T -= A[i]

    if (T <= 0) {
      console.log('No')
      return
    }
    
    if (XY[i] && XY[i][1]) T += XY[i][1]
  }
  
  console.log('Yes')
}

main(readFileSync('/dev/stdin', 'utf-8'))