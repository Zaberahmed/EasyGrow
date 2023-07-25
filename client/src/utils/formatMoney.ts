export default function formatMoney(number: string | number): string {
	if (typeof number === 'string') {
		// Convert the string to a number and handle decimal part
		const [integerPart, decimalPart] = parseFloat(number).toFixed(2).split('.');

		// Add commas for thousands separators to the integer part
		const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		// Combine the formatted integer and decimal parts with a dot as the decimal separator
		return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
	} else if (typeof number === 'number') {
		// Convert the number to string and handle decimal part
		const [integerPart, decimalPart] = number.toFixed(2).split('.');

		// Add commas for thousands separators to the integer part
		const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		// Combine the formatted integer and decimal parts with a dot as the decimal separator
		return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
	} else {
		return ''; // Return an empty string for invalid inputs
	}
}
