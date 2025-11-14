type ParagraphProps = {
    children: React.ReactNode
}

export default ({ children }: ParagraphProps) => (
    <p className="md:w-2xl lg:w-3xl">{children}</p>
)
