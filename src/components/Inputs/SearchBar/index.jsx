import { Platform } from "react-native"

import { classicStyles, Container, CustomSearchBar } from "./styles"

export default function SearchBar(props) {
    return (
        <Container>
            <CustomSearchBar
                platform="ios"
                placeholder="Buscar..."
                clearIcon={false}
                containerStyle={{ paddingTop: Platform.OS === "web" ? 5 : 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, borderRadius: 16, backgroundColor: "transparent" }}
                inputContainerStyle={classicStyles.inputContainerStyle}
                {...props}
            />
        </Container>
    )
}