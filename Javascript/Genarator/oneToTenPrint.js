//Numbers 1 to 10: create a generator function that generates numbers from 1 to 10.

function* gen() {
    let i = 1
    while (i <= 10) {
        yield i
        i++
    }

}
const res = gen()
let i = 1
while (i <= 10) {
    console.log(res.next().value)
    i++
}