import { readFileSync } from 'fs'

// WA

const main = (arg: string) => {
  const [arg1, arg2] = arg.trim().split('\n')
  const N = +arg1
  const A = arg2.split(' ').map(x => +x)

  let ans: number[] = [0]

  for (let i = 0; i < N; i++) {
    ans.push((A[i] * 2).toString(2).length - 1)
    ans.push((A[i] * 2 + 1).toString(2).length - 1)
  }

  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))
