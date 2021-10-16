import { StyleSheet } from "react-native"
import {colors, fonts, metrics} from "../../styles"

const styles = StyleSheet.create({
    container: {
        width: metrics.button.width,
        height: metrics.button.height,
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 0.1,
        borderRightWidth: 0.1,
        borderBottomWidth: metrics.button.borderBottomWidth,
        borderRadius: metrics.button.borderRadius,
        marginBottom: metrics.padding,
        borderColor: colors.primary_shadow,
        backgroundColor: colors.primary
    },

    title: {
        fontSize: fonts.button.size,
        fontWeight: fonts.button.weight,
        color: colors.text_alt
    },

    secondaryContainer: {
        borderColor: colors.inputBackground_shadow,
        backgroundColor: colors.inputBackground
    },

    secondaryTitle: {
        color: colors.text
    }
})

export default styles