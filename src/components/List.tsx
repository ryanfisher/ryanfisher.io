const ListItem = ({node}: {node: React.ReactNode}) => (
    <li className="flex items-start">
        <div className="bg-white rounded-full h-2 w-2 mr-2 ml-2 mt-2 z-10 inline-block"></div>
        {node}
    </li>
)

type Items = {
    node: React.ReactNode,
    key: string
}[]

export default ({ items }: { items: Items }) => (
    <ul role="list" className="">
        {items.map(item => <ListItem key={item.key} node={item.node} />)}
    </ul>
)
