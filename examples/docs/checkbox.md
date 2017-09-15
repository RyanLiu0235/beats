
## checkbox

复选框

### 基本用法

```html
<template>
	<be-checkbox 
		v-model="checkbox"
		:value="true"
		label="确认"
	></be-checkbox>
</template>

<script>
	export default {
		data() {
			return {
				checkbox: true
			}
		}
	}
</script>
```

### 复选框组

``` html
<template>
	<be-checkbox-group v-model="checkbox1">
		<be-checkbox 
			v-for="(item, index) in list1"
			:label="item"
			:key="index"
		></be-checkbox>
	</be-checkbox-group>
</template>

<script>
	export default {
		data() {
			return {
				checkbox1: ['北京'],
				list1: ['北京', '天津', '上海']
			}
		}
	}
</script>
```

### 带禁选框的复选框组

``` html
<template>
	<be-checkbox-group v-model="checkbox2">
		<be-checkbox
			v-for="(item, index) in list2"
			:label="item.value"
			:disabled="item.disabled"
			:key="index"
		></be-checkbox>
	</be-checkbox-group>
</template>

<script>
	export default {
		data() {
			return {
				checkbox2: ['北京', '广州'],
	      list2: [{
	        value: '北京',
	        disabled: false
	      }, {
	        value: '天津',
	        disabled: false
	      }, {
	        value: '上海',
	        disabled: false
	      }, {
	        value: '深圳',
	        disabled: true
	      }, {
	        value: '广州',
	        disabled: true
	      }]
			}
		}
	}
</script>
```