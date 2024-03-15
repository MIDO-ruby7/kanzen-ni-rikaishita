export const Top = () => {
  return (
    <main>
      <section class="bg-top2 md:bg-top2 sm:bg-top-mobile bg-cover bg-no-repeat h-full w-screen">
      <nav>
          <ul class="flex justify-between text-xl py-8 px-8 md:px-48 ">
            <li>
            Mt. Stupid
            </li>
            <li>
              <a href="https://github.com/Icesofty" target="_blank" rel="noopener noreferrer">What is Mt. Stupit?</a>
            </li>
          </ul>
        </nav>
        <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
          <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
          </div>
          <div class="w-1/2 lg:h-screen flex flex-col justify-normal">
            <h1 class="w-full text-8xl sm:text-6xl font-bold mt-10 text-stone-900">
              完全に <br />
              <span class="text-teal-400">理解した</span>
            </h1>
            <h2 class="w-full text-xl font-bold mt-5">
              <span class="text-stone-800">理解のスタート地点から、進化を始めよう。</span>
            </h2>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <button type="button" class="w-1/3 md:w-1/3 sm:w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 mt-20">
            <div class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
            <span class="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>
          </div>
        </div>
      </section>
      <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
          <div class="w-full lg:w-1/2 flex flex-col lg:px-2 xl:px-0 text-center">
            <h1 class="w-full text-8xl sm:text-6xl font-bold mt-10">
              <span class="text-teal-400">Mt. Stupid</span>
              を登る
            </h1>
            <h2 class="w-full text-xl font-bold mt-5">
              <span class="">ロードマップを実践して理解のスタート地点に立とう</span>
            </h2>
          </div>
          <div class="w-1/2 lg:h-screen flex flex-col justify-normal">
            <h1 class="w-full text-8xl sm:text-6xl font-bold mt-10">
              <span class="text-teal-400">0→1</span>
              を共有する
            </h1>
            <h2 class="w-full text-xl font-bold mt-5">
              <span class="">あなたのロードマップをみんなに共有する</span>
            </h2>
          </div>
        </div>
    </main>
  )
}