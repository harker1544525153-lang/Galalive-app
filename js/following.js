function switchTab(el,type) {
        document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    function navigate(el,page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href=page;
    }
    document.querySelectorAll('.follow-btn').forEach(btn=>{
        btn.addEventListener('click',function(e){
            e.stopPropagation();
            this.classList.toggle('following');
            this.textContent = this.classList.contains('following') ? '已关注' : '+ 关注';
        });
    });