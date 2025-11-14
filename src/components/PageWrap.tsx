type PageWrapProps = {
    children: React.ReactNode
}

export default ({ children }: PageWrapProps) => (
    <div className="font-sans p-8">
        <main className="flex flex-col gap-[32px]">{children}</main>
    </div>
)
