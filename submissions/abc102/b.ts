import { readFileSync } from 'fs'

const main = (arg: string) => {
  const input = arg.trim().split('\n')

  const A = input[1].split(' ').map(x => +x)

  const max = Math.max(...A)
  const min = Math.min(...A)

  const diff = max - min
  
  console.log(diff)
}

main(readFileSync('/dev/stdin', 'utf-8'))