## switch

开关

### 基本用法

``` html
<template>
	<be-switch v-model="switcher"></be-switch>
</template>

<script>
	export default {
		data() {
			switcher: true
		}
	}
</script>
```

### 禁止开关

``` html
<template>
	<be-switch v-model="switcher1"
		:disabled="true"
	></be-switch>
</template>

<script>
	export default {
		data() {
			switcher1: true
		}
	}
</script>
```

### 带文本的开关

``` html
<template>
	<be-switch v-model="switcher2"
		on-label="开启"
		off-label="关闭"
	></be-switch>
</template>

<script>
	export default {
		data() {
			switcher2: true
		}
	}
</script>
```

