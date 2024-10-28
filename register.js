// ユーザーが選択した食事時間に応じて入力フォームを表示
function showInput(mealTime) {
    document.getElementById("meal-title").textContent = `↓　${mealTime}の食事内容を入力　↓`;
    document.getElementById("register-form").style.display = "block";
}

// 入力内容を取得し、データを処理
function submitData() {
    const food = document.getElementById("food").value;
    const calories = document.getElementById("calories").value;
    const carbs = document.getElementById("carbs").value;
    const mealTime = document.getElementById("meal-title").textContent;

    if (!food || !calories || !carbs) {
        alert("全ての項目を入力してください！");
        return;
    }

    // APIで栄養素データを取得する関数呼び出し（ここではモック関数）
    fetchNutritionData(food).then(nutritionData => {
        const mealData = {
            food: food,
            calories: Number(calories),
            carbs: Number(carbs),
            nutrition: nutritionData,
            timestamp: new Date().toISOString()
        };

        // Cookieにデータを保存
        saveDataToCookies(mealTime, mealData);

        alert(`${mealTime}を登録しました！`);
        document.getElementById("input-form").reset();
        document.getElementById("input-form").style.display = "none";
    });
}

// 栄養素データを取得（モック関数として使用）
async function fetchNutritionData(food) {
    // TODO: 実際にはAPIリクエストを実装し、データを取得する
    return { protein: 10, fat: 5, fiber: 3 };
}

// Cookieにデータを保存する関数
function saveDataToCookies(mealTime, mealData) {
    let existingData = JSON.parse(getCookie("mealData") || "{}");
    if (!existingData[mealTime]) existingData[mealTime] = [];
    existingData[mealTime].push(mealData);

    document.cookie = `mealData=${JSON.stringify(existingData)}; path=/`;
}

// Cookieからデータを取得する関数
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}
