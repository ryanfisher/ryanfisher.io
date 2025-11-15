import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Breadcrumb } from "@/app/types"

type PageWrapProps = {
    children: React.ReactNode
    showHomeNav?: boolean
    breadcrumbs?: Breadcrumb[]
}

const HomeNav = () => (
    <Link href="/" className="inline-block">
        <ChevronLeftIcon className="inline-block" width={24} height={24} />
        <HomeIcon className="inline-block" width={24} height={24} />
    </Link>
)

export default ({ children, showHomeNav, breadcrumbs }: PageWrapProps) => (
    <div className="font-sans p-8">
        <main className="flex flex-col gap-[32px]">
            {showHomeNav && <HomeNav />}
            {children}
        </main>
    </div>
)
