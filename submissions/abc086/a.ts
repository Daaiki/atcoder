'use strict';
import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [a, b] = arg.trim().split(' ').map((x) => +x)

  if (a * b % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

main(readFileSync('/dev/stdin', 'utf8'));