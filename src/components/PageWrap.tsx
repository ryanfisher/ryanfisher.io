import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/24/outline"

type PageWrapProps = {
    children: React.ReactNode
    showHomeNav?: boolean
}

const HomeNav = () => (
    <a href="/" className="inline-block">
        <ChevronLeftIcon className="inline-block" width={24} height={24} />
        <HomeIcon className="inline-block" width={24} height={24} />
    </a>
)

export default ({ children, showHomeNav }: PageWrapProps) => (
    <div className="font-sans p-8">
        <main className="flex flex-col gap-[32px]">
            {
                showHomeNav && <HomeNav />
            }
            {children}
        </main>
    </div>
)
