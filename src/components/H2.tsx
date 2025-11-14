import { headlineBold } from "@/fonts"

type HeadlineProps = {
    children: React.ReactNode
}

export default ({ children }: HeadlineProps) => (
    <h2 className={`text-2xl mb-1 ${headlineBold.className}`}>{children}</h2>
)
