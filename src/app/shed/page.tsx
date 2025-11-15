import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import Image from "next/image"
import ShedImage1 from "../../images/shed/20241201_160305.jpg"
import ShedImage2 from "../../images/shed/20241226_170350.jpg"
import ShedImage3 from "../../images/shed/20250101_171029.jpg"
import ShedImage4 from "../../images/shed/20250111_165548.jpg"
import ShedImage5 from "../../images/shed/20250120_173553.jpg"
import ShedImage6 from "../../images/shed/20250124_174654.jpg"
import ShedImage7 from "../../images/shed/20250202_175042.jpg"
import ShedImage8 from "../../images/shed/20251111_155300.jpg"

export default async function Page() {
    return (
        <PageWrap showHomeNav>
            <Headline>The Shed</Headline>
            <Paragraph>
                The shed has been an idea for years. During my holiday break in
                2024 it was finally time to build. A deck foundation was my
                starting point.
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage1} alt="shed deck foundation" />
            </Paragraph>
            <Paragraph>
                Following osb subfloors, framing went up next.
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage2} alt="start of shed framing" />
            </Paragraph>
            <Paragraph>
                Framing comes along quickly. Rafters are the last step. It
                looks like a shed at this point.
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage3} alt="shed framing nearly complete" />
            </Paragraph>
            <Paragraph>
                It already feels very solid with framing secure. After adding
                sheathing, I took some time to just sit inside and enjoy the
                views.
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage4} alt="shed sheathing and sunset views" />
            </Paragraph>
            <Paragraph>
                Roof sheathing completes what was probably the most satisfying
                part of the build. I have walls and a roof. I have a shed!
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage5} alt="shed roof sheathing complete" />
            </Paragraph>
            <Paragraph>
                With rain coming, I needed to finish up some waterproofing.
                Housewrap would keep it dry until I finally make a decision on
                siding material.
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage6} alt="start of housewrap waterproofing" />
            </Paragraph>
            <Paragraph>
                Framing went up around Christmas 2024. Windows and door were
                installed at the beginning of February. While there was still
                a lot of finish work to complete, I was able to start using
                the shed as my office.
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage7} alt="door and windows installed" />
            </Paragraph>
            <Paragraph>
                It took until nearly the end of the year to get around to
                installing some siding. I went with cheap t1-11 plywood siding.
                There's more siding and trim to install. And I'll be painting
                too, but I think it's looking nice!
            </Paragraph>
            <Paragraph>
                <Image src={ShedImage8} alt="siding finally up" />
            </Paragraph>
        </PageWrap>
    )
}
