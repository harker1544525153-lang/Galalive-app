let isFollowed = false;
    let isGiftOpen = false;
    let currentGift = {name:'小心心',icon:'❤',price:1};
    let currentCombo = 1;
    let chatMode = 'message'; // message or bullet

    function goBack() { window.location.href='home.html'; }
    function showToast(msg) {
        const t=document.getElementById('toast');
        t.textContent=msg; t.classList.add('show');
        setTimeout(()=>t.classList.remove('show'),2000);
    }
    function toggleFollow() {
        const btn=document.getElementById('followBtn');
        isFollowed=!isFollowed;
        btn.textContent=isFollowed?'✓ 已关注':'+ 关注';
        btn.style.background=isFollowed?'rgba(255,255,255,0.1)':'#FF4D6D';
        showToast(isFollowed?'关注成功':'已取消关注');
    }
    function toggleGift() {
        isGiftOpen=!isGiftOpen;
        document.getElementById('giftPanel').classList.toggle('open',isGiftOpen);
        document.getElementById('overlay').classList.toggle('show',isGiftOpen);
    }
    function selectGift(el,name,price) {
        document.querySelectorAll('.gift-item').forEach(g=>g.classList.remove('selected'));
        el.classList.add('selected');
        currentGift={name,icon:el.querySelector('.gift-icon').textContent,price};
    }
    function setCombo(el,text) {
        document.querySelectorAll('.combo-btn').forEach(b=>b.classList.remove('active'));
        el.classList.add('active');
        currentCombo=parseInt(text.replace('×',''))||1;
    }
    function sendGift() {
        const total=currentGift.price*currentCombo;
        showToast(`🎁 送出 ${currentGift.icon} ×${currentCombo} (${total}💎)`);
        const anim=document.createElement('div');
        anim.className='gift-anim';
        anim.textContent=currentGift.icon;
        document.body.appendChild(anim);
        setTimeout(()=>anim.remove(),2000);
        // Add to chat
        const chat=document.getElementById('chatArea');
        const msg=document.createElement('div');
        msg.className='chat-msg';
        msg.innerHTML=`<span class="name">我</span>: 送出了 ${currentGift.icon} ×${currentCombo}`;
        chat.appendChild(msg);
        chat.scrollTop=chat.scrollHeight;
        setTimeout(()=>toggleGift(),500);
    }
    function toggleMode() {
        chatMode=chatMode==='message'?'bullet':'message';
        document.querySelector('.mode').textContent=chatMode==='message'?'💬 消息':'🔘 弹幕';
        showToast(chatMode==='message'?'已切换为消息模式':'已切换为弹幕模式');
    }
    function sendMsg() {
        const input=document.getElementById('msgInput');
        const text=input.value.trim();
        if(!text) return;
        const chat=document.getElementById('chatArea');
        const msg=document.createElement('div');
        msg.className='chat-msg';
        msg.innerHTML=`<span class="name">我</span>: ${text}`;
        chat.appendChild(msg);
        input.value='';
        chat.scrollTop=chat.scrollHeight;
    }