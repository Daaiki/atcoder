import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [args, ...S] = arg.trim().split('\n')
  const [N, K] = args.split(' ').map(x => +x)

  const comb = combination(S, 2)
  
  let ans = 0
  for (let i = 0; i < comb.length; i++) {
    const [s1, s2] = comb[i].map(line => line.split(''))
    
    let counter = 0
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === 'o' || s2[j] === 'o') counter++
    }
    
    if (counter === s1.length) ans++
    counter = 0
  }

  console.log(ans)
}

const combination = <T>(nums: T[], k: number): T[][] => {
  let ans = [];
  if (nums.length < k) {
      return []
  }
  if (k === 1) {
      for (let i = 0; i < nums.length; i++) {
          ans[i] = [nums[i]];
      }
  } else {
      for (let i = 0; i < nums.length - k + 1; i++) {
          let row = combination(nums.slice(i + 1), k - 1);
          for (let j = 0; j < row.length; j++) {
              ans.push([nums[i]].concat(row[j]));
          }
      }
  }
  return ans;
}

main(readFileSync('/dev/stdin', 'utf-8'))