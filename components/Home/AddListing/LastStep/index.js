import React, {memo} from "react";
import {View, StyleSheet, Modal, TextInput} from "react-native";
import color from "../../../colors";
import {Entypo} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hidePropertyType} from "../../../Store/home-store/modalSlice";
import {useSelector} from "react-redux";
import {HeadingS, Body, ButtonText} from "../../../Typography";

function PropertyType(props) {
	const dispatch = useDispatch();

	const handleBackToHomePage = () => {
		dispatch(hidePropertyType());
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Entypo
					name='cross'
					size={30}
					onPress={handleBackToHomePage}
					style={styles.backArrow}
				/>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.titleContainer}>
					<HeadingS style={styles.titleText}>
						Last step, just add few details and post?
					</HeadingS>
				</View>

				<View style={styles.typesContainer}>
					<View style={styles.detailContainer}>
						<Body>price</Body>
						<TextInput placeholder='price' style={styles.inputText} />
					</View>
					<View style={styles.detailContainer}>
						<Body>Location</Body>
						<TextInput placeholder='location' style={styles.inputText} />
					</View>
					<View style={styles.detailContainer}>
						<Body>House Name</Body>
						<TextInput placeholder='eg mbezi House' style={styles.inputText} />
					</View>
					<View style={styles.detailContainer}>
						<Body>Contacts</Body>
						<TextInput placeholder='phone number' style={styles.inputText} />
					</View>
					<View style={styles.button}>
						<ButtonText>add listing</ButtonText>
					</View>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {flex: 1, backgroundColor: color.primary},
	topContainer: {
		backgroundColor: color.primary,
		paddingHorizontal: 8,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	backArrow: {
		color: "white",
	},
	titleText: {
		color: "white",
		textTransform: "lowercase",
		fontWeight: "bold",
	},
	titleContainer: {
		backgroundColor: color.primary,
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	typesContainer: {
		backgroundColor: "white",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		height: "100%",
		paddingTop: 30,
		paddingLeft: 20,
	},
	inputText: {
		borderWidth: 1,
		borderRadius: 5,
		width: "90%",
		padding: 10,
		fontSize: 18,
	},
	detailContainer: {
		marginBottom: 10,
	},
	button: {
		backgroundColor: color.primary,
		width: "90%",
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginTop: 5,
	},
});

export default memo(PropertyType);
