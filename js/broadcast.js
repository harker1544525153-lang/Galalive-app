function goHome() { window.location.href='home.html'; }
    function showToast(msg) {
        const t=document.getElementById('toast');
        t.textContent=msg; t.classList.add('show');
        setTimeout(()=>t.classList.remove('show'),2000);
    }
    function selectCat(el) {
        document.querySelectorAll('.cat-tag').forEach(c=>c.classList.remove('selected'));
        el.classList.add('selected');
    }
    function togglePrivate(el) {
        el.classList.toggle('on');
        document.getElementById('pwdInput').classList.toggle('show');
    }
    function startLive() {
        const title=document.getElementById('titleInput').value.trim();
        if(title.length<5) { showToast('直播标题至少5个字'); return; }
        showToast('🎉 直播开始！');
        setTimeout(()=>{
            document.getElementById('livePage').classList.add('show');
        },800);
    }
    function endLive() {
        if(confirm('确定结束直播？')){
            document.getElementById('livePage').classList.remove('show');
            showToast('📊 直播已结束，生成数据报告中...');
        }
    }