import { useMediaQuery } from 'react-responsive';

export default function useMediaQueryHook() {
	const isDesktopOrLaptopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	return { isDesktopOrLaptopOrTablet, isMobile };
}
