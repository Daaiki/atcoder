import { readFileSync } from 'fs'

const main = (arg: string) => {
  let [X, K] = arg.trim().split(' ').map((x) => +x)

  for (let i = 0; i < K; i++) {
    const digit = Math.pow(10, i + 1)
    X /= digit
    X = Math.round(X)
    X *= digit
  }
  console.log(X)
}

main(readFileSync('/dev/stdin', 'utf8'));