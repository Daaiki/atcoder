import { readFileSync } from 'fs'

const main = (arg: string) => {
  let counter = 0
  const s = arg.trim().split('')

  for (let i = 0; i < 3; i++) {
    s[i] === '1' && counter++
  }

  console.log(counter)
}

main(readFileSync('/dev/stdin', 'utf8'))