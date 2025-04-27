![npm](https://img.shields.io/npm/v/@doj/react-native-responsive-kit)
![License](https://img.shields.io/npm/l/@doj/react-native-responsive-kit)
![Downloads](https://img.shields.io/npm/dw/@doj/react-native-responsive-kit)

# 📦 @doj/react-native-responsive-kit

A lightweight, dynamic utility kit for building **responsive** and **consistent** designs across all devices in **React Native**.
Includes utilities for screen width, screen height, status bar height, responsive sizes, spacing, gaps, font sizes, and hooks for real-time updates.

---

## ✨ Features

- 📱 **Responsive width** and **height** helpers
- 🔠 **Responsive text and element sizing** (`rs`)
- 📐 **Always up-to-date screen dimensions**
- 🎯 **Consistent spacing and gap utilities**
- 🔡 **Predefined responsive font sizes**
- ♻️ **useSizes() hook** to dynamically track screen changes (rotation, resizing)
- 🛡️ **Safe and type-friendly**

---

## 📥 Installation

```bash
npm install @doj/react-native-responsive-kit
```

or

```bash
yarn add @doj/react-native-responsive-kit
```

---

## 🚀 Usage

```tsx
import {
  wp,
  hp,
  rs,
  sizes,
  spacing,
  gap,
  fontSizes,
  useSizes,
} from '@doj/react-native-responsive-kit';
```

---

### 📏 Responsive Width and Height

```tsx
import { wp, hp } from '@doj/react-native-responsive-kit';

<View
  style={{
    width: wp(80), // 80% of screen width
    height: hp(20), // 20% of screen height
  }}
/>;
```

---

### 🔠 Responsive Text and Sizes

```tsx
import { rs } from '@doj/react-native-responsive-kit';

<Text style={{ fontSize: rs(16) }}>Responsive Text</Text>

<View style={{ padding: rs(10) }}>
  <Text>Button</Text>
</View>
```

---

### 📐 Access Device Sizes

```tsx
import { sizes } from '@doj/react-native-responsive-kit';

console.log(sizes.screenWidth); // current device screen width
console.log(sizes.screenHeight); // current device screen height
console.log(sizes.statusBarHeight); // current status bar height
```

---

### 🎯 Consistent Spacing

```tsx
import { spacing } from '@doj/react-native-responsive-kit';

<View
  style={{
    padding: spacing.md,
    marginBottom: spacing.lg,
  }}
/>;
```

| Name           | Size (Responsive)      |
| :------------- | :--------------------- |
| `spacing.xs`   | Extra Small (~4)       |
| `spacing.sm`   | Small (~8)             |
| `spacing.md`   | Medium (~16)           |
| `spacing.lg`   | Large (~24)            |
| `spacing.xl`   | Extra Large (~32)      |
| `spacing.xl2`  | 2x Extra Large (~40)   |
| `spacing.xl3`  | 3x Extra Large (~48)   |
| `spacing.xl4`  | 4x Extra Large (~56)   |
| `spacing.xl5`  | 5x Extra Large (~64)   |
| `spacing.xl6`  | 6x Extra Large (~72)   |
| `spacing.xl7`  | 7x Extra Large (~80)   |
| `spacing.xl8`  | 8x Extra Large (~88)   |
| `spacing.xl9`  | 9x Extra Large (~96)   |
| `spacing.xl10` | 10x Extra Large (~104) |

Spacing is automatically responsive using `rs()` scaling!

---

### ➖ Add Gaps Between Flex Children

```tsx
import { gap } from '@doj/react-native-responsive-kit';

<View style={[{ flexDirection: 'row' }, gap('md')]}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</View>;
```

✅ Works in flex containers without needing `gap` support from React Native!

---

### 🔡 Predefined Responsive Font Sizes

```tsx
import { fontSizes } from '@doj/react-native-responsive-kit';

<Text style={{ fontSize: fontSizes['2xl'] }}>Responsive Heading</Text>;
```

| Name             | Size (responsive)     |
| :--------------- | :-------------------- |
| `fontSizes.xs`   | Extra Small (~10)     |
| `fontSizes.sm`   | Small (~12)           |
| `fontSizes.md`   | Medium (~14)          |
| `fontSizes.lg`   | Large (~16)           |
| `fontSizes.xl`   | Extra Large (~18)     |
| `fontSizes.xl2`  | 2x Extra Large (~20)  |
| `fontSizes.xl3`  | 3x Extra Large (~24)  |
| `fontSizes.xl4`  | 4x Extra Large (~28)  |
| `fontSizes.xl5`  | 5x Extra Large (~32)  |
| `fontSizes.xl6`  | 6x Extra Large (~36)  |
| `fontSizes.xl7`  | 7x Extra Large (~40)  |
| `fontSizes.xl8`  | 8x Extra Large (~44)  |
| `fontSizes.xl9`  | 9x Extra Large (~48)  |
| `fontSizes.xl10` | 10x Extra Large (~52) |
| `fontSizes.xl11` | 11x Extra Large (~56) |
| `fontSizes.xl12` | 12x Extra Large (~60) |
| `fontSizes.xl13` | 13x Extra Large (~64) |
| `fontSizes.xl14` | 14x Extra Large (~68) |
| `fontSizes.xl15` | 15x Extra Large (~72) |
| `fontSizes.xl16` | 16x Extra Large (~76) |

---

### ♻️ useSizes() Hook

```tsx
import { useSizes } from '@doj/react-native-responsive-kit';

const { screenWidth, screenHeight, wp, hp, rs, spacing, gap, fontSizes } =
  useSizes();

console.log('Width:', screenWidth);
console.log('Height:', screenHeight);
```

✅ Always stays updated if the device rotates or resizes!

---

## 🛠️ API Reference

| Name                                     | Type                                                                                  | Description                               |
| :--------------------------------------- | :------------------------------------------------------------------------------------ | :---------------------------------------- |
| `wp(percentage: number)`                 | `number`                                                                              | Get width as % of screen width            |
| `hp(percentage: number)`                 | `number`                                                                              | Get height as % of screen height          |
| `rs(size?: number \| null \| undefined)` | `number`                                                                              | Get a scaled responsive size              |
| `sizes.screenWidth`                      | `number`                                                                              | Device screen width (live)                |
| `sizes.screenHeight`                     | `number`                                                                              | Device screen height (live)               |
| `sizes.statusBarHeight`                  | `number`                                                                              | Status bar height                         |
| `spacing`                                | `object`                                                                              | Predefined consistent responsive spacings |
| `gap(size: keyof typeof spacing)`        | `object`                                                                              | Flex gap utility using spacing keys       |
| `fontSizes`                              | `object`                                                                              | Predefined responsive font sizes          |
| `useSizes()`                             | `{ screenWidth, screenHeight, statusBarHeight, wp, hp, rs, spacing, gap, fontSizes }` | React Hook version, always up-to-date     |

---

## 🧩 How `rs()` Works

- If you pass a value (`rs(16)`), it scales it based on the current screen height.
- If you don't pass a value (`rs(undefined)`), it falls back to a **default** size calculated from height.

This makes it **super reliable** for fonts, icons, paddings, margins, etc.

---

## 📚 Example

```tsx
import {
  wp,
  hp,
  rs,
  spacing,
  fontSizes,
  gap,
} from '@doj/react-native-responsive-kit';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...gap('lg'),
      }}
    >
      <View
        style={{
          width: wp(90),
          height: hp(25),
          backgroundColor: 'lightblue',
          borderRadius: spacing.sm,
          padding: spacing.md,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: fontSizes['2xl'] }}>Responsive Box</Text>
      </View>
    </View>
  );
};
```

---

## 💰 Support the Project

If you find this project useful and would like to support the development, you can donate via the following platforms:

### ☕ Buy Me A Coffee

[Buy me a coffee](https://www.buymeacoffee.com/daddyomarjeng)

### 💎 Patreon

[Become a Patron on Patreon](https://www.patreon.com/daddyomarjeng)

Your contributions will help keep this project active and improve its features. Thank you for your support! 🙏

---

## 🛡️ License

MIT License © 2025 Daddy Omar Jeng
