window.onload = function() {
  sortByName();
};

let nameSortOrder = 1; // ソート順を保持する変数

// フィルター適用関数
function applyFilters(lane, role) {
  const roleFilter = role || document.getElementById("role-filter")?.value;
  const nameFilter = document.getElementById("name-filter").value.toLowerCase();

  const filteredChampions = champions.filter(champion => {
    const laneMatch = lane ? champion.lane.includes(lane) : true;
    const roleMatch = roleFilter ? champion.role.includes(roleFilter) : true;
    const nameMatch = champion.name.toLowerCase().includes(nameFilter);

    return laneMatch && roleMatch && nameMatch;
  });

  createChampionsList(filteredChampions);
}

// チャンピオンリスト作成関数
function createChampionsList(champions) {
  const championsContainer = document.getElementById("champions-container");
  championsContainer.innerHTML = "";

  const table = createTable(champions);
  championsContainer.appendChild(table);
}

// テーブル作成関数
function createTable(champions) {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headRow = document.createElement("tr");
  const headers = ["チャンピオン名", "ロール", "ダメージ割合(AD/AP/True)", "適正レーン"];

  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headRow.appendChild(th);
  });

  const nameHeader = headRow.querySelector(":nth-child(1)");
  nameHeader.innerHTML += `<button onclick="sortByName()">▲`;

  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  champions.forEach(champion => {
    const row = document.createElement("tr");

    // 名前セルの修正
    const nameCell = document.createElement("td");
    const nameButton = document.createElement("button");
    nameButton.classList.add("champion-name-button");
    nameButton.onclick = function() {
      window.location.href = `紹介.html?name=${encodeURIComponent(champion.name)}`;
    };

    const championImage = document.createElement("img");
    championImage.src = champion.imgSrc;
    championImage.alt = champion.name;
    championImage.width = 50;

    const nameText = document.createElement("span");
    nameText.textContent = champion.name;

    nameButton.appendChild(championImage);
    nameButton.appendChild(nameText);
    nameCell.appendChild(nameButton);
    row.appendChild(nameCell);

    // 他のセルは以前と同じ
    const roleCell = document.createElement("td");
    roleCell.textContent = champion.role;
    row.appendChild(roleCell);

    const damageCell = createDamageCell(champion.damage);
    row.appendChild(damageCell);

    const laneCell = document.createElement("td");
    laneCell.textContent = champion.lane;
    row.appendChild(laneCell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  return table;
}

// ダメージセルを作成する関数
function createDamageCell(damage) {
  const damageCell = document.createElement("td");
  const damageBar = document.createElement("div");
  damageBar.classList.add("damage-bar");

  const adBar = document.createElement("div");
  adBar.classList.add("ad-bar");
  adBar.style.width = damage.AD + "%";
  if (damage.AD > 10) {
    adBar.textContent = damage.AD + "%";
  }
  damageBar.appendChild(adBar);

  const apBar = document.createElement("div");
  apBar.classList.add("ap-bar");
  apBar.style.width = damage.AP + "%";
  if (damage.AP > 10) {
    apBar.textContent = damage.AP + "%";
  }
  damageBar.appendChild(apBar);

  const trueBar = document.createElement("div");
  trueBar.classList.add("true-bar");
  trueBar.style.width = damage.True + "%";
  if (damage.True > 10) {
    trueBar.textContent = damage.True + "%";
  }
  damageBar.appendChild(trueBar);

  damageCell.appendChild(damageBar);
  return damageCell;
}

// 初期のチャンピオンリストを作成
createChampionsList(champions);

// チャンピオン名でソートする関数
function sortByName() {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const nameA = a.querySelector("td:nth-child(1)").textContent.trim();
    const nameB = b.querySelector("td:nth-child(1)").textContent.trim();

    if (nameA < nameB) {
      return -1 * nameSortOrder;
    } else if (nameA > nameB) {
      return 1 * nameSortOrder;
    } else {
      return 0;
    }
  });

  rows.forEach(row => {
    tbody.removeChild(row);
  });

  rows.forEach(row => {
    tbody.appendChild(row);
  });

  nameSortOrder *= -1;

  const sortButton = document.querySelector("th:nth-child(1) button");
  sortButton.textContent = nameSortOrder === 1 ? "▲" : "▼";
}
