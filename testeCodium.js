function fibonacci() {
  let a = 1
  let b = 1
  let c = 0
  let i = 0
  while (i < 10) {
    c = a + b
    a = b
    b = c
    i++
  }

  return c
}