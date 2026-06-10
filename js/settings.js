function goBack() {
        window.location.href = 'profile.html';
    }
    function toggleSwitch(el) {
        el.classList.toggle('active');
    }
    function showPage(page) {
        alert('页面功能即将开放~');
    }
    function editProfile() {
        alert('编辑资料功能即将开放~');
    }
    function clearCache() {
        if(confirm('确定清除缓存吗？')) {
            alert('缓存已清除');
        }
    }
    function doLogout() {
        if(confirm('确定退出登录吗？')) {
            window.location.href = 'login.html';
        }
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }