import { readFileSync } from 'fs'

const main = (arg: string) => {
  const S = arg.trim()
  const replaced = S.replace('2017', '2018')

  console.log(replaced) 
}

main(readFileSync('/dev/stdin', 'utf-8'))