import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, S] = arg.trim().split('\n')

  let counter = 0
  for (let i = 0; i < +N - 2; i++) {
    if (S.substring(i, i+3) === 'ABC') counter++
  }

  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf-8'))