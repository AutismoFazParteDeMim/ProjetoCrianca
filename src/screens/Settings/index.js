import React, { useState } from "react"
import { Switch } from 'react-native-elements'
import { Container, OptionContainer, OptionIcon, Section, SectionTitle, TextContainer, SectionContent } from "./styles"
import Text from "../../components/Text"
import Tooltip from "../../components/Tooltip"
import { TouchableOpacity } from "react-native"
import Button from "../../components/Buttons/Button"

export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [colorblindMode, setColorblindMode] = useState(false);


    const toggleSwitch = () => {
        setChecked(!checked);
    };

    return (
        <Container>
            <Section>
                <SectionTitle>Interface do Usuário</SectionTitle>
                <SectionContent>
                    <OptionContainer>
                        <Tooltip text="Altera todo o visual para cores mais escuras e com menos saturação.">
                            <TextContainer>
                                <OptionIcon name="moon-outline" />
                                <Text>Tema Escuro</Text>
                            </TextContainer>
                        </Tooltip>
                        <Switch
                            value={darkMode}
                            onValueChange={(value) => setDarkMode(value)}
                        />
                    </OptionContainer>

                    <OptionContainer>
                        <Tooltip text="Altera todo o visual para cores adaptadas.">
                            <TextContainer>
                                <OptionIcon name="contrast-outline" />
                                <Text>Modo Daltônico</Text>
                            </TextContainer>
                        </Tooltip>
                        <Switch
                            value={colorblindMode}
                            onValueChange={(value) => setColorblindMode(value)}
                        />
                    </OptionContainer>
                </SectionContent>
            </Section>

            <Section>
                <SectionTitle>Aplicativo</SectionTitle>
                <SectionContent>
                    <TouchableOpacity style={{ width: "100%" }}>
                        <OptionContainer>
                            <TextContainer>
                                <OptionIcon name="information-circle-outline" />
                                <Text>Saiba Mais</Text>
                            </TextContainer>
                            <OptionIcon name="arrow-forward-outline" />
                        </OptionContainer>
                    </TouchableOpacity>

                    <Button type="danger" icon="log-out-outline" title="Sair da conta" />
                </SectionContent>
            </Section>
        </Container>
    )
}