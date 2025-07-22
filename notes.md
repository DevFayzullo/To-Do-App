# 📘 To-Do App – Project Development Notes

## 🟢 Getting Started

This project began with the aim of building a simple "To-Do List" application using HTML, CSS, and JavaScript.

The initial version included the following features:

- Add tasks
- Mark tasks as completed and delete them
- Basic UI styling with CSS

## ⚠️ Initial Challenges

1. **Tasks were not saved** – reloading the page cleared all tasks.
2. **`[]` character appearing unexpectedly** – improper use of `localStorage` caused empty or invalid HTML to be rendered.
3. **Very basic UI** – buttons and inputs were misaligned and visually unappealing.
4. **Poor responsiveness** – the design broke on smaller screens.
5. **No dark mode** – only a light version was available.

## ✅ Implemented Solutions

### 🔒 1. LocalStorage

- `saveData()` function was added to store `listContainer.innerHTML` into `localStorage`.
- `showTask()` function loads data on page load.
- Safeguard added to avoid null or empty string issues:

```js
if (saved !== null && saved.trim() !== "") {
  listContainer.innerHTML = saved;
} else {
  listContainer.innerHTML = "";
}
```

### 🎨 2. UI Improvements

- All buttons and inputs were centered and restyled
- Buttons made rounded and colorful with hover animations
- `Add`, `Filter`, and `Dark Mode` toggle buttons were well-aligned

### 🌑 3. Dark Mode

- `body.dark-mode` class dynamically changes background and text colors
- Clicking the toggle button switches dark/light themes

### 📱 4. Responsive Design

- `max-width` and media queries added:

```css
@media (max-width: 600px) {
  .todo-app {
    width: 95%;
    padding: 20px;
  }
}
```

### 🔍 5. Task Filtering

- `All`, `Active`, and `Completed` buttons allow easy filtering of tasks

### ⌨️ 6. Add Tasks with Enter Key

- `addTask()` is triggered when pressing Enter inside the input field

## 🔚 Conclusion

This project evolved step-by-step into a polished and practical tool. Although it started as a basic app, solving real-world problems such as data persistence, UX improvements, design, and responsiveness turned it into a valuable learning experience.

The final version:

- User-friendly
- Visually appealing
- Mobile-responsive
- Data-preserving
- Includes modern dark mode support
