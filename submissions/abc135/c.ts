import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N], A, B] = args.map(line => line.split(' ').map(x => +x))

  let ans = 0
  for (let i = 0; i < N; i++) {
    if (A[i] >= B[i]) ans += B[i]
    else {
      ans += A[i]
      if (B[i] - A[i] >= A[i+1]) ans += A[i+1], A[i+1] = 0
      else ans += B[i] - A[i], A[i+1] -= B[i] - A[i]
    }
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))