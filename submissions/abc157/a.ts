'use strict';
import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg
  const pageNum = Math.floor((N + 1) / 2)
  console.log(pageNum)
}

main(readFileSync('/dev/stdin', 'utf8'))