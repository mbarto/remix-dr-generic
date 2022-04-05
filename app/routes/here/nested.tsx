import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Data } from "../here";

export const loader: LoaderFunction = ({context, request, params}) => {
    return json<Data>({
        items: [{
            id: 1,
            name: "third item"
        }, {
            id: 2,
            name: "fourth item"
        }]
    })
}

export default function Nested() {
    const data = useLoaderData<Data>()
    return (
      <div>
        <div>This is the here subpage!</div>
        <ul>{data?.items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
      </div>
    );
  }
  