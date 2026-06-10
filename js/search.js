const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        if(this.value.length > 0) {
            document.getElementById('historySection').style.display = 'none';
            document.getElementById('hotSection').style.display = 'none';
            document.getElementById('resultsSection').style.display = 'block';
        } else {
            document.getElementById('historySection').style.display = 'block';
            document.getElementById('hotSection').style.display = 'block';
            document.getElementById('resultsSection').style.display = 'none';
        }
    });

    function switchTab(el) {
        document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    function searchHistory(text) {
        searchInput.value = text;
        document.getElementById('historySection').style.display = 'none';
        document.getElementById('hotSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
    }
    function searchHot(text) {
        searchInput.value = text;
        document.getElementById('historySection').style.display = 'none';
        document.getElementById('hotSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
    }
    function clearHistory() {
        if(confirm('确定清空搜索历史吗？')) {
            alert('已清空搜索历史');
        }
    }
    function goBack() {
        window.location.href = 'home.html';
    }
    function goUser() {
        window.location.href = 'profile.html';
    }
    function navigate(el, page) {
        document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
        window.location.href = page;
    }