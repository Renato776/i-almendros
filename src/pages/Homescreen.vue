<template>
    <div class="mt-6">
      <i class="fa-solid fa-lock text-5xl text-primary"></i>
    </div>

    <div class="w-full max-w-sm space-y-3">
      <button
          type="button"
          class="w-full h-12 rounded-2xl font-medium bg-primary text-header-fg active:opacity-90 transition"
      >
        Passcodes
      </button>
      <button
          type="button"
          class="w-full h-12 rounded-2xl font-medium bg-primary text-header-fg active:opacity-90 transition"
      >
        QR codes
      </button>
      <button
          type="button"
          class="w-full h-12 rounded-2xl font-medium bg-primary text-header-fg active:opacity-90 transition"
          @click="$router.push('/profile')"
      >
        Profile
      </button>
    </div>
</template>