const uploadForm = document.getElementById('upload-form');
const videoFileInput = document.getElementById('video-file');
const videoContainer = document.getElementById('video-container');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const videoFile = videoFileInput.files[0];
    if (!videoFile) {
        alert('動画を選択してください。');
        return;
    }

    // FormDataを使用してフォームデータを作成
    const formData = new FormData();
    formData.append('file', videoFile);

    try {
        // fetchを使用してAPIエンドポイントに動画ファイルをアップロード
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // アップロードが成功したら、動画を表示する
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';

            const video = document.createElement('video');
            video.src = URL.createObjectURL(videoFile);
            video.controls = true;

            videoItem.appendChild(video);
            videoContainer.appendChild(videoItem);

            alert('動画のアップロードが完了しました。');
        } else {
            alert('動画のアップロードに失敗しました。');
        }
    } catch (error) {
        console.error(error);
        alert('エラーが発生しました。');
    }
});
