import { List, ListItem, ListIcon, Card } from '@chakra-ui/react';
import { LuClipboardEdit } from 'react-icons/lu';

const TermsAndConditionsComponent = () => {
	return (
		<Card m={1}>
			<List spacing={3}>
				<ListItem>
					<ListIcon
						as={LuClipboardEdit}
						color="green.500"
					/>
					Land should not be used in any other activity other than agriculture.
				</ListItem>
				<ListItem>
					<ListIcon
						as={LuClipboardEdit}
						color="green.500"
					/>
					The lessee should be insured properly for any liability.
				</ListItem>
				<ListItem>
					<ListIcon
						as={LuClipboardEdit}
						color="green.500"
					/>
					Lease terms are subject to change upon consideration from both parties.
				</ListItem>

				<ListItem>
					<ListIcon
						as={LuClipboardEdit}
						color="green.500"
					/>
					Breaking any condition will trigger immediate null and void of the contract
				</ListItem>
			</List>
		</Card>
	);
};

export default TermsAndConditionsComponent;
