import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  console.log(enumDiv(N).join('\n'))
}

const enumDiv = (n: number) => {
  let ret: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      ret.push(i)
      if (i * i !== n) ret.push(n / i)
    }
  }

  return ret
}

main(readFileSync('/dev/stdin', 'utf-8'))