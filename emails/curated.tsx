import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const Curated = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded mt-[40px] mb-[25px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[10px]">
              <Img
                src={`https://i.ibb.co/q0k97bt/re.png`}
                width="45%"
                alt="Curated By Nick"
                className="my-0 mx-auto"
              />
              <Link
                href={`https://curatedbynick.com`}
                className="text-black underline block mx-auto mb-[12px] mt-[-10px] text-center text-[10px]"
              >
                VISIT SITE
              </Link>
            </Section>
            <Hr className="my-3 mb-8 border-2 border-black" />
            <Text className="text-left">
              Dear <span className="font-bold ml-0">{userT}</span>,
            </Text>

            <Text className="text-sm">
              Hello! I hope this message finds you well. My name is Nick, and I
              am the founder of Curated By Nick, a creative studio specializing
              in website development and design.
            </Text>
            <Text className="text-sm">
              I'm reaching out to discuss the opportunity of transforming your
              current site into a high-performance, visually stunning digital
              platform that perfectly reflects <strong>{user}</strong> brand
              aesthetic.
            </Text>
            {/*  <Text className="text-sm">
              I recently visited one of your shops located in Miami Beach. I had
              an amazing experience. The ambiance was refreshing and natural,
              with a sense of tranquility, and the service was impeccable.
              Intrigued to learn more about the brand and see if I can
              contribute anything, I came across your site and noticed that it
              lacked in visual appeal and evoking your brands aesthetic.
  </Text> */}
            <Text className="text-sm">
              I've had the pleasure of both experiencing your store and
              exploring your online presence, I've been inspired to envision a
              digital platform that captures the essence of {user} in all
              its vibrant glory. Let's embark on this journey together to
              cultivate a website that not only reflects your brand identity but
              also becomes a verdant oasis for Coffee enthusiasts online.
            </Text>
            <Text className="text-sm">
              After reviewing your website and remembering my experience at your
              establishment, I believe a modern, sleek design could greatly
              enhance your online presence. Our proposal is to create a website
              that reflects your establishment, showcasing your offerings, brand
              story, and client testimonials. This customization will be
              tailored to your preferences for a unique and compelling digital
              presence.
            </Text>
            <Text className="font-bold text-center flex justify-center font-mono">
              {" "}
              Assessment:
            </Text>
            <Text className="text-sm text-center">
              Upon reviewing your current website{" "}
              <Link href="http://www.panthercoffee.com/">({webL})</Link>, I
              noticed several areas where improvements could be made to better
              serve your audience and enhance your brand's online presence:
            </Text>
            <Decimal list={list} />
            <Text className="text-sm text-center">
              By improving user experience and showcasing the quality of your
              venue, we aim to attract your target audience, increase site
              traffic, and expand your consumer base.
            </Text>
            <Text className="font-bold text-center flex justify-center font-mono">
              {" "}
              Our Proposal:
            </Text>
            <Bullet items={items} />
            {/*    <ul className="list-disc text-sm">
              <li>
                <span className="italic font-medium ">
                  {" "}
                  Custom Website Development:
                </span>{" "}
                Crafted with precision and tailored to your needs, envision a
                high-caliber digital platform meticulously developed using
                Next.js and React, the very tools I excel in. This bespoke
                website stands as a focal point for your digital presence,
                boasting not only responsiveness but also SEO optimization.
                Immerse your audience in a seamless journey across all devices,
                with captivating visuals and intuitive navigation. Integrated
                social media links will seamlessly engage your audience,
                amplifying your online visibility to new heights.
              </li>
              <br></br>
              <li>
                <span className="italic font-medium">
                  {" "}
                  Graphic Design and Branding:
                </span>{" "}
                Sculpt a cohesive brand identity, meticulously tailored to
                mirror your individual flair and essence. From conceptualizing
                logos to harmonizing color palettes and selecting typography,
                every facet of your brand will be thoughtfully curated to
                resonate profoundly with your audience. (optional)
              </li>
              <br></br>
              <li>
                <span className="italic font-medium"> SEO Optimization:</span>{" "}
                Optimizing your site for search engines to improve your
                visibility and ranking. By implementing best practices in SEO, I
                will help you reach a wider audience and increase organic
                traffic to your website.
              </li>
            </ul> */}
            <Text className="text-sm">
              <Text className="text-sm font-bold text-center flex justify-center font-mono">
                Why Choose Curated By Nick:
              </Text>
              <ul className="text-sm">
                <li>
                  <span className="font-medium">
                    <strong>
                      <i> Experience:</i>
                    </strong>
                  </span>{" "}
                  With a portfolio that encompasses diverse projects like {""}
                  <Link
                    href="https://curatedbynick.com"
                    className="text-blue-600 no-underline"
                  >
                    curatedbynick.com
                  </Link>
                  ,
                  <Link
                    href="https://jfonsmusic.com"
                    className="text-blue-600 no-underline"
                  >
                    {""} jfonsmusic.com
                  </Link>
                  , and
                  <Link
                    href="https://twelvesixteen.co"
                    className="text-blue-600 no-underline"
                  >
                    {""} twelvesixteen.co
                  </Link>
                  , I have consistently achieved remarkable outcomes for my
                  clients, showcasing my proficiency in the field.
                </li>
                <br></br>
                <li>
                  <span className="font-medium">
                    <strong>
                      <i> Creativity:</i>
                    </strong>
                  </span>{" "}
                  As a visual artist and creative developer, I bring a unique
                  perspective to every project, ensuring that your website
                  stands out from the competition.
                </li>
                <br></br>
                <li>
                  <span className="font-medium">
                    <strong>
                      <i> Customization:</i>
                    </strong>
                  </span>{" "}
                  Recognizing the uniqueness of each client, I personalize my
                  services to align perfectly with your distinct needs and
                  aspirations.
                </li>
              </ul>
              <Text className="text-sm">
                I would love to discuss this proposal with you in more detail
                and explore how I can assist you in achieving your digital
                goals. Whenever you're available, let's schedule a call. If you
                prefer, you can also contact me directly at{" "}
                <Link
                  className="text-blue-600 no-underline"
                  href={`mailto:curatedbynick@gmail.com`}
                >
                  curatedbynick@gmail.com
                </Link>
                .
              </Text>
              <Text className="text-sm">
                Thank you for your time viewing this proposal. I am excited
                about the opportunity to work with you and help you create a
                digital presence that truly reflects your brand and resonates
                with your audience.
              </Text>
              <Text className="italic text-sm">Warm regards,</Text>
              <Text className="italic text-sm">
                <span className="font-bold">Nick S.</span>
                <br></br>Founder, Curated By Nick
                <br></br>Portfolio: curatedbynick.com
                <br></br>Instagram: @nick.pitillo, @itsrllynick
              </Text>
            </Text>
            <Hr className="mt-[55px] border-2 border-black" />

            <Text className="font-mono underline font-bold mx-auto my-auto flex justify-center text-base">
              <Link
                className="mx-auto my-auto"
                href="https://instagram.com/itsrllynick"
              >
                <Img
                  className="mx-auto my-auto"
                  src={`https://i.ibb.co/vHxK9xm/2.png`}
                  width="20"
                  height="20"
                  alt="Notion's Logo"
                />
              </Link>
              A MESSAGE CURATED FOR YOU.{" "}
              <Link
                className="mx-auto my-auto"
                href="https://instagram.com/itsrllynick"
              >
                <Img
                  className="mx-auto my-auto"
                  src={`https://i.ibb.co/vHxK9xm/2.png`}
                  width="20"
                  height="20"
                  alt="Notion's Logo"
                />
              </Link>
            </Text>

            {/* <Hr className="mt-3 border-2 border-black" /> */}
            <Link href="https://curatedbynick.com">
              <Img
                className="mt-3"
                src={`https://i.ibb.co/fC28Jhw/banner-2.png`}
                width="100%"
                alt="Curated By Nick"
              />
            </Link>
          </Container>
          <Text className="text-[#666666] text-[12px] mt-2 mx-auto text-center">
            This proposal is intended for <span className="italic">{user}</span>
            . If you are not the intended recipent, please disregard this email.
            Should you have any concerns regarding this proposal, please do not
            hesitate to reply to this email to contact us directly.
          </Text>
          <Text style={footer}>
            Curated By Nick, LLC. ・Miami, FL・curatedbynick.com
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Curated;

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "30px",
};

const user = "Panther Coffee";

const userT = `${user} Team`;

const webL = "panthercoffee" + "." + "com";

const Bullet = ({ items }) => (
  <ul className="text-sm">
    {items.map((item, index) => (
      <>
        <li key={index}>
          <span className="font-medium">
            <strong>
              <i>{item.title}: </i>
            </strong>
          </span>
          {item.description}
          {item.title === "Graphic Design and Branding" && (
            <strong className="graphic-design"> (optional)</strong>
          )}
        </li>
        {item.break && <br />}
      </>
    ))}
  </ul>
);

const items = [
  {
    title: "Custom Website Development",
    description:
      "Crafted with precision and tailored to your needs, envision a high-caliber digital platform meticulously developed using Next.js and React, the very tools I excel in. This bespoke website stands as a focal point for your digital presence, boasting not only responsiveness but also SEO optimization. Immerse your audience in a seamless journey across all devices, with captivating visuals and intuitive navigation. Integrated social media links will seamlessly engage your audience, boosting your online presence.",
    break: true,
  },
  {
    title: "Graphic Design and Branding",
    description:
      "Provide a cohesive brand identity, meticulously tailored to mirror your individual flair and essence. From conceptualizing logos to harmonizing color palettes and selecting typography, every facet of your brand will be thoughtfully curated to resonate profoundly with your audience. ",
    break: true,
  },
  {
    title: "SEO Optimization",
    description:
      "By implementing best practices in SEO, we will improve your site’s visibility and ranking. This will help you reach a wider audience and increase organic traffic to your website.",
    break: false,
  },
];


const Decimal = ({ list }) => (
  <ul className="text-sm">
    {list.map((list, index) => (
      <>
        <li key={index}>
          <span className="font-medium">
            <strong>
              <i>{list.title}: </i>
            </strong>
          </span>
          {list.description}
        </li>
        {list.break && <br />}
      </>
    ))}
  </ul>
);

// Usage
const list = [
  {
    title: "Overview",
    description:
      "Your current site, lacks distinctiveness and does not reflect the unique qualities of the Panther Coffee brand. The overall design appears bland and generic, failing to convey the vibrant and tranquil ambiance of your physical location.",
    break: true,
  },
  {
    title: "Visual Engagement",
    description:
      "The site’s appearance is plain and does not showcase the brand’s unique identity. I can vastly improve its visual appearance, incorporating elements that reflect the natural and inviting atmosphere of your shops.",
    break: true,
  },
  {
    title: "User Experience",
    description:
      "The site’s usability can be enhanced significantly. Redesigning buttons to be more intuitive and improving the navigation will create a more user-friendly experience.",
    break: true,
  },
  {
    title: "Responsiveness",
    description:
      "Ensuring the site is fully responsive and performs well on desktops, tablets, and mobile devices is crucial for a seamless user experience.",
    break: true,
  },
];
