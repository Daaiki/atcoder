import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  const totalDiv = enumDiv(N).reduce((sum, x) => sum += x) - N
  
  if (N === totalDiv) console.log('Perfect')
  else if (N < totalDiv) console.log('Abundant')
  else console.log('Deficient')
}

const enumDiv = (N: number) => {
  let ret: number[] = []

  for (let i = 1; i * i <= N; i++) {
    if (N % i == 0) {
      ret.push(i)
      if (i * i != N) ret.push(N / i)
    }
  }

  return ret
}

main(readFileSync('/dev/stdin', 'utf-8'))