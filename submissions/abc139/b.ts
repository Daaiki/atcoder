import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [A, B] = arg.trim().split(' ').map(x => +x)

  let counter = 1
  let ans = 0

  while (counter < B) {
    counter += A-1
    ans++
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))