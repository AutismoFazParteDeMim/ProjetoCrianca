import React, { useCallback, useState, useContext, useEffect } from "react"
import { Platform } from "react-native"
import SquareButton from "../../components/Buttons/SquareButton"
import SearchBar from "../../components/Inputs/SearchBar"

import { Container, Header, ProfilePic, ProfileButton, SearchBarContainer, UserNameText, Grid, GridRow } from "./styles"

import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider"

import { useSelector, useDispatch } from "react-redux"
import { firstTime as firstTimeAction } from "../../redux/modules/settings/actions"


export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const { firstTime } = useSelector((state) => state.settings)
    const { child } = useContext(AuthenticatedUserContext)
    const [first, setFirst] = useState(true)

    useEffect(() => {
        if (firstTime) {
            setFirst(false)
            dispatch(firstTimeAction(first))
            navigation.navigate("Avatar")
        }
    }, [first])

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Header>
                <ProfileButton onPress={() => navigation.navigate("Profile")}>
                    <ProfilePic xml={child.childPic} />
                </ProfileButton>
                <SearchBarContainer>
                    <SearchBar />
                </SearchBarContainer>
            </Header>

            <UserNameText>Bem vind{child.childSex === "f" ? "a!" : "o!" + "\n" + child.childName}</UserNameText>

            <Grid>
                <GridRow>
                    <SquareButton title="Atividades" image={require("../../../assets/icons/activities-icon.png")} onPress={() => navigation.navigate("Activity")} />
                    <SquareButton title="Jogos" image={require("../../../assets/icons/games-icon.png")} onPress={() => navigation.navigate("Games")} />
                </GridRow>
                <GridRow>
                    <SquareButton title="Configurações" image={require("../../../assets/icons/settings-icon.png")} onPress={() => navigation.navigate("Settings")} />
                </GridRow>
            </Grid>
        </Container>
    )
}