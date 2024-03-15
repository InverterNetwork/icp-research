import { ReactNode } from "react"
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    HStack,
    Text,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
// import {
//     useAccount,
//     useConnect,
//     useDisconnect,
//     useEnsAvatar,
//     useEnsName,
// } from "wagmi"
// import { ConnectWalletButton } from "../ConnectWallet"
import Link from "next/link"

export function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <HStack>
                        <Link href="/">
                            {" "}
                            Inverter Network
                        </Link>
                    </HStack>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                            {/* <ConnectWalletButton /> */}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
