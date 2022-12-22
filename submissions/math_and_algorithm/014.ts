import { readFileSync } from 'fs'
import { Pair, make_pair } from 'tstl'

const main = (arg: string) => {
  const N = +arg.trim()

  const factors = primeFactor(N)
  
  const ans: number[] = []
  for (let i = 0; i < factors.length; i++) {
    for (let j = 0; j < factors[i].second; j++) ans.push(factors[i].first)
  }

  console.log(ans.join(' '))
}

const primeFactor = (n: number) => {
  let ret: Pair<number, number>[] = []

  for (let i = 2; i * i <= n; i++) {
    if (n % i !== 0) continue
    let ex = 0
    while (n % i === 0) {
      ex++
      n /= i
    }
    ret.push(make_pair(i, ex))
  }
  if (n !== 1) ret.push(make_pair(n, 1))

  return ret
}

main(readFileSync('/dev/stdin', 'utf-8'))