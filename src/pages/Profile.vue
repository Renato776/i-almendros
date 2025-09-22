<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
    <h2 class="text-2xl font-bold mb-4">Profile Details</h2>
    <div class="mb-4">
      <label class="block font-semibold mb-1" for="name">Name</label>
      <input id="name" type="text" class="w-full border rounded px-3 py-2 bg-gray-100" value="John" readonly />
    </div>
    <div class="mb-4">
      <label class="block font-semibold mb-1" for="lastname">Lastname</label>
      <input id="lastname" type="text" class="w-full border rounded px-3 py-2 bg-gray-100" value="Doe" readonly />
    </div>
    <div class="mb-4">
      <label class="block font-semibold mb-1" for="address">Address</label>
      <input id="address" type="text" class="w-full border rounded px-3 py-2 bg-gray-100" value="123 Main St, City" readonly />
    </div>
    <div class="mb-4">
      <label class="block font-semibold mb-1" for="passcode">Permanent Passcode</label>
      <input id="passcode" type="text" class="w-full border rounded px-3 py-2 bg-gray-100" value="ABC123456" readonly />
    </div>
    <div class="mb-4">
      <label class="block font-semibold mb-1">QR</label>
      <span class="text-sm text-gray-500">Scan this QR code:</span>
      <img src="https://api.qrserver.com/v1/create-qr-code/?data=ABC123456&size=120x120" alt="QR Code" class="w-30 h-30 border rounded bg-gray-100" />
    </div>
  </div>
</template>