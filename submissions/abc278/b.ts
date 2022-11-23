import { readFileSync } from 'fs'

const main = (arg: string) => {
  let [H, M] = arg.trim().split(' ').map(x => +x)

  while (true) {
    const a = H % 10
    const b = Math.floor(M / 10)
    const h = H - a + b
    const m = M - b * 10 + a * 10

    if (h < 24 && m < 60) {
      console.log(H, M)
      return
    }

    if (M < 60) M++
    if (M === 60) H++, M = 0
    if (H === 24) H = 0, M = 0
  }
}

main(readFileSync('/dev/stdin', 'utf-8'))