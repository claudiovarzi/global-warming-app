import { useEffect } from 'react';
import { useLocation } from 'react-router';

// wrapper component that handles scroll restoration to top for react-router-dom navigation
const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>;
};

export default ScrollToTop;
