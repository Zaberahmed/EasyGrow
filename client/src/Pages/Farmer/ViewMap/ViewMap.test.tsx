import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ViewMap from './ViewMap.component';
import { GetLandDetails } from '../../../Services/farmer';

jest.mock('../../../Services/farmer', () => {
	GetLandDetails: () => ({});
});
describe('View Map component', () => {
	beforeEach(() => {
		render(<ViewMap />);

		describe('Functionality tests', () => {
			test('should call GetLandDetails with correct input', () => {});
		});
	});
});
