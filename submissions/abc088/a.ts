'use strict';
import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, A] = arg.trim().split('\n').map((x) => +x)
  
  if (N % 500 - A <= 0) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

main(readFileSync('/dev/stdin', 'utf8'))