<script setup>
import { ref } from "vue"

// state
const todo = ref("")
const todoList = ref([]) // each item will be an object: { id, text, editing, editText }

// helpers
const addToTodoList = () => {
  const text = todo.value && todo.value.trim()
  if (!text) return
  todoList.value.push({
    id: Date.now() + Math.random(), // simple unique id (replace with uuid if needed)
    text,
    editing: false,
    editText: text
  })
  todo.value = ""
}

const deleteTodo = (index) => {
  todoList.value.splice(index, 1)
}

const enableEdit = (item) => {
  item.editing = true
  // seed editText so the input shows current text
  item.editText = item.text
}

const cancelEdit = (item) => {
  item.editing = false
  item.editText = item.text
}

const updateTodo = (item) => {
  const txt = (item.editText || "").trim()
  if (!txt) return // optionally prevent empty updates
  item.text = txt
  item.editing = false
}
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <label class="block text-center mb-2">Enter your Todo</label>

    <!-- input + add -->
    <div class="flex gap-2 mb-4">
      <input
        v-model="todo"
        @keyup.enter="addToTodoList"
        type="text"
        placeholder="Enter your todo here"
        class="flex-1 border rounded p-2"
      />
      <button @click="addToTodoList" class="px-4 py-2 border rounded">Add</button>
    </div>

    <!-- list -->
    <ul class="space-y-2">
      <li
        v-for="(item, index) in todoList"
        :key="item.id"
        class="border rounded p-3 flex justify-between items-start"
      >
        <div class="flex-1">
          <!-- read mode -->
          <div v-if="!item.editing">
            <p class="mb-2">{{ index + 1 }}. {{ item.text }}</p>
            <div class="flex gap-2">
              <button @click="enableEdit(item)" class="text-blue-600">Edit</button>
              <button @click="deleteTodo(index)" class="text-red-600">Delete</button>
            </div>
          </div>

          <!-- edit mode -->
          <div v-else>
            <input
              v-model="item.editText"
              @keyup.enter="updateTodo(item)"
              type="text"
              placeholder="Update your todo here"
              class="w-full border rounded p-2 mb-2"
            />
            <div class="flex gap-2">
              <button @click="updateTodo(item)" class="text-green-600">Update</button>
              <button @click="cancelEdit(item)" class="text-gray-600">Close</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>