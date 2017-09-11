## radio

单选框

### 基本用法

``` html
<template>
	<be-radio-group v-model="radio1">
		<be-radio-button v-for="(item, index) in list1" :value="item" :key="index"></be-radio-button>
	</be-radio-group>
</template>

<script>
	export default {
		data() {
			return {
				radio1: '北京',
				list1: ['北京', '天津', '上海']
			}
		}
	}
</script>
```

### 带有禁止选择的选项

``` html
<template>
	<be-radio-group v-model="radio2">
		<be-radio-button v-for="(item, index) in list2" :value="item.value" :disabled="item.disabled" :key="index"></be-radio-button>
	</be-radio-group>
</template>

<script>
	export default {
		data() {
			return {
				radio2: '北京',
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
				}]
			}
		}
	}
</script>
```