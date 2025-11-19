import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Breadcrumb } from "@/app/types"

type PageWrapProps = {
    children: React.ReactNode
    showHomeNav?: boolean
    breadcrumbs?: Breadcrumb[]
}

const HomeNav = () => (
    <Link href="/" className="inline-block">
        <HomeIcon className="inline-block" width={24} height={24} />
    </Link>
)

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => (
    breadcrumbs.map((breadcrumb, index) => (<div className="inline-block" key={index}>
        <ChevronRightIcon className="inline-block" width={24} height={24} />
        <Link href={breadcrumb.link} className="inline-block">{breadcrumb.text}</Link>
    </div>))
)

export default ({ children, showHomeNav, breadcrumbs }: PageWrapProps) => (
    <div className="font-sans p-8">
        <main className="flex flex-col gap-[32px]">
            <div className="inline-block">
                {showHomeNav && <HomeNav />}
                {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            </div>
            {children}
        </main>
        <footer className="h-20">
        </footer>
    </div>
)
