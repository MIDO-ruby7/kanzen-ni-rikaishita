interface TopProps {
  googleClientId: string
}

export const Top = ({googleClientId}:  TopProps) => {
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
            <h2 class="text-xl font-bold mt-5">
              <span class="text-stone-800">理解のスタート地点から、進化を始めよう。</span>
            </h2>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
              data-client_id={googleClientId}
              data-login_uri="http://localhost:5173/login/callback"
              data-auto_prompt="false">
            </div>
            <div class="g_id_signin w-48 mt-10 ml-5"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left"
            >
            </div>
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
              <span class="">ロードマップを実践して"完全に理解した"を目指す</span><br/>
              <span class="text-xs">※"完全に理解した"とは、「入門しただけでほぼ何も分かっていない」という意味のエンジニア用語</span>
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