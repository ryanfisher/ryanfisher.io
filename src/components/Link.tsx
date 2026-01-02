import Link, { LinkProps } from "next/link"

type Props = {
    children: React.ReactNode
    external?: boolean
} & LinkProps

export default ({ external, ...props}: Props) => {
    const attributes: LinkProps = {
        ...props
    }

    if (external) {
        return <Link {...attributes} target="_blank">{props.children}</Link>
    } else {
        return <Link {...attributes}>{props.children}</Link>
    }
}
