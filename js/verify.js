function goBack() {
        window.location.href = 'profile.html';
    }
    function toggleCheck(el) {
        el.classList.toggle('checked');
    }
    function uploadFront() {
        alert('请上传身份证人像面照片');
    }
    function uploadBack() {
        alert('请上传身份证国徽面照片');
    }
    function submitVerify() {
        alert('认证信息已提交，我们将在1-2个工作日内完成审核！');
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }