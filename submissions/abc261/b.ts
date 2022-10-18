import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [arg1, ...arg2] = arg.trim().split('\n')
  const N = +arg1
  const A = arg2.map(line => line.split(''))

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue

      const x = A[i][j]
      const y = A[j][i]
      
      if (x === 'W' && y === 'L') continue
      if (x === 'L' && y === 'W') continue
      if (x ==='D' && y === 'D') continue
      
      console.log('incorrect')
      return
    }
  }

  console.log('correct')
}

main(readFileSync('/dev/stdin', 'utf-8'))