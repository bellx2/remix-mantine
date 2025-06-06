# Remix + Mantine ダッシュボードテンプレート

現代的なWeb管理画面を構築するためのテンプレートです。Remix（フルスタックReactフレームワーク）とMantine（UIライブラリ）を組み合わせて、レスポンシブで美しいダッシュボードアプリケーションを提供します。

## 🌟 主な機能

- **管理ダッシュボード**: 統計カード、チャート、アクティビティフィード
- **アナリティクスページ**: 各種グラフとトラフィック分析
- **ユーザー管理**: テーブル表示、検索、フィルター機能
- **レスポンシブサイドバー**: デスクトップでは縮小可能、モバイルではハンバーガーメニュー
- **ダークモード対応**: ワンクリックでライト/ダークテーマ切り替え
- **日本語UI**: 完全な日本語対応
- **TypeScript**: 型安全性とより良い開発体験

## 🛠 技術スタック

- **[Remix](https://remix.run/)** - フルスタックReactフレームワーク
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全なJavaScript
- **[Mantine](https://mantine.dev/)** - モダンなReact UIライブラリ
- **[Recharts](https://recharts.org/)** - React用チャートライブラリ
- **[Tabler Icons](https://tabler-icons.io/)** - 美しいアイコンセット
- **[Bun](https://bun.sh/)** - 高速なJavaScriptランタイム・パッケージマネージャー

## 🚀 クイックスタート

### 前提条件

- [Bun](https://bun.sh/) がインストールされていること

### セットアップ

1. 依存関係をインストール：
```bash
bun install
```

2. 開発サーバーを起動：
```bash
bun run dev
```

3. ブラウザで http://localhost:5173 を開く

## 📁 プロジェクト構造

```
app/
├── components/
│   └── DashboardLayout.tsx    # ダッシュボードレイアウト
├── routes/
│   ├── _index.tsx            # ランディングページ
│   ├── dashboard.tsx         # ダッシュボードルート
│   ├── dashboard._index.tsx  # メインダッシュボード
│   ├── dashboard.analytics.tsx # アナリティクス
│   └── dashboard.users.tsx   # ユーザー管理
├── styles/
│   └── mantine.css          # Mantineスタイル
├── entry.client.tsx         # クライアントエントリーポイント
├── entry.server.tsx         # サーバーエントリーポイント
└── root.tsx                 # ルートコンポーネント
```

## 🎯 利用可能なページ

- **/** - ランディングページ（機能紹介）
- **/dashboard** - メインダッシュボード
- **/dashboard/analytics** - アナリティクス画面
- **/dashboard/users** - ユーザー管理画面

## 🎨 カスタマイズ

### テーマの変更

`app/root.tsx`のMantineProviderで設定を変更できます：

```tsx
<MantineProvider theme={{ primaryColor: 'blue' }}>
  <Outlet />
</MantineProvider>
```

### ナビゲーションの追加

`app/components/DashboardLayout.tsx`の`navItems`配列にメニュー項目を追加：

```typescript
const navItems: NavItem[] = [
  { label: '新しいページ', icon: IconNewPage, to: '/dashboard/new-page' },
  // ...
];
```

## 📊 チャートとグラフ

Rechartsを使用して以下のチャートが実装されています：

- 線グラフ（トラフィック推移）
- 棒グラフ（曜日別データ）
- 円グラフ（ブラウザシェア）
- エリアチャート（売上推移）

## 🌙 ダークモード

- 自動的にシステム設定を検出
- ヘッダーまたはランディングページからワンクリック切り替え
- 全コンポーネントで統一されたテーマ適用

## 📱 レスポンシブ対応

- モバイル: ハンバーガーメニュー
- タブレット: 適応的レイアウト
- デスクトップ: 縮小可能サイドバー

## 🚢 本番デプロイ

1. 本番用ビルド：
```bash
bun run build
```

2. 本番サーバー起動：
```bash
bun start
```

### デプロイ先の選択肢

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)
- [Fly.io](https://fly.io/)

## 📚 参考リンク

- [Remix ドキュメント](https://remix.run/docs)
- [Mantine ドキュメント](https://mantine.dev/)
- [Recharts ドキュメント](https://recharts.org/)

## 📄 ライセンス

MIT License

---

このテンプレートを使用して、素早く美しい管理画面を構築しましょう！