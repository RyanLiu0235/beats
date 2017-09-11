## select

选择器

### 基本用法

选择器的基本用法

``` html
<template>
	<be-select v-model="select1">
		<be-option v-for="(option, index) in list1" :key="index" :name="option"></be-option>
	</be-select>
</template>

<script>
	export default {
		data() {
			return {
				select1: '张三',
				list1: ['张三', '李四', '王五']
			}
		}
	}
</script>
```

### 被禁止的选项

通过给`be-option`添加`:disabled="true"`可以禁用某个选项

``` html
<template>
	<be-select v-model="select2">
		<be-option v-for="(option, index) in list2" :key="index" :name="option.name" :disabled="option.disabled"></be-option>
	</be-select>
</template>

<script>
	export default {
		data() {
			return {
				select2: '张三',
				list2: [{
					name: '张三',
					disabled: false
				}, {
					name: '李四',
					disabled: false
				}, {
					name: '王五',
					disabled: true
				}]
			}
		}
	}
</script>
```
