import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [a, b] = arg.trim().split(' ')
  
  const n = parseInt(a + b)
  const isSquareNum = Math.sqrt(n) === Math.floor(Math.sqrt(n))

  console.log(isSquareNum ? 'Yes' : 'No')
}

main(readFileSync('/dev/stdin', 'utf-8'))