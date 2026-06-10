function switchTopTab(el) {
        document.querySelectorAll('.top-tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    function toggleLike(el) {
        el.classList.toggle('liked');
        const text = el.querySelector('.action-text');
        if(el.classList.contains('liked')) {
            text.textContent = '12.5w+';
        } else {
            text.textContent = '12.5w';
        }
    }
    function toggleFollow(e) {
        e.stopPropagation();
        const btn = e.target;
        btn.classList.toggle('followed');
        if(btn.classList.contains('followed')) {
            btn.innerHTML = '✓ 已关注';
        } else {
            btn.innerHTML = '+ 关注';
        }
    }
    function showComments() {
        alert('评论区功能即将开放~');
    }
    function shareVideo() {
        alert('分享功能即将开放~');
    }
    function publishVideo() {
        alert('发布视频功能即将开放~');
    }
    let isPlaying = true;
    function togglePlay() {
        isPlaying = !isPlaying;
        const icon = document.querySelectorAll('.action-icon')[3];
        icon.textContent = isPlaying ? '▶' : '⏸';
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }