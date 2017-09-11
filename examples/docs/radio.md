## radio

单选框

### 基本用法

``` html
<template>
	<be-radio-group v-model="radio1">
		<be-radio-button v-for="(item, index) in list1" :value="item.value" :disabled="item.disabled"></be-radio-button>
	</be-radio-group>
</template>

<script>
	export default {
		data() {
			return {
				radio1: '北京',
				list1: [{
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
				}]
			}
		}
	}
</script>
```