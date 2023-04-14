<?php
// アップロードされた動画ファイルの処理を行う

// 動画ファイルの保存先ディレクトリ
$uploadDir = 'uploads/';

// POST リクエストから動画ファイルを受け取る
$videoFile = $_FILES['video'];

// ファイルが正常にアップロードされたかチェック
if ($videoFile['error'] === UPLOAD_ERR_OK) {
    // アップロードされた動画ファイルの一時ファイルパスを取得
    $tempFilePath = $videoFile['tmp_name'];

    // ファイルの拡張子を取得
    $fileExtension = pathinfo($videoFile['name'], PATHINFO_EXTENSION);

    // 新しいファイル名を生成して保存先ディレクトリに移動
    $newFileName = uniqid() . '.' . $fileExtension;
    $targetFilePath = $uploadDir . $newFileName;
    if (move_uploaded_file($tempFilePath, $targetFilePath)) {
        // ファイルの移動に成功した場合の処理

        // 動画ファイルのパスを返す
        echo $targetFilePath;
    } else {
        // ファイルの移動に失敗した場合の処理
        echo '動画のアップロードに失敗しました。';
    }
} else {
    // ファイルのアップロードに失敗した場合の処理
    echo '動画のアップロードに失敗しました。';
}
?>
