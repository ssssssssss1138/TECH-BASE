function login() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    if (userID && password) {
        // ユーザ情報をcookiesに保存
        document.cookie = `userID=${userID}; path=/`;
        /*document.cookie = `password=${password}; path=/`;*/
        
        // ログイン後の画面（機能選択）表示
        document.querySelector('.settings').style.display = 'flex';
        document.querySelector('.catchphrase').style.display = 'block';
        document.querySelector('.icon-container').style.display = 'flex';
        
        // ログイン画面を隠す
        document.getElementById('login-form').style.display = 'none';
    } else {
        alert('ユーザIDまたはパスワードが正しく入力されていません。');
    }
}
