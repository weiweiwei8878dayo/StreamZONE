// 必要なモジュールをインポート
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Expressアプリを作成
const app = express();

// Multerの設定
const upload = multer({ dest: 'uploads/' }); // アップロードされたファイルを保存するディレクトリを指定

// POSTリクエストを処理するエンドポイントを作成
app.post('/api/upload', upload.single('file'), (req, res) => {
  // アップロードされたファイルを取得
  const file = req.file;

  // ファイルが存在する場合
  if (file) {
    // ファイルを指定のディレクトリに移動
    const destinationPath = path.join(__dirname, 'uploads', file.filename);
    fs.renameSync(file.path, destinationPath);

    // レスポンスを送信
    res.status(200).json({ message: 'ファイルのアップロードに成功しました', fileUrl: `/uploads/${file.filename}` });
  } else {
    // ファイルが存在しない場合はエラーレスポンスを送信
    res.status(400).json({ error: 'ファイルのアップロードに失敗しました' });
  }
});

// サーバーを起動
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
