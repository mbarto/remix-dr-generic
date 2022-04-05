import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getItem, setItem } from "~/data/items";

export const loader: LoaderFunction = async ({request, params}) => {
    const item = await getItem(request, params.item)
    return json({
        item
    })
}

export const action: ActionFunction = async ({request}) => {
    const data = await request.formData()
    const id = data.get("id")?.toString()
    const name = data.get("name")?.toString()
    return setItem(request, id, name)
}

export default function Item() {
    const data = useLoaderData()
    return (
      <div>
        <div>This is the detail page!</div>
        <div>Item selected: {data.item.id}</div>
        <Form method="post">
            <input name="id" type="hidden" value={data.item.id}/>
            <input name="name" defaultValue={data.item.name}/>
            <input type="submit" value="Modify"/>
        </Form>
      </div>
    );
  }
  