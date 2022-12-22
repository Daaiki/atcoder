import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, T], A] = args.map(line => line.split(' ').map(x => BigInt(x)))

  let total = 0n
  for (let i = 0; i < N; i++) total += A[i]
  
  let mod = T % total

  let ans = ''
  for (let i = 0; i < N; i++) {
    if (BigInt(A[i]) >= mod) {
      ans = `${i + 1} ${mod.toString()}`
      break
    }
    mod -= BigInt(A[i])
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))