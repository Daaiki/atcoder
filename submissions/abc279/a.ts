import { readFileSync } from 'fs'

const main = (arg: string) => {
  const S = arg.trim().split('')

  let counter = 0
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'v') counter += 1
    if (S[i] === 'w') counter += 2
  }

  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf-8'))