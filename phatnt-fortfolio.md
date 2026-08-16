This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  images/
    aether.jpg
    bg-3.jpg
    bg-4.jpg
    hire-bg.jpg
    ignis.jpg
    profile-1.png
    profile-2.jpg
    sign.png
    work1.jpg
    work10.jpg
    work11.jpg
    work12.png
    work13.jpg
    work14.jpg
    work15.jpg
    work2.jpg
    work3.jpg
    work5.png
    work6.jpg
    work7.jpg
    work8.jpg
    work9.jpg
  apple-touch-icon.png
  favicon-16x16.png
  favicon-32x32.png
  favicon-circle.png
  favicon.ico
  maskable-icon-192x192.png
  maskable-icon-512x512.png
  pwa-192x192.png
  pwa-512x512.png
  pwa-64x64.png
scripts/
  generate-pwa-icons.js
src/
  assets/
    react.svg
  components/
    layout/
      Layout.tsx
    sections/
      About.tsx
      Contact.tsx
      Experience.tsx
      Hero.tsx
      ProjectDetailsModal.tsx
      Projects.tsx
      Skills.tsx
    ui/
      Magnetic.tsx
      Particles.tsx
      ScrollProgress.tsx
      Spotlight.tsx
      TiltCard.tsx
      Typewriter.tsx
  context/
    SidebarContext.tsx
    ThemeContext.tsx
  data/
    portfolio.ts
  App.css
  App.tsx
  index.css
  main.tsx
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
````

# Files

## File: scripts/generate-pwa-icons.js
````javascript
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');
const avatarPath = join(publicDir, 'images/profile-1.png');

const icons = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'pwa-64x64.png', size: 64 },
  { name: 'pwa-192x192.png', size: 192 },
  { name: 'pwa-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'maskable-icon-192x192.png', size: 192 },
  { name: 'maskable-icon-512x512.png', size: 512 },
];

async function generateIcons() {
  console.log('Generating PWA icons from avatar...\n');
  console.log(`Source: ${avatarPath}\n`);

  // Get image metadata to find the center for cropping
  const metadata = await sharp(avatarPath).metadata();
  const size = Math.min(metadata.width, metadata.height);

  for (const icon of icons) {
    await sharp(avatarPath)
      .resize(icon.size, icon.size, {
        fit: 'cover',
        position: 'top' // Focus on face area
      })
      .png()
      .toFile(join(publicDir, icon.name));
    console.log(`  Created: ${icon.name} (${icon.size}x${icon.size})`);
  }

  // Generate favicon.ico
  await sharp(avatarPath)
    .resize(32, 32, { fit: 'cover', position: 'top' })
    .png()
    .toFile(join(publicDir, 'favicon.ico'));
  console.log(`  Created: favicon.ico (32x32)`);

  // Generate SVG favicon (embedded image)
  const base64 = await sharp(avatarPath)
    .resize(64, 64, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer()
    .then(buf => buf.toString('base64'));

  const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <clipPath id="circle">
      <circle cx="32" cy="32" r="32"/>
    </clipPath>
  </defs>
  <image href="data:image/png;base64,${base64}" width="64" height="64" clip-path="url(#circle)"/>
</svg>`;

  await sharp(Buffer.from(svgFavicon))
    .resize(64, 64)
    .png()
    .toFile(join(publicDir, 'favicon-circle.png'));

  console.log(`\nPWA icons generated successfully from avatar!`);
}

generateIcons().catch(console.error);
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/components/layout/Layout.tsx
````typescript
import { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code,
  Layers,
  Mail,
  Sun,
  Moon,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Menu,
  X
} from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSidebar, type SidebarPosition } from '../../context/SidebarContext';
import { Magnetic } from '../ui/Magnetic';
import { HERO_DATA } from '../../data/portfolio';
import clsx from 'clsx';

const NAV_COLORS: Record<string, { text: string; bg: string; shadow: string; hoverText: string }> = {
  'dev-red': { text: 'text-dev-red', bg: 'bg-dev-red', shadow: 'shadow-dev-red/20', hoverText: 'group-hover:text-dev-red' },
  'dev-blue': { text: 'text-dev-blue', bg: 'bg-dev-blue', shadow: 'shadow-dev-blue/20', hoverText: 'group-hover:text-dev-blue' },
  'dev-orange': { text: 'text-dev-orange', bg: 'bg-dev-orange', shadow: 'shadow-dev-orange/20', hoverText: 'group-hover:text-dev-orange' },
  'dev-yellow': { text: 'text-dev-yellow', bg: 'bg-dev-yellow', shadow: 'shadow-dev-yellow/20', hoverText: 'group-hover:text-dev-yellow' },
  'dev-pink': { text: 'text-dev-pink', bg: 'bg-dev-pink', shadow: 'shadow-dev-pink/20', hoverText: 'group-hover:text-dev-pink' },
  'dev-green': { text: 'text-dev-green', bg: 'bg-dev-green', shadow: 'shadow-dev-green/20', hoverText: 'group-hover:text-dev-green' },
};

const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: Home, color: 'dev-red' },
  { name: 'About', path: '/about', icon: User, color: 'dev-blue' },
  { name: 'Experience', path: '/experience', icon: Briefcase, color: 'dev-orange' },
  { name: 'Skills', path: '/skills', icon: Code, color: 'dev-yellow' },
  { name: 'Projects', path: '/projects', icon: Layers, color: 'dev-pink' },
  { name: 'Contact', path: '/contact', icon: Mail, color: 'dev-green' },
];

export const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const { position, setPosition } = useSidebar();
  const location = useLocation();

  const isVertical = position === 'left' || position === 'right';

  // Dynamic positioning styles
  const positionStyles = {
    left: 'left-0 top-0 h-screen w-80 flex-col',
    right: 'right-0 top-0 h-screen w-80 flex-col',
    top: 'top-0 left-0 right-0 h-auto w-full flex-row',
    bottom: 'bottom-0 left-0 right-0 h-auto w-full flex-row',
  };

  return (
    <aside 
      className={clsx(
        "hidden md:flex fixed z-50 p-4 transition-all duration-500 ease-in-out",
        positionStyles[position]
      )}
    >
      <div 
        className={clsx(
          "flex-1 flex bg-bg-secondary/50 backdrop-blur-xl border border-bg-tertiary shadow-2xl overflow-hidden transition-all duration-500",
          isVertical ? "flex-col rounded-[2rem]" : "flex-row items-center rounded-[1.5rem] px-6 py-2"
        )}
      >
        <div className={clsx("flex items-center relative group shrink-0", isVertical ? "p-8 flex-col" : "mr-8 gap-4")}>
          {/* Avatar */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20 relative z-10 transition-all",
              isVertical ? "w-24 h-24 mb-4" : "w-12 h-12 border-2"
            )}
          >
            <img src={HERO_DATA.avatar} alt="Phat Nguyen" className="w-full h-full object-cover" />
          </motion.div>
          
          <div className={clsx("text-center", !isVertical && "text-left")}>
            <h2 className={clsx("font-bold text-primary transition-all", isVertical ? "text-xl" : "text-lg leading-none")}>
              {isVertical ? "Phat Nguyen" : "PhatNT"}
            </h2>
            {isVertical && (
                        <p className="text-sm text-fg-muted font-mono bg-bg-tertiary px-2 py-1 rounded mt-2 text-[10px] tracking-widest uppercase">
                          Solution Architect
                        </p>            )}
          </div>
        </div>

        <nav className={clsx("flex-1", isVertical ? "px-4 py-6 space-y-3 overflow-y-auto no-scrollbar" : "flex justify-center gap-2")}>
          <LayoutGroup>
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              const colors = NAV_COLORS[item.color];

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    "relative flex items-center justify-center rounded-2xl transition-all duration-300 group z-10 overflow-hidden",
                    isVertical ? "gap-4 px-4 py-3 w-full" : "px-3 py-2 flex-col gap-1 min-w-[5rem]",
                    isActive ? "text-white" : "text-fg-muted hover:text-fg"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={clsx("absolute inset-0 -z-10 shadow-lg", colors.bg, colors.shadow, isVertical ? "rounded-2xl" : "rounded-xl")}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <motion.div whileHover={isVertical ? { x: 3 } : { y: -2 }}>
                    <item.icon size={isVertical ? 20 : 18} className={clsx(isActive ? "text-white" : [colors.hoverText, "transition-colors"])} />
                  </motion.div>
                  {isVertical && (
                    <span className="font-medium w-24 text-left font-mono relative">
                      {item.name}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </LayoutGroup>
        </nav>

        <div className={clsx("border-bg-tertiary shrink-0 flex gap-2", isVertical ? "p-6 border-t flex-col" : "ml-8 border-l pl-6 items-center")}>
          {/* Position Switcher */}
          <div className={clsx("flex bg-bg-tertiary rounded-xl p-1", isVertical ? "justify-between" : "gap-1")}>
            {(['left', 'bottom', 'top', 'right'] as SidebarPosition[]).map((pos) => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={clsx(
                  "p-2 rounded-lg transition-all",
                  position === pos ? "bg-bg text-primary shadow-sm" : "text-fg-muted hover:text-fg"
                )}
              >
                {pos === 'left' && <PanelLeft size={16} />}
                {pos === 'right' && <PanelRight size={16} />}
                {pos === 'top' && <PanelTop size={16} />}
                {pos === 'bottom' && <PanelBottom size={16} />}
              </button>
            ))}
          </div>

          <Magnetic>
            <button
              onClick={toggleTheme}
              className={clsx(
                "flex items-center justify-center gap-3 rounded-2xl bg-bg-tertiary hover:bg-bg text-fg hover:text-primary transition-all duration-300 border border-transparent hover:border-bg-tertiary group",
                isVertical ? "w-full px-4 py-3" : "p-3"
              )}
            >
              <motion.div 
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
              {isVertical && (
                <span className="text-sm font-medium font-mono group-hover:tracking-wider transition-all">
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </span>
              )}
            </button>
          </Magnetic>
        </div>
      </div>
    </aside>
  );
};

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  const width = typeof window !== 'undefined' ? window.innerWidth : 375;
  const height = typeof window !== 'undefined' ? window.innerHeight : 800;

  const x = useMotionValue(0); 
  const y = useMotionValue(0);
  
  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const activeItem = NAV_ITEMS.find(item => item.path === location.pathname);
  const activeColors = activeItem ? NAV_COLORS[activeItem.color] : NAV_COLORS['dev-red'];

  const EDGE_MARGIN = 4;
  const BUTTON_SIZE = 56;
  const leftSnap = -(width - (EDGE_MARGIN * 2) - BUTTON_SIZE);
  const rightSnap = 0;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-bg/60 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {/* Expanded Menu (Hero Animation Target) */}
            <motion.div
              layoutId="menu-container"
              className="bg-bg-secondary/90 backdrop-blur-xl border border-bg-tertiary shadow-2xl w-[280px] overflow-hidden"
              style={{ borderRadius: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6"
              >
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-3 shadow-lg">
                    <img src={HERO_DATA.avatar} alt="Phat Nguyen" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-primary">Phat Nguyen</h3>
                    <p className="text-xs text-fg-muted font-mono tracking-wider uppercase">Solution Architect</p>
                  </div>
                </div>

                {/* Grid Menu */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname === item.path;
                    const colors = NAV_COLORS[item.color];
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className={clsx(
                          "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
                          isActive 
                            ? [colors.bg, "text-white shadow-md scale-110"] 
                            : "bg-bg-tertiary text-fg-muted group-hover:bg-bg group-hover:text-fg"
                        )}>
                          <item.icon size={20} />
                        </div>
                        <span className={clsx(
                          "text-[10px] font-medium transition-colors",
                          isActive ? "text-fg" : "text-fg-muted"
                        )}>
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-bg-tertiary/50">
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-tertiary/50 text-fg-muted hover:bg-bg-tertiary hover:text-fg transition-all text-xs font-medium"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    {theme === 'dark' ? 'Light' : 'Dark'}
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-tertiary/50 text-fg-muted hover:bg-dev-red/10 hover:text-dev-red transition-all text-xs font-medium"
                  >
                    <X size={16} />
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button (Draggable Source) */}
      {!isOpen && (
        <motion.div 
          className="md:hidden fixed z-50"
          style={{ bottom: EDGE_MARGIN, right: EDGE_MARGIN, x, y }}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          dragConstraints={{ 
            left: leftSnap, 
            right: rightSnap, 
            top: -(height - EDGE_MARGIN * 2 - BUTTON_SIZE), 
            bottom: 0 
          }}
        onDragEnd={() => {
          // Snap X to nearest edge, leave Y free (momentum)
          const currentX = x.get();
          // Midpoint between leftSnap (negative) and rightSnap (0)
          const midPoint = leftSnap / 2;
          
          const targetX = currentX < midPoint ? leftSnap : rightSnap;
          
          animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
        }}
        dragTransition={{
          power: 0.2,
          timeConstant: 200
        }}
      >
          <motion.button
            layoutId="menu-container"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className={clsx(
              "w-14 h-14 flex items-center justify-center shadow-2xl relative",
              [activeColors.bg, "text-white", activeColors.shadow]
            )}
            style={{ borderRadius: 16 }}
          >
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Menu size={26} />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

import { Spotlight } from '../ui/Spotlight';
import { ScrollProgress } from '../ui/ScrollProgress';
import { Particles } from '../ui/Particles';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { position } = useSidebar();

  const mainStyles = {
    left: 'md:ml-80 pb-0 md:pb-0 pt-0 md:pt-0',
    right: 'md:mr-80 pb-0 md:pb-0 pt-0 md:pt-0',
    top: 'md:mt-32 pb-0 md:pb-0 pt-0 md:pt-0',
    bottom: 'md:mb-32 pb-0 md:pb-0 pt-0 md:pt-0',
  };

  return (
    <div className="min-h-screen bg-bg text-fg transition-colors duration-300 font-sans relative">
      <ScrollProgress />
      <Particles />
      <Spotlight />
      <Sidebar />

      <main className={clsx("min-h-screen transition-all duration-500 ease-in-out", mainStyles[position])}>
        {children}
      </main>

      <MobileNav />
    </div>
  );
};
````

## File: src/components/sections/About.tsx
````typescript
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../../data/portfolio';
import { Zap } from 'lucide-react';
import clsx from 'clsx';

export const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-12">
          {/* Bio Column */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {ABOUT_DATA.personalities.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-mono font-medium border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-fg-muted leading-relaxed">
                {ABOUT_DATA.bio.map((paragraph, index) => (
                  <motion.p key={index} variants={item}>
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Opportunity / Vision Text (Migrated from Flutter) */}
            <div className="flex flex-col justify-center p-8 bg-bg-secondary rounded-[2rem] border border-bg-tertiary relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Zap size={80} className="text-primary" />
              </div>
              <p className="relative z-10 text-fg-muted italic border-l-4 border-primary pl-6">
                "I focus on effectiveness and engineered outcomes. My goal is to build high-performance systems that not only drive business success but also deliver meaningful convenience and value to the community."
              </p>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="pt-12">
            <h3 className="text-xl font-bold mb-8 font-mono flex items-center gap-2">
              <span className="text-dev-pink">#</span> Fun Facts
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {ABOUT_DATA.funFacts.map((fact, idx) => {
                const Icon = fact.icon;
                // Extended Color Cycle
                const colors = [
                  "text-dev-blue",
                  "text-dev-yellow",
                  "text-dev-orange",
                  "text-dev-green",
                  "text-dev-red",
                  "text-dev-pink",
                  "text-dev-blue",
                  "text-dev-green"
                ];
                const colorClass = colors[idx % colors.length];

                return (
                  <motion.div
                    key={fact.label}
                    variants={item}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[2rem] bg-bg-secondary border border-bg-tertiary flex flex-col items-center justify-center text-center gap-2 sm:gap-4 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 group"
                  >
                    <div className={clsx("p-2 sm:p-4 bg-bg rounded-xl sm:rounded-2xl transition-colors duration-300 group-hover:text-white group-hover:bg-primary", colorClass)}>
                      <Icon size={20} className="sm:w-7 sm:h-7" />
                    </div>
                    <div className="min-w-0 w-full">
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-fg mb-1 truncate">{fact.value}</h3>
                      <p className="text-[10px] sm:text-xs text-fg-muted font-mono uppercase tracking-wider sm:tracking-widest font-bold truncate">
                        {fact.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
````

## File: src/components/sections/Contact.tsx
````typescript
import { motion } from 'framer-motion';
import { CONTACT_DATA, HERO_DATA } from '../../data/portfolio';
import { ArrowUpRight, MapPin, Clock, Sparkles, Coffee, Handshake, Lightbulb, Code2 } from 'lucide-react';
import clsx from 'clsx';
import { Magnetic } from '../ui/Magnetic';

const SERVICES = [
  { icon: Code2, label: 'System Architecture', color: 'text-dev-blue' },
  { icon: Lightbulb, label: 'Technical Consulting', color: 'text-dev-yellow' },
  { icon: Handshake, label: 'Team Leadership', color: 'text-dev-green' },
  { icon: Coffee, label: 'Code Review & Mentoring', color: 'text-dev-orange' },
];

const CONTACT_COLORS: Record<string, { bg: string; hover: string; shadow: string }> = {
  Email: { bg: 'bg-dev-red/10', hover: 'group-hover:bg-dev-red', shadow: 'group-hover:shadow-dev-red/25' },
  Messenger: { bg: 'bg-dev-blue/10', hover: 'group-hover:bg-dev-blue', shadow: 'group-hover:shadow-dev-blue/25' },
  Telegram: { bg: 'bg-dev-green/10', hover: 'group-hover:bg-dev-green', shadow: 'group-hover:shadow-dev-green/25' },
  Teams: { bg: 'bg-dev-pink/10', hover: 'group-hover:bg-dev-pink', shadow: 'group-hover:shadow-dev-pink/25' },
};

export const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-20 max-w-6xl mx-auto flex flex-col justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -left-32 w-72 h-72 bg-dev-blue/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left Column - Info */}
        <div className="space-y-6 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Let's build <br />
              <span className="text-primary">something great.</span>
            </h3>
            <p className="text-base sm:text-lg text-fg-muted max-w-md leading-relaxed">
              Looking for a technical partner who understands both code and business?
              Let's discuss how I can help turn your vision into reality.
            </p>
          </motion.div>

          {/* Location & Timezone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 sm:gap-4"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-bg-secondary rounded-lg sm:rounded-xl border border-bg-tertiary">
              <MapPin size={14} className="sm:w-4 sm:h-4 text-dev-pink" />
              <span className="text-xs sm:text-sm">{HERO_DATA.location}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-bg-secondary rounded-lg sm:rounded-xl border border-bg-tertiary">
              <Clock size={14} className="sm:w-4 sm:h-4 text-dev-blue" />
              <span className="text-xs sm:text-sm">UTC+7 (ICT)</span>
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-3 bg-dev-green/10 rounded-xl sm:rounded-2xl border border-dev-green/20"
          >
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dev-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-dev-green"></span>
            </span>
            <span className="text-dev-green font-bold text-xs sm:text-sm tracking-wider">AVAILABLE FOR PROJECTS</span>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xs sm:text-sm font-bold text-fg-muted uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <Sparkles size={12} className="sm:w-3.5 sm:h-3.5 text-dev-yellow" />
              What I can help with
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {SERVICES.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-bg-secondary/50 rounded-lg sm:rounded-xl border border-bg-tertiary hover:border-primary/30 transition-colors"
                >
                  <service.icon size={16} className={clsx("sm:w-[18px] sm:h-[18px]", service.color)} />
                  <span className="text-xs sm:text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {CONTACT_DATA.map((contact) => {
            const Icon = contact.icon;
            const colors = CONTACT_COLORS[contact.name] || CONTACT_COLORS.Email;

            return (
              <Magnetic key={contact.name}>
                <motion.a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ y: -8 }}
                  className={clsx(
                    "group relative p-4 sm:p-6 bg-bg-secondary border border-bg-tertiary rounded-2xl sm:rounded-[2rem] flex flex-col items-center gap-2 sm:gap-4",
                    "hover:border-primary/50 transition-all duration-300 hover:shadow-2xl",
                    colors.shadow
                  )}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className={clsx(
                    "relative p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300",
                    colors.bg,
                    colors.hover,
                    "group-hover:text-white group-hover:shadow-lg"
                  )}>
                    <Icon size={22} className="sm:w-7 sm:h-7" />
                  </div>

                  <div className="text-center relative min-w-0 w-full">
                    <div className="font-bold text-sm sm:text-base text-fg mb-0.5 sm:mb-1 group-hover:text-primary transition-colors">
                      {contact.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-fg-muted truncate px-1">
                      {contact.address}
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={14} className="sm:w-4 sm:h-4 text-primary" />
                  </div>
                </motion.a>
              </Magnetic>
            );
          })}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 sm:mt-20 p-5 sm:p-8 bg-gradient-to-r from-bg-secondary to-bg-tertiary/50 rounded-2xl sm:rounded-[2rem] border border-bg-tertiary text-center"
      >
        <p className="text-sm sm:text-base text-fg-muted mb-3 sm:mb-4">Ready to discuss your next project?</p>
        <a
          href={CONTACT_DATA[0]?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-bold hover:bg-dev-green transition-colors shadow-lg shadow-primary/25 hover:shadow-dev-green/25"
        >
          Get in Touch
          <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-bg-tertiary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-fg-muted">
          <p>© {new Date().getFullYear()} Phat Nguyen. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span>Built with</span>
            <span className="text-dev-red">passion</span>
            <span>+</span>
            <span className="text-dev-pink">love</span>
            <span className="text-fg-muted">— waiting for your contact</span>
          </p>
        </div>
      </footer>
    </section>
  );
};
````

## File: src/components/sections/Experience.tsx
````typescript
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../../data/portfolio';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import clsx from 'clsx';

type Tab = 'professional' | 'academic';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<Tab>('professional');

  return (
    <section className="min-h-screen px-4 sm:px-6 py-20 lg:py-32 max-w-7xl mx-auto relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-dev-blue/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Section Header */}
      <div className="mb-12 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-fg to-fg-muted">
            The Journey.
          </h2>
          <div className="flex items-center gap-3 sm:gap-4 mb-8">
            <div className="h-[2px] w-12 sm:w-24 bg-primary" />
            <p className="text-fg-muted text-base sm:text-xl font-medium tracking-wide">
              Foundations & Milestones
            </p>
          </div>
        </motion.div>

        {/* Mobile Tabs */}
        <div className="lg:hidden flex p-1 bg-bg-secondary/50 backdrop-blur-md rounded-xl border border-bg-tertiary">
          <button
            onClick={() => setActiveTab('professional')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300",
              activeTab === 'professional' 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-fg-muted hover:text-fg"
            )}
          >
            <Briefcase size={16} />
            Professional
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300",
              activeTab === 'academic' 
                ? "bg-dev-blue text-white shadow-lg shadow-dev-blue/20" 
                : "text-fg-muted hover:text-fg"
            )}
          >
            <GraduationCap size={16} />
            Academic
          </button>
        </div>
      </div>

      {/* Mobile Content (Tabbed) */}
      <div className="lg:hidden relative z-10 min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === 'professional' ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {EXPERIENCE_DATA.map((item, idx) => (
                <SpotlightCard key={item.id} item={item} index={idx} type="job" />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="academic"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {EDUCATION_DATA.map((item, idx) => (
                <SpotlightCard key={item.id} item={item} index={idx} type="edu" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Content (Grid) */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {/* Experience Column */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 rounded-2xl bg-bg-secondary border border-bg-tertiary shadow-sm">
              <Briefcase size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-widest uppercase text-fg-muted">Professional</h3>
          </div>
          
          <div className="space-y-8">
            {EXPERIENCE_DATA.map((item, idx) => (
              <SpotlightCard key={item.id} item={item} index={idx} type="job" />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-16 mt-32"> {/* Offset foreditorial look */}
            <div className="p-3 rounded-2xl bg-bg-secondary border border-bg-tertiary shadow-sm">
              <GraduationCap size={24} className="text-dev-blue" />
            </div>
            <h3 className="text-2xl font-bold tracking-widest uppercase text-fg-muted">Academic</h3>
          </div>

          <div className="space-y-8">
            {EDUCATION_DATA.map((item, idx) => (
              <SpotlightCard key={item.id} item={item} index={idx} type="edu" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ item, type }: { item: any, index: number, type: 'job' | 'edu' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [2, 0, 0, 2]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const title = 'role' in item ? item.role : item.title;
  const place = 'place' in item ? item.place : '';
  const watermark = place.charAt(0);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, filter: useMotionTemplate`blur(${blur}px)` }}
      className="group relative rounded-2xl sm:rounded-3xl bg-bg-secondary/30 border border-bg-tertiary overflow-hidden transition-colors hover:bg-bg-secondary/50"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient - Hide on small touch devices to save perf */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden sm:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${type === 'job' ? 'rgba(var(--color-primary), 0.15)' : 'rgba(var(--color-dev-blue), 0.15)'},
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-6 sm:p-8 h-full flex flex-col">
        {/* Watermark - Smaller on mobile */}
        <div className="absolute top-2 right-4 text-[5rem] sm:text-[8rem] font-bold opacity-[0.03] select-none font-serif leading-none pointer-events-none">
          {watermark}
        </div>

        <div className="mb-4 sm:mb-6 flex flex-col gap-1.5 sm:gap-2">
          <span className={clsx(
            "text-[10px] sm:text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full w-fit border",
            type === 'job' 
              ? "bg-primary/10 text-primary border-primary/20"
              : "bg-dev-blue/10 text-dev-blue border-dev-blue/20"
          )}>
            {item.time}
          </span>
          <h4 className="text-lg sm:text-2xl font-bold text-fg group-hover:text-primary transition-colors mt-1 sm:mt-2">
            {title}
          </h4>
          <div className="flex items-center gap-1.5 sm:gap-2 text-fg-muted text-xs sm:text-sm font-medium">
            <MapPin size={14} className="sm:w-4 sm:h-4" />
            {place}
          </div>
        </div>

        <div className="space-y-2.5 sm:space-y-3 relative z-10">
          {item.details.map((detail: string, i: number) => (
            <p key={i} className="text-xs sm:text-base text-fg-muted/80 leading-relaxed pl-3 sm:pl-4 border-l border-bg-tertiary">
              {detail}
            </p>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className={clsx(
          "absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
          type === 'job' ? "bg-primary" : "bg-dev-blue"
        )} />
      </div>
    </motion.div>
  );
};
````

## File: src/components/sections/Hero.tsx
````typescript
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/portfolio';
import { ArrowRight, MessageCircle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from '../ui/Typewriter';
import { Magnetic } from '../ui/Magnetic';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-start md:items-center justify-center px-6 pt-4 pb-20 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-4 md:gap-12 lg:gap-8 items-center pt-0 md:pt-0">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-secondary text-sm md:text-base font-medium tracking-wider mb-4 block">
              &lt;Hi there! I am... /&gt;
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-fg tracking-tight leading-tight">
              {HERO_DATA.name}
              <span className="text-primary">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-fg-muted mb-8 font-mono h-auto md:h-16 flex flex-col lg:block items-center lg:items-start gap-2">
              <span>A <span className="text-fg font-bold"><Typewriter text={HERO_DATA.title} delay={0.5} /></span></span>
              <span className="hidden md:inline"><br /></span>
              <span>based in {HERO_DATA.location}</span>
            </h2>
            
            <p className="text-base md:text-lg text-fg-muted max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              {HERO_DATA.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Magnetic>
              <Link 
                to="/projects"
                className="px-8 py-4 bg-primary text-white rounded-2xl font-mono font-bold hover:bg-dev-green transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-dev-green/40 group w-full sm:w-auto"
              >
                View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </Magnetic>
            
            <Magnetic>
              <Link
                to="/contact"
                className="px-8 py-4 bg-bg-secondary text-fg rounded-2xl font-mono font-bold hover:bg-bg-tertiary border border-bg-tertiary transition-colors w-full sm:w-auto flex items-center justify-center"
              >
                 Contact Me
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right: Code/Avatar Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 flex justify-center py-2 md:py-8"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
             {/* Decorative Rings */}
             <div className="absolute inset-0 rounded-full border border-dev-blue/20 animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-4 rounded-full border border-dashed border-dev-pink/30 animate-[spin_15s_linear_infinite_reverse]" />
             
             {/* Avatar Container */}
             <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-bg-secondary shadow-2xl shadow-primary/20 bg-bg-secondary">
                <img 
                  src={HERO_DATA.avatar} 
                  alt={HERO_DATA.name}
                  className="w-full h-full object-cover" 
                />
             </div>

             {/* Floating Badge 1: Inquiry (Top Left) */}
             <Link to="/contact">
               <motion.div
                 animate={{ y: [0, 10, 0] }}
                 whileHover={{ scale: 1.05, borderColor: "var(--color-dev-blue)" }}
                 transition={{
                   y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                   scale: { duration: 0.2 }
                 }}
                 className="absolute top-0 -left-1 sm:-top-2 sm:-left-2 md:-top-4 md:-left-8 bg-bg-secondary border border-bg-tertiary p-1.5 sm:p-2 md:p-4 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer group/badge transition-colors"
               >
                 <div className="p-1 sm:p-1.5 md:p-2 bg-dev-blue/10 rounded-md sm:rounded-lg text-dev-blue group-hover/badge:bg-dev-blue group-hover/badge:text-white transition-colors">
                   <MessageCircle size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                 </div>
                 <div className="font-mono text-[8px] sm:text-[10px] md:text-xs text-left">
                   <div className="text-fg-muted italic group-hover/badge:text-dev-blue transition-colors">Inquiry</div>
                   <div className="font-bold text-fg">Your vision</div>
                 </div>
               </motion.div>
             </Link>

             {/* Floating Badge 2: Delivery (Bottom Right) */}
             <Link to="/projects">
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 whileHover={{ scale: 1.05, borderColor: "var(--color-dev-green)" }}
                 transition={{
                   y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                   scale: { duration: 0.2 }
                 }}
                 className="absolute bottom-0 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-4 md:-right-8 bg-bg-secondary border border-bg-tertiary p-1.5 sm:p-2 md:p-4 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer group/badge transition-colors"
               >
                 <div className="p-1 sm:p-1.5 md:p-2 bg-dev-green/10 rounded-md sm:rounded-lg text-dev-green group-hover/badge:bg-dev-green group-hover/badge:text-white transition-colors">
                   <Rocket size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                 </div>
                 <div className="font-mono text-[8px] sm:text-[10px] md:text-xs text-left">
                   <div className="text-fg-muted italic">Delivery</div>
                   <div className="font-bold text-fg">My solution</div>
                 </div>
               </motion.div>
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
````

## File: src/components/sections/ProjectDetailsModal.tsx
````typescript
import { motion } from 'framer-motion';
import type { Project } from '../../data/portfolio';
import { X, Github, ExternalLink, Calendar, Layers, Code, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
      />
      
      <motion.div
        layoutId={`project-${project.title}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-secondary rounded-3xl shadow-2xl border border-bg-tertiary flex flex-col custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg/50 hover:bg-bg-tertiary text-fg transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-3"
            >
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/20 backdrop-blur-md">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-bg/40 text-fg-muted backdrop-blur-md border border-white/5">
                <Calendar size={12} />
                {project.year}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg drop-shadow-lg"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Main Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-fg mb-2 flex items-center gap-2">
                <Layers size={18} className="text-primary" />
                Overview
              </h3>
              <p className="text-fg-muted leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Key Highlights
              </h3>
              <ul className="grid gap-3">
                {project.highlights.map((highlight, idx) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-bg-tertiary/50 border border-bg-tertiary"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-fg-muted text-sm sm:text-base">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="w-full md:w-80 space-y-6">
            {/* Actions */}
            <div className="flex flex-col gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-bg-tertiary hover:bg-primary/20 hover:text-primary hover:border-primary/50 text-fg font-medium transition-all duration-300 border border-transparent"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              ) : (
                <button disabled className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-bg-tertiary/50 text-fg-muted/50 cursor-not-allowed border border-transparent">
                  <Github size={18} />
                  Private Repository
                </button>
              )}
              
              <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 font-medium">
                <ExternalLink size={18} />
                Live Demo / Case Study
              </button>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-bold text-fg uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code size={16} className="text-primary" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-bg-tertiary text-fg-muted border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
````

## File: src/components/sections/Projects.tsx
````typescript
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectCategory, type Project } from '../../data/portfolio';
import { Calendar, Github, Search, ArrowUpDown, Filter } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import clsx from 'clsx';

const CATEGORIES: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Enterprise', value: 'Enterprise' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Web', value: 'Web' },
  { label: 'Mobile', value: 'Mobile' },
  { label: 'IoT', value: 'IoT' },
];

const CATEGORY_STYLES: Record<ProjectCategory, { badge: string; icon: string }> = {
  Finance: {
    badge: 'bg-dev-green/20 text-dev-green border-dev-green/30',
    icon: 'text-dev-green',
  },
  Enterprise: {
    badge: 'bg-dev-blue/20 text-dev-blue border-dev-blue/30',
    icon: 'text-dev-blue',
  },
  Web: {
    badge: 'bg-dev-orange/20 text-dev-orange border-dev-orange/30',
    icon: 'text-dev-orange',
  },
  Mobile: {
    badge: 'bg-dev-pink/20 text-dev-pink border-dev-pink/30',
    icon: 'text-dev-pink',
  },
  IoT: {
    badge: 'bg-dev-yellow/20 text-dev-yellow border-dev-yellow/30',
    icon: 'text-dev-yellow',
  },
  Backend: {
    badge: 'bg-dev-red/20 text-dev-red border-dev-red/30',
    icon: 'text-dev-red',
  },
};

type SortOption = 'newest' | 'oldest' | 'name';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter and Sort Logic
  const filteredProjects = useMemo(() => {
    let result = PROJECTS_DATA;

    // Category Filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Search Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q))
      );
    }

    // Sorting
    return result.sort((a, b) => {
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      // Parse year (simple implementation, assumes 'YYYY' or 'YYYY - YYYY')
      const yearA = parseInt(a.year.split(' ')[0]);
      const yearB = parseInt(b.year.split(' ')[0]);
      return sortBy === 'newest' ? yearB - yearA : yearA - yearB;
    });
  }, [activeCategory, searchQuery, sortBy]);

  // Masonry Column Distribution (Client-side simple distribution)
  // We'll use CSS columns for simplicity and performance as it handles height variability best naturally
  // But to ensure LTR reading order if we cared deeply, we'd use JS. 
  // For this, standard CSS columns with `break-inside-avoid` is efficient and visually pleasing enough.

  return (
    <section className="min-h-screen px-6 py-20 max-w-[1600px] mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Featured Work
          </h2>
          <p className="text-fg-muted max-w-2xl text-lg">
            A selection of projects that define my journey—from low-level systems programming to enterprise-scale architectures.
          </p>
        </div>
        
        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-bg-secondary border border-bg-tertiary rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full sm:w-64 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2 bg-bg-secondary border border-bg-tertiary rounded-xl px-3 py-2.5">
            <ArrowUpDown size={16} className="text-fg-muted" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent border-none text-sm text-fg outline-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={clsx(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border flex items-center gap-2",
              activeCategory === cat.value
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                : "bg-bg-secondary text-fg-muted border-bg-tertiary hover:border-primary/50 hover:text-fg hover:bg-bg-tertiary"
            )}
          >
            {activeCategory === cat.value && <Filter size={14} />}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Layout using CSS Columns */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6 pb-20"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const styles = CATEGORY_STYLES[project.category];

            return (
              <motion.div
                key={project.title}
                layoutId={`project-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid mb-6"
                onClick={() => setSelectedProject(project)}
              >
                <TiltCard
                  className="group relative rounded-3xl overflow-hidden cursor-pointer bg-bg-secondary border border-bg-tertiary shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full hover:border-primary/40"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                      <div className={clsx(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-sm",
                        styles.badge
                      )}>
                        {project.category}
                      </div>
                      
                      <div className="px-2.5 py-1 bg-bg/90 backdrop-blur-sm rounded-lg text-xs font-bold text-fg-muted flex items-center gap-1.5 shadow-sm border border-white/5">
                        <Calendar size={12} />
                        {project.year}
                      </div>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-6 relative z-20 -mt-12">
                    <div className="p-5 bg-bg-secondary/95 backdrop-blur-xl rounded-2xl border border-white/5 shadow-lg group-hover:translate-y-[-5px] transition-transform duration-300">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl font-bold text-fg group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        {project.github && (
                          <div className="p-1.5 rounded-lg bg-bg-tertiary text-fg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                            <Github size={16} />
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-fg-muted leading-relaxed line-clamp-2 mb-4 group-hover:text-fg transition-colors">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-bg-tertiary">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-bg-tertiary/50 text-fg-muted border border-transparent group-hover:border-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-bg-tertiary/50 text-fg-muted">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay Action */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <span className="px-6 py-2 bg-bg text-fg font-bold rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-32 text-fg-muted"
        >
          <div className="w-20 h-20 bg-bg-secondary rounded-full flex items-center justify-center mb-4">
            <Search size={32} className="opacity-50" />
          </div>
          <h3 className="text-xl font-bold text-fg mb-2">No projects found</h3>
          <p>Try adjusting your search or filters.</p>
        </motion.div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
````

## File: src/components/sections/Skills.tsx
````typescript
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/portfolio';
import clsx from 'clsx';
import { TiltCard } from '../ui/TiltCard';
import { Cpu, Globe, Database, Terminal, Code2, Coffee, Zap } from 'lucide-react';

// Map icons for categories
const CATEGORY_ICONS: Record<string, any> = {
  Languages: Code2,
  Frameworks: Globe,
  Persistence: Database,
  Infrastructure: Terminal,
};

const CATEGORY_COLORS: Record<string, string> = {
  Languages: 'text-dev-blue',
  Frameworks: 'text-dev-pink',
  Persistence: 'text-dev-green',
  Infrastructure: 'text-dev-orange',
};

export const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-20 max-w-[1600px] mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dev-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-dev-blue">
            Technical Arsenal
          </h2>
          <p className="text-fg-muted max-w-2xl text-lg sm:text-xl leading-relaxed">
            I don't just write code; I architect ecosystems. From bare-metal performance optimization to distributed cloud-native systems.
          </p>
        </motion.div>
      </div>

      <div className="space-y-24 md:space-y-32">
        
        {/* Section 1: Core Architecture (Progress Cards) */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-fg"
          >
            <Cpu className="text-primary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fg to-fg-muted">
              Core Competencies
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.technical.map((skill, idx) => {
              const colors = ["text-dev-red", "text-dev-orange", "text-dev-yellow", "text-dev-green", "text-dev-blue", "text-dev-pink"];
              const colorClass = colors[idx % colors.length];
              const bgClass = colorClass.replace('text-', 'bg-');

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TiltCard className="p-6 h-full bg-bg-secondary/50 border border-bg-tertiary rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <div className={clsx("p-3 rounded-xl bg-bg-tertiary/50 group-hover:scale-110 transition-transform duration-300", colorClass)}>
                        <skill.icon size={24} />
                      </div>
                      <span className={clsx("text-2xl font-bold font-mono opacity-50 group-hover:opacity-100 transition-opacity", colorClass)}>
                        {Math.round(skill.level * 100)}%
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-4 text-fg group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>

                    {/* Custom Progress Bar */}
                    <div className="relative h-2 w-full bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 100}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                        className={clsx("absolute top-0 left-0 h-full rounded-full", bgClass)}
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Toolchain Clusters */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-fg"
          >
            <Terminal className="text-dev-blue" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fg to-fg-muted">
              Tech Stack & Tools
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {SKILLS_DATA.languages.map((group, groupIdx) => {
              const Icon = CATEGORY_ICONS[group.category] || Terminal;
              const colorClass = CATEGORY_COLORS[group.category] || 'text-fg';

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIdx * 0.1 }}
                  className="bg-bg-secondary/30 border border-bg-tertiary rounded-3xl p-6 hover:bg-bg-secondary/50 transition-colors backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={clsx("w-5 h-5", colorClass)} />
                    <h4 className="font-bold text-fg tracking-wide uppercase text-sm">
                      {group.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (groupIdx * 0.1) + (itemIdx * 0.05) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={clsx(
                          "px-3 py-1.5 rounded-lg text-xs font-medium border border-bg-tertiary bg-bg/50 text-fg-muted cursor-default transition-all hover:border-primary/30 hover:text-fg hover:shadow-lg hover:shadow-primary/5",
                        )}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Leadership & Soft Skills */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: Soft Skills Grid */}
          <div className="lg:col-span-7">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-10 flex items-center gap-3 text-fg"
            >
              <Coffee className="text-dev-green" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fg to-fg-muted">
                Leadership & Strategy
              </span>
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_DATA.soft.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-bg-tertiary hover:border-dev-green/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-dev-green/10 text-dev-green group-hover:scale-110 transition-transform">
                    <skill.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-fg">{skill.name}</span>
                      <span className="text-xs font-mono text-dev-green opacity-0 group-hover:opacity-100 transition-opacity">
                        {Math.round(skill.level * 100)}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-dev-green"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Summary Box */}
          <div className="lg:col-span-5 flex items-end">
            <TiltCard className="w-full p-8 rounded-3xl bg-gradient-to-br from-bg-secondary to-bg border border-bg-tertiary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Zap size={120} />
              </div>
              
              <h4 className="text-xl font-bold mb-6 text-dev-blue flex items-center gap-2">
                <Terminal size={20} />
                Philosophy
              </h4>
              
              <div className="space-y-4">
                {SKILLS_DATA.descriptions.map((desc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                  >
                    <span className="text-dev-blue mt-1">▹</span>
                    <p>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>

      </div>
    </section>
  );
};
````

## File: src/components/ui/Magnetic.tsx
````typescript
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};
````

## File: src/components/ui/Particles.tsx
````typescript
import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = 30; // Not too many to avoid clutter

    const colors = theme === 'dark' 
      ? ['#AF5F5F', '#87AFAF', '#7590AF', '#D59572'] 
      : ['#9F3A3A', '#4D7A7A', '#466080', '#B85C38'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
````

## File: src/components/ui/ScrollProgress.tsx
````typescript
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-dev-orange to-dev-blue origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};
````

## File: src/components/ui/Spotlight.tsx
````typescript
import { useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const Spotlight = () => {
  const { theme } = useTheme();
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Dynamic background gradient based on theme
  // Dark mode: Slight white/primary glow to illuminate the dark bg
  // Light mode: Slight primary color glow
  const spotlightColor = theme === 'dark' 
    ? 'rgba(175, 95, 95, 0.15)' // Red-ish glow in dark mode
    : 'rgba(159, 58, 58, 0.12)'; // Subtle red in light mode

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            ${spotlightColor},
            transparent 80%
          )
        `,
      }}
    />
  );
};
````

## File: src/components/ui/TiltCard.tsx
````typescript
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 20; // Degrees
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE / width - HALF_ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE / height - HALF_ROTATION_RANGE;

    const rX = mouseY * -1;
    const rY = mouseX;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
````

## File: src/components/ui/Typewriter.tsx
````typescript
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed

    return () => clearInterval(typingInterval);
  }, [text, startTyping]);

  return (
    <span className="inline-block">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};
````

## File: src/context/SidebarContext.tsx
````typescript
import React, { createContext, useContext, useEffect, useState } from 'react';

export type SidebarPosition = 'left' | 'right' | 'top' | 'bottom';

interface SidebarContextType {
  position: SidebarPosition;
  setPosition: (pos: SidebarPosition) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState<SidebarPosition>(() => {
    return (localStorage.getItem('sidebarPosition') as SidebarPosition) || 'left';
  });

  useEffect(() => {
    localStorage.setItem('sidebarPosition', position);
  }, [position]);

  return (
    <SidebarContext.Provider value={{ position, setPosition }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
````

## File: src/context/ThemeContext.tsx
````typescript
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
````

## File: src/data/portfolio.ts
````typescript
import {
  Code,
  Database,
  Layout,
  Layers,
  Server,
  Smartphone,
  Terminal,
  Clock,
  Award,
  Briefcase,
  User,
  Zap,
  BookOpen,
  Mail,
  Facebook,
  MessageCircle
} from 'lucide-react';

// --- Constants ---
const BASE_URL = import.meta.env.BASE_URL; // Gets '/portfolio/' or '/' depending on config
const img = (path: string) => `${BASE_URL}${path}`.replace('//', '/'); // Helper for image paths

const START_WORK_DATE = new Date(2015, 7, 1); // Month is 0-indexed (Aug = 7)

// --- Helper for dynamic calculations ---
const getTimeDiff = (startDate: Date) => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return {
    days: diffDays,
    years: (diffDays / 365).toFixed(1),
    hours: Math.floor(diffDays * 24 * 0.35).toLocaleString(), // Logic from Flutter: hours * 0.35
    coffee: Math.ceil(diffDays * 1.5).toLocaleString()
  };
};

const workStats = getTimeDiff(START_WORK_DATE);

export const HERO_DATA = {
  name: "Phat Nguyen",
  title: "Solution Architect & Specialist",
  location: "Vietnam 🇻🇳",
  intro: "Translating complex business requirements into scalable, high-performance technical architectures. I bridge the gap between visionary strategy and flawless execution.",
  cta: "OPEN FOR PARTNERSHIPS",
  avatar: img("images/profile-2.jpg") // Using the image from assets
};

export const ABOUT_DATA = {
  personalities: [
    "#confident",
    "#forward-thinking",
    "#passionate",
    "#funny"
  ],
  bio: [
    "I am a Solution Architect and Technology Specialist with a deep focus on building sustainable, high-scale systems. My journey has evolved from writing code to designing the ecosystems that businesses rely on to thrive.",
    "As a Business Owner, I understand that technology is an investment, not just a tool. I specialize in aligning technical strategy with business goals, ensuring every line of code contributes to the bottom line.",
    "I thrive on solving 'impossible' problems—whether it's architecting a distributed financial system, optimizing high-frequency trading platforms, or leading teams through digital transformations.",
    "My expertise spans the entire stack, but my true value lies in the big picture: selecting the right paradigms, mitigating risks, and future-proofing infrastructure against rapid industry shifts.",
    "I don't just build software; I build the foundation for growth, innovation, and long-term success."
  ],
  funFacts: [
    { label: "Years of Work", value: workStats.years, icon: Briefcase },
    { label: "Hours of Work", value: `~${workStats.hours}`, icon: Clock },
    { label: "Projects", value: "25+", icon: Layers },
    { label: "Awards/Certs", value: "6", icon: Award },
    { label: "Console Logs", value: "∞", icon: Terminal },
    { label: "Git Commits", value: `~${(Number(workStats.days) * 5).toLocaleString()}`, icon: Terminal },
    { label: "Bugs Resolved", value: `~${(Number(workStats.days) * 3).toLocaleString()}`, icon: Zap },
    { label: "Tech Stack", value: "15+", icon: Code },
  ]
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    time: "2019 - Present",
    place: "Freelancer & Consultant & Business Owner",
    role: "PRINCIPAL SOLUTIONS ARCHITECT",
    details: [
      "Orchestrating a distributed engineering team of 10+ specialists, delivering end-to-end enterprise solutions for global clients.",
      "Engineered a proprietary Algo-Trading infrastructure, optimizing order execution latency by 40% through low-level C++ tuning.",
      "Architecting scalable data lakes for financial modeling, ingesting and processing 1TB+ of daily market tick data.",
      "Delivered enterprise solutions for Korean market including Samick Furniture ERP, GongCheck platform, and DMA HFT systems."
    ]
  },
  {
    id: 2,
    time: "2018 - 2019",
    place: "Nexpando Corporation",
    role: "TECHNICAL LEAD",
    details: [
      "Spearheaded the architecture of Vietjet's 'Instant Ticketing System', enabling reliable transaction processing for 50k+ concurrent users.",
      "Redesigned the 'Nexbus' core platform, achieving a 30% reduction in cloud infrastructure costs while improving system availability to 99.99%."
    ]
  },
  {
    id: 3,
    time: "2017 - 2018",
    place: "Dinosys Corporation",
    role: "LEAD BACKEND ENGINEER (JAVA)",
    details: [
      "Directed technical strategy for a 5-member Java team, successfully delivering 4 complex concurrent projects on strict timelines.",
      "Modernized legacy systems by introducing microservices patterns with Spring Boot, enhancing scalability and deployment velocity."
    ]
  },
  {
    id: 4,
    time: "2016 - 2017",
    place: "Dinosys Corporation",
    role: "FULL-STACK ENGINEER",
    details: [
      "Developed a comprehensive Travel Ecosystem (Web, Android, API), integrating complex third-party GDS (Global Distribution Systems).",
      "Optimized API response times to <200ms through aggressive caching strategies and database query tuning."
    ]
  },
  {
    id: 5,
    time: "2015 - 2016",
    place: "Wisky Solution",
    role: "ANDROID ARCHITECT",
    details: [
      "Owned the complete Android vertical, deploying a robust Loyalty CRM system deployed across 50+ retail chains.",
      "Served as Internal Technical Trainer, upskilling the engineering team on advanced Android architectural patterns and memory management."
    ]
  },
  {
    id: 6,
    time: "2014 - 2015",
    place: "FPT Software",
    role: "SOFTWARE ENGINEER",
    details: [
      "Contributed to enterprise-scale mobile solutions, gaining deep foundational expertise in clean architecture and rigorous testing standards."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    time: "2021",
    place: "Google",
    title: "DATA ANALYTICS PROFESSIONAL CERTIFICATE",
    details: [
      "Mastered end-to-end data lifecycles, specializing in Business Intelligence and predictive modeling.",
      "Engineered automated financial analysis models to derive high-stakes market insights."
    ]
  },
  {
    id: 2,
    time: "2016",
    place: "IBM Bluemix",
    title: "GLOBAL CLOUD INNOVATION AWARD",
    details: [
      "Championed a global innovation challenge, securing $24,000 USD in seed funding for architectural excellence.",
      "Recognized by IBM for superior application design on cloud-native infrastructure."
    ]
  },
  {
    id: 3,
    time: "2015",
    place: "Oracle",
    title: "ORACLE CERTIFIED ASSOCIATE (OCA)",
    details: [
      "Validated professional-grade proficiency in enterprise Java development and systems architecture."
    ]
  },
  {
    id: 4,
    time: "2012 - 2016",
    place: "FPT University",
    title: "B.ENG. SOFTWARE ENGINEERING",
    details: [
      "Graduated with Distinction (GPA 8.7/10), focused on Advanced Algorithms and System Design.",
      "Pioneered an IoT-driven indoor navigation ecosystem, awarded 'Best Capstone Project' for technical innovation."
    ]
  },
  {
    id: 5,
    time: "2009 - 2012",
    place: "Nguyen Dinh Chieu High School",
    title: "ALGORITHMIC EXCELLENCE AWARD",
    details: [
      "Secured top honors in district software competition, establishing an early foundation in complex problem-solving."
    ]
  }
];

export const SKILLS_DATA = {
  languages: [
    { category: "Languages", items: ['Java', 'Kotlin', 'Rust', 'Go', 'Elixir', 'Python', 'C/C++', 'TS/JS'] },
    { category: "Frameworks", items: ['Spring Boot', 'React', 'Next.js', 'Node.js', 'Flutter', 'Elixir Phoenix'] },
    { category: "Persistence", items: ['PostgreSQL', 'TimescaleDB', 'ElasticSearch', 'Redis', 'MongoDB'] },
    { category: "Infrastructure", items: ['Docker', 'Kubernetes', 'CI/CD', 'Linux (Nvim)', 'AWS/Cloud'] },
  ],
  technical: [
    { name: 'Distributed Systems', level: 0.95, icon: Server },
    { name: 'Cloud Native Arch', level: 0.9, icon: Database },
    { name: 'Frontend Eng', level: 0.85, icon: Layout },
    { name: 'Algorithm Design', level: 0.9, icon: Code },
    { name: 'DevOps & CI/CD', level: 0.8, icon: Terminal },
    { name: 'Mobile Architecture', level: 0.85, icon: Smartphone },
  ],
  soft: [
    { name: 'Strategic Vision', level: 0.95, icon: BookOpen },
    { name: 'Tech Leadership', level: 0.9, icon: User },
    { name: 'Project Mgmt', level: 0.85, icon: Briefcase },
    { name: 'Client Negotiation', level: 0.85, icon: MessageCircle },
    { name: 'Innovation Drive', level: 0.9, icon: Zap },
    { name: 'Mentorship', level: 0.9, icon: User },
  ],
  descriptions: [
    "I specialize in designing fault-tolerant, high-throughput distributed systems that serve as the backbone of modern enterprises.",
    "My architectural approach balances strict consistency with eventual scalability, selecting the right persistence layer (PostgreSQL, TimescaleDB, ElasticSearch) for the specific data shape.",
    "I view code as a liability and architecture as an asset; my goal is to maximize business value while minimizing technical debt through clean, modular design patterns.",
    "From optimizing low-level C++ algorithms to orchestrating serverless Node.js microservices, I bridge the gap between bare-metal performance and cloud agility."
  ]
};

export type ProjectCategory = 'IoT' | 'Mobile' | 'Web' | 'Enterprise' | 'Finance' | 'Backend';

export interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  highlights: string[];
  year: string;
  github?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Beacon Indoor Navigation',
    image: img("images/work11.jpg"),
    description: 'Award-winning IoT ecosystem for indoor positioning using BLE beacons. Capstone project recognized as "Best Innovation" at FPT University.',
    techStack: ['Android', 'BLE', 'Node.js', 'MongoDB', 'Machine Learning'],
    category: 'IoT',
    highlights: ['Sub-meter accuracy', 'Real-time tracking', 'IBM Bluemix Award Winner'],
    year: '2016'
  },
  {
    title: 'Myo Gesture Control',
    image: img("images/work10.jpg"),
    description: 'Experimental wearable integration using Myo armband for gesture-based device control and accessibility applications.',
    techStack: ['Android', 'Myo SDK', 'Bluetooth', 'Signal Processing'],
    category: 'IoT',
    highlights: ['8 gesture patterns', 'Low latency response', 'Accessibility focused'],
    year: '2016'
  },
  {
    title: 'Smart Home IoT Hub',
    image: img("images/work2.jpg"),
    description: 'Centralized IoT management platform connecting multiple smart devices with real-time monitoring and automation rules.',
    techStack: ['React', 'Node.js', 'MQTT', 'PostgreSQL', 'Docker'],
    category: 'IoT',
    highlights: ['50+ device types', 'Custom automation', 'Voice integration'],
    year: '2017'
  },
  {
    title: 'Travel Booking Platform',
    image: img("images/work6.jpg"),
    description: 'Full-stack travel ecosystem integrating GDS systems for flight, hotel, and tour bookings with real-time availability.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'Amadeus GDS', 'Redis'],
    category: 'Web',
    highlights: ['<200ms API response', 'Multi-GDS integration', '100k+ bookings'],
    year: '2017'
  },
  {
    title: 'Enterprise ERP System',
    image: img("images/work5.png"),
    description: 'Comprehensive enterprise resource planning solution covering HR, inventory, finance, and project management modules.',
    techStack: ['Java', 'Spring', 'Oracle DB', 'Angular', 'Jasper Reports'],
    category: 'Enterprise',
    highlights: ['Multi-tenant', '15+ modules', 'Custom workflow engine'],
    year: '2018'
  },
  {
    title: 'Retail Loyalty CRM',
    image: img("images/work7.jpg"),
    description: 'Mobile-first loyalty and CRM platform deployed across 50+ retail chains with points management and customer analytics.',
    techStack: ['Android', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'Firebase'],
    category: 'Mobile',
    highlights: ['50+ retail chains', '1M+ users', 'Real-time rewards'],
    year: '2016'
  },
  {
    title: 'Transportation Ticketing System',
    image: img("images/work13.jpg"),
    description: 'High-performance ticketing platform for Vietjet Air and NexBus, handling 50k+ concurrent users with instant booking, dynamic pricing, and fault-tolerant architecture.',
    techStack: ['Java', 'Spring Boot', 'React', 'Kafka', 'Redis', 'Kubernetes', 'PostgreSQL'],
    category: 'Enterprise',
    highlights: ['50k concurrent users', '99.99% uptime', '30% cost reduction'],
    year: '2018 - 2019'
  },
  {
    title: 'Stock Trading Platform',
    image: img("images/work14.jpg"),
    description: 'Real-time trading application with live market data, portfolio management, and technical analysis tools.',
    techStack: ['C++', 'Rust', 'TypeScript', 'React', 'Redis', 'Docker'],
    category: 'Finance',
    highlights: ['Real-time quotes', 'Advanced charting', 'Portfolio analytics'],
    year: '2021'
  },
  {
    title: 'Algorithmic Trading Engine',
    image: img("images/work15.jpg"),
    description: 'Low-latency algo-trading infrastructure with custom strategy backtesting and automated order execution.',
    techStack: ['C++', 'Rust', 'TypeScript', 'React', 'Redis', 'Docker'],
    category: 'Finance',
    highlights: ['40% latency reduction', '1TB+ daily data', 'ML predictions'],
    year: '2022'
  },
  // --- Business Projects (Freelance & Consultancy) ---
  {
    title: 'Samick Furniture ERP',
    image: img("images/work5.png"),
    description: 'End-to-end ERP system for Samick Korea, managing production planning, inventory, supply chain, and sales operations for premium furniture manufacturing.',
    techStack: ['TypeScript', 'React', 'PostgreSQL', 'Redis', 'Firebase', 'AWS', 'Docker'],
    category: 'Enterprise',
    highlights: ['Full supply chain', 'Korea market', 'Multi-warehouse'],
    year: '2020'
  },
  {
    title: 'GongCheck Platform',
    image: img("images/work6.jpg"),
    description: 'On-demand marketplace connecting architects, interior designers, and furniture providers in Korea. Think "Grab for Home Design" with real-time matching and project management.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'PostgreSQL', 'AWS'],
    category: 'Mobile',
    highlights: ['Real-time matching', 'B2B2C platform', 'Korea launch'],
    year: '2021'
  },
  {
    title: 'Korea DMA HFT System',
    image: img("images/work15.jpg"),
    description: 'Ultra-low-latency Direct Market Access system for Korean equities, featuring co-located infrastructure and custom FPGA-accelerated order routing.',
    techStack: ['C++', 'Rust', 'TypeScript', 'React', 'Redis', 'Docker'],
    category: 'Finance',
    highlights: ['Sub-ms latency', 'DMA certified', 'Co-located infra'],
    year: '2023'
  },
  {
    title: 'Enterprise HRM Suite',
    image: img("images/work5.png"),
    description: 'Comprehensive human resource management platform with payroll, attendance, performance reviews, and employee self-service portal for mid-size enterprises.',
    techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Keycloak', 'Docker'],
    category: 'Enterprise',
    highlights: ['500+ employees', 'Payroll automation', 'Self-service portal'],
    year: '2022'
  },
  {
    title: 'Gym Chain Loyalty System',
    image: img("images/work7.jpg"),
    description: 'Multi-tenant loyalty and membership platform deployed across fitness chains, featuring points rewards, class booking, and member engagement analytics.',
    techStack: ['TypeScript', 'React', 'PostgreSQL', 'Redis', 'Firebase', 'AWS', 'Docker'],
    category: 'Mobile',
    highlights: ['Multi-tenant SaaS', '10+ gym chains', 'Member analytics'],
    year: '2023'
  },
  // --- Open Source Projects ---
  {
    title: 'Aether Infrastructure',
    image: img("images/aether.jpg"),
    description: 'Open-source monorepo containing modular infrastructure packages for Node.js applications, AI agents, reactive apps, and Electron desktop apps. Built for reusability across different application contexts.',
    techStack: ['TypeScript', 'Bun', 'Node.js', 'LoopBack', 'Electron'],
    category: 'Backend',
    highlights: ['1,200+ commits', '5 modular packages', 'Open Source'],
    year: '2024',
    github: 'https://github.com/phatnt199/aether'
  },
  {
    title: 'Ignis Server Framework',
    image: img("images/ignis.jpg"),
    description: 'High-performance TypeScript server framework combining LoopBack 4 enterprise patterns with Hono speed (~140k req/s). Features dependency injection, Drizzle ORM, and auto-generated OpenAPI docs.',
    techStack: ['TypeScript', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Zod', 'Bun'],
    category: 'Backend',
    highlights: ['140k req/s', 'Multi-runtime', 'MIT License'],
    year: '2025',
    github: 'https://github.com/VENIZIA-AI/ignis'
  },
];

export const CONTACT_DATA = [
  {
    name: 'Email',
    address: 'tanphat199@gmail.com',
    href: 'mailto:tanphat199@gmail.com?subject=[Portfolio] Get Me In Touch!',
    color: 'text-primary',
    icon: Mail,
  },
  {
    name: 'Messenger',
    address: 'Phat Nguyen Tan',
    href: 'https://m.me/phatnt199',
    color: 'text-info', // Blue
    icon: Facebook, // Close enough to Messenger
  },
  {
    name: 'Telegram',
    address: 'Phat Nguyen',
    href: 'https://t.me/tanphat199',
    color: 'text-info',
    icon:  Zap, // Placeholder for Telegram
  },
  {
    name: 'Teams',
    address: 'tanphat199@outlook.com',
    href: 'https://teams.microsoft.com/l/chat/0/0?users=tanphat199@outlook.com',
    color: 'text-info',
    icon: MessageCircle,
  },
];
````

## File: src/App.css
````css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
````

## File: src/App.tsx
````typescript
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.02, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
````

## File: src/index.css
````css
@import "tailwindcss";
@config "../tailwind.config.js";

@theme {
  /* ... */
}

:root {
  /* Light Mode Defaults (High Contrast Re-mappings of DevGlow Hues) */
  --color-bg: #ffffff;
  --color-bg-secondary: #f8fafc; /* gray-50 */
  --color-bg-tertiary: #e2e8f0;  /* gray-200 - darker for borders */
  
  --color-fg: #0f172a;           /* gray-900 */
  --color-fg-muted: #64748b;     /* gray-500 */

  /* Adjusted for Light Mode visibility while keeping hue */
  --color-primary: #9F3A3A;   /* Darker Red */
  --color-secondary: #B85C38; /* Darker Orange */
  
  /* Extended Palette */
  --color-dev-red: #9F3A3A;
  --color-dev-green: #4D7A7A;
  --color-dev-blue: #466080;
  --color-dev-orange: #B85C38;
  --color-dev-yellow: #B48324;
  --color-dev-pink: #A85555;
}

.dark {
  /* DevGlow Palette (Exact matches from Lua) */
  --color-bg: #080808;        /* BG */
  --color-bg-secondary: #181818; /* D1 */
  --color-bg-tertiary: #282828;  /* D2 */

  --color-fg: #E6E6E6;        /* FG */
  --color-fg-muted: #797979;  /* D4 */

  --color-primary: #AF5F5F;   /* RED */
  --color-secondary: #D59572; /* ORANGE */

  /* Extended Palette */
  --color-dev-red: #AF5F5F;
  --color-dev-green: #87AFAF;
  --color-dev-blue: #7590AF;
  --color-dev-orange: #D59572;
  --color-dev-yellow: #E5B567;
  --color-dev-pink: #D68C8C;
}

html {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

html::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

body {
  @apply bg-bg text-fg transition-colors duration-300 font-mono text-lg;
  background-image: radial-gradient(var(--color-bg-tertiary) 1px, transparent 1px);
  background-size: 32px 32px;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Global utility to hide scrollbars on any element */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
````

## File: src/main.tsx
````typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
build

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary Meta Tags -->
    <title>Phat Nguyen | Solution Architect & Specialist</title>
    <meta name="title" content="Phat Nguyen | Solution Architect & Specialist" />
    <meta name="description" content="Translating complex business requirements into scalable, high-performance technical architectures. 10+ years of experience in distributed systems, cloud architecture, and technical leadership." />
    <meta name="author" content="Phat Nguyen" />
    <meta name="keywords" content="Solution Architect, Software Engineer, Full Stack Developer, Technical Lead, Vietnam, Portfolio" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://phatnt.com/" />
    <meta property="og:title" content="Phat Nguyen | Solution Architect & Specialist" />
    <meta property="og:description" content="Translating complex business requirements into scalable, high-performance technical architectures." />
    <meta property="og:image" content="https://phatnt.com/images/profile-2.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Phat Nguyen | Solution Architect & Specialist" />
    <meta property="twitter:description" content="Translating complex business requirements into scalable, high-performance technical architectures." />
    <meta property="twitter:image" content="https://phatnt.com/images/profile-2.jpg" />

    <!-- iOS PWA -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="PhatNT" />

    <!-- Theme Color -->
    <meta name="theme-color" content="#AF5F5F" />
    <meta name="msapplication-TileColor" content="#080808" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
    <link rel="icon" href="./favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
    <link rel="manifest" href="./manifest.webmanifest" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "react_project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "generate-icons": "bun run scripts/generate-pwa-icons.js"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.25.0",
    "lucide-react": "^0.562.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.12.0",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "sharp": "^0.34.5",
    "tailwindcss": "^4.1.18",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "npm:rolldown-vite@7.2.5",
    "vite-plugin-pwa": "^1.2.0"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.2.5"
  }
}
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
````

## File: README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic mappings
        primary: "var(--color-primary)",   // Default RED anchor
        secondary: "var(--color-secondary)", // Default ORANGE anchor
        
        // Full DevGlow Palette
        "dev-red": "var(--color-dev-red)",
        "dev-green": "var(--color-dev-green)",
        "dev-blue": "var(--color-dev-blue)",
        "dev-orange": "var(--color-dev-orange)",
        "dev-yellow": "var(--color-dev-yellow)",
        "dev-pink": "var(--color-dev-pink)",

        // Backgrounds
        bg: {
          DEFAULT: "var(--color-bg)",
          secondary: "var(--color-bg-secondary)", // D1/D2
          tertiary: "var(--color-bg-tertiary)",   // D2/D3
        },
        
        // Foreground/Text
        fg: {
          DEFAULT: "var(--color-fg)",
          muted: "var(--color-fg-muted)", // D4
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"JetBrains Mono"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Use '/' for custom domain, or '/repo-name/' for github.io/repo-name
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "favicon-*.png",
        "apple-touch-icon.png",
        "pwa-*.png",
        "maskable-*.png",
        "images/**/*",
      ],
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}",
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: "Phat Nguyen | Solution Architect",
        short_name: "PhatNT",
        description:
          "Solution Architect & Specialist - Translating complex business requirements into scalable, high-performance technical architectures.",
        theme_color: "#AF5F5F",
        background_color: "#080808",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        categories: ["portfolio", "business", "technology"],
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "images/profile-2.jpg",
            sizes: "640x480",
            type: "image/jpeg",
            label: "Portfolio Homepage",
          },
        ],
      },
    }),
  ],
});
````
