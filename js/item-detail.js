import { items } from "../js/items.js";

document.addEventListener("DOMContentLoaded", function () {
  displayItemDetail();
});

function displayItemDetail() {
  // URLからIDを取得
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get("id"), 10);

  // itemsから該当するアイテムを検索
  const item = items.find((item) => item.id === itemId);

  if (item) {
    // 画像を設定
    document.querySelector(".item-image img").src = item.image;
    document.querySelector(".item-image img").alt = item.name;

    // アイテム名
    document.querySelector(".item-info h2").textContent = item.name;

    // 価格
    document.querySelector(
      ".item-info .price"
    ).textContent = `¥${item.price.toLocaleString()}`;

    // 説明
    document.querySelector(".item-info .description").textContent =
      item.description;

    // タグ
    const tagsContainer = document.querySelector(".item-info .tags");
    tagsContainer.innerHTML = item.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join(" ");

    // 販売ページリンク
    const purchaseLink = document.getElementById("purchase-link");
    purchaseLink.href = item.purchaseUrl;
  }
}
