import { readFileSync } from 'fs'

const main = (arg: string) => {
  const input = arg.trim().split('\n')
  const [T, A] = input[1].split(' ').map(x => +x)
  const H = input[2].split(' ').map(x => +x)

  const abs = H.map((x) => Math.abs((T - x * 0.006) - A))

  const point = abs.indexOf(Math.min(...abs)) + 1
  console.log(point)
}

main(readFileSync('/dev/stdin', 'utf-8'))