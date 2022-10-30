
// mod逆元
const modPow = (x: bigint, a: bigint): bigint => {
  if (a === 1n) return x;
  if (a % 2n) return (x * modPow(x, a - 1n)) % 998244353n;
  const t: bigint = modPow(x, a / 2n);
  return (t * t) % 998244353n;
}