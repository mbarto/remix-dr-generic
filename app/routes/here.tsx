import { json, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export type DataItem = {
    id: number
    name: string
}

export type Data = {
    items: DataItem[]
}

export const loader: LoaderFunction = ({context, request, params}) => {
    return json<Data>({
        items: [{
            id: 1,
            name: "first item"
        }, {
            id: 2,
            name: "second item"
        }]
    })
}

export default function Here() {
    const data = useLoaderData<Data>()
    
    return (
        <div>
        <h1>You are here!</h1>
        <ul>{data?.items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
        <div>
            <Outlet/>
        </div>
        </div>
    );
}
