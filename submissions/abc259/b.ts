import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [a, b, d] = arg.trim().split(' ').map(x => +x)

  const distance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
  
  const radA = Math.atan2(b, a)
  const radD = d * (Math.PI / 180)

  const x = (Math.cos(radA)*Math.cos(radD) - Math.sin(radA)*Math.sin(radD)) * distance
  const y = (Math.sin(radA)*Math.cos(radD) + Math.cos(radA)*Math.sin(radD)) * distance

  console.log(`${x} ${y}`)
}

main(readFileSync('/dev/stdin', 'utf-8'))