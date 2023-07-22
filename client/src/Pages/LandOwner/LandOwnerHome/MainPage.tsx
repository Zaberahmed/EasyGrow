import {
    Avatar,
    Box,
    Container,
    Flex,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { IoLocationSharp } from 'react-icons/io5';
import Heading from './Heading';
import CurrentLocation from './CurrentLocation';
import UserProfileAvatar from './UserProfileAvatar';
import PhotoWithOverlay from './PhotoWithOverlay';
import addLand from '../../../assets/addResize.jpg';
import landList from '../../../assets/listLandResize.jpg';
import BoxImage from './BoxImage';
import RecentAddedLand from './RecentAddedLand';
import BottomNavBar from './BottomNavBar';

const MainPage = () => {
    return (
        <VStack mt={3} spacing={4} mb={'50px!important'} h={'80vh!important'}>
            <Container>
                <Heading></Heading>
                <Flex justifyContent={'space-between'} m={2} mb={5}>
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
                ></BoxImage>
                <RecentAddedLand></RecentAddedLand>
                <BottomNavBar></BottomNavBar>
            </Container>
        </VStack>
    );
};

export default MainPage;
