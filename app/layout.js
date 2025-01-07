// app/layout.js
export const metadata = {
    title: "無限働かせ塾稼働表作成",
    description: "学校や塾、予備校の時間割を簡単に作成できるサービス",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="ja">
        <body>
          <header style={{ padding: "1rem", background: "#f0f0f0" }}>
            <h1>時間割作成</h1>
            <nav style={{ display: "flex", gap: "1rem" }}>
              <a href="/">Home</a>
              <a href="/classes">クラス</a>
              <a href="/rooms">教室</a>
              <a href="/teachers">先生</a>
              <a href="/students">生徒</a>
              <a href="/settings">設定</a>
              <a href="/schedule">時間割作成</a>
            </nav>
          </header>
          <main style={{ padding: "1rem" }}>{children}</main>
        </body>
      </html>
    );
  }
  