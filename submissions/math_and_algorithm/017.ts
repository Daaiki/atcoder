import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => BigInt(x)))

  let ans = lcm(A[0], A[1])
  for (let i = 2; i < N; i++) {
    ans = lcm(ans, A[i])
  }

  console.log(ans.toString())
}

const gcd = (A: bigint, B: bigint): bigint => {
  while (A >= 1 && B >= 1) {
    if (A >= B) {
      A = A % B
    } else {
      B = B % A
    }
  }
 
  return A >= 1 ? A : B
}

const lcm = (A: bigint, B: bigint): bigint => {
  return (A * B) / gcd(A, B)
}

main(readFileSync('/dev/stdin', 'utf-8'))