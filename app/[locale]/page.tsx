export default function Home() {
	async function requestLogin(formData: FormData) {
		"use server";
		const email = formData.get("mail") as string;
		//TODO: check if email is valid

		console.log(email);
	}

	return (
		<form action={requestLogin}>
			<div>
				<input name="mail" id="mail-input" type="email" autoComplete="username" required autoFocus placeholder={"email-placeholder"} />
			</div>
			<button type="submit">request-code</button>
		</form>
	);
}
