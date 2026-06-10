function goBack() {
        window.location.href = 'profile.html';
    }
    function goStats() {
        window.location.href = 'stats.html';
    }
    function goVerify() {
        window.location.href = 'verify.html';
    }
    function startLive() {
        alert('开启直播功能即将开放~');
    }
    function showToast(msg) {
        alert(msg);
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }