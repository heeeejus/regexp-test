const str = `
010-1234-5678
thesecon@gmail.com
https://wwww.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://local
`

//const regexp = new RegExp('the','gi')
// const regexp = /the/g
// console.log(str.match(/the/g))

console.log(str.match(/(?<=\@).{1,}/g))
