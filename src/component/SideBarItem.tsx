import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import { IconBase } from 'react-icons'

interface Props {
    icon: React.ElementType;
    title: string;
    active?: boolean;
    navSize: string;
}

const SideBarItem = ({ icon, title, active, navSize }: Props) => {
    return (
        <Flex
            mt={3}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="left">
                <Link
                    backgroundColor={active ? "#AEC8CA" : undefined}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize === "large" ? "100%" : undefined}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export default SideBarItem