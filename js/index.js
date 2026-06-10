const phoneInput = document.getElementById('phone');
        const codeInput = document.getElementById('code');
        const getCodeBtn = document.getElementById('getCodeBtn');
        const agreeCheck = document.getElementById('agree');
        const loginBtn = document.getElementById('loginBtn');
        const toast = document.getElementById('toast');
        let countdown = 0;
        let timer = null;

        function showToast(msg) {
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }

        phoneInput.addEventListener('input', function() {
            getCodeBtn.disabled = this.value.length !== 11;
            updateLoginState();
        });

        codeInput.addEventListener('input', updateLoginState);
        agreeCheck.addEventListener('change', updateLoginState);

        function updateLoginState() {
            const phoneOk = phoneInput.value.length === 11;
            const codeOk = codeInput.value.length >= 4;
            const agreed = agreeCheck.checked;
            loginBtn.disabled = !(phoneOk && codeOk && agreed);
        }

        getCodeBtn.addEventListener('click', function() {
            if (countdown > 0 || this.disabled) return;
            countdown = 60;
            this.disabled = true;
            this.textContent = countdown + 's';
            timer = setInterval(() => {
                countdown--;
                if (countdown <= 0) {
                    clearInterval(timer);
                    this.textContent = '获取验证码';
                    this.disabled = phoneInput.value.length !== 11;
                } else {
                    this.textContent = countdown + 's';
                }
            }, 1000);
            showToast('验证码已发送');
        });

        loginBtn.addEventListener('click', function() {
            if (this.disabled) return;
            showToast('登录成功！');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000);
        });