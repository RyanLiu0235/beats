
## checkbox

单选框

### 基本用法

``` html
<template>
	<be-checkbox-group v-model="checkbox">
		<be-checkbox 
			v-for="(item, index) in list" 
			:value="item" 
			:key="index"
		></be-checkbox>
	</be-checkbox-group>
</template>

<script>
	export default {
		data() {
			return {
				checkbox: ['北京'],
				list: ['北京', '天津', '上海']
			}
		}
	}
</script>
```