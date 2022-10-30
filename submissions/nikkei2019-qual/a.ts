import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, A, B] = arg.trim().split(' ').map(x => +x)

  const min = A + B - N > 0 ? A + B - N : 0
  const max = A > B ? B : A

  console.log(max, min)
}

main(readFileSync('/dev/stdin', 'utf-8'))