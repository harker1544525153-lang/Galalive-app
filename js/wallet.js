function switchTab(el) {
        document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    function selectRecharge(el) {
        document.querySelectorAll('.recharge-item').forEach(i=>i.classList.remove('active'));
        el.classList.add('active');
    }
    function selectPayMethod(el) {
        document.querySelectorAll('.pay-method').forEach(m=>m.classList.remove('active'));
        el.classList.add('active');
    }
    function doRecharge() {
        alert('充值功能即将开放~');
    }
    function showRecords() {
        alert('交易记录功能即将开放~');
    }
    function showDeposit() {
        alert('充值功能即将开放~');
    }
    function showWithdraw() {
        alert('提现功能即将开放~');
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }
    function goBack() { window.location.href = 'profile.html'; }