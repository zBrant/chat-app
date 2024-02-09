var peer = new Peer();
var coon = null

function connect(){
  coon = peer.connect(document.getElementById("peerId").value)
}

function addNewMessage(message, whoIs){
  let p = document.createElement("p")
  p.innerHTML = `${whoIs} -&gt; ${message}`
  document.querySelector(".messagesArea").appendChild(p)
}

function sendMessage(){
  if(!coon || !coon.open) return
  let inputValue = document.querySelector("#message")
  coon.send(inputValue.value)
  addNewMessage(inputValue.value, "You")
  inputValue.value = ""
}

document.getElementById("send").addEventListener("click", connect) 
document.getElementById("sendMessage").addEventListener("click", sendMessage)

peer.on('open', () =>{
  document.querySelector("span").innerText = peer.id
});

peer.on('connection', (conn) => {
  console.log("connected")
  if(!coon) coon = peer.connect(conn.peer)

  conn.on('data', function (data) {
    addNewMessage(data, "Your homie")
  });
});