function switchMsgTab(el, type) {
        document.querySelectorAll('.msg-tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        // Simulate tab switching
        const list = document.getElementById('msgList');
        const empty = document.getElementById('emptyState');
        if (type === 'like') {
            list.style.display = 'none';
            empty.style.display = 'flex';
        } else {
            list.style.display = 'block';
            empty.style.display = 'none';
        }
    }
    function navigate(el,page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href=page;
    }
    function showToast(msg) {
        const t=document.getElementById('toast');
        if (!t) {
            const div = document.createElement('div');
            div.className = 'toast';
            div.id = 'toast';
            div.textContent = msg;
            div.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;opacity:0;transition:all 0.3s;pointer-events:none;z-index:1000;backdrop-filter:blur(10px);';
            document.body.appendChild(div);
            setTimeout(() => {
                div.style.opacity = '1';
                setTimeout(() => {
                    div.style.opacity = '0';
                    setTimeout(() => div.remove(), 300);
                }, 1500);
            }, 10);
        } else {
            t.textContent = msg;
            t.style.opacity = '1';
            setTimeout(() => t.style.opacity = '0', 1500);
        }
    }