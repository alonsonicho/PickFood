/* eslint-disable react/prop-types */

import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"


const DrawerComponent = ({ title, children, onClose, isOpen }) => {
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={'lg'}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{title}</DrawerHeader>
                <DrawerBody>
                    {children}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent
