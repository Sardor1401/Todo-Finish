<script setup lang="ts">
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue"

  interface FesModalProps {
    loading?: boolean
    submitLabel?: string
    cancelLabel?: string
  }

  defineProps<FesModalProps>()
  const emit = defineEmits<{
    (event: "submit"): void
    (event: "cancel"): void
  }>()
  const slots = defineSlots<{
    default: object
    actions: object
  }>()
  const { modelValue } = defineModels<{
    modelValue: boolean
  }>()

  function close() {
    modelValue.value = false
  }

  function onSubmit() {
    emit("submit")
    close()
  }

  function onCancel() {
    emit("cancel")
    close()
  }
</script>

<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" class="relative z-10" @close="close">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="max-w-4xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <slot />
              <div v-if="!slots.actions" class="mt-4 flex justify-between gap-4">
                <FesButton secondary variant="error" @click="onCancel">
                  {{ cancelLabel ?? $t('button.cancel') }}
                </FesButton>
                <FesButton :loading="loading" variant="info" @click="onSubmit">
                  {{ submitLabel ?? $t('button.submit') }}
                </FesButton>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
