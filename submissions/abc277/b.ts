import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, ...S] = arg.trim().split('\n')

  if (S.length !== new Set(S).size) {
    console.log('No')
    return
  }

  for (let i = 0; i < +N; i++) {
    const [first, second] = S[i].split('')
    if ('HDCS'.indexOf(first) !== -1) {
      if ('A23456789TJQK'.indexOf(second) !== -1) continue
    }
    console.log('No')
    return
  }
  console.log('Yes')
}

main(readFileSync('/dev/stdin', 'utf-8'))