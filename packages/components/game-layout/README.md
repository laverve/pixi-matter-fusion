# @laverve/fusion

This module provides a component to organizae layout of a game.

# Installation

```
npm i --save @laverve/game-layout
```

# Usage

Wrap your game by `GameLayout` component as shown below.

```
    <GameLayout
        boardConfig={{
            children: <></>,
            width: 300,
            height: 300
        }}
        sidebarConfig={{
            children: <></>
        }}
        containerConfig={{
            className: "my-game"
        }}
    />
```

## (optional) boardConfig

### (optional) boardConfig.children

Type: `ReactNode`.

Use this porperty to define a list of components that will form a gameplay. There are two components usually: one to draw a board and another one to show game controls.

### (optional) boardConfig.width

Default value: `300`.

Type: `number`.

Use this property to define width of a board.

### (optional) boardConfig.height

Default value: `300`.

Type: `number`.

Use this property to define height of a board.


### (optional) boardConfig.className

Default value: `''`.

Type: `string`.

Use this property to customize look and feel of a board's wrapper.

## (optional) sidebarConfig

### (optional) sidebarConfig.children

Type: `ReactNode`.

Use this porperty to define a list of components that will be placed in a sidebar.

### (optional) sidebarConfig.layoutVariant

Default value: `horizontal`.

Type: `'horizontal' | 'vertical'`,

Use this porperty to define how components inside a sidebar will be placed: as columns or as rows.

### (optional) sidebarConfig.className

Default value: `''`.

Type: `string`.

Use this property to customize look and feel of a sidebar's wrapper.

### (optional) sidebarConfig.placement

Default value: `right`.

Type: `'right' | 'left' | 'top' | 'bottom'`,

Use this porperty to define where sidebar will be placed.

## (optional) containerConfig

### (optional) sidebarConfig.className

Default value: `''`.

Type: `string`.

Use this property to customize look and feel of a container for all the elements of a game.

