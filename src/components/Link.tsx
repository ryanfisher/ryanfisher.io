import Link, { LinkProps } from "next/link"

type Props = {
    children: React.ReactNode
    external?: boolean
} & LinkProps

export default (props: Props) => {
    const attributes: LinkProps = {
        ...props
    }
    if (props.external) attributes.target = "_blank"

    return <Link {...attributes}>{props.children}</Link>
}
