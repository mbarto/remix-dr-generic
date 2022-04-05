import { json, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Data, getAllItems } from "~/data/items";

export const loader: LoaderFunction = async ({ request }) => {
    const items = await getAllItems(request)
    return json<Data>({
        items
    })
}

export default function Here() {
    const data = useLoaderData<Data>()
    
    return (
        <div>
        <h1>You are here!</h1>
        <ul>{data?.items.map(i => <li key={i.id}><Link to={String(i.id)}>{i.name}</Link></li>)}</ul>
        <div>
            <Outlet/>
        </div>
        </div>
    );
}
