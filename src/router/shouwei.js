export function MybeforeEach(to, from, next) {
  // to and from are both route objects. must call `next`.
  console.log(to, from);
  next()
}

export function MyafterEach(to, from) {
  // to and from are both route objects.
  console.log(to, from);
}