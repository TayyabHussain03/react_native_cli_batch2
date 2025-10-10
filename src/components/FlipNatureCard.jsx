import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
// ✅ NativeWind for Tailwind-style classNames
import { tw } from 'nativewind';

/**
 * FlipNatureCard Component
 * --------------------------
 * This card flips smoothly on the Y-axis to reveal a back side
 * with an inspiring nature quote.
 * - Front: shows a scenic image
 * - Back: shows text
 * - Flip animation: controlled via Reanimated shared value
 */

const FlipNatureCard = () => {
    // ✅ Shared value to control rotation angle
    // Starts at 0° (front side visible)
    const rotate = useSharedValue(0);

    // ✅ Animated style for front side
    const frontStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { perspective: 1000 }, // Adds depth for realistic 3D effect
                { rotateY: `${rotate.value}deg` }, // Rotates card based on shared value
            ],
            opacity: rotate.value < 90 ? 1 : 0, // Hide when flipped
        };
    });

    // ✅ Animated style for back side
    const backStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { perspective: 1000 },
                { rotateY: `${rotate.value + 180}deg` }, // Reverse side rotation
            ],
            opacity: rotate.value >= 90 ? 1 : 0, // Show only after halfway rotation
        };
    });

    // ✅ Function to flip the card
    const flipCard = () => {
        // Flips from 0° → 180° or back using smooth timing
        rotate.value = withTiming(rotate.value === 0 ? 180 : 0, {
            duration: 700, // Slightly longer for a premium smooth flip feel
        });
    };

    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-br from-[#e0f7fa] via-[#f0f4f8] to-[#f8fafc]">
            {/* 
      bg-gradient-to-br → soft gradient background for modern clean look
      from-[#e0f7fa] to-[#f8fafc] → pastel tones that keep UI bright & calm
    */}

            {/* ✅ Card Container */}
            <View className="w-72 h-[420px] relative">
                {/* ✅ Front Side - Nature Image */}
                <Animated.View
                    style={frontStyle}
                    className="absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-md bg-white/10"
                >
                    {/*
          rounded-3xl → more premium curve
          border-white/20 & bg-white/10 → glass-like translucent border & background
          backdrop-blur-md → smooth blur (gives glassmorphism effect)
        */}
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
                        }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />

                    {/* ✅ Text Overlay on Image */}
                    <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                        {/* gradient overlay → natural fade for text readability */}
                        <Text className="text-white text-xl font-semibold text-center drop-shadow-md">
                            Explore The Wild Side 🌿
                        </Text>
                    </View>
                </Animated.View>

                {/* ✅ Back Side - Quote */}
                <Animated.View
                    style={backStyle}
                    className="absolute w-full h-full rounded-3xl justify-center items-center shadow-2xl border border-white/20 backdrop-blur-xl bg-gradient-to-br from-green-400/90 via-emerald-600/90 to-lime-500/90 p-6"
                >
                    {/*
          bg-gradient-to-br → dynamic gradient background
          using slightly transparent colors (/90) for glow effect
          backdrop-blur-xl → adds depth & richness
        */}
                    <Text className="text-white text-2xl font-bold text-center leading-snug drop-shadow-lg">
                        Nature is not a place to visit — it’s home.
                    </Text>
                    <Text className="text-green-50 text-sm mt-3 italic tracking-wide">
                        — Gary Snyder
                    </Text>
                </Animated.View>
            </View>

            {/* ✅ Flip Button — Modern Glass Gradient */}
            {/* ✅ Flip Button — Bright Neon Gradient */}
            <Pressable
                onPress={flipCard}
                className={`
    mt-10 px-10 py-3 rounded-full
    bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]       /* Vibrant sky blue → cyan gradient */
    active:from-[#2563eb] active:to-[#0891b2]          /* Slightly darker when pressed */
    shadow-xl shadow-cyan-400/50                       /* Soft glowing cyan shadow */
    border border-white/20                             /* Faint border for glass outline */
    backdrop-blur-md                                   /* Frosted glass background effect */
    transition-all duration-300 ease-in-out            /* Smooth interaction transitions */
  `}
            >
                {/* 
    🎨 Styling Notes:
    - from-[#3b82f6] to-[#06b6d4] → bright modern color range
    - active:... → keeps it vivid while adding feedback
    - shadow-cyan-400/50 → creates a glowing “techy” depth
    - backdrop-blur-md → subtle glassy touch
  */}
                <Text className="text-white text-lg font-bold tracking-wide uppercase drop-shadow-md">
                    Flip Card
                </Text>
            </Pressable>
        </View>
    );
};

export default FlipNatureCard;
