function createRow(item, columns) {
  const row = document.createElement("tr");
  columns.forEach(column => {
    const cell = document.createElement("td");
    cell.innerHTML = item[column].replace(/\n/g, '<br>');  // "\n" を "<br>" に置き換え
    row.appendChild(cell);
  });
  return row;
}

function createTableHead(columns, table) {
  const thead = document.createElement("thead");
  const row = document.createElement("tr");
  columns.forEach(column => {
    const th = document.createElement("th");
    th.textContent = column;
    row.appendChild(th);
  });
  thead.appendChild(row);
  table.insertBefore(thead, table.firstChild);
}

function displayItemsForType(items, tableBody, filter, columns) {
  tableBody.innerHTML = "";
  items.forEach(item => {
    if (filter === item.type || filter === "") {
      const row = createRow(item, columns);
      tableBody.appendChild(row);
    }
  });
}

function toggleTableVisibility(type, filter) {
  const table = document.getElementById(type + "item-table");
  if (filter === type || filter === "") {
    table.style.display = "table";
  } else {
    table.style.display = "none";
  }
}

window.addEventListener("load", () => {
  const buttons = document.querySelectorAll('button[name="filter"]');
  const tableBodies = {
    mythic: document.getElementById("mythicitem-table-body"),
    legendary: document.getElementById("legendaryitem-table-body"),
    epic: document.getElementById("epicitem-table-body"),
    basic: document.getElementById("basicitem-table-body"),
    starter: document.getElementById("starteritem-table-body"),
    boots: document.getElementById("bootsitem-table-body"),
    portion: document.getElementById("portionitem-table-body"),
    Word: document.getElementById("Worditem-table-body")
  };

  const columnsForType = {
    mythic: ["name", "effect", "passive", "mythicEffect", "money"],
    legendary: ["name", "effect", "passive", "money"],
    epic: ["name", "effect", "passive", "money"],
    basic: ["name", "effect", "passive", "money"],
    starter: ["name", "effect", "passive", "money"],
    boots: ["name", "effect", "money"],
    portion: ["name", "effect", "money"],
    Word: ["name", "effect", "money"]
  };

  const tableHeaders = {
    mythic: ["ミシックアイテム", "追加効果", "自動＆発動効果", "ミシック効果", "必要ゴールド"],
    legendary: ["レジェンダリーアイテム", "追加効果", "自動＆発動効果", "必要ゴールド"],
    epic: ["エピックアイテム", "追加効果", "自動＆発動効果", "必要ゴールド"],
    basic: ["ベーシックアイテム", "追加効果", "自動＆発動効果", "必要ゴールド"],
    starter: ["スターターアイテム", "追加効果", "自動＆発動効果", "必要ゴールド"],
    boots: ["ブーツ", "追加効果", "必要ゴールド"],
    portion: ["ポーション", "追加効果", "必要ゴールド"],
    Word: ["ワード", "追加効果", "必要ゴールド"]
  };

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      Object.keys(tableBodies).forEach(type => {
        displayItemsForType(window[type + "items"], tableBodies[type], this.value, columnsForType[type]);
        toggleTableVisibility(type, this.value);
      });
    });
  });

  Object.keys(tableBodies).forEach(type => {
    const table = tableBodies[type].parentNode;
    table.id = type + "item-table";
    createTableHead(tableHeaders[type], table);
    displayItemsForType(window[type + "items"], tableBodies[type], "", columnsForType[type]);
  });
});
