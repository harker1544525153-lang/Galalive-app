function goBack() {
        window.location.href = 'profile.html';
    }
    function switchTab(el) {
        document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    function toggleFollow(el) {
        if (el.classList.contains('followed')) {
            el.classList.remove('followed');
            el.classList.add('follow');
            el.textContent = '回关';
        } else {
            el.classList.remove('follow');
            el.classList.add('followed');
            el.textContent = '已回关';
        }
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }