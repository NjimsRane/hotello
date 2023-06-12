const CURRENT_FORMAT = new Intl.NumberFormat(undefined, {
	currency: "USD",
	style: "currency",
});

export function formatCurrency(number: number) {
	return CURRENT_FORMAT.format(number);
}
