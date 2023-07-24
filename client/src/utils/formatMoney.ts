export default function formatMoney(number: string) {
	return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
