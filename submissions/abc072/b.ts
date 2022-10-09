import { readFileSync } from 'fs'

const main = (arg: string) => {
  const s = arg.trim().split('')

  const ans = s.filter((_, index) => index % 2 === 0).join('')

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))