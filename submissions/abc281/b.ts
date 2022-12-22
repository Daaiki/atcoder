import { readFileSync } from 'fs'

const main = (arg: string) => {
  const S = arg.trim().split('')

  if (!S[0].match(/^[A-Z]+$/)) return console.log('No')
  if (!S[S.length - 1].match(/^[A-Z]+$/)) return console.log('No')

  S.shift()
  S.pop()

  if (S.length !== 6 || S[0] === '0') return console.log('No')
  if (!Number(S.join(''))) return console.log('No')
  
  console.log('Yes')
}

main(readFileSync('/dev/stdin', 'utf-8'))