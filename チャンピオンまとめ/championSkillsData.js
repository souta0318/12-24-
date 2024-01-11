const championSkills = {
  "アーゴット": {
    "passive": {
      "name": "エコーフレイム",
      "description": "通常攻撃とパージ（Wスキル）の発動時に追加で散弾が発射される"
    },
    "Q": {
      "name": "コラプトシェル",
      "description": "指定地点に弾薬を発射する。指定した範囲の敵にダメージを与える"
    },
    "W": {
      "name": "パージ",
      "description": "最も近くにいる敵に連射攻撃をする。発動中は移動速度が低下する。"
    },
    "E": {
      "name": "ディスデイン",
      "description": "シールドを展開し指定方向に突撃する。敵チャンピオンに当たると後方に投げ飛ばす"
    },
    "R": {
      "name": "デスグラインダー",
      "description": "ドリルを発射する。最初に当たったチャンピオンの体力が一定以下になると再発動可能になり、再発動すると敵を倒すことができる"
    }
  },
  "アーリ": {
    "passive": {
      "name": "生気吸引",
      "description": "敵ミニオンまたはモンスターを９体倒すと体力を回復する。敵チャンピオンからキル、アシストをすると大幅に回復する。"
    },
    "Q": {
      "name": "幻惑のオーブ",
      "description": "往復するオーブを指定方向に投げる。命中した敵に魔法ダメージ（AP）を与える。戻る時に与えるダメージは確定ダメージになる。"
    },
    "W": {
      "name": "フォックスファイア",
      "description": "移動速度が増加し近くにいる敵に自動的に攻撃するオーブを放つ。"
    },
    "E": {
      "name": "チャーム",
      "description": "指定方向に投げキッスを放ち、最初に当たった敵にダメージとチャーム効果を与える。"
    },
    "R": {
      "name": "スピリットラッシュ",
      "description": "指定方向にダッシュしてエネルギーを放ち周囲の敵にダメージを与える。３回発動可能で、敵チャンピオンからキル、アシストを得るとダッシュをする回数が増える。"
    }
  },
  "アイバーン": {
    "passive": {
      "name": "モリノトモダチ",
      "description": "ジャングルのモンスターを攻撃することも攻撃されることもなくなる。モンスターの周りに小さな森を作り完全に成長するとモンスターを逃がして経験値とゴールドを得る事ができる。"
    },
    "Q": {
      "name": "ネッコナゲ",
      "description": "指定方向に魔法のネッコを投げ、当たった敵をスネアにする。味方はスネアになった敵に向かってダッシュで近づくことができる。"
    },
    "W": {
      "name": "シゲミヅクリ",
      "description": "指定地点にブッシュを作り出せる。作り出したブッシュの中にいると通常攻撃に追加ダメージを与える。"
    },
    "E": {
      "name": "タネバクダン",
      "description": "時間経過で爆発するシールドを味方に付与する。爆発が敵に当たるとスロウとダメージを与える"
    },
    "R": {
      "name": "デイジー！",
      "description": "デイジーを召喚する。再発動でデイジーに攻撃、移動を指示できる。"
    }
  },
  "アカリ": {
    "passive": {
      "name": "刺客の刻印",
      "description": "敵チャンピオンにスキルでダメージを与えると周囲に輪が形成される。輪の外にでると次の通常攻撃の射程とダメージが増加する。"
    },
    "Q": {
      "name": "五連苦無",
      "description": "指定方向に５本のくないを投げる。"
    },
    "W": {
      "name": "黄昏の帳",
      "description": "煙幕を張り移動速度が増加する。煙幕の中ではインビジブル状態になる。"
    },
    "E": {
      "name": "翻身手裏剣",
      "description": "広報にバックしながら前方に手裏剣を投げる。手裏剣が敵に当たった場合、再発動でき当たった敵に向かってダッシュしダメージを与える"
    },
    "R": {
      "name": "完遂",
      "description": "指定敵に向かって跳躍し攻撃する。再発動で指定方向にダッシュして攻撃する。"
    }
  },
  "アクシャン": {
    "passive": {
      "name": "ダーティーファイト",
      "description": "敵に３回ダメージを与えると追加ダメージを与える。敵チャンピオンだった場合シールドを獲得する。　通常攻撃時に追加で攻撃をする。追加の攻撃をキャンセルすると移動速度が増加する。"
    },
    "Q": {
      "name": "報復のブーメラン",
      "description": "往復するブーメランを指定方向に投げる。敵に命中する毎にブーメランの射程が伸びる。"
    },
    "W": {
      "name": "義賊の流儀",
      "description": "自動効果：味方チャンピオンを倒した敵チャンピオンをマークする。マークした敵チャンピオンを倒すと追加でゴールドを獲得し、即座に味方を復活させる。発動するとカモフラージュ状態になり、マークしている敵に向かっている間移動速度とマナの自動回復が増加する。"
    },
    "E": {
      "name": "ヒーロースイング",
      "description": "地形に向けてフックを発射し、スイングしながら最も近い敵に攻撃を繰り返し行う。"
    },
    "R": {
      "name": "当然の報い",
      "description": "指定したチャンピオンをロックオンしチャージをする。チャージが完了すると弾を発射し、最初に命中した敵にダメージを与える。"
    }
  },
  "アジール": {
    "passive": {
      "name": "シュリーマの遺産",
      "description": "壊れたタワーの残骸から一時的に「太陽の円盤」を召喚する"
    },
    "Q": {
      "name": "征服の勅命",
      "description": "指定地点に砂塵兵を集結させる。砂塵兵は進路上でぶつかった敵にスロウとダメージを与える。"
    },
    "W": {
      "name": "目覚めよ",
      "description": "アジールの変わりに攻撃する砂塵兵を召喚する。"
    },
    "E": {
      "name": "流砂の衝撃",
      "description": "シールドを獲得し指定した地点の砂塵兵に向かってダッシュする。"
    },
    "R": {
      "name": "皇帝の分砂嶺",
      "description": "兵士たちの壁を召喚する。兵士たちは前方に突進し、当たった敵にダメージとノックバックを与える。兵士たちは壁となり敵を防ぐようになる。"
    }
  },
  "アッシュ": {
    "passive": {
      "name": "フロストショット",
      "description": "通常攻撃が命中した対象にスロウを与える。スロウ中の敵に通常攻撃をするとダメージが増加する。　アッシュのクリティカルは追加ダメージを与えない代わりに、より強力なスロウになる。"
    },
    "Q": {
      "name": "レンジャーフォーカス",
      "description": "通常攻撃でスタックをためる。スタックが最大になると発動可能になる。発動すると攻撃速度が増加し、通常攻撃が強化される。"
    },
    "W": {
      "name": "ボレー",
      "description": "扇状に矢を発射し、ダメージとスロウを与える。"
    },
    "E": {
      "name": "スカウトホーク",
      "description": "マップの指定した地点へ「ホークスピリット」を放ち、視界を確保する。"
    },
    "R": {
      "name": "クリスタルアロー",
      "description": "氷の矢を放つ。命中した敵にダメージとスタンを与える。"
    }
  },
  "アニー": {
    "passive": {
      "name": "火遊びだいすき",
      "description": "４回スキルを使用すると次の攻撃スキルが当たった敵をスタンさせる"
    },
    "Q": {
      "name": "ファイアボール",
      "description": "指定した対象にダメージを与える。このスキルで敵を倒すと消費したマナが回復し、クールダウンが短縮する。"
    },
    "W": {
      "name": "バーニングファイア",
      "description": "扇形の炎を放ち、範囲内の敵にダメージを与える。"
    },
    "E": {
      "name": "モルテンシールド",
      "description": "自身または味方にシールドつけ、移動速度を増加させる。シールド付与中攻撃をしてきた敵にダメージを与える。"
    },
    "R": {
      "name": "やっちゃえ！ティバーズ！",
      "description": "クマのティバーズを召喚する。召喚した範囲の敵にダメージを与える。ティバーズは敵を攻撃し身にまとっている炎で敵に継続ダメージを与える。"
    }
  },
  "アニビア": {
    "passive": {
      "name": "再誕",
      "description": "力尽きると、体力が最大の状態で卵に戻る。一定時間たつと復活する。"
    },
    "Q": {
      "name": "フラッシュフロスト",
      "description": "氷の塊を指定した方向に放つ、最大距離か再発動で敵に当てるとスタンとダメージを与える"
    },
    "W": {
      "name": "アイスウォール",
      "description": "氷の壁を作り移動を妨害する。数秒後に消滅する。"
    },
    "E": {
      "name": "フロストバイト",
      "description": "氷の柱でダメージを与える。「フラッシュフロスト」か最大範囲の「ブリザード」でダメージを受けた敵には２倍のダメージを与える。"
    },
    "R": {
      "name": "ブリザード",
      "description": "指定した範囲に激しい吹雪を召喚し、継続ダメージを与える"
    }
  },
  "アフェリオス": {
    "passive": {
      "name": "殺す者と導く者",
      "description": "アフェリオスは妹が作った５種類の武器を使う。一度に２つの武器を持ちメインハンドとオフハンドに装備をする。５つの武器にはそれぞれ独自の攻撃とスキルがある。通常攻撃とスキルは弾薬を消費して攻撃する。弾薬が切れるとその武器を捨てて次の武器へ持ち変える。"
    },
    "Q": {
      "name": "武器ごとのスキル",
      "description": "メインハンドの武器に応じて５つの発動スキルがある。：キャリブラム（ライフル）長射程攻撃でマークをして、再度、長射程攻撃をする。\nセヴェラム（鎌形ピストル）素早く走りながら近くの敵を２種類の武器で攻撃する。\nグラヴィタム（キャノン）この武器で攻撃した敵すべてにスネアを付与する。\nインファーナム（火炎放射器）扇形範囲内の敵に炎を浴びせ、オフハンド武器で攻撃する。\nクレッシェンダム（チャクラム）オフハンド武器を搭載したセントリーを設置する。"
    },
    "W": {
      "name": "フェーズ",
      "description": "メインハンドとオフハンドを切り替える"
    },
    "E": {
      "name": "武器キューシステム",
      "description": "次に渡される武器が表示される。武器の登場順番は固定されている。"
    },
    "R": {
      "name": "月光の祈り",
      "description": "指定した方向に月光のエネルギーを発射する。敵チャンピオンに当たると爆発する。メインハンドの武器に応じて異なる効果を発動する。"
    }
  },
  "アムム": {
    "passive": {
      "name": "呪いの手",
      "description": "通常攻撃で敵に「呪い」をかける。呪われた対象は、魔法ダメージを受ける際に追加で確定ダメージを受ける。"
    },
    "Q": {
      "name": "絡みつく包帯",
      "description": "指定方向に包帯を投げつける。敵に当たるとスタンとダメージを与え、敵に素早く移動する。"
    },
    "W": {
      "name": "めそめそ",
      "description": "涙を流し、涙に触れた敵に最大体力の一定割合のダメージを毎秒与え「呪い」の効果時間を更新する。"
    },
    "E": {
      "name": "だだっこ",
      "description": "敵から受ける物理ダメージを恒久的に軽減する。発動すると周囲の敵にダメージを与える。自身が攻撃を受けるたびに「だだっこ」のクールダウンが短縮される。"
    },
    "R": {
      "name": "めそめそミイラの呪い",
      "description": "周囲の敵を包帯で拘束して「呪い」を付与する。ダメージとスタンを与える。"
    }
  },
  "アリスター": {
    "passive": {
      "name": "戦士の咆哮",
      "description": "敵チャンピオンをスタンか弾き飛ばしたとき、または周囲で敵が倒されると「咆哮」がチャージされる。最大までチャージされると、自身及び周囲の味方を回復させる。"
    },
    "Q": {
      "name": "圧砕",
      "description": "地面をたたきつけて周りの敵にダメージを与えてノックアップさせる。"
    },
    "W": {
      "name": "頭突き",
      "description": "指定した対象を頭突きしダメージとノックバックさせる。"
    },
    "E": {
      "name": "踏破",
      "description": "敵のチャンピオンにダメージを与える。敵にダメージを与えるとスタックを獲得する。スタックが最大になると次の通常攻撃に追加ダメージとスタンを与える。"
    },
    "R": {
      "name": "不屈の意志",
      "description": "自身についている行動妨害効果（スネアなど）をすべて解除する。効果時間中は受けるダメージを軽減する。"
    }
  },
  "イブリン": {
    "passive": {
      "name": "妖魔の影",
      "description": "戦闘中以外は影に包まれ体力が低下している場合は回復する。６レベル以降はカモフラージュを獲得する。"
    },
    "Q": {
      "name": "ヘイトスパイク",
      "description": "鞭を振り最初に当たった敵にダメージを与える。その後３回貫通するトゲを近くの敵に放つ。"
    },
    "W": {
      "name": "アリュール",
      "description": "指定した敵に呪いをかける。少ししてから通常攻撃、スキルを当てるとチャームになり、魔法防御を下げる。"
    },
    "E": {
      "name": "ウィップラッシュ",
      "description": "対象を鞭で打ちダメージを与える。その後移動速度が上昇する。"
    },
    "R": {
      "name": "ラストカレス",
      "description": "短い時間対象指定不可になり、正面の敵にダメージを与えてから後方にワープする。"
    }
  },
  "イラオイ": {
    "passive": {
      "name": "旧神の預言者",
      "description": "周囲の地形に一定時間ごとに触手を発生させる。触手の攻撃が命中すると敵にダメージを与える。敵チャンピオンだった場合イラオイが回復する。"
    },
    "Q": {
      "name": "触手の鉄槌",
      "description": "自動発動効果：触手のダメージが増加する。　発動効果：触手で指定した方向をたたきつける。"
    },
    "W": {
      "name": "過酷なる教訓",
      "description": "次の通常攻撃で飛び掛かり殴り、ダメージを与える。周囲の触手も対象を攻撃する。"
    },
    "E": {
      "name": "魂の試練",
      "description": "敵から魂を引きずり出し自身の前に持ってくる。魂が受けたダメージの一定割合を敵チャンピオンに与える。敵チャンピオンが遠くに離れるか、魂を倒すと敵チャンピオンの周囲に触手が発生する。"
    },
    "R": {
      "name": "信仰震",
      "description": "地面をたたきつけ衝撃波を生み出す、範囲にいる敵チャンピオンごとに触手が１本発生する。"
    }
  },
  "イレリア": {
    "passive": {
      "name": "パッシブ名",
      "description": "イレリアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "イレリアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "イレリアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "イレリアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "イレリアのRスキル説明文"
    }
  },
  "ヴァイ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヴァイのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヴァイのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヴァイのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヴァイのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヴァイのRスキル説明文"
    }
  },
  "ヴァルス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヴァルスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヴァルスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヴァルスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヴァルスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヴァルスのRスキル説明文"
    }
  },
  "ヴィエゴ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヴィエゴのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヴィエゴのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヴィエゴのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヴィエゴのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヴィエゴのRスキル説明文"
    }
  },
  "ウーコン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ウーコンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ウーコンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ウーコンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ウーコンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ウーコンのRスキル説明文"
    }
  },
  "ヴェイン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヴェインのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヴェインのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヴェインのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヴェインのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヴェインのRスキル説明文"
    }
  },
  "ヴェックス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヴェックスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヴェックスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヴェックスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヴェックスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヴェックスのRスキル説明文"
    }
  },
  "ヴェル＝コズ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヴェル＝コズのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヴェル＝コズのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヴェル＝コズのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヴェル＝コズのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヴェル＝コズのRスキル説明文"
    }
  },
  "ウディア": {
    "passive": {
      "name": "パッシブ名",
      "description": "ウディアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ウディアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ウディアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ウディアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ウディアのRスキル説明文"
    }
  },
  "エイトロックス": {
    "passive": {
      "name": "パッシブ名",
      "description": "エイトロックスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "エイトロックスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "エイトロックスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "エイトロックスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "エイトロックスのRスキル説明文"
    }
  },
  "エコー": {
    "passive": {
      "name": "パッシブ名",
      "description": "エコーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "エコーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "エコーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "エコーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "エコーのRスキル説明文"
    }
  },
  "エズリアル": {
    "passive": {
      "name": "パッシブ名",
      "description": "エズリアルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "エズリアルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "エズリアルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "エズリアルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "エズリアルのRスキル説明文"
    }
  },
  "エリス": {
    "passive": {
      "name": "パッシブ名",
      "description": "エリスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "エリスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "エリスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "エリスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "エリスのRスキル説明文"
    }
  },
  "オーン": {
    "passive": {
      "name": "パッシブ名",
      "description": "オーンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "オーンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "オーンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "オーンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "オーンのRスキル説明文"
    }
  },
  "オラフ": {
    "passive": {
      "name": "パッシブ名",
      "description": "オラフのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "オラフのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "オラフのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "オラフのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "オラフのRスキル説明文"
    }
  },
  "オリアナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "オリアナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "オリアナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "オリアナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "オリアナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "オリアナのRスキル説明文"
    }
  },
  "オレリオン・ソル": {
    "passive": {
      "name": "パッシブ名",
      "description": "オレリオン・ソルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "オレリオン・ソルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "オレリオン・ソルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "オレリオン・ソルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "オレリオン・ソルのRスキル説明文"
    }
  },
  "カ＝ジックス": {
    "passive": {
      "name": "パッシブ名",
      "description": "カ＝ジックスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カ＝ジックスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カ＝ジックスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カ＝ジックスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カ＝ジックスのRスキル説明文"
    }
  },
  "カーサス": {
    "passive": {
      "name": "パッシブ名",
      "description": "カーサスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カーサスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カーサスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カーサスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カーサスのRスキル説明文"
    }
  },
  "カイ＝サ": {
    "passive": {
      "name": "パッシブ名",
      "description": "カイ＝サのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カイ＝サのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カイ＝サのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カイ＝サのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カイ＝サのRスキル説明文"
    }
  },
  "カサディン": {
    "passive": {
      "name": "パッシブ名",
      "description": "カサディンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カサディンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カサディンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カサディンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カサディンのRスキル説明文"
    }
  },
  "カ・サンテ": {
    "passive": {
      "name": "パッシブ名",
      "description": "カ・サンテのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カ・サンテのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カ・サンテのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カ・サンテのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カ・サンテのRスキル説明文"
    }
  },
  "カシオペア": {
    "passive": {
      "name": "パッシブ名",
      "description": "カシオペアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カシオペアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カシオペアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カシオペアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カシオペアのRスキル説明文"
    }
  },
  "カタリナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "カタリナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カタリナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カタリナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カタリナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カタリナのRスキル説明文"
    }
  },
  "カミール": {
    "passive": {
      "name": "パッシブ名",
      "description": "カミールのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カミールのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カミールのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カミールのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カミールのRスキル説明文"
    }
  },
  "ガリオ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ガリオのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ガリオのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ガリオのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ガリオのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ガリオのRスキル説明文"
    }
  },
  "カリスタ": {
    "passive": {
      "name": "パッシブ名",
      "description": "カリスタのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カリスタのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カリスタのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カリスタのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カリスタのRスキル説明文"
    }
  },
  "カルマ": {
    "passive": {
      "name": "パッシブ名",
      "description": "カルマのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "カルマのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "カルマのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "カルマのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "カルマのRスキル説明文"
    }
  },
  "ガレン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ガレンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ガレンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ガレンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ガレンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ガレンのRスキル説明文"
    }
  },
  "ガングプランク": {
    "passive": {
      "name": "パッシブ名",
      "description": "ガングプランクのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ガングプランクのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ガングプランクのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ガングプランクのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ガングプランクのRスキル説明文"
    }
  },
  "キヤナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "キヤナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "キヤナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "キヤナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "キヤナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "キヤナのRスキル説明文"
    }
  },
  "キンドレッド": {
    "passive": {
      "name": "パッシブ名",
      "description": "キンドレッドのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "キンドレッドのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "キンドレッドのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "キンドレッドのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "キンドレッドのRスキル説明文"
    }
  },
  "クイン": {
    "passive": {
      "name": "パッシブ名",
      "description": "クインのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "クインのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "クインのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "クインのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "クインのRスキル説明文"
    }
  },
  "グウェン": {
    "passive": {
      "name": "パッシブ名",
      "description": "グウェンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "グウェンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "グウェンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "グウェンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "グウェンのRスキル説明文"
    }
  },
  "グラガス": {
    "passive": {
      "name": "パッシブ名",
      "description": "グラガスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "グラガスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "グラガスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "グラガスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "グラガスのRスキル説明文"
    }
  },
  "グレイブス": {
    "passive": {
      "name": "パッシブ名",
      "description": "グレイブスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "グレイブスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "グレイブスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "グレイブスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "グレイブスのRスキル説明文"
    }
  },
  "クレッド": {
    "passive": {
      "name": "パッシブ名",
      "description": "クレッドのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "クレッドのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "クレッドのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "クレッドのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "クレッドのRスキル説明文"
    }
  },
  "ケイトリン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ケイトリンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ケイトリンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ケイトリンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ケイトリンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ケイトリンのRスキル説明文"
    }
  },
  "ケイル": {
    "passive": {
      "name": "パッシブ名",
      "description": "ケイルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ケイルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ケイルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ケイルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ケイルのRスキル説明文"
    }
  },
  "ケイン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ケインのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ケインのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ケインのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ケインのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ケインのRスキル説明文"
    }
  },
  "ケネン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ケネンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ケネンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ケネンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ケネンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ケネンのRスキル説明文"
    }
  },
  "コーキ": {
    "passive": {
      "name": "パッシブ名",
      "description": "コーキのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "コーキのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "コーキのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "コーキのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "コーキのRスキル説明文"
    }
  },
  "コグ＝マウ": {
    "passive": {
      "name": "パッシブ名",
      "description": "コグ＝マウのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "コグ＝マウのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "コグ＝マウのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "コグ＝マウのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "コグ＝マウのRスキル説明文"
    }
  },
  "サイオン": {
    "passive": {
      "name": "パッシブ名",
      "description": "サイオンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "サイオンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "サイオンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "サイオンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "サイオンのRスキル説明文"
    }
  },
  "ザイラ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ザイラのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ザイラのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ザイラのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ザイラのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ザイラのRスキル説明文"
    }
  },
  "サイラス": {
    "passive": {
      "name": "パッシブ名",
      "description": "サイラスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "サイラスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "サイラスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "サイラスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "サイラスのRスキル説明文"
    }
  },
  "ザック": {
    "passive": {
      "name": "パッシブ名",
      "description": "ザックのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ザックのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ザックのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ザックのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ザックのRスキル説明文"
    }
  },
  "サミーラ": {
    "passive": {
      "name": "パッシブ名",
      "description": "サミーラのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "サミーラのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "サミーラのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "サミーラのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "サミーラのRスキル説明文"
    }
  },
  "ザヤ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ザヤのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ザヤのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ザヤのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ザヤのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ザヤのRスキル説明文"
    }
  },
  "シヴァーナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "シヴァーナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シヴァーナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シヴァーナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シヴァーナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シヴァーナのRスキル説明文"
    }
  },
  "シヴィア": {
    "passive": {
      "name": "パッシブ名",
      "description": "シヴィアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シヴィアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シヴィアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シヴィアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シヴィアのRスキル説明文"
    }
  },
  "ジェイス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジェイスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジェイスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジェイスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジェイスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジェイスのRスキル説明文"
    }
  },
  "シェン": {
    "passive": {
      "name": "パッシブ名",
      "description": "シェンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シェンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シェンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シェンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シェンのRスキル説明文"
    }
  },
  "ジグス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジグスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジグスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジグスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジグスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジグスのRスキル説明文"
    }
  },
  "ジャーバンⅣ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジャーバンⅣのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジャーバンⅣのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジャーバンⅣのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジャーバンⅣのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジャーバンⅣのRスキル説明文"
    }
  },
  "シャコ": {
    "passive": {
      "name": "パッシブ名",
      "description": "シャコのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シャコのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シャコのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シャコのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シャコのRスキル説明文"
    }
  },
  "ジャックス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジャックスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジャックスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジャックスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジャックスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジャックスのRスキル説明文"
    }
  },
  "ジャンナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジャンナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジャンナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジャンナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジャンナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジャンナのRスキル説明文"
    }
  },
  "ジリアン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジリアンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジリアンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジリアンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジリアンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジリアンのRスキル説明文"
    }
  },
  "ジン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジンのRスキル説明文"
    }
  },
  "ジンクス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ジンクスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ジンクスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ジンクスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ジンクスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ジンクスのRスキル説明文"
    }
  },
  "シンジド": {
    "passive": {
      "name": "パッシブ名",
      "description": "シンジドのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シンジドのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シンジドのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シンジドのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シンジドのRスキル説明文"
    }
  },
  "シン・ジャオ": {
    "passive": {
      "name": "パッシブ名",
      "description": "シン・ジャオのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シン・ジャオのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シン・ジャオのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シン・ジャオのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シン・ジャオのRスキル説明文"
    }
  },
  "シンドラ": {
    "passive": {
      "name": "パッシブ名",
      "description": "シンドラのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "シンドラのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "シンドラのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "シンドラのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "シンドラのRスキル説明文"
    }
  },
  "スウェイン": {
    "passive": {
      "name": "パッシブ名",
      "description": "スウェインのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "スウェインのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "スウェインのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "スウェインのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "スウェインのRスキル説明文"
    }
  },
  "スカーナー": {
    "passive": {
      "name": "パッシブ名",
      "description": "スカーナーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "スカーナーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "スカーナーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "スカーナーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "スカーナーのRスキル説明文"
    }
  },
  "スレッシュ": {
    "passive": {
      "name": "パッシブ名",
      "description": "スレッシュのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "スレッシュのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "スレッシュのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "スレッシュのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "スレッシュのRスキル説明文"
    }
  },
  "セジュアニ": {
    "passive": {
      "name": "パッシブ名",
      "description": "セジュアニのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "セジュアニのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "セジュアニのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "セジュアニのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "セジュアニのRスキル説明文"
    }
  },
  "セト": {
    "passive": {
      "name": "パッシブ名",
      "description": "セトのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "セトのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "セトのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "セトのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "セトのRスキル説明文"
    }
  },
  "ゼド": {
    "passive": {
      "name": "パッシブ名",
      "description": "ゼドのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ゼドのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ゼドのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ゼドのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ゼドのRスキル説明文"
    }
  },
  "セナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "セナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "セナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "セナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "セナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "セナのRスキル説明文"
    }
  },
  "ゼラス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ゼラスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ゼラスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ゼラスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ゼラスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ゼラスのRスキル説明文"
    }
  },
  "セラフィーン": {
    "passive": {
      "name": "パッシブ名",
      "description": "セラフィーンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "セラフィーンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "セラフィーンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "セラフィーンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "セラフィーンのRスキル説明文"
    }
  },
  "ゼリ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ゼリのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ゼリのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ゼリのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ゼリのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ゼリのRスキル説明文"
    }
  },
  "ゾーイ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ゾーイのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ゾーイのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ゾーイのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ゾーイのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ゾーイのRスキル説明文"
    }
  },
  "ソナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ソナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ソナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ソナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ソナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ソナのRスキル説明文"
    }
  },
  "ソラカ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ソラカのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ソラカのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ソラカのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ソラカのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ソラカのRスキル説明文"
    }
  },
  "ダイアナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ダイアナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ダイアナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ダイアナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ダイアナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ダイアナのRスキル説明文"
    }
  },
  "タム・ケンチ": {
    "passive": {
      "name": "パッシブ名",
      "description": "タム・ケンチのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "タム・ケンチのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "タム・ケンチのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "タム・ケンチのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "タム・ケンチのRスキル説明文"
    }
  },
  "ダリウス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ダリウスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ダリウスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ダリウスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ダリウスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ダリウスのRスキル説明文"
    }
  },
  "タリック": {
    "passive": {
      "name": "パッシブ名",
      "description": "タリックのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "タリックのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "タリックのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "タリックのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "タリックのRスキル説明文"
    }
  },
  "タリヤ": {
    "passive": {
      "name": "パッシブ名",
      "description": "タリヤのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "タリヤのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "タリヤのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "タリヤのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "タリヤのRスキル説明文"
    }
  },
  "タロン": {
    "passive": {
      "name": "パッシブ名",
      "description": "タロンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "タロンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "タロンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "タロンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "タロンのRスキル説明文"
    }
  },
  "チョ＝ガス": {
    "passive": {
      "name": "パッシブ名",
      "description": "チョ＝ガスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "チョ＝ガスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "チョ＝ガスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "チョ＝ガスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "チョ＝ガスのRスキル説明文"
    }
  },
  "ツイステッド・フェイト": {
    "passive": {
      "name": "パッシブ名",
      "description": "ツイステッド・フェイトのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ツイステッド・フェイトのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ツイステッド・フェイトのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ツイステッド・フェイトのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ツイステッド・フェイトのRスキル説明文"
    }
  },
  "ティーモ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ティーモのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ティーモのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ティーモのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ティーモのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ティーモのRスキル説明文"
    }
  },
  "トゥイッチ": {
    "passive": {
      "name": "パッシブ名",
      "description": "トゥイッチのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "トゥイッチのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "トゥイッチのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "トゥイッチのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "トゥイッチのRスキル説明文"
    }
  },
  "ドクター・ムンド": {
    "passive": {
      "name": "パッシブ名",
      "description": "ドクター・ムンドのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ドクター・ムンドのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ドクター・ムンドのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ドクター・ムンドのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ドクター・ムンドのRスキル説明文"
    }
  },
  "トランドル": {
    "passive": {
      "name": "パッシブ名",
      "description": "トランドルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "トランドルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "トランドルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "トランドルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "トランドルのRスキル説明文"
    }
  },
  "トリスターナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "トリスターナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "トリスターナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "トリスターナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "トリスターナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "トリスターナのRスキル説明文"
    }
  },
  "トリンダメア": {
    "passive": {
      "name": "パッシブ名",
      "description": "トリンダメアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "トリンダメアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "トリンダメアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "トリンダメアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "トリンダメアのRスキル説明文"
    }
  },
  "ドレイブン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ドレイブンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ドレイブンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ドレイブンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ドレイブンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ドレイブンのRスキル説明文"
    }
  },
  "ナー": {
    "passive": {
      "name": "パッシブ名",
      "description": "ナーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ナーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ナーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ナーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ナーのRスキル説明文"
    }
  },
  "ナサス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ナサスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ナサスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ナサスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ナサスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ナサスのRスキル説明文"
    }
  },
  "ナフィーリ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ナフィーリのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ナフィーリのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ナフィーリのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ナフィーリのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ナフィーリのRスキル説明文"
    }
  },
  "ナミ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ナミのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ナミのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ナミのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ナミのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ナミのRスキル説明文"
    }
  },
  "ニーコ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ニーコのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ニーコのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ニーコのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ニーコのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ニーコのRスキル説明文"
    }
  },
  "ニーラ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ニーラのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ニーラのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ニーラのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ニーラのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ニーラのRスキル説明文"
    }
  },
  "ニダリー": {
    "passive": {
      "name": "パッシブ名",
      "description": "ニダリーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ニダリーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ニダリーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ニダリーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ニダリーのRスキル説明文"
    }
  },
  "ヌヌ＆ウィルンプ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヌヌ＆ウィルンプのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヌヌ＆ウィルンプのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヌヌ＆ウィルンプのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヌヌ＆ウィルンプのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヌヌ＆ウィルンプのRスキル説明文"
    }
  },
  "ノーチラス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ノーチラスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ノーチラスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ノーチラスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ノーチラスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ノーチラスのRスキル説明文"
    }
  },
  "ノクターン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ノクターンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ノクターンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ノクターンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ノクターンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ノクターンのRスキル説明文"
    }
  },
  "バード": {
    "passive": {
      "name": "パッシブ名",
      "description": "バードのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "バードのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "バードのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "バードのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "バードのRスキル説明文"
    }
  },
  "パイク": {
    "passive": {
      "name": "パッシブ名",
      "description": "パイクのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "パイクのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "パイクのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "パイクのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "パイクのRスキル説明文"
    }
  },
  "ハイマーディンガー": {
    "passive": {
      "name": "パッシブ名",
      "description": "ハイマーディンガーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ハイマーディンガーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ハイマーディンガーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ハイマーディンガーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ハイマーディンガーのRスキル説明文"
    }
  },
  "パンテオン": {
    "passive": {
      "name": "パッシブ名",
      "description": "パンテオンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "パンテオンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "パンテオンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "パンテオンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "パンテオンのRスキル説明文"
    }
  },
  "ビクター": {
    "passive": {
      "name": "パッシブ名",
      "description": "ビクターのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ビクターのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ビクターのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ビクターのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ビクターのRスキル説明文"
    }
  },
  "フィオラ": {
    "passive": {
      "name": "パッシブ名",
      "description": "フィオラのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "フィオラのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "フィオラのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "フィオラのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "フィオラのRスキル説明文"
    }
  },
  "フィズ": {
    "passive": {
      "name": "パッシブ名",
      "description": "フィズのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "フィズのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "フィズのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "フィズのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "フィズのRスキル説明文"
    }
  },
  "フィドルスティック": {
    "passive": {
      "name": "パッシブ名",
      "description": "フィドルスティックのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "フィドルスティックのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "フィドルスティックのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "フィドルスティックのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "フィドルスティックのRスキル説明文"
    }
  },
  "フェイ": {
    "passive": {
      "name": "パッシブ名",
      "description": "フェイのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "フェイのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "フェイのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "フェイのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "フェイのRスキル説明文"
    }
  },
  "ブライアー": {
    "passive": {
      "name": "パッシブ名",
      "description": "ブライアーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ブライアーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ブライアーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ブライアーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ブライアーのRスキル説明文"
    }
  },
  "ブラウム": {
    "passive": {
      "name": "パッシブ名",
      "description": "ブラウムのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ブラウムのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ブラウムのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ブラウムのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ブラウムのRスキル説明文"
    }
  },
  "ブラッドミア": {
    "passive": {
      "name": "パッシブ名",
      "description": "ブラッドミアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ブラッドミアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ブラッドミアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ブラッドミアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ブラッドミアのRスキル説明文"
    }
  },
  "ブランド": {
    "passive": {
      "name": "パッシブ名",
      "description": "ブランドのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ブランドのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ブランドのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ブランドのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ブランドのRスキル説明文"
    }
  },
  "ブリッツクランク": {
    "passive": {
      "name": "パッシブ名",
      "description": "ブリッツクランクのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ブリッツクランクのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ブリッツクランクのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ブリッツクランクのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ブリッツクランクのRスキル説明文"
    }
  },
  "ベイガー": {
    "passive": {
      "name": "パッシブ名",
      "description": "ベイガーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ベイガーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ベイガーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ベイガーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ベイガーのRスキル説明文"
    }
  },
  "へカリム": {
    "passive": {
      "name": "パッシブ名",
      "description": "へカリムのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "へカリムのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "へカリムのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "へカリムのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "へカリムのRスキル説明文"
    }
  },
  "ベル＝ヴェス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ベル＝ヴェスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ベル＝ヴェスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ベル＝ヴェスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ベル＝ヴェスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ベル＝ヴェスのRスキル説明文"
    }
  },
  "ポッピー": {
    "passive": {
      "name": "パッシブ名",
      "description": "ポッピーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ポッピーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ポッピーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ポッピーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ポッピーのRスキル説明文"
    }
  },
  "ボリベア": {
    "passive": {
      "name": "パッシブ名",
      "description": "ボリベアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ボリベアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ボリベアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ボリベアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ボリベアのRスキル説明文"
    }
  },
  "マオカイ": {
    "passive": {
      "name": "パッシブ名",
      "description": "マオカイのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "マオカイのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "マオカイのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "マオカイのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "マオカイのRスキル説明文"
    }
  },
  "マスター・イー": {
    "passive": {
      "name": "パッシブ名",
      "description": "マスター・イーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "マスター・イーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "マスター・イーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "マスター・イーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "マスター・イーのRスキル説明文"
    }
  },
  "マルザハール": {
    "passive": {
      "name": "パッシブ名",
      "description": "マルザハールのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "マルザハールのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "マルザハールのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "マルザハールのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "マルザハールのRスキル説明文"
    }
  },
  "マルファイト": {
    "passive": {
      "name": "パッシブ名",
      "description": "マルファイトのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "マルファイトのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "マルファイトのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "マルファイトのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "マルファイトのRスキル説明文"
    }
  },
  "ミス・フォーチュン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ミス・フォーチュンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ミス・フォーチュンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ミス・フォーチュンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ミス・フォーチュンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ミス・フォーチュンのRスキル説明文"
    }
  },
  "ミリオ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ミリオのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ミリオのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ミリオのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ミリオのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ミリオのRスキル説明文"
    }
  },
  "モルガナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "モルガナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "モルガナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "モルガナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "モルガナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "モルガナのRスキル説明文"
    }
  },
  "モルデカイザー": {
    "passive": {
      "name": "パッシブ名",
      "description": "モルデカイザーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "モルデカイザーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "モルデカイザーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "モルデカイザーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "モルデカイザーのRスキル説明文"
    }
  },
  "ヤスオ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヤスオのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヤスオのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヤスオのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヤスオのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヤスオのRスキル説明文"
    }
  },
  "ユーミ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ユーミのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ユーミのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ユーミのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ユーミのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ユーミのRスキル説明文"
    }
  },
  "ヨネ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヨネのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヨネのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヨネのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヨネのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヨネのRスキル説明文"
    }
  },
  "ヨリック": {
    "passive": {
      "name": "パッシブ名",
      "description": "ヨリックのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ヨリックのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ヨリックのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ヨリックのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ヨリックのRスキル説明文"
    }
  },
  "ライズ": {
    "passive": {
      "name": "パッシブ名",
      "description": "ライズのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ライズのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ライズのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ライズのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ライズのRスキル説明文"
    }
  },
  "ラカン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ラカンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ラカンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ラカンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ラカンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ラカンのRスキル説明文"
    }
  },
  "ラックス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ラックスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ラックスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ラックスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ラックスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ラックスのRスキル説明文"
    }
  },
  "ラムス": {
    "passive": {
      "name": "パッシブ名",
      "description": "ラムスのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ラムスのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ラムスのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ラムスのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ラムスのRスキル説明文"
    }
  },
  "ランブル": {
    "passive": {
      "name": "パッシブ名",
      "description": "ランブルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ランブルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ランブルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ランブルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ランブルのRスキル説明文"
    }
  },
  "リー・シン": {
    "passive": {
      "name": "パッシブ名",
      "description": "リー・シンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "リー・シンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "リー・シンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "リー・シンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "リー・シンのRスキル説明文"
    }
  },
  "リヴェン": {
    "passive": {
      "name": "パッシブ名",
      "description": "リヴェンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "リヴェンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "リヴェンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "リヴェンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "リヴェンのRスキル説明文"
    }
  },
  "リサンドラ": {
    "passive": {
      "name": "パッシブ名",
      "description": "リサンドラのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "リサンドラのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "リサンドラのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "リサンドラのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "リサンドラのRスキル説明文"
    }
  },
  "リリア": {
    "passive": {
      "name": "パッシブ名",
      "description": "リリアのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "リリアのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "リリアのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "リリアのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "リリアのRスキル説明文"
    }
  },
  "ルシアン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ルシアンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ルシアンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ルシアンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ルシアンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ルシアンのRスキル説明文"
    }
  },
  "ルブラン": {
    "passive": {
      "name": "パッシブ名",
      "description": "ルブランのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ルブランのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ルブランのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ルブランのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ルブランのRスキル説明文"
    }
  },
  "ルル": {
    "passive": {
      "name": "パッシブ名",
      "description": "ルルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "ルルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "ルルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "ルルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "ルルのRスキル説明文"
    }
  },
  "レオナ": {
    "passive": {
      "name": "パッシブ名",
      "description": "レオナのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "レオナのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "レオナのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "レオナのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "レオナのRスキル説明文"
    }
  },
  "レク＝サイ": {
    "passive": {
      "name": "パッシブ名",
      "description": "レク＝サイのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "レク＝サイのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "レク＝サイのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "レク＝サイのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "レク＝サイのRスキル説明文"
    }
  },
  "レナータ・グラスク": {
    "passive": {
      "name": "パッシブ名",
      "description": "レナータ・グラスクのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "レナータ・グラスクのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "レナータ・グラスクのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "レナータ・グラスクのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "レナータ・グラスクのRスキル説明文"
    }
  },
  "レネクトン": {
    "passive": {
      "name": "パッシブ名",
      "description": "レネクトンのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "レネクトンのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "レネクトンのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "レネクトンのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "レネクトンのRスキル説明文"
    }
  },
  "レル": {
    "passive": {
      "name": "パッシブ名",
      "description": "レルのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "レルのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "レルのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "レルのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "レルのRスキル説明文"
    }
  },
  "レンガー": {
    "passive": {
      "name": "見えざる襲撃者",
      "description": "レンガーのパッシブ説明文"
    },
    "Q": {
      "name": "Qスキル名",
      "description": "レンガーのQスキル説明文"
    },
    "W": {
      "name": "Wスキル名",
      "description": "レンガーのWスキル説明文"
    },
    "E": {
      "name": "Eスキル名",
      "description": "レンガーのEスキル説明文"
    },
    "R": {
      "name": "Rスキル名",
      "description": "レンガーのRスキル説明文"
    }
  },
  "ワーウィック": {
    "passive": {
      "name": "永遠の渇き",
      "description": "通常攻撃に追加魔法ダメージを与える。自身の体力が５０％未満になると追加魔法ダメージ分体力を回復する。２５％未満になると回復量が３倍になる。"
    },
    "Q": {
      "name": "野獣の牙",
      "description": "前方にダッシュをして敵を噛みつく、敵の最大体力に応じてダメージを与える。与えたダメージに応じて回復する。"
    },
    "W": {
      "name": "血の追跡",
      "description": "体力が５０％未満の敵を感知し、感知した敵に向かう際の移動速度と攻撃速度が増加する。敵ユニットの体力が２０％未満になるとこの効果が３倍になる。"
    },
    "E": {
      "name": "怒りの咆哮",
      "description": "2.5秒間受けるダメージが減少する。効果終了後または再発動で咆哮を上げて敵を１秒間逃走させる。"
    },
    "R": {
      "name": "絶狼牙連撃",
      "description": "指定方向にジャンプして、最初に接触したチャンピオンに1.5秒のサプレッションとダメージを与える。"
    }
  }
};