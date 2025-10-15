import { writable } from 'svelte/store'

export const sidebarOpen = writable(false)
export const currentExample = writable('home')

export const examples = [
  { id: 'coding', name: 'Coding' },
  { id: 'grafica', name: 'Grafica' },
  { id: 'istruzione', name: 'Istruzione' },
  { id: 'contatti', name: 'Contatti' },


]