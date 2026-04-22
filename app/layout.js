export const metadata = {
  title: 'FitCoach 瘦身监督平台',
  description: '真人1对1瘦身监督打卡',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
