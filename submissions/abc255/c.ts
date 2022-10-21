import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [X, A, D, N] = arg.trim().split(' ').map(x => BigInt(x))
  
  const start =  D < 0 ? A + D * (N - 1n) : A
  const end = D < 0 ? A : A + D * (N - 1n)
  const diff = D < 0 ? -D : D


  if (X <= start) { 
    console.log(String(start - X))
    return
  } else if (X >= end) {
    console.log(String(X - end))
    return
  }

  // binary search
  let left = 0n
  let right = N - 1n
  while (abs(left - right) > 1) {
    const mid = (left + right) / 2n
    if (start + diff * mid > X) right = mid
    else left = mid
  }

  const ans = min(abs(start + diff * left - X) , abs(start + diff * right - X))
  console.log(String(ans))
}

const min = (num1: bigint, num2: bigint) => (num1 < num2 ? num1: num2)
const abs = (num: bigint) => (num < 0n ? -num : num)

main(readFileSync('/dev/stdin', 'utf-8'))