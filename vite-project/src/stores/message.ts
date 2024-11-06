import type { MessageState } from '@/types'
import type { MessageStat } from '@/types'
import { defineStore } from 'pinia'
export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    message: ''
  }),
  actions: {
    updateMessage(message: string): void {
      this.message = message
    },
    resetMessage(): void {
      this.message = ''
    }
  }        
})
export const useMessageStor = defineStore('message', {
  state: (): MessageStat => ({
    message: ''
  }),
  actions: {
    updateMessage(message: string): void {
      this.message = message
    },
    resetMessage(): void {
      this.message = ''
    }
  }        
})