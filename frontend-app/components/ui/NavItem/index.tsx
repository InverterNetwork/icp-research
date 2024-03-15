import { NFT } from "@/types"
import { Box, Image, Text } from "@chakra-ui/react"
import React from "react"

export function NFTItem({ nft }: { nft: NFT }) {
    return (
        <Box border="1px solid rgba(255, 255, 255, 0.1)" p={2} rounded="md">
            <Image
                alt={nft.description}
                rounded="md"
                src={`/assets/${nft.imagePath}`}
            />
            <Box pt={2}>
                <Text fontSize="12px">Token ID #{nft.id}</Text>
                <Text fontWeight="bold">{nft.name}</Text>
            </Box>
            <Box pt={2}>
                <Box bg="rgba(255, 255, 255, 0.04)" rounded="md" minH="52px">
                    <Box p="2">
                        <Text color="rgba(255, 255, 255, 0.6)">Price</Text>
                        <Text>0.1 ETH</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
