function switchTab(el) {
        document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        document.getElementById('hotSection').style.display = 'none';
        document.getElementById('followSection').style.display = 'none';
        document.getElementById('latestSection').style.display = 'none';
        const text = el.textContent;
        if(text.includes('热门')) document.getElementById('hotSection').style.display = 'block';
        else if(text.includes('关注')) document.getElementById('followSection').style.display = 'block';
        else if(text.includes('最新')) document.getElementById('latestSection').style.display = 'block';
    }
    function switchToHot() {
        document.querySelectorAll('.tab')[0].click();
    }
    function goLive(room) {
        window.location.href = 'live-room.html?room=' + room;
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }