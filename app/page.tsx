export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Next.js API Server</h1>
      <p>API endpoints are available at:</p>
      <ul>
        <li>POST /api/auth/signup</li>
        <li>POST /api/auth/login</li>
        <li>GET /api/profile</li>
      </ul>
    </main>
  )
}

