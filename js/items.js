export const items = [
  {
    id: 1,
    name: "アイテム1",
    price: 1000,
    description: "説明1",
    image: "images/item1.jpg",
    tags: ["#タグ1", "#タグ2"],
    isNew: true,
    purchaseUrl: "https://example.com/item1", // 販売ページのURL
  },
  {
    id: 2,
    name: "アイテム2",
    price: 1500,
    description: "説明2",
    image: "images/item2.jpg",
    tags: ["#ハガキ", "#動物愛護"],
    isNew: false,
    purchaseUrl: "https://example.com/item2", // 販売ページのURL
  },
  {
    id: 3,
    name: "商品1",
    price: 2000,
    description: "説明3",
    image: "images/item3.jpg",
    tags: ["#カレンダー", "#教育支援"],
    isNew: false,
    purchaseUrl: "https://example.com/item3", // 販売ページのURL
  },
  {
    id: 4,
    name: "商品2",
    price: 2500,
    description: "説明4",
    image: "images/item4.jpg",
    tags: ["#カレンダー", "#環境保護"],
    isNew: false,
    purchaseUrl: "https://example.com/item4", // 販売ページのURL
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const itemId = getItemIdFromURL(); // URLからアイテムIDを取得する関数
  const item = getItemById(itemId); // アイテムIDからアイテム情報を取得する関数

  if (item) {
    document.querySelector(".item-image img").src = item.image;
    document.querySelector(".item-info h2").textContent = item.name;
    document.querySelector(".item-info .price").textContent = `¥${item.price}`;
    document.querySelector(".item-info .description").textContent =
      item.description;
    document.querySelector(".item-info .tags").textContent =
      item.tags.join(", ");

    const purchaseLink = document.getElementById("purchase-link");
    purchaseLink.href = item.purchaseUrl; // 販売ページのURLを設定
  }
});

function getItemIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

function getItemById(id) {
  return items.find((item) => item.id === id);
}
