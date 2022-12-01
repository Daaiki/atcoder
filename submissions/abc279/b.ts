import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [S, T] = arg.trim().split('\n')

  if(S.indexOf(T) > -1) console.log('Yes')
  else console.log('No')
}

main(readFileSync('/dev/stdin', 'utf-8'))