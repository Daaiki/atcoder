import { readFileSync } from 'fs'

const main = (arg: string) => {
  const s = arg.trim().split('')
  const len = s.length -2
  const firstChar = s[0]
  const lastChar = s[len+1]
  const numeronyum = firstChar + len + lastChar

  console.log(numeronyum)
}

main(readFileSync('/dev/stdin', 'utf-8'))