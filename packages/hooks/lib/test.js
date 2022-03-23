class WebSocketClient {
  constructor(opts) {}
  init() {}
  connect() {}
  // reconnect server
  reconnect() {
    console.log("111", this);
    // try to reconnect every 2s
    setInterval( () => {
      console.log("222", this);
      
    }, 2000);
  }
}

const w = new WebSocketClient();
w.reconnect();
