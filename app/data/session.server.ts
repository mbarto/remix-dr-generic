import { createCookieSessionStorage } from "@remix-run/node"
import { DataItem } from "./items"

const storage = createCookieSessionStorage({
    cookie: {
        name: "user_session",
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    },
})

export async function getSession(request: Request): Promise<DataItem[] | undefined> {
    const session = await storage.getSession(request.headers.get("Cookie"))
    return session.get("data") as DataItem[]
}

export async function createSession(
    data: DataItem[]
): Promise<Response> {
    let session = await storage.getSession()
    session.set("data", data)
    return new Response(undefined, {
        headers: {
            "Set-Cookie": await storage.commitSession(session),
        },
    })
}