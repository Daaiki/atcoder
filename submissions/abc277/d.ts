import { readFileSync } from 'fs'

// wa
const main = (arg: string) => {
  const [[N, M], A] = arg.trim().split('\n').map(line => line.split(' ').map(x => +x))

  
}

main(readFileSync('/dev/stdin', 'utf-8'))