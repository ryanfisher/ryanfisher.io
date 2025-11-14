import { headlineBold } from "@/fonts"

type HeadlineProps = {
    children: React.ReactNode
}

export default ({ children }: HeadlineProps) => (
    <h1 className={`text-4xl ${headlineBold.className}`}>{children}</h1>
)
