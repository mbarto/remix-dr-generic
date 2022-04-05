import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({params}) => {
    return json({
        item: params.item
    })
}

export default function Item() {
    const data = useLoaderData()
    return (
      <div>
        <div>This is the detail page!</div>
        <div>Item selected: {data.item}</div>
      </div>
    );
  }
  