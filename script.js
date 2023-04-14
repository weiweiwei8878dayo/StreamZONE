// main.js

// 購読フォームのsubmitイベントのリスナー
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const subscriberName = document.getElementById('subscriber-name').value;
  subscribe(subscriberName);
});

// 購読する関数
function subscribe(name) {
  // サーバーに購読リクエストを送信する処理を記述
  // サーバー側で購読情報を保存し、新着メッセージがあると通知する処理を実装
  // メッセージの表示領域に新着メッセージを表示する処理を実装
}
