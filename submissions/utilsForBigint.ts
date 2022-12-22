export const gcd = (A: bigint, B: bigint): bigint => {
  while (A >= 1 && B >= 1) {
    if (A >= B) {
      A = A % B
    } else {
      B = B % A
    }
  }
 
  return A >= 1 ? A : B
}

export const lcm = (A: bigint, B: bigint): bigint => {
  return (A * B) / gcd(A, B)
}