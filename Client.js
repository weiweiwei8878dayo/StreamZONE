// Socket.ioを使用してリアルタイムのライブストリーミングを実現するクライアント側のコード

const socket = io(); // サーバーとのSocket.ioの接続を確立

// ライブストリームの開始
socket.emit('startStream');

// ライブストリームのデータを受信したときの処理
socket.on('streamData', (data) => {
  // ラ
