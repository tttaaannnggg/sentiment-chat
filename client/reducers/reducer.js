const sentiment = new (require('sentiment'))();
const socket = io();

export default (state, action)=>{
  console.log(state)
  const val = sentiment.analyze(action.payload);
  switch (action.type){
    case 'update':
      return {
        ...state, 
        text: action.payload,
        sent: val.comparative
      };
    case 'send':
      const msg = {
        text: state.text,
        sent: state.sent
      }
      socket.emit('send', msg, ()=>{console.log('test sending hello')})
      const hist = [];
      hist.push(...state.history)
      hist.push(msg)
      return {
        ...state,
        text: '',
        history: hist,
        sent: 0
      };
    default:
      return state;
  }
}
