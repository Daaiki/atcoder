import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [A, B] = arg.trim().split(' ').map(x => +x)
  
  const divs = enumDiv(100)
  for (let i = A; i <= B; i++) {
    if (divs.filter(x => i === x).length > 0) {
      console.log('Yes')
      return
    }
  }

  console.log('No')
}

const enumDiv = (n: number) => {
  let ret: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      ret.push(i)
      if (i * i !== n) ret.push(n / i)
    }
  }

  return ret
}

main(readFileSync('/dev/stdin', 'utf-8'))