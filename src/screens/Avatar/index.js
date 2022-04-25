import React, { useEffect, useState } from "react"
import { Button, TouchableOpacity } from "react-native"
const axios = require('axios').default
import { SvgXml } from "react-native-svg"


import { setDoc, doc } from "firebase/firestore"
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider"
import { Container } from "./styles"

export default function Avatar({ navigation }) {
    const [avatar, setAvatar] = useState()
    const [seed, setSeed] = useState({
        backgroundColor: "#ffffff",
        sex: "male",
        eyes: "open",
        skinColor: "tone1",
        hair: "long",
        hairColor: "black",
        clothingColor: "blue"
    })

    const { user } = useContext(AuthenticatedUserContext)

    function getAvatar() {
        
        //const api = `https://avatars.dicebear.com/api/personas/${seed.sex}/:seed.svg?backgroundColor=${seed.backgroundColor}&eyes=${seed.eyes}&skinColor=${seed.skinColor}&clothingColor=${seed.clothingColor}&hair=${seed.hair}&hairColor=${seed.hairColor}`
        axios.get(`https://avatars.dicebear.com/api/personas/male/avatar.svg`, {
            params: {
                radius: 50,
                background: seed.backgroundColor,
                eyes: seed.eyes,
                skinColor: seed.skinColor,
                clothingColor: seed.clothingColor,
                hair: seed.hair,
                hairColor: seed.hairColor,
            }
        })
            .then(function (response) {
                console.log(response);
                setAvatar(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    async function setChildPic(){
        await setDoc(doc(firestore, "users", user.uid), {
            childPic: avatar
        }).then(()=>{
            navigation.navigate.goBack()
        })
    }

    useEffect(() => {
        getAvatar()
    }, [seed])

    return (
        <Container>
            <TouchableOpacity style={{ borderRadius: 50 }}>
                {avatar && <SvgXml width="150" height="150" xml={avatar} />}
            </TouchableOpacity>
            <Button title="Obter Avatar" onPress={() => setSeed({ ...seed, backgroundColor: "#000000" })} />
        </Container>
    )
}