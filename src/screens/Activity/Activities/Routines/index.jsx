import { Slider } from '../../../../components'
import { data } from "./data"

import { Image, Descrição, Item, Container, Title } from './styles'

export default function Routines({ navigation }) {
    const RenderItem = ({ item }) => (
        <Item>
            <Image source={item.image} />
            <Title>{item.title}</Title>
            <Descrição>{item.text}</Descrição>
        </Item>
    )

    return (
        <Container>
            <Slider navigation={navigation} data={data} renderItem={RenderItem} />
        </Container>
    )
}