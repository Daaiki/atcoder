import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, K, D], a] = args.map(line => line.split(' ').map(x => +x))

  const comb = combination(a, K)

  let ans = -1
  for (let i = 0; i < comb.length; i++) {
    if (comb[i] % D === 0 && comb[i] > ans) ans = comb[i]
  }

  console.log(ans)
}

const combination = (nums: number[], k: number): number[] => {
  let ans = []
  if (nums.length < k) return []
  
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) ans[i] = nums[i]
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      let row = combination(nums.slice(i + 1), k - 1)
      for (let j = 0; j < row.length; j++) ans.push(nums[i] + row[j])
    }
  }
  return ans;
}

main(readFileSync('/dev/stdin', 'utf-8'))