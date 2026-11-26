function sample(cb){
  cb()
}
sample(()=>{
  console.log('am callback')
})