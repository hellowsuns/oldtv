function showVideoPopup() {
    document.getElementById('video-popup').classList.remove('hidden');
    const video = document.getElementById('video-player');
    video.play(); // 팝업이 뜨면 자동으로 동영상 재생
}

function closeVideoPopup() {
    const video = document.getElementById('video-player');
    video.pause(); // 동영상 정지
    video.currentTime = 0; // 동영상 처음으로 되감기
    document.getElementById('video-popup').classList.add('hidden');
}
