<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useMessageStor } from '@/stores/message'

const props = defineProps<{
  event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const store = useMessageStor()
const edit = () => {
  store.updateMessage('You are successuflly edit for ' + props.event.title)
  setTimeout(() => {
  store.resetMessage()
  }, 3000)
}

</script>
<template>
  <p>Edit event here</p>
  <button @click="edit">edit</button> 
</template>
