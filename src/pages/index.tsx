import Page from "../components/Page/Page";
import SignUpNumberPage from "./SignupNumberPage";
import { useRouter } from "next/router";

// this should be for linking the pages

export default function App() {
	// const router = useRouter()
	return (
		<Page>
			<SignUpNumberPage />
		</Page>
	);
}
