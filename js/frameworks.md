# Frameworks <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Svelte](#svelte)

---

## Svelte

Use a map to create dom elements

```svelte
<script>
   const map = new Map([
      ['a', 1],
      ['b', 2],
   ]);   
</script>

{#each [...map] as [key, value]}
   <p>{key}, {value}</p>
{/each}
```

Smooth way to fetch data

```js
import { writable } from 'svelte/store';

const cache = new Map();

export const storeFetch = (url) => {
   const store = writable(new Promise(() => {}));

   if (cache.has(url)) {
      store.set(Promise.resolve(cache.get(url)));
   }

   const load = async () => {
      const response = await fetch(url);
      const data = await response.json();
      cache.set(url, data);
      store.set(Promise.resolve(data));
   };

   load();
   return store;
};
```