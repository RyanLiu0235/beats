## input

输入框

### 基本用法

输入框的基本用法

``` html
<be-input v-model="input1"></be-input>

<script>
	export default {
		data() {
			return {
				input1: '来一段freestyle'
			}
		}
	}
</script>
```

### 禁止输入的输入框

可以通过给`disabled`参数设置`true`来让输入框禁止输入

``` html
<be-input :disabled="true"></be-input>
```

### 多行输入

其实就是内部用了`textarea`

``` html
<be-input type="textarea"></be-input>
```

### 带计数器的输入框

可以通过给`count`参数设置`true`来给输入框添加一个计数器，`be-input`默认20个字符长度限制，`be-textarea`默认250个字符长度

``` html
<be-input :count="true"></be-input>
<be-input type="textarea" :count="true" style="margin-top: 14px;"></be-input>
```