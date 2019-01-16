<template>
    <div>
        <h2># Javascript Expression</h2>
        <p>number+1:{{ number + 1 }}</p>
        <p>ok?'YES':'NO':{{ok?'YES':'NO'}}</p>
    </div>
</template>

<script>
export default {
    name:'JsExpression',
    props:{
        number: Number,
        ok: Boolean,
    }
}
</script>