import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], A, [Q], ...queries] = args.map(line => line.split(' ').map(x => +x))
  
  let ans: number[] = []

  for (let i = 0; i < Q; i++) {
    const query = queries[i]
    
    if (query[0] === 1) {
      for (let j = i + 1; j < Q; j++) {
        if (queries[j][0] === 1) break
        A[queries[j][1]-1] = query[1]
      }
    }
    if (query[0] === 2) A[query[1]-1] += query[2]
    if (query[0] === 3) ans.push(A[query[1]-1])
  }
  
  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))