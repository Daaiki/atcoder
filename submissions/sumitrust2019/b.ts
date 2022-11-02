import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()

  const X = Math.ceil(N / 1.08)
  const _N = Math.floor(X * 1.08)

  console.log(_N === N ? X : ':(')
}

main(readFileSync('/dev/stdin', 'utf-8'))