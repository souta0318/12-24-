// チャンピオンデータ.jsのlaneを元に、各レーンのチャンピオンデータを取得
const topLaners = champions.filter(champion => champion.lane.includes("TOP"));
const junglers = champions.filter(champion => champion.lane.includes("JG"));
const midLaners = champions.filter(champion => champion.lane.includes("MID"));
const adcs = champions.filter(champion => champion.lane.includes("ADC"));
const supports = champions.filter(champion => champion.lane.includes("SUP"));

// トップレーナーのセレクトボックスを生成
const topLanerSelect = document.getElementById("top-laner");
topLaners.forEach(champion => {
  const option = document.createElement("option");
  option.value = champion.name;
  option.innerHTML = champion.name;
  topLanerSelect.appendChild(option);
});

// ジャングラーのセレクトボックスを生成
const junglerSelect = document.getElementById("jungler");
junglers.forEach(champion => {
  const option = document.createElement("option");
  option.value = champion.name;
  option.innerHTML = champion.name;
  junglerSelect.appendChild(option);
});

// ミッドレーナーのセレクトボックスを生成
const midLanerSelect = document.getElementById("mid-laner");
midLaners.forEach(champion => {
  const option = document.createElement("option");
  option.value = champion.name;
  option.innerHTML = champion.name;
  midLanerSelect.appendChild(option);
});

// ADCのセレクトボックスを生成
const adcSelect = document.getElementById("adc");
adcs.forEach(champion => {
  const option = document.createElement("option");
  option.value = champion.name;
  option.innerHTML = champion.name;
  adcSelect.appendChild(option);
});

// サポートのセレクトボックスを生成
const supportSelect = document.getElementById("support");
supports.forEach(champion => {
  const option = document.createElement("option");
  option.value = champion.name;
  option.innerHTML = champion.name;
  supportSelect.appendChild(option);
});

const form = document.getElementById("team-formation-form");
const teamCompositionTable = document.getElementById("team-composition-table");
const teamCompositionTableBody = teamCompositionTable.querySelector("tbody");
const damageChartContainer = document.getElementById("damage-chart");

// チーム構成結果を表に表示する関数
function displayTeamComposition(teamComposition) {
  // 以前のチーム構成をクリア
  teamCompositionTableBody.innerHTML = "";
  damageChartContainer.innerHTML = "";

  // チーム構成結果を表に追加
  for (const [lane, champion] of Object.entries(teamComposition)) {
    const row = document.createElement("tr");

    const laneCell = document.createElement("td");
    laneCell.textContent = lane;
    row.appendChild(laneCell);

    const championCell = document.createElement("td");
    const selectedChampion = champions.find(obj => obj.name.includes(champion));
    championCell.innerHTML = `${selectedChampion.name}`;
    row.appendChild(championCell);

    const damageCell = document.createElement("td");
    const damageText = `AD: ${selectedChampion.damage.AD}%, AP: ${selectedChampion.damage.AP}%, True: ${selectedChampion.damage.True}%`;
    damageCell.innerHTML = damageText;
    row.appendChild(damageCell);

    teamCompositionTableBody.appendChild(row);
  }

  // チームの合計ダメージ値を計算
  let totalAD = 0;
  let totalAP = 0;
  let totalTrue = 0;

  for (const [_, championName] of Object.entries(teamComposition)) {
    const champion = champions.find(obj => obj.name.includes(championName));

    totalAD += champion.damage.AD;
    totalAP += champion.damage.AP;
    totalTrue += champion.damage.True;
  }

  // 帯グラフの要素を生成
  const chartElement = document.createElement("div");
  chartElement.classList.add("chart");


// ADの帯グラフを生成
const adBar = document.createElement("div");
adBar.classList.add("bar", "ad-bar");
adBar.style.width = `${totalAD}%`;
chartElement.appendChild(adBar);

// APの帯グラフを生成
const apBar = document.createElement("div");
apBar.classList.add("bar", "ap-bar");
apBar.style.width = `${totalAP}%`;
chartElement.appendChild(apBar);

// Trueの帯グラフを生成
const trueBar = document.createElement("div");
trueBar.classList.add("bar", "true-bar");
trueBar.style.width = `${totalTrue}%`;
chartElement.appendChild(trueBar);

  // 帯グラフを表示する要素に追加
  damageChartContainer.appendChild(chartElement);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const topLaner = document.getElementById("top-laner").value;
  const jungler = document.getElementById("jungler").value;
  const midLaner = document.getElementById("mid-laner").value;
  const adc = document.getElementById("adc").value;
  const support = document.getElementById("support").value;

  const selectedChampions = [topLaner, jungler, midLaner, adc, support];
  const selectedChampionSet = new Set(selectedChampions);

  if (selectedChampions.length !== selectedChampionSet.size) {
    const errorText = document.querySelector("#team-formation-form p.error");
    if (!errorText) {
      const errorText = document.createElement("p");
      errorText.classList.add("error");
      errorText.innerHTML = "同じチャンピオンは選択できません";
      form.appendChild(errorText);
    }
    return;
  }

  const teamComposition = {
    "トップレーナー": topLaner,
    "ジャングラー": jungler,
    "ミッドレーナー": midLaner,
    "ADC": adc,
    "サポート": support
  };

  displayTeamComposition(teamComposition);

  console.log(teamComposition);
});