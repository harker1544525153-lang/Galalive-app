function goBack() {
        window.location.href = 'profile.html';
    }
    function followUser() {
        alert('关注成功！');
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }