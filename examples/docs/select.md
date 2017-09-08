# select

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