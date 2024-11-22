export const items = [
  {
    id: 1,
    name: "【チャリティーカレンダー】季節の富士山（2025年1月始まりカレンダー）",
    price: 1650,
    description: "説明1",
    image: "https://shop.r10s.jp/book/cabinet/6508/4900459556508_1_3.jpg",
    tags: ["#タグ1", "#タグ2"],
    isNew: true,
    purchaseUrl: "https://a.r10.to/hPzRBx", // 販売ページのURL
  },
  {
    id: 2,
    name: "【チャリティーカレンダー】卓上 くつろぎねこ（2025年1月始まりカレンダー）",
    price: 1210,
    description: "説明2",
    image: "https://shop.r10s.jp/book/cabinet/6478/4900459556478_1_3.jpg",
    tags: ["#ハガキ", "#動物愛護"],
    isNew: false,
    purchaseUrl: "https://a.r10.to/hk0jHB", // 販売ページのURL
  },
  {
    id: 3,
    name: "チャリティカレンダー2025「いま、何時？」",
    price: 1200,
    description:
      "移住連が、日本に暮らす移民・難民、移民ルーツをもつ人びとの姿を伝え、エンパワメントすることを目的として、毎年発行しているカレンダー",
    image:
      "https://baseec-img-mng.akamaized.net/images/item/origin/ae850c5cabb11b6570b9d63b334f5140.png",
    tags: ["#カレンダー", "#教育支援"],
    isNew: false,
    purchaseUrl: "https://migrants.jp/news/office/20240924_calendar.html", // 販売ページのURL
  },
  {
    id: 4,
    name: "2025ラジオ大阪「もう、好きにやります。」カレンダー",
    price: 1200,
    description: "説明4",
    image:
      "https://item-shopping.c.yimg.jp/i/n/radioosaka_cal2025-001_i_20241030155423",
    tags: ["#カレンダー", "#環境保護"],
    isNew: false,
    purchaseUrl:
      "https://store.shopping.yahoo.co.jp/radioosaka/cal2025-001.html", // 販売ページのURL
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
