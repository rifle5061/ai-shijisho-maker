const presets = {
  blog: {
    purpose: "検索流入を狙うブログ記事を作りたい",
    writingType: "ブログ記事",
    platform: "はてなブログ / WordPress",
    audience: "初心者・同じ悩みを持つ人",
    tone: "読みやすく、体験談ベース。強すぎず、でも問題点は分かりやすく",
    length: "3000文字前後",
    include: "導入文、見出し、具体例、注意点、まとめ、読者が次に取る行動",
    exclude: "会社名、担当者名、個人情報、断定しすぎる表現、誹謗中傷",
    emphasis: "読者が損しないために確認すべきポイント",
    structure: "導入 → 問題提起 → 体験談/具体例 → 解説 → 注意点 → まとめ",
    output: "HTML形式",
    seo: "SEO強め。タイトル案、見出し、関連キーワードを自然に入れる",
    risk: "断定表現を避ける。体験談として書く",
    cta: "保存する / 自分でも確認する / 関連記事を見る",
    material: "",
    prDisclosure: "yes"
  },
  sns: {
    purpose: "ブログ記事や商品をSNSで宣伝したい",
    writingType: "SNS投稿文",
    platform: "X / Threads / Instagram",
    audience: "短時間で要点だけ知りたい人",
    tone: "短く、分かりやすく、少し引きのある文章",
    length: "X用は140〜280文字程度。Threads用は少し長め",
    include: "結論、読者の悩み、メリット、URLを押したくなる一文",
    exclude: "過剰な煽り、誇大表現、根拠のない断定",
    emphasis: "クリックしたくなる導入と、読み終わった後の行動",
    structure: "問題提起 → 結論 → 一言補足 → URL誘導",
    output: "SNS投稿文を3パターン",
    seo: "ハッシュタグ候補も出す",
    risk: "広告の場合は誤解のない表現にする",
    cta: "記事を見る / 保存する / 詳細を読む",
    material: "",
    prDisclosure: "yes"
  },
  inquiry: {
    purpose: "相手に確認したいことを、感情的に見えない文章にしたい",
    writingType: "問い合わせ文 / 確認文",
    platform: "メール / LINE / 問い合わせフォーム",
    audience: "不動産会社、取引先、担当者、サポート窓口",
    tone: "丁寧、冷静、攻撃的にしない。ただし確認事項は明確にする",
    length: "600〜1200文字程度",
    include: "確認したい点、時系列、こちらの認識、相手に回答してほしい内容",
    exclude: "怒りの表現、決めつけ、脅し、誹謗中傷",
    emphasis: "対立ではなく、認識違い防止と根拠確認が目的",
    structure: "挨拶 → 背景 → 確認事項 → 回答依頼 → 締め",
    output: "そのまま送れる文章",
    seo: "",
    risk: "言った言わないを避けるため、記録に残る文章にする",
    cta: "内訳や根拠を文章で回答してもらう",
    material: "",
    prDisclosure: "no"
  },
  product: {
    purpose: "商品紹介記事や比較記事を作りたい",
    writingType: "商品紹介 / 比較記事",
    platform: "ブログ / アフィリエイト記事 / SNS",
    audience: "購入を迷っている人、比較したい人、初心者",
    tone: "売り込みすぎず、メリットと注意点を分かりやすく",
    length: "2000〜4000文字程度",
    include: "商品の特徴、向いている人、向いていない人、メリット、デメリット、比較表、注意点",
    exclude: "効果保証、誇大表現、根拠のないランキング、嘘のレビュー",
    emphasis: "どんな人に合う商品なのかを明確にする",
    structure: "導入 → 商品概要 → メリット → デメリット → 比較 → おすすめな人 → まとめ",
    output: "HTML形式。比較表も入れる",
    seo: "商品名、口コミ、比較、メリット、デメリットを自然に入れる",
    risk: "価格や条件が変わる可能性を書く",
    cta: "商品ページを見る / 比較記事を見る",
    material: "",
    prDisclosure: "yes"
  }
};

const fields = [
  { id: "purpose", label: "1 目的" },
  { id: "writingType", label: "2 文章の種類" },
  { id: "platform", label: "3 掲載先・使用先" },
  { id: "audience", label: "4 読者・相手" },
  { id: "tone", label: "5 文体・雰囲気" },
  { id: "length", label: "6 文字数・長さ" },
  { id: "include", label: "7 必ず入れる内容" },
  { id: "exclude", label: "8 入れない内容" },
  { id: "emphasis", label: "9 強調したいポイント" },
  { id: "structure", label: "10 構成" },
  { id: "output", label: "11 出力形式" },
  { id: "seo", label: "12 SEO・検索対策" },
  { id: "risk", label: "13 注意点・リスク配慮" },
  { id: "cta", label: "14 読者・相手にしてほしい行動" },
  { id: "material", label: "15 元になる素材" },
  { id: "prDisclosure", label: "16 PR表記" }
];

const inputIds = fields.map((field) => field.id);

function valueOf(id) {
  const element = document.getElementById(id);
  if (!element) return "";
  return element.value.trim();
}

function prText(value) {
  if (value === "yes") {
    return "PR表記あり。広告・アフィリエイトを含む場合は、記事冒頭または広告前にPRであることを明記してください。料金・条件・キャンペーン内容は変わる可能性があるため、断定しすぎないでください。";
  }
  if (value === "no") {
    return "PR表記なし。広告・アフィリエイト表現は入れないでください。";
  }
  return "";
}

function buildPrompt() {
  const sections = [];

  fields.forEach((field) => {
    let value = valueOf(field.id);

    if (field.id === "prDisclosure") {
      value = prText(value);
    }

    // Important: blank fields are skipped completely.
    if (!value) return;

    sections.push(`【${field.label}】\n${value}`);
  });

  const conditionBlock = sections.join("\n\n");

  if (!conditionBlock) {
    return `あなたは文章作成と構成整理に強いプロのライターです。

条件が入力されていないため、作成したい内容を入力してください。`;
  }

  return `あなたは文章作成と構成整理に強いプロのライターです。

以下の条件に従って、目的に合う文章を作成してください。

${conditionBlock}

【作成ルール】
・上記の条件を優先して作成してください。
・入力されていない条件は、自然な範囲で補ってください。
・ただし、具体的な数値・体験談・商品名・事実関係は勝手に作らないでください。
・事実と意見を混同しないでください。
・読みやすく、コピペして使いやすい形で出力してください。
・必要に応じて見出し、箇条書き、表を使ってください。`;
}

function generatePrompt() {
  const output = document.getElementById("promptOutput");
  if (!output) return;
  output.value = buildPrompt();
}

function focusNext(current) {
  const nextId = current.dataset.next;
  if (!nextId) return;

  const next = document.getElementById(nextId);
  if (next) {
    next.focus();
    next.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.addEventListener("input", generatePrompt);

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      generatePrompt();
      focusNext(textarea);
    }
  });
});

document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", generatePrompt);

  select.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      generatePrompt();
      focusNext(select);
    }
  });
});

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.preset;
    const preset = presets[key];

    inputIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.value = preset[id] || "";
    });

    generatePrompt();
    const first = document.getElementById("purpose");
    if (first) first.focus();
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  inputIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.value = "";
  });

  generatePrompt();
  const first = document.getElementById("purpose");
  if (first) first.focus();
});

document.getElementById("generateBtn").addEventListener("click", () => {
  generatePrompt();
  document.getElementById("promptOutput").scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("newlineBtn").addEventListener("click", () => {
  const material = document.getElementById("material");
  const start = material.selectionStart;
  const end = material.selectionEnd;
  const value = material.value;

  material.value = value.slice(0, start) + "\n" + value.slice(end);
  material.selectionStart = material.selectionEnd = start + 1;
  material.focus();
  generatePrompt();
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  const output = document.getElementById("promptOutput");
  const message = document.getElementById("copyMessage");

  if (!output.value.trim()) generatePrompt();

  try {
    await navigator.clipboard.writeText(output.value);
    message.textContent = "コピーしました。AIに貼り付けて使えます。";
    setTimeout(() => {
      message.textContent = "";
    }, 2200);
  } catch (error) {
    output.select();
    document.execCommand("copy");
    message.textContent = "コピーしました。";
  }
});

generatePrompt();
