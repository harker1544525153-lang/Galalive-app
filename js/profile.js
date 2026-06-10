function showToast(msg) {
        const t=document.getElementById('toast');
        t.textContent=msg;
        t.classList.add('show');
        setTimeout(()=>t.classList.remove('show'),2000);
    }
    function navigate(el,page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href=page;
    }
    function navigateTo(page) {
        const pageMap = {
            orders: 'orders.html',
            wallet: 'wallet.html',
            history: 'history.html',
            following: 'following.html',
            fans: 'fans.html',
            visitors: 'visitors.html',
            host: 'host.html',
            verify: 'verify.html',
            stats: 'stats.html',
            settings: 'settings.html',
            help: 'help.html',
            about: 'about.html'
        };
        const target = pageMap[page];
        if (target) {
            window.location.href = target;
        } else {
            showToast('页面开发中...');
        }
    }