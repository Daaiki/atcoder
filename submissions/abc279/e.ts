import { readFileSync } from 'fs'

// wa
const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, M], A] = args.map(line => line.split(' ').map(x => +x))
  
  const ans: number[] = []
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue
      ans[i] = 0

      if (A[j] === ans[i]) ans[i] = A[j+1]-1
      else if (A[j+1] === ans[i]) ans[i] = A[j] - 1 
    }
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))