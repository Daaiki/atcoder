import { readFileSync } from 'fs'

const main = (arg: string) => {
  const s = arg.trim()
  
  const start = s.indexOf('A')
  const end = s.lastIndexOf('Z')
  const len = end - start + 1

  console.log(len)
}

main(readFileSync('/dev/stdin', 'utf-8'))