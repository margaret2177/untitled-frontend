<template>
  <div
    class="mobile-nav-container z-[5000000] fixed flex top-0 left-0 right-0 bottom-0 gap-5 bg-black/50"
  >
    <div
      class="min-h-[100%] shake bg-white flex flex-col w-[263px] overflow-y-scroll overflow-x-hidden"
    >
      <div class="user-info p-[20px] flex items-center gap-2">
        <div
          class="avatar min-w-[60px] min-h-[60px] flex items-center justify-center rounded-full bg-black/80"
        >
          <span class="text-[25px] text-white font-extrabold">AS</span>
        </div>
        <div class="details">
          <h1 class="text-[20px] leading-5 font-bold text-black">
            Hi, Angela Smith
          </h1>
          <p>Welcome back</p>
        </div>
        <div>
          <span><i class="fa fa-light fa-chevron-right"></i></span>
        </div>
      </div>
      <section class="px-[20px]">
        <h1 class="text-[gray] font-semibold">Learn</h1>
        <p class="text-black">My Learning</p>
      </section>
      <section class="px-[20px]">
        <h1 class="text-[gray] font-semibold">Learn</h1>
        <p class="text-black">My Learning</p>
      </section>
      <section class="px-[20px]">
        <h1 class="text-[gray] font-semibold">Learn</h1>
        <p class="text-black">My Learning</p>
      </section>
    </div>
    <div
      @click="$store.commit('toggleMobileNavOpen')"
      class="w-[50px] h-[50px] mt-5 rounded-full bg-white flex items-center justify-center"
    >
      <i class="fa fa-light fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
};
</script>

<style>
.shake {
  animation: shake 0.82s ease-in;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  0% {
    transform: translateX(-10000);
  }

  50% {
    transform: translateX(-500);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
