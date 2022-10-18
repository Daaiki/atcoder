import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [arg1, arg2] = arg.trim().split('\n')
  const N = +arg1
  const a = arg2.split(' ').map(x => +x)

  const sortedA = a.sort((a, b) => b - a)
  let alicePoint = 0
  let bobPoint = 0

  sortedA.forEach((x, index) => {
    if (index % 2 === 0) {
      alicePoint += x
    } else {
      bobPoint += x
    }
  })

  console.log(alicePoint - bobPoint)
}

main(readFileSync('/dev/stdin', 'utf-8'))