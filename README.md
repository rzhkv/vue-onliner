# vue-onliner

> A reactive online/offline mixin for vue.js

# Installation

```
npm install vue-onliner --save
```

# Usage

That's a basic example:

```
import Vue from 'vue'
import vueOnliner from 'vue-onliner'

Vue.use(vueOnliner);
```

In component's:

```
export default {
  async created() {
    if (this.onliner) {
      try {
        // Some async action's...
      } catch (error) {
        throw Error(error)
      }
    }
  }
}
```
