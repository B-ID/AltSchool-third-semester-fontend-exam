<template>
    <div class="bg-white rounded-lg p-8 shadow-lg select-none">
        <div class="counter">
            <h2 class="text-3xl font-bold mb-2 capitalize">counter App</h2>
            <p class="text-2xl mb-5">count: <span class="text-amber-500 font-bold">{{ count }}</span></p>
            <div class="flex justify-between w-full select-none text-white font-medium">
                <button class="block p-2  font-bold border rounded bg-stone-500 w-10 active:bg-stone-600"
                    @click="decrement">-</button>
                <button
                    class="block p-2 border rounded uppercase flex-grow bg-orange-500 transition active:scale-95 active:bg-orange-600"
                    @click="reset">reset</button>
                <button class="block p-2 border font-bold rounded bg-zinc-500 w-10 active:bg-zinc-600"
                    @click="increment">+</button>
            </div>
            <input class="px-2 py-2 mb-3 mt-2 w-full outline-none rounded bg-black focus:bg-white focus:ring transition"
                placeholder="Set Custom Value" type="number" v-model.number="value">
            <button
                class="uppercase bg-lime-500 active:bg-lime-600 p-2 w-full text-white rounded transition font-medium active:scale-95"
                @click="setValue(value)">set</button>
        </div>
    </div>
</template>
<script>

import useCounter from '../composables/useCounter'

export default {
    name: 'Counter',
    setup() {
        const { count, value, increment, decrement, reset, setValue } = useCounter()
        return {
            count,
            value,
            increment,
            decrement,
            reset,
            setValue,
        }
    }
}

</script>

<style scoped>.counter {
    display: flex;
    flex-direction: column;
    align-items: center;
}</style>