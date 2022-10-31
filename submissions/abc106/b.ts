import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  let counter = 0
  for (let i = 1; i <= N; i += 2) {
    if (enumDiv(i).length === 8) counter++
  }

  console.log(counter)
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