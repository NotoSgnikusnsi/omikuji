const unse = {
  "omikuji": [
    {
      "type": "大吉",
      "message": "今年は最高の幸運が訪れる年です。願い事を叶える絶好のチャンスです。ポジティブなエネルギーを大切にしましょう。"
    },
    {
      "type": "中吉",
      "message": "幸運な年ですが、大吉ほどではありません。努力次第で良い結果が得られるかもしれません。ポジティブな態度を保ちましょう。"
    },
    {
      "type": "小吉",
      "message": "幸運はあるけれども、慎重な行動が必要です。計画を立て、焦らず進めることが重要です。"
    },
    {
      "type": "吉",
      "message": "平凡な一年です。特に大きな変化はありませんが、普段の努力が実を結ぶ年でもあります。"
    },
    {
      "type": "末吉",
      "message": "小さな厄や困難があるかもしれませんが、慎重な行動と冷静な対応で乗り越えることができます。"
    },
    {
      "type": "凶",
      "message": "慎重に行動する必要があります。思わぬトラブルに巻き込まれないように気をつけましょう。"
    },
    {
      "type": "大凶",
      "message": "一年中注意が必要な年です。計画を立て直し、無理な行動は避けるようにしましょう。"
    },
    {
      "type": "宇宙大吉",
      "message": "今年はあなたの幸運が宇宙規模！星座や銀河のエネルギーがあなたに微笑んでいます。思いっきり夢を追いましょう。"
    },
    {
      "type": "未来の中吉",
      "message": "未来の中で幸運が待っています。今年の努力が未来の成功に繋がるかもしれません。未来の自分を信じて進みましょう。"
    },
    {
      "type": "カオス小吉",
      "message": "予測不能な出来事が起こるかもしれませんが、その中にチャンスが潜んでいます。柔軟に対応して新しい可能性を見つけましょう。"
    },
    {
      "type": "幻想吉",
      "message": "夢の中のような幸運をもたらします。非現実的なことでも思い切って挑戦してみてください。"
    },
    {
      "type": "レトロ末吉",
      "message": "過去のノスタルジアが運勢に影響します。昔懐かしい思い出やアイテムが良い出来事をもたらすかもしれません。"
    },
    {
      "type": "クリエイティブ凶",
      "message": "アートや創造的な活動にチャレンジすると良い結果が出るかもしれません。変わったアプローチで物事に取り組んでみてください。"
    },
    {
      "type": "異次元大凶",
      "message": "知っている次元とは異なる不思議な出来事が待ち受けています。冒険心を大切にし、異次元の奥深さを探求してみましょう。"
    }
  ]
}

document.getElementById('button').onclick = async () => {
  await document.body.animate({
    background: ["#fff", "#33ccff"],
  }, 200).finished;
  await document.body.animate({
    background: ["#33ccff", "#000"]
  }, 200).finished;
  await document.body.animate({
    background: ["#000", "#04c150"]
  }, 200).finished;
  await document.body.animate({
    background: ["#04c150", "#001111"]
  }, 200).finished;
  await document.body.animate({
    background: ["#001111", "#fff"]
  }, 200).finished;

  const index = Math.floor(Math.random() * unse.omikuji.length);
  const result = unse.omikuji[index];
  document.getElementById('unse').innerHTML = result.type;
  document.getElementById('message').innerHTML = result.message;
}
