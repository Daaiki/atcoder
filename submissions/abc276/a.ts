import { readFileSync } from 'fs'

const main = (arg: string) => {
  const S = arg.trim()

  const index = S.lastIndexOf('a') + 1

  console.log(index === 0 ? -1 : index)
}

main(readFileSync('/dev/stdin', 'utf-8'))