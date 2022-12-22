import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  let ans: number[] = []

  for (let i = N; i >= 0; i--) {
    ans.push(i)
  }

  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))