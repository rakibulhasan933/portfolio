import { ImageResponse } from 'next/og'

export const alt = 'Rakibul Hasan | Full Stack Developer'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                    color: 'white',
                    padding: '80px',
                    fontFamily: 'sans-serif',
                    justifyContent: 'space-between',
                }}
            >
                {/* LEFT CONTENT */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 80,
                            fontWeight: 800,
                        }}
                    >
                        Rakibul Hasan
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 42,
                            marginTop: 20,
                            color: '#38bdf8',
                            fontWeight: 600,
                        }}
                    >
                        Full Stack Developer
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 28,
                            marginTop: 30,
                            opacity: 0.85,
                            maxWidth: 700,
                        }}
                    >
                        Building scalable, high-performance web applications with clean and modern architecture.
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 24,
                            marginTop: 40,
                            opacity: 0.7,
                        }}
                    >
                        Next.js • Node.js • PostgreSQL • Redis • Docker
                    </div>
                </div>

                {/* RIGHT PHOTO */}
                <div
                    style={{
                        display: 'flex',
                        width: 380,
                        height: 380,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '10px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 0 80px rgba(56,189,248,0.4)',
                    }}
                >
                    <img
                        src="https://ubj396rs5z.ufs.sh/f/fTLq8Go790CI3SCPJ4Uxd1Ok5ctuACpBaKzQUmsJlYWnoEje"
                        width="380"
                        height="380"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}