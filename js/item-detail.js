import { items } from "../js/items.js";

function displayItemDetail() {
  // URLからIDを取得
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get("id");

  // デバッグ出力を追加
  console.log("Current URL:", window.location.href);
  console.log("Item ID:", itemId);
  console.log("Items array:", items);

  // IDの型を合わせる（items.jsでidが数値型の場合）
  const searchId = Number(itemId) || itemId;

  // itemsから該当するアイテムを検索
  const item = items.find((item) => item.id === searchId);

  console.log("Found item:", item);

  if (item) {
    // 画像パスを相対パスに修正
    const imagePath = item.image.startsWith("/")
      ? `..${item.image}` // /images/item1.jpg → ../images/item1.jpg
      : `../${item.image}`; // images/item1.jpg → ../images/item1.jpg

    console.log("Modified image path:", imagePath);

    // 画像
    document.querySelector(".item-image img").src = imagePath;
    document.querySelector(".item-image img").alt = item.name;

    // アイテム名
    document.querySelector(".item-info h2").textContent = item.name;

    // 価格
    document.querySelector(".item-info .price").textContent = `¥${item.price}`;

    // 説明
    document.querySelector(".item-info .description").textContent =
      item.description;

    // タグ
    const tagsContainer = document.querySelector(".item-info .tags");
    tagsContainer.innerHTML = item.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");
  } else {
    console.error("Item not found for ID:", searchId);
    // エラーメッセージを画面に表示
    document.querySelector(".item-info").innerHTML =
      '<p class="error">商品が見つかりませんでした。</p>';
  }
}

// 即時実行
document.addEventListener("DOMContentLoaded", displayItemDetail);
