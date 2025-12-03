import { headlineBold } from "@/fonts"

type HeadlineProps = {
    children: React.ReactNode
}

export default ({ children }: HeadlineProps) => (
    <h3 className={`text-xl mb-1 ${headlineBold.className}`}>{children}</h3>
)
