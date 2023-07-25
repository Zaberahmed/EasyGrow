import { Flex, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineMenuFold } from 'react-icons/ai';
import { FaSearchLocation } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
	leftSide: string;
	middle: string;
	rightSide: string;
}

const BottomNavBar = ({ leftSide, middle, rightSide }: NavbarProps) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const bgColor = useColorModeValue('white', 'gray.800');

	const activeColor = useColorModeValue('green.400', 'green.400');
	const selectedBgColor = useColorModeValue('green.100', 'green.700');
	const selectedColor = useColorModeValue('green.600', 'green.200');
	const location = useLocation();
	const activeRoute = location.pathname;
	return (
		<div>
			<Flex
				mx={12}
				zIndex={10}
				pos="fixed"
				bottom={8}
				left={0}
				right={0}
				align="center"
				justify="space-around"
				py={1}
				px={6}
				borderRadius="30px"
				bgColor={bgColor}
				boxShadow={'0px 0px 15px -8px rgba(0,0,0,0.9)'}>
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}>
					<IconButton
						onClick={() => navigate(`/${leftSide}`)}
						aria-label="Home"
						icon={<AiOutlineHome size={20} />}
						variant="ghost"
						size="lg"
						colorScheme={activeRoute === '/' ? 'gray' : 'green'}
						color={activeRoute === '/' ? selectedColor : activeColor}
						transform={activeRoute === '/' ? 'scale(1.2)' : 'scale(1.0)'}
						bg={activeRoute === '/' ? selectedBgColor : 'transparent'}
						_active={{
							bg: selectedBgColor,
						}}
						_hover={{
							bg: selectedBgColor,
							borderColor: 'green.500',
						}}
						isRound
						shadow="0px 0px 5px 2px rgba(0,0,0,0.1)"
					/>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}>
					<IconButton
						onClick={() => navigate(`/${middle}`)}
						aria-label="Search"
						icon={<FaSearchLocation size={20} />}
						variant="ghost"
						size="lg"
						colorScheme={activeRoute === '/dashboard' ? 'gray' : 'green'}
						color={activeRoute === '/dashboard' ? selectedColor : activeColor}
						transform={activeRoute === '/dashboard' ? 'scale(1.2)' : 'scale(1.0)'}
						bg={activeRoute === '/dashboard' ? selectedBgColor : 'transparent'}
						_active={{
							bg: selectedBgColor,
						}}
						_hover={{
							bg: selectedBgColor,
							borderColor: 'green.500',
						}}
						isRound
						shadow="0px 0px 5px 2px rgba(0,0,0,0.1)"
					/>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}>
					<IconButton
						onClick={() => navigate(`/${rightSide}`)}
						aria-label="Profile"
						icon={<AiOutlineMenuFold size={20} />}
						variant="ghost"
						size="lg"
						colorScheme={activeRoute === '/' ? 'gray' : 'green'}
						color={activeRoute === '/' ? selectedColor : activeColor}
						transform={activeRoute === '/' ? 'scale(1.2)' : 'scale(1.0)'}
						bg={activeRoute === '/' ? selectedBgColor : 'transparent'}
						_active={{
							bg: selectedBgColor,
						}}
						_hover={{
							bg: selectedBgColor,
							borderColor: 'green.500',
						}}
						isRound
						shadow="0px 0px 5px 2px rgba(0,0,0,0.1)"
					/>{' '}
				</motion.div>
			</Flex>
		</div>
	);
};

export default BottomNavBar;
