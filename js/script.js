// items.jsをインポートする（ES6モジュールを使用）
import { items } from "./items.js"; // パスは適切に変更してください

// アイテムを表示する関数
function displayItems(container, itemList) {
  container.innerHTML = ""; // 既存の内容をクリア

  itemList.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "item-card"; // 確実にクラスを追加
    itemCard.innerHTML = `
            <a href="items/item-detail.html?id=${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>価格: ¥${item.price}</p>
                <div class="tags">${item.tags
                  .map((tag) => `<span>${tag}</span>`)
                  .join("")}</div>
            </a>
        `;
    container.appendChild(itemCard);
  });
}

// 初期表示
function initialize() {
  const newItemContainer = document.getElementById("new-item-container");
  const productContainer = document.getElementById("product-container");

  // 新着アイテムと商品をそれぞれのコンテナに表示
  const newItems = items.filter((item) => item.isNew);
  const products = items.filter((item) => !item.isNew);

  displayItems(newItemContainer, newItems);
  displayItems(productContainer, products);
}

// 検索機能の実装
function searchItems() {
  const categoryFilter = document.getElementById("category-filter").value;
  const themeFilter = document.getElementById("theme-filter").value;

  const filteredItems = items.filter((item) => {
    const matchesCategory = categoryFilter
      ? item.tags.includes(`#${categoryFilter}`)
      : true;
    const matchesTheme = themeFilter
      ? item.tags.includes(`#${themeFilter}`)
      : true;
    return matchesCategory && matchesTheme;
  });

  const productContainer = document.getElementById("product-container");
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.className = "product-list"; // この行を追加

  // 商品一覧をクリア
  productContainer.innerHTML = ""; // 既存の内容をクリア
  searchResultsContainer.innerHTML = ""; // 検索結果をクリア

  if (filteredItems.length > 0) {
    displayItems(searchResultsContainer, filteredItems);
  } else {
    searchResultsContainer.innerHTML =
      "<p>該当する商品は見つかりませんでした。</p>";
  }
}

// イベントリスナーの追加
document.getElementById("filter-button").addEventListener("click", searchItems);

// ページに応じて関数を呼び出す
if (document.title === "アイテム一覧") {
  initialize();
}
