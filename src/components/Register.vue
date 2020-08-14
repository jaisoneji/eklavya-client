<template>
  <!DOCTYPE html>
<html lang="en" class="h-full">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Registration</title>
    <link href="https://unpkg.com/tailwindcss@1.1.4/dist/tailwind.min.css" rel="stylesheet" />
  </head>
  <body class="h-full bg-gray-300">
    <div class="flex items-center justify-center h-full">
      <div class="flex max-w-3xl">
        <div class="bg-white w-1/2 p-8">
          <h1 class="text-gray-700 text-3xl text-center mb-4">Registration</h1>
          <form action="" class="text-gray-600">
            <div class="my-3">
              <input type="text" placeholder="First Name" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
              <input type="text" placeholder="Last Name" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
                <input type="Email" placeholder="Email" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
                <input type="password" placeholder="Password" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
              </div>
            <div class="my-6 flex">
              <button class="border rounded w-1/2 md:w-full py-2">REGISTER</button>
              <button class="border rounded w-1/2 md:w-full py-2 border-blue-700 bg-blue-600 text-white ml-2">SIGN IN</button>
            </div>
          </form>
        </div>
        <div class="w-1/2">
          <img src="../assets/architecture-1869211_1280.jpg" alt="" class="w-full h-full  object-cover" />
        </div>
      </div>
    </div>
  </body>
</html>
</template>

<script>
export default {

}
</script>

<style>

</style>