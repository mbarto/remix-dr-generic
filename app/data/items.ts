import { createSession, getSession } from "./session.server"

export type DataItem = {
    id: number
    name: string
}

export type Data = {
    items: DataItem[]
}

let items = [{
    id: 1,
    name: "first item"
}, {
    id: 2,
    name: "second item"
}]

export async function getAllItems(request: Request) {
    const savedItems = await getSession(request)
    return savedItems ?? items;
}

export async function getItem(request: Request, id?: string): Promise<DataItem | null> {
    const finalItems = await getAllItems(request)
    const filtered = finalItems.filter(i => String(i.id) === id)
    return filtered.length ? filtered[0] : null
}

export async function setItem(request: Request, id?: string, name?: string): Promise<Response> {
    let finalItems = await getAllItems(request)
    if (id && name) {
        finalItems = finalItems.map(i => i.id == Number(id) ? ({
            ...i,
            name
        }) : i)
    }
    return await createSession(finalItems)
}