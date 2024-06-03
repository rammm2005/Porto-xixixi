"use client";

import { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn } from "@nextui-org/react";
import { useTheme } from "next-themes";

export function DarkMode() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const iconClasses = "text-xl text-default-800 pointer-events-none flex-shrink-0";
    const [defaultTheme, setDefaultTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDarkMode ? 'dark' : 'light';
            setDefaultTheme(initialTheme);
            setTheme(initialTheme);
        }
        setMounted(true);
    }, [setTheme]);

    useEffect(() => {
        // Simpan tema yang dipilih ke localStorage
        localStorage.setItem("selectedTheme", theme || '');
    }, [theme]);

    const handleThemeChange = (newTheme: string) => {
        if (newTheme !== theme) {
            setTheme(newTheme);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'n':
                    if (event.altKey) {
                        setTheme('light');
                    }
                    break;
                case 'k':
                    if (event.altKey) {
                        setTheme('dark');
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setTheme]);

    if (!mounted) return null;

    const themeIcon = theme === 'light' ? <ImSun className={iconClasses} /> : <BsMoonStars className={iconClasses} />;

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="shadow" color="primary" radius="sm">
                    {themeIcon}
                    {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                <DropdownSection title="Actions" showDivider>
                    <DropdownItem
                        key="new"
                        shortcut="Alt + N"
                        description="Change to Light Theme"
                        startContent={<ImSun className={iconClasses} />}
                        onClick={() => handleThemeChange('light')}
                    >
                        <span className="dark:text-white text-slate-900">
                            Light Mode
                        </span>
                    </DropdownItem>
                    <DropdownItem
                        key="copy"
                        shortcut="Alt + K"
                        description="Change to Dark Theme"
                        startContent={<BsMoonStars className={iconClasses} />}
                        onClick={() => handleThemeChange('dark')}
                    >
                        <span className="dark:text-white text-slate-900">
                            Dark Theme
                        </span>
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Default Theme">
                    <DropdownItem
                        key="delete"
                        className="text-secondary"
                        color="secondary"
                        description={`Change to the default theme (${defaultTheme})`}
                        startContent={<HiOutlineComputerDesktop className={cn(iconClasses, "text-secondary font-semibold")} />}
                        onClick={() => handleThemeChange(defaultTheme)}
                    >
                        Default Theme
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
