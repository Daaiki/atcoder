import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [s, t] = arg.trim().split('\n')

  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().reverse().join('')

  console.log(sortedS < sortedT ? 'Yes' : 'No')
}

main(readFileSync('/dev/stdin', 'utf-8'))