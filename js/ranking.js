function switchTab(el) {
        document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }