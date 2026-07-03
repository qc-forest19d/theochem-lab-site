# Theoretical Chemistry Lab. — GitHub Pages Template

中央大学・理論化学研究室向けの静的Webサイト鋳型です。  
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
- 連絡先: qc-forest.19d@g.chuo-u.ac.jp
- ORCID: https://orcid.org/0000-0002-7662-9636
- `researchmap`自動同期はこの初期版には含めていません。まず安全に公開できる状態を作り、その後に追加する想定です。

## ローカル確認

Macでターミナルを開き、このフォルダへ移動して次を実行します。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開くと確認できます。


## 2026-07-01 統合版

- 2022–2026年の業績データ
- Chemical Physics Letters のイミドラセミ化論文
- 2026年度の現メンバー
- Alumni表示（後藤、前田、渡部、高橋）
- AlumniセクションのHTML構造修正
- 日本語表示時の日本語氏名
- メンバー所属表示
- 欠損画像の補完
- JSON・CSS・JavaScriptのキャッシュ抑制
- 不要な作業用フォルダとmacOSメタデータの除去

`.git` フォルダも含まれているため、既存フォルダを丸ごと置き換えてもGitHub Desktopの設定を引き継げます。


## Awards update

Added verified awards for:
- Daisuke Goto
- Naoshi Maeda
- Kohei Motoki
- Shiori Watabe

Award entries link to the corresponding Chuo University news pages when available.

- 卒業年度表記の重複を解消し、年は見出し、課程は各人の欄に分離


## Official news update

Updated awards from Chuo University official news pages for:
- Kohei Motoki
- Miori Nogamida
- Nichika Ozawa
- Daisuke Goto
- Naoshi Maeda
- Shiori Watabe

Presentation titles are displayed below each award.
Takeshi Sumiyoshi's awards are verified, but he has not been added to Alumni because the completion year has not yet been explicitly confirmed in this dataset.


## Sumiyoshi update

Added Takeshi Sumiyoshi as a 2025 Master's graduate, one year after Shiori Watabe, with two verified presentation awards.


## Representative publication images

The following real graphical-abstract images are integrated and standardized to 1200 × 700 px:

- Predictive QM/MM
- Electrochromic molecular design (Chemical Communications)
- Nuclear quantum effects in base pairs
- Imide racemization

The ACS-hosted images for the An/Ln-selectivity paper and the JPCL color-informatics paper could not be retrieved automatically because ACS blocks automated image access. Temporary placeholders remain for those two cards; replace them with:

- `assets/images/pub-anln.png`
- `assets/images/pub-color-informatics.png`

and update the corresponding image paths in `data/publications.json`.


## Final representative publication images

All six selected-publication cards now use actual graphical-abstract or TOC images:

- Predictive QM/MM
- Actinide/Lanthanide selectivity
- Electrochromic molecular design
- Electronic-state informatics for color tuning
- Nuclear quantum effects in base pairs
- Imide racemization


## Important: clean replacement

Do not merge this folder into an existing `theochem-lab-site` folder.
Rename or delete the old folder first, then extract this ZIP.

The six selected publication images use new, unique filenames beginning with
`selected-` to prevent old JPEG/SVG files and browser caches from being used.


## Balanced selected publications

The six selected-publication cards now highlight six different researchers:

1. Nichika Ozawa — Predictive QM/MM
2. Takeshi Sumiyoshi — An/Ln selectivity
3. Daisuke Goto — Electronic-state informatics for color tuning
4. Kohei Motoki — Nuclear quantum effects
5. Miori Nogamida — Hypergolic reaction pathways
6. Rima Suzuki — Acidity prediction

The Chemical Communications and Chemical Physics Letters papers remain in the annual publication list but are no longer selected cards.


## Four research pillars

The Research section now uses four pillars:

1. Electronic-State Informatics
2. Complex Systems Quantum Chemistry
3. Beyond Born-Oppenheimer Theory
4. Autonomous Reaction Exploration


## Vision update

Japanese:
電子状態計算と実験データを統合し、学習・転移を通じて未来材料を創成する。

English:
Learning from electronic-structure calculations and experiments, transferring knowledge, and creating materials for the future.


## Suzuki publication highlight

Rima Suzuki's member card now displays that her first-author JPCA paper was selected for a journal cover, with a DOI link.


## Graduate alumni section

- Japanese heading changed from 「卒業生」 to 「大学院修了生」
- English heading changed to “Graduate Alumni”
- Privacy-policy explanatory paragraph removed
- Added a short statement emphasizing graduate-student mentoring


## Refined vision statement

The Vision paragraph was rewritten to clarify the scientific logic linking
electronic states, molecular structure, environment, function, prediction,
materials creation, and reaction discovery.


## Former research staff

A separate “Former Research Staff / 研究スタッフ Alumni” subsection was added
under Graduate Alumni for former postdoctoral researchers and research staff.


## Research-pillar imagery

The four research cards now use dedicated Firefly concept images:

1. Electronic-State Informatics
2. Complex Systems Quantum Chemistry
3. Beyond Born-Oppenheimer Theory
4. Autonomous Reaction Exploration

All images were cropped and resized to a common 1260 × 600 format for consistent card display.


## Ozawa research highlight

Nichika Ozawa's member card now highlights:
- the joint Chuo University / Ochanomizu University press release on predictive QM/MM;
- her first-author Advanced Science paper.


## July 2026 update

- Shortened Nichika Ozawa's press-release highlight.
- Added recent news for Prof. Mori's ICQC 2026 oral presentation.
- Added recent news for Prof. Mori's invited JACI lecture.


## ICQC 2026 news card

The ICQC 2026 news item now includes:
- the supplied ICQC 2026 Berkeley image;
- the official conference website as the primary link;
- the LinkedIn presentation report as a secondary link.


## NSF–JST workshop news

Added a news item for Prof. Mori's invited participation in the
Joint NSF–JST Workshops on Embodied AI for Science, linked to the JST ARiSE event page.


## News image refinements

- Reduced the visual size of the ICQC 2026 logo within its news card.
- Added the supplied NSF–JST workshop banner to the workshop news item.
- Kept the JST banner wide while preserving the two-column desktop news layout.


## News refinements

- The NSF–JST workshop banner is now displayed in full using `object-fit: contain`.
- The Advanced Science QM/MM news item now links primarily to the joint press release,
  with the journal article retained as a secondary link.


## News date normalization

- The 28th Symposium on Theoretical Chemistry poster award is dated 2026-06-17,
  the date on which the award results were officially announced.
- All news items are sorted globally in descending date order.


## Academic society links

Verified and normalized official URLs:
- Chemical Society of Japan
- American Chemical Society
- Molecular Science Society of Japan
- Japan Society of Theoretical Chemistry
- Society of Chemical Engineers, Japan
- Japan Society of Coordination Chemistry
- Pharmaceutical Society of Japan
- SCEJ CCUS Committee


## Full publication migration

The publication dataset now contains 89 records spanning 2002–2026.
Historical records were migrated from the former laboratory publication page.
Items explicitly marked “in preparation” were not included.


## Books and link audit

- Added 6 books, translations, yearbook articles, and book chapters.
- Publication dataset contains 90 records.
- 75 publication records have canonical DOI links.
- 15 historical records have no DOI in the source bibliography and are displayed without a DOI link.
- Detailed audit: `data/link_audit.json`.

## 2026-07-02 selected-publication rendering fix

The representative-publication container ID was corrected from `publication-grid`
to `selected-publications` so that `assets/js/app.js` renders the six balanced
selected-publication cards and their TOC/graphical-abstract images.


## Hero background video
The top-page hero uses “A Molecular Dynamics Simulation of Liquid Water at 298 K” by Christopher Rowley, licensed under CC BY-SA 4.0. The video is loaded from Wikimedia Commons. Source: https://commons.wikimedia.org/wiki/File:A_Molecular_Dynamics_Simulation_of_Liquid_Water_at_298_K.webm


## 2026-07-03 one-page integration
PI content was integrated into `index.html#pi`. `pi.html` remains only as a redirect for legacy links. The student/industry/collaboration message was merged into the main Join Us section.
