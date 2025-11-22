import Paragraph from "@/components/Paragraph"
import { positions } from "../positions"
import Headline from "@/components/Headline"
import H2 from "@/components/H2"
import PageWrap from "@/components/PageWrap"
import Link from "next/link"
import List from "@/components/List"

type WorkItemProps = {
  company: string
  position: string
  dates: string
  website?: string
}

const Position = ({company, position, dates, ...props}: WorkItemProps) => (
  <div>{position} at {props.website ? <a href={props.website}>{company}</a> : company} - {dates}</div>
)

const WorkItemList = ({positions}: {positions: WorkItemProps[]}) => (
  <List items={
    positions.map(
      position => ({
        key: position.dates,
        node: <Position {...position} />
      })
    )
  } />
)

export default function Home() {
  return (
    <PageWrap>
      <Headline>Hi, I'm Ryan</Headline>
      <Paragraph>
        I'm a software engineer based in San Diego. I specialize in building web applications using
        Ruby on Rails on the backend and JavaScript, TypeScript, and React on the frontend. Over the
        past decade plus of writing software professionally, I've used a lot of different technologies,
        with many years of experience building applications with PostgreSQL, Sidekiq, Redis, etc.
      </Paragraph>

      <Paragraph>
        When I'm not building software, I like to spend time outside, often still building. I've built my
        own <Link href="/shed">office shed</Link>, a "treehouse" for my kids, a
        waterfall/pond (with more planned), and an ever-growing <Link href="/garden">garden</Link>.
      </Paragraph>

      <div className="gap-4 items-center">
        <div>
          <H2>Work</H2>
          <WorkItemList positions={positions} />
        </div>
      </div>
    </PageWrap>
  )
}
