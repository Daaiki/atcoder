import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  const MAX = Math.pow(10, 13)
  
  let ans = ''
  for (let i = N; i < MAX; i++) {
    for (let j = 2; j <= N; j++) {
      if (N % j !== 1) break
            
    }
  }
}

main(readFileSync('/dev/stdin', 'utf-8'))