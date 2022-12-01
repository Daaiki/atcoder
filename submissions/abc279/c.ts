import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [H, W] = args[0].split(' ').map(x => +x)
  args.shift()
  const [S, T] = [args.splice(0, H).map(line => line.split('')), args.map(line => line.split(''))]
  
  const _S = transpose(S)
  const _T = transpose(T)
  
  if (JSON.stringify(_S.sort()) === JSON.stringify(_T.sort())) console.log('Yes')
  else console.log('No')
}

const transpose = (a: string[][] | number[][]) => a[0].map((_, c) => a.map(r => r[c]))

main(readFileSync('/dev/stdin', 'utf-8'))