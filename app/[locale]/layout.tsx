export async function generateStaticParams() {
	return [
		{
			locale: "de",
		},
	];
}

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
}
