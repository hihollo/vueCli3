function A1 () {
  console.log('这是moduleA的方法A1')
}
function A2 () {
  console.log('这是moduleA的方法A2')
}
function A3 () {
  console.log('这是moduleA的方法A3')
}
const all = {
  A1,
  A2,
  A3
}
// export只能有一个
export default all
