
import { useEffect, useState } from 'react';
import {
    VStack, Text
} from '@chakra-ui/react';


const CurrentLocation = () => {
    const [address, setAddress] = useState<any>({});

    const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos: GeolocationPosition) {
        const crd = pos.coords;
        fetchLocation(crd.latitude, crd.longitude);
    }

    function error(err: GeolocationPositionError) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    const fetchLocation = async (latitude: number, longitude: number) => {
        fetch(`https://barikoi.xyz/v1/api/search/reverse/NDgyNDo3QlpGMlIwVkdQ/geocode?longitude=${longitude}&latitude=${latitude}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true&bangla=true`)
            .then((res) => res.json())
            .then((data) => setAddress(data));
    };


    return (

        <VStack align={'left'}>
            <Text fontSize={'sm'} mb={'0!important'}>{address.place?.area}</Text>
            <Text fontWeight={500} fontSize={"md"} mt={-3}  >{address.place?.city},Bangladesh</Text>
        </VStack>


    )
};

export default CurrentLocation;
