import { readFileSync } from 'fs'

// wa
const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...AnB] = args.map(line => line.split(' ').map(x => +x))

  const graph: number[][] = []
  console.log(graph);
  
  for (let i = 0; i < N[0]; i++) {
    const [A, B] = AnB[i]
  
    graph[A-1].push(B)
    graph[B-1].push(A)
  }

  console.log(graph);
}

main(readFileSync('/dev/stdin', 'utf-8'))