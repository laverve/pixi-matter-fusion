# LaVerve Timer

This package provides a component to display timer using [TailwindCSS](https://tailwindcss.com/) and [React](https://react.dev/) frameworks.

# Usage

```

import {Timer} from "@laverve/timer";

// ...

<Timer seconds={10} minutes={1} timeLeftPercents={90} />

//...

```

## Timer component

### Properties

#### classNames
Default value: `<empty string>`.

You can use this property to slightly modify the look and feel of a timer component. The provided class names will be applied to the root container of a component.

### circleStyle

#### circleStyle.defaultColor
Default value: `rgba(17, 17, 17, 0.20)`.

This property defines color of a timer's circle when timer counts up.

#### circleStyle.colorFrom
Default value: `#67B747`.

This property defines a starting color of a timer's circle when timer counts down.

#### circleStyle.colorTo
Default value: `#C54555`.

This property defines an ending color of a timer's circle when timer counts down.

#### seconds
Required.

Type: `number`

Use this property to display seconds.

#### minutes
Required.

Type: `number`

Use this property to display minutes.

#### timeLeftPercents
Required.

Type: `number`

Use this property to display how much time does user still have to complete the game. Keep it equl to `0` if timer works in times up mode.

<<<<<<< Updated upstream
=======
[ ] - Split timer component into view and a hook to make it possible to use separately
[ ] - Make timer component independent of `@laverve/fusion`
[ ] - Add tests
>>>>>>> Stashed changes

# License

@laverve/timer is licensed under the MIT license. MIT
