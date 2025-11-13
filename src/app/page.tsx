import Image from "next/image"
import { positions } from "../positions"
import { headlineBold } from "@/fonts"

type WorkItemProps = {
  company: string
  position: string
  dates: string
  website?: string
}

const WorkItemBullet = ({company, position, dates, ...props}: WorkItemProps) => (
  <li>{position} at {props.website ? <a href={props.website}>{company}</a> : company} - {dates}</li>
)

const WorkItemList = ({positions}: {positions: WorkItemProps[]}) => (
  <ul role="list" className="">
    {positions.map(position => <WorkItemBullet key={position.dates} {...position} />)}
  </ul>
)

export default function Home() {
  return (
    <div className="font-sans p-8">
      <main className="flex flex-col gap-[32px]">
        <h1 className={`text-4xl ${headlineBold.className}`}>Hi, I'm Ryan</h1>
        <p className="md:w-2xl lg:w-3xl">
          I'm a software engineer based in San Diego. I specialize in building web applications using
          Ruby on Rails on the backend and JavaScript, TypeScript, and React on the frontend. Over the
          past decade plus of writing software professionally, I've used a lot of different technologies,
          with many years of experience building applications with PostgreSQL, Sidekiq, Redis, etc.
        </p>

        <p className="md:w-2xl lg:w-3xl">
          When I'm not building software, I like to spend time outside, often still building. I've built my own
          office shed, a "treehouse" for my kids, a waterfall/pond (with more planned), and an ever-growing garden.
        </p>

        <div className="gap-4 items-center">
          <div>
            <h2 className={`text-2xl mb-1 ${headlineBold.className}`}>Work</h2>
            <WorkItemList positions={positions} />
          </div>
        </div>
      </main>
      <footer className="row-start-3 gap-[24px] items-center justify-center">
      </footer>
    </div>
  );
}
