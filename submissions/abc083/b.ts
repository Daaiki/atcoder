import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, A, B] = arg.trim().split(' ').map(x => +x)
  let sum = 0
  
  for (let i = 1; i <= N; i++) {
    const x = sumOfDigits(i)
    if (x >= A && x <= B) sum += i
  }

  console.log(sum)
} 

const sumOfDigits = (num: number) => {
  let sum = 0
  while (num >= 1) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}

main(readFileSync('/dev/stdin', 'utf-8'))