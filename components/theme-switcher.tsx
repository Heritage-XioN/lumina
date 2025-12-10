'use client';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from '@/components/kibo-ui/theme-switcher';

const ThemeSwitcherWrapper = () => {
	const { setTheme } = useTheme();
	return <ThemeSwitcher onChange={(theme) => setTheme(theme)} />;
};

export default ThemeSwitcherWrapper;
