import { Avatar, Box, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { IoLocationSharp } from 'react-icons/io5';
import Heading from '../../../components/Heading/Heading';
import CurrentLocation from '../../../components/CurrentLocation/CurrentLocation';
import UserProfileAvatar from '../../../components/UserProfileAvatar/UserProfileAvatar';
import PhotoWithOverlay from '../../../components/PhotoWithOverlay/PhotoWithOverlay';
import addLand from '../../../assets/addResize.jpg';
import landList from '../../../assets/listLandResize.jpg';
import BoxImage from '../../../components/BoxImage/BoxImage';
import RecentAddedLand from '../../../components/RecentAddedLand/RecentAddedLand';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';

const MainPage = () => {
	return (
		<VStack
			mt={3}
			spacing={4}
			mb={'50px!important'}
			h={'80vh!important'}>
			<Container>
				<Heading></Heading>
				<Flex
					justifyContent={'space-between'}
					m={2}
					mb={5}>
					<HStack>
						<Text fontSize={'30px'}>
							<IoLocationSharp />
						</Text>
						<CurrentLocation />
					</HStack>
					<UserProfileAvatar />
				</Flex>
				<PhotoWithOverlay></PhotoWithOverlay>
				<BoxImage
					addLand={addLand}
					landList={landList}
					addLandDesc={'Add Land'}
					landListDesc={'Land List'}
					firstRoute="/map"
					secondRoute="/list"></BoxImage>
				<RecentAddedLand></RecentAddedLand>
				<BottomNavBar
					leftSide="/home"
					middle="/map"
					rightSide=""
					userRole="landowner"></BottomNavBar>
			</Container>
		</VStack>
	);
};

export default MainPage;
