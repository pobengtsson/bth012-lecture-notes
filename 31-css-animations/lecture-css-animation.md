# CSS Animations

CSS animations allow for the smooth transition of CSS property values. They consist of two main parts: keyframes (which define animation states) and the properties that call those keyframes.

## Step-by-Step Example:

1. **Define Keyframes**: Keyframes describe the animation sequence, using percentages. `0%` represents the beginning of the animation and `100%` represents the end.

```css
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
```

In this example, the animation starts with the element fully to the left (`-100%`) and ends with it in its original position (`0`).

2. **Apply the Animation**:

To apply the animation, use the `animation-name` property, and specify duration with `animation-duration`.

```css
.box {
  animation-name: slideInFromLeft;
  animation-duration: 2s;
}
```

Here, the element with class `box` will slide in from the left over a period of 2 seconds.

3. **Additional Animation Properties**:

- `animation-timing-function`: Describes the speed curve of the animation, e.g., `ease-in`, `ease-out`.
- `animation-delay`: Specifies a delay before the animation starts.
- `animation-iteration-count`: Determines how many times the animation will run.
- `animation-direction`: Defines the direction of the animation, e.g., `reverse` will make it run backward.

For a continuous slide-in and slide-out effect:

```css
.box {
  animation-name: slideInFromLeft;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

This will make `.box` slide in and out continuously, changing direction after each iteration.

Remember, CSS animations offer a great way to add user engagement and can be a fun way to experiment and enhance user experience.