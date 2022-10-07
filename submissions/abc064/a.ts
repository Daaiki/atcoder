'use strict';
import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [r, g, b] = arg.trim().split(' ').map((x) => +x)

  if ((10*g+b) % 4 === 0) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}

main(readFileSync('/dev/stdin', 'utf8'))