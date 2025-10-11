// SwitchUI.jsx
import React, { useMemo, useState } from 'react';
import { View, Text, Switch } from 'react-native';

// NativeWind enables Tailwind-like className usage in React Native
// Make sure nativewind/babel is added in babel.config.js and global.css is wired in metro.config.js
// Example classes: bg-zinc-900 (dark background), text-zinc-100 (light text), etc.

const SwitchUI = () => {
    // ✅ Theme state (light/dark)
    const [isDark, setIsDark] = useState(false);

    // ✅ Switch toggle handler
    const toggleTheme = () => setIsDark((prev) => !prev);

    // ✅ Dynamic colors for the Switch thumb and track (platform-friendly)
    // - thumbColor → the draggable knob color
    // - trackColor → background of the switch rail (false/true states)
    const { thumbColor, trackColorFalse, trackColorTrue, iosBackground } = useMemo(() => {
        return isDark
            ? {
                thumbColor: '#22d3ee',            // cyan-400 (bright accent on dark)
                trackColorFalse: '#334155',       // slate-700 (subtle dark rail)
                trackColorTrue: '#0ea5e9',        // sky-500 (active state glow)
                iosBackground: '#1f2937',         // gray-800 for iOS inactive bg
            }
            : {
                thumbColor: '#6366f1',            // indigo-500 (modern accent on light)
                trackColorFalse: '#cbd5e1',       // slate-300 (soft light rail)
                trackColorTrue: '#60a5fa',        // blue-400 (active state pop)
                iosBackground: '#e5e7eb',         // gray-200 for iOS inactive bg
            };
    }, [isDark]);

    return (
        <View
            className={`
        flex-1 justify-center items-center
        ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}   /* Theme background */
      `}
        >
            {/* ✅ Card container with modern glass/gradient styling */}
            <View
                className={`
          w-11/12 max-w-md rounded-2xl p-6
          ${isDark ? 'bg-zinc-800/70' : 'bg-white/70'}  /* Soft translucent surface */
          border ${isDark ? 'border-white/10' : 'border-black/5'}  /* gentle border */
          shadow-xl ${isDark ? 'shadow-cyan-500/20' : 'shadow-indigo-500/20'} /* themed glow */
          backdrop-blur-md                                     /* Glassmorphism blur */
        `}
            >
                {/* ✅ Header */}
                <Text
                    className={`
            text-2xl font-bold tracking-wide
            ${isDark ? 'text-zinc-100' : 'text-zinc-800'}
          `}
                >
                    SwitchUI
                </Text>

                {/* ✅ Subheader with explanation */}
                <Text
                    className={`
            mt-2 text-base
            ${isDark ? 'text-zinc-300' : 'text-zinc-600'}
          `}
                >
                    Toggle between Light and Dark theme. Styled with NativeWind (Tailwind classes) for clarity and speed.
                </Text>

                {/* ✅ Decorative gradient band for modern feel */}
                <View
                    className={`
            mt-5 h-1 w-full rounded-full
            bg-gradient-to-r
            ${isDark ? 'from-cyan-400 via-sky-500 to-blue-500' : 'from-indigo-400 via-fuchsia-500 to-pink-500'}
          `}
                />

                {/* ✅ Switch row */}
                <View className="mt-6 flex-row items-center justify-between">
                    <Text className={`${isDark ? 'text-zinc-200' : 'text-zinc-700'} text-lg font-semibold`}>
                        {isDark ? 'Dark Mode' : 'Light Mode'}
                    </Text>

                    {/* 
            ✅ Switch props explained:
            - value: current boolean (on/off)
            - onValueChange: callback when toggled
            - thumbColor: knob color (we choose bright accent to stand out)
            - trackColor: background rail colors for false/true states
            - ios_backgroundColor: iOS-only inactive rail color (ensures parity)
            - style: scale up slightly for modern, touch-friendly size
          */}
                    <Switch
                        value={isDark}
                        onValueChange={toggleTheme}
                        thumbColor={thumbColor}
                        trackColor={{ false: trackColorFalse, true: trackColorTrue }}
                        ios_backgroundColor={iosBackground}
                        style={{ transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }] }}
                    />
                </View>

                {/* ✅ Contextual help text */}
                <Text
                    className={`
            mt-4 text-sm
            ${isDark ? 'text-zinc-400' : 'text-zinc-500'}
          `}
                >
                    Why Tailwind classes like bg-zinc-900, text-zinc-100?
                    They keep styles declarative, readable, and consistent with a modern palette,
                    without writing verbose StyleSheet objects.
                </Text>

                {/* ✅ Action button with bright, modern gradient */}
                <View className="mt-8">
                    <View
                        className={`
              rounded-full px-6 py-3
              bg-gradient-to-r
              ${isDark ? 'from-cyan-500 via-sky-500 to-blue-500' : 'from-violet-500 via-fuchsia-500 to-rose-500'}
              shadow-lg ${isDark ? 'shadow-cyan-500/30' : 'shadow-pink-500/30'}
              border ${isDark ? 'border-white/10' : 'border-black/5'}
            `}
                    >
                        <Text className="text-white text-center font-semibold tracking-wide">
                            Apply Theme
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SwitchUI;