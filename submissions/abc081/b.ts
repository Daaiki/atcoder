import { readFileSync } from 'fs'

const main = (arg: string) => {
  const input = arg.trim().split('\n')
  const N = +input[0]
  const A = input[1].split(' ').map(x => +x)
  let counter = 0
  let isEven = true

  while (true) {
    for (let i = 0; i < N; i++) {
      if (A[i] % 2 !== 0) {
        isEven = false
        break
      }
      
      A[i] /= 2
    }
    
    if (!isEven) break
    counter++
  }
  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf-8'))