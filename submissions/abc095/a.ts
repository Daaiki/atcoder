import { readFileSync } from 'fs'

const main = (arg: string) => {
  const S = arg.trim().split('')
  let price = 700;

  for (let i = 0; i < 3; i++) {
    if (S[i] === 'o') {
      price += 100
    }
  }

  console.log(price) 
}

main(readFileSync('/dev/stdin', 'utf-8'))