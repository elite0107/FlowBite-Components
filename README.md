# FlowBite Components

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Alert Component
#### Alert Options
- type:
It must be one of ['success', 'danger', 'info', 'warning', 'dark'].
If you don't specify the type, then it will be 'success' by default.
- icon: True or False. The icon will appear automatically according to type option if given value is true.
- title: It must be String. Not required field.
- subtitle: It must be String. Not required field.
- message: It must be string. Required field.

#### How to use
First of all you have to import Alert Component.
```javascript
import Alert from '@/components/OriginComponents/Alert.vue';
```
Next, you have to define Alert Component into Components Object of Vue Class.
```javascript
export default {
  name: ""
  components: {
    Alert
  }
}
```
Next, you can use the Alert Component depending on your needs.
```html
<template>
  <Alert
    type="danger"
    :icon="true"
    subtitle="Danger alert!"
    message="Change a few things up and try submitting again."
  />
</template>
```

### Button Component
#### FlowBite Button Component
##### Options
- type: It must be one of ['default', 'alternative', 'dark', 'light', 'green', 'red', 'yellow', 'purple']
- size: It must be one of ['xs', 'sm', 'base', 'lg', 'xl']
- icon: True of False. Shows icon if true.
##### How to use
First of all you have to import Alert Component.
```javascript
import Button from '@/components/OriginComponents/Button.vue';
```
Next, you have to define Alert Component into Components Object of Vue Class.
```javascript
export default {
  name: ""
  components: {
    Button
  }
}
```
Next, you can use the Alert Component depending on your needs.
```html
<template>
  <Button
    type="red"
    size="xl"
    :icon="true"
  >
    Button
  </Button>
</template>
```

You don't need to define custom css. It has all it's style in it's component.