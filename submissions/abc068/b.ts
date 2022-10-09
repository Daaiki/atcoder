import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  let maxCount = 0
  let ans = 1

  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) continue
    
    let counter = 0
    let tmp = i
    while (tmp % 2 === 0) tmp /= 2, counter++
    
    if (maxCount < counter) ans = i, maxCount = counter
  }
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))