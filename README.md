# The Mori Group — GitHub Pages Template

中央大学・森研究室向けの静的Webサイト鋳型です。  
HTML/CSS/JavaScriptのみで動作し、GitHub Pagesで公開できます。

## 最初に行うこと

1. ZIPを展開します。
2. GitHub Desktopで **Add an Existing Repository from your Local Drive...** を選びます。
3. 展開した `theochem-lab-site` フォルダを指定します。
4. 「create a repository」を求められた場合は、その案内に従ってローカルGitリポジトリを作成します。
5. **Publish repository** を押します。
6. GitHub上でリポジトリを開き、`Settings` → `Pages` を開きます。
7. `Source` を **GitHub Actions** に設定します。
8. 数分後に公開URLが表示されます。

## 更新するファイル

- `data/publications.json`：論文
- `data/people.json`：メンバー
- `data/news.json`：ニュース
- `data/research.json`：研究テーマ
- `assets/images/`：画像
- `index.html`：固定ページ本文
- `assets/css/style.css`：デザイン

## 日常更新

1. JSONファイルをテキストエディタで編集
2. GitHub Desktopで変更を確認
3. Summaryに例：`Add new publication`
4. **Commit to main**
5. **Push origin**
6. 数分後にサイトへ反映

## 注意

- 現在の論文・メンバー情報は一部ダミーです。必ず正式情報へ差し替えてください。
- DOIが未設定の箇所は `"#"` になっています。
- メールアドレス、Google Scholar、ORCIDリンクを差し替えてください。
- `researchmap`自動同期はこの初期版には含めていません。まず安全に公開できる状態を作り、その後に追加する想定です。

## ローカル確認

Macでターミナルを開き、このフォルダへ移動して次を実行します。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開くと確認できます。
