import { readFileSync } from 'fs'

// wa
const main = (arg: string) => {
  const [A, B] = arg.trim().split(' ').map(x => +x)

  const f = (g: number) => {
    return B * (g-1) + A / Math.sqrt(g)
  }
}

main(readFileSync('/dev/stdin', 'utf-8'))