export default function calculateRevenue(size: number, amount: number, pricePerTon: number, tonPerAcre: number) {
	return size * tonPerAcre * pricePerTon;
}
