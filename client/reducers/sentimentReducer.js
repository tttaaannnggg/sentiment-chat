const sentiment = new (require('sentiment'))();

export default (input)=>{
  const val = sentiment.analyze(input);
  console.log(val)
  return val.comparative
}
