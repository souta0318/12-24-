// 関数でルーンの情報を追加
function appendRunesInfo(parentElement, runesData) {
  const runesIntro = document.createElement("h2");
  runesIntro.innerText = "ルーンとは";
  parentElement.appendChild(runesIntro);

  const runesDescription = document.createElement("p");
  runesDescription.innerText = runesData.introduction;
  parentElement.appendChild(runesDescription);

  // 既存の画像挿入コード
  const runesImage = document.createElement("img");
  runesImage.src = "ルーン説明用.png";
  runesImage.alt = "説明画像";
  parentElement.appendChild(runesImage);

  const runeSectionsDiv = document.createElement("div");
  runeSectionsDiv.id = "rune-sections";

  runesData.categories.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "rune-category";

    const categoryName = document.createElement("h3");
    categoryName.innerText = category.name;
    categoryDiv.appendChild(categoryName);

    // 画像を挿入
    if (category.imagePath) {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.imagePath;
      categoryImage.alt = "Category Image";
      categoryDiv.appendChild(categoryImage);
    }

    const keystonesTitle = document.createElement("h4");
    keystonesTitle.innerText = "キーストーン:";
    categoryDiv.appendChild(keystonesTitle);

    const keystonesList = document.createElement("ul");
    category.keystone.forEach(keystone => {
      const listItem = document.createElement("li");
      listItem.innerText = `${keystone.name}: ${keystone.description}`;
      keystonesList.appendChild(listItem);
    });
    categoryDiv.appendChild(keystonesList);

    ["subPath1", "subPath2", "subPath3"].forEach((subPathName, index) => {
      const subPathTitle = document.createElement("h4");
      subPathTitle.innerText = `ルーン${index + 1}列目:`;
      categoryDiv.appendChild(subPathTitle);

      const subPathList = document.createElement("ul");
      category[subPathName].forEach(subPath => {
        const listItem = document.createElement("li");
        listItem.innerText = `${subPath.name}: ${subPath.description}`;
        subPathList.appendChild(listItem);
      });
      categoryDiv.appendChild(subPathList);
    });

    runeSectionsDiv.appendChild(categoryDiv);
  });

  parentElement.appendChild(runeSectionsDiv);
}

// 関数でステータスの情報を追加
function appendStatusInfo(parentElement, statusData) {
  const statusIntro = document.createElement("h2");
  statusIntro.innerText = "ステータス";
  parentElement.appendChild(statusIntro);

  const statusDescription = document.createElement("p");
  statusDescription.innerText = statusData.introduction;
  parentElement.appendChild(statusDescription);

  const statusSectionsDiv = document.createElement("div");
  statusSectionsDiv.id = "status-sections";

  statusData.categories.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "status-category";

    const categoryName = document.createElement("h3");
    categoryName.innerText = category.name;
    categoryDiv.appendChild(categoryName);

    // 画像を挿入
    if (category.imagePath) {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.imagePath;
      categoryImage.alt = "Category Image";
      categoryDiv.appendChild(categoryImage);
    }

    const statusTitle = document.createElement("h4");
    statusTitle.innerText = "ステータスを選択:３つの中から１つ";
    categoryDiv.appendChild(statusTitle);

    const statusList = document.createElement("ul");
    category.statusPath1.forEach(statusItem => {
      const listItem = document.createElement("li");
      listItem.innerText = statusItem;
      statusList.appendChild(listItem);
    });
    categoryDiv.appendChild(statusList);

    statusSectionsDiv.appendChild(categoryDiv);
  });

  parentElement.appendChild(statusSectionsDiv);
}

// DOMの読み込みが完了したら、ルーンとステータスの情報を追加する
document.addEventListener("DOMContentLoaded", function() {
  const runeSectionsDiv = document.getElementById("rune-sections");
  const statusSectionsDiv = document.getElementById("status-sections");

  appendRunesInfo(runeSectionsDiv, runes);
  appendStatusInfo(statusSectionsDiv, status);
});
