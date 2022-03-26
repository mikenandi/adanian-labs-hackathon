import React, {memo, useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Caption, Body, HeadingM, HeadingS, ButtonText} from "../Typography";
import {Ionicons} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";
import {Feather} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";
import color from "../colors";

function Profile(props) {
	return (
		<View style={styles.container}>
			{/* <View style={styles.greenTopContainer}>
				<View style={styles.profileContainer}>
					<Image
						source={require("../../assets/mike.jpg")}
						style={styles.avatar}
					/>
					<View style={styles.nameContainer}>
						<HeadingS>Michael Nandi</HeadingS>
						<Body>show profile</Body>
					</View>
				</View>
				<View style={styles.whiteBottomContainer}>
					<View style={styles.rowContainer}>
						<View style={styles.innerRowContainer}>
							<Ionicons
								name='md-person-circle-outline'
								size={24}
								color='black'
							/>
							<HeadingM>Personal info</HeadingM>
						</View>
						<MaterialIcons name='navigate-next' size={24} color='black' />
					</View>
					<View>
						<HeadingM>Listings</HeadingM>
						<View style={styles.rowContainer}>
							<View style={styles.innerRowContainer}>
								<Entypo name='add-to-list' size={24} color='black' />
								<HeadingS>Add new listing</HeadingS>
							</View>
							<MaterialIcons name='navigate-next' size={24} color='black' />
						</View>
						<View style={styles.rowContainer}>
							<View style={styles.innerRowContainer}>
								<Feather name='list' size={24} color='black' />
								<HeadingS>My listings</HeadingS>
							</View>
							<MaterialIcons name='navigate-next' size={24} color='black' />
						</View>
					</View>
					<View style={styles.rowContainer}>
						<View style={styles.innerRowContainer}>
							<Feather name='settings' size={24} color='black' />
							<HeadingM>Setings</HeadingM>
						</View>

						<MaterialIcons name='navigate-next' size={24} color='black' />
					</View>
					<View>
						<ButtonText>log out</ButtonText>
					</View>
				</View>
			</View> */}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.primary,
	},
	ImageContainer: {
		marginLeft: 15,
		alignItems: "center",
		marginTop: 10,
		flexDirection: "row",
	},
	profileImage: {
		marginLeft: 10,
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileImageText: {
		marginLeft: 12,
		marginTop: 20,
	},
	editButton: {
		display: "flex",
		marginLeft: 90,
		alignItems: "center",
		marginTop: 22,
		width: 180,
		height: 35,
		borderWidth: 0.5,
		borderColor: "grey",
		borderRadius: 20,
	},
	editProfileTxt: {
		fontSize: 18,
		marginTop: 2,
	},
	NormalText: {
		fontSize: 15,
		padding: 2,
	},
	profileInfo: {
		marginTop: 20,
		alignItems: "flex-start",
	},
	userInfo: {
		// borderWidth: 0.5,
		// borderColor: 'gray',
		padding: 5,
		margin: 5,
		display: "flex",
		flexDirection: "row",
	},
	userInfoLabel: {
		margin: 4,
		fontSize: 17,
		color: "grey",
	},
	userInfoText: {
		margin: 4,
		fontSize: 17,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 20,
	},
	greenTopContainer: {},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	innerRowContainer: {
		flexDirection: "row",
	},
	whiteBottomContainer: {
		height: "100%",
		backgroundColor: "white",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		padding: 20,
	},
	profileContainer: {
		paddingHorizontal: 30,
		paddingVertical: 10,
		flexDirection: "row",
		height: 120,
	},
	nameContainer: {},
});

export default memo(Profile);
//
