import { ref, computed } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  const count = computed(() => store.getters.count);

  const value = ref(0);

  const increment = () => {
    store.dispatch("increment");
  };

  const decrement = () => {
    store.dispatch("decrement");
  };

  const reset = () => {
    store.dispatch("reset");
    value.value = "";
  };

  const setValue = (value) => {
    store.dispatch("setValue", value);
  };

  return { count, value, increment, decrement, reset, setValue };
}
