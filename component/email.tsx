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
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";
import * as React from "react";

export default function HelloEmail() {
    return (
        <Html>
            <Head />
            <Preview>Preview Text</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`https://nodemailer.com/nm_logo_200x136.png`}
                                width="40"
                                height="37"
                                alt="Vercel"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            My sample email using NodeMailer, React-Email, and
                            NextJS
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello World,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>This is how you create a link: </strong> (
                            <Link
                                href={`mailto:leeyihong03@gmail.com`}
                                className="text-blue-600 no-underline"
                            >
                                {`leeyihong03@gmail.com`}
                            </Link>
                            )
                        </Text>
                        <Section>
                            <Row>
                                <Column align="right">
                                    <Img
                                        className="rounded-full"
                                        src={`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png`}
                                        width="64"
                                        height="64"
                                    />
                                </Column>
                                <Column align="center">
                                    <Img
                                        src={`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png`}
                                        width="12"
                                        height="9"
                                        alt="invited you to"
                                    />
                                </Column>
                                <Column align="left">
                                    <Img
                                        className="rounded-full"
                                        src={`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png`}
                                        width="64"
                                        height="64"
                                    />
                                </Column>
                            </Row>
                        </Section>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                pX={20}
                                pY={12}
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                                href={`https://example.com`}
                            >
                                Fake link
                            </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            or copy and paste this fake URL into your browser:{" "}
                            <Link
                                href={`https://example.com`}
                                className="text-blue-600 no-underline"
                            >
                                {`https://example.com`}
                            </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{" "}
                            <span className="text-black">Anybody </span>.This
                            invite was sent from{" "}
                            <span className="text-black">
                                leeyihong03@gmail.com
                            </span>{" "}
                            located in{" "}
                            <span className="text-black">Outer space</span>. If
                            you were not expecting this invitation, you can
                            ignore this email. If you are concerned about your
                            account's safety, please reply to this email to get
                            in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
