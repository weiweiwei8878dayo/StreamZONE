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

    // 動画ファイルをアップロードする処理を実装する

    // アップロードが完了したら、動画を表示する
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    const video = document.createElement('video');
    video.src = URL.createObjectURL(videoFile);
    video.controls = true;

    videoItem.appendChild(video);
    videoContainer.appendChild(videoItem);
});
