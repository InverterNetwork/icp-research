import Head from "next/head"
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Box pb={10}>
                <Container maxW={"3xl"}>
                    <Stack
                        as={Box}
                        textAlign={"center"}
                        spacing={{ base: 8, md: 14 }}
                        py={{ base: 20 }}
                    >
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                            lineHeight={"110%"}
                        >
                            <Text as={"span"} color={"green.400"}>
                                Inverter Network
                            </Text>
                        </Heading>
                        <Text color={"gray.500"}>
                            This is an example project to demonstrate Asset Canister
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
