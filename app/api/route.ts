import { headers } from 'next/headers'

export async function GET(request: Request) {
    const headersList = headers()
    const referer = headersList.get('referer')

    return new Response("<div><h1>hello world</h1></div>", {
        status: 200,
        headers: { referer: referer },
    })
}