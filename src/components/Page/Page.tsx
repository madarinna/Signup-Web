import Helmet from "react-helmet";
import Layout from "../Layout/Layout";

const Page = ({ children, container, pageTitle }: PageProps) => {
	const content = (
		<div>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			{children}
		</div>
	);
	return container ? <Layout /> : <div>{content}</div>;
};

export interface PageProps {
	children: React.ReactNode;
	container?: boolean;
	pageTitle?: string;
}

export default Page;
