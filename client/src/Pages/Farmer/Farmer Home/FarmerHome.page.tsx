import { VStack, Container, Heading, Flex, HStack, Text } from '@chakra-ui/react';
import { IoLocationSharp } from 'react-icons/io5';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import BoxImage from '../../../components/BoxImage/BoxImage';
import CurrentLocation from '../../../components/CurrentLocation/CurrentLocation';
import PhotoWithOverlay from '../../../components/PhotoWithOverlay/PhotoWithOverlay';
import UserProfileAvatar from '../../../components/UserProfileAvatar/UserProfileAvatar';

import offerList from './../../../assets/offer-list.jpg';
import leaseLand from './../../../assets/lease-land-2.jpg';

const FarmerHomePage = () => {
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
					addLand={leaseLand}
					landList={offerList}
					addLandDesc={'Search Land'}
					landListDesc={'My offers'}
					firstRoute="farmer/map"
					secondRoute="farmer/offer-details"></BoxImage>

				<BottomNavBar
					leftSide="farmer"
					middle="farmer/map"
					rightSide="farmer/offer-details"
					userRole="farmer"></BottomNavBar>
			</Container>
		</VStack>
	);
};

export default FarmerHomePage;
