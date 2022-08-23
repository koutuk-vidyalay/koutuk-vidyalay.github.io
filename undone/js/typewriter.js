about();

function about(){ new Typed('.about',{ strings: [
`
<span class="dark:text-blue-400 font-black Yatra text-2xl flex justify-center text-blue-600 border-b-4 border-blue-900">ABOUT US</span><br>
          <p class="leading-relaxed mb-6 text-center">
<span class="text-lg text-center text-blue-700 dark:text-cyan-400 font-black"><sup class="text-blue-600 fa fa-quote-left"></sup> कौतुक विद्यालय, शिरोली (पु.)</span><br>
is a Private School powered by<b class="text-xl text-center text-orange-600 Yatra"><br>
        संस्कार भारती एज्युकेशनल फाँडेशन</b></i><br>
was established in 1998.
Continuously serving best quality education over 24 years. Not only education,but we also develop student's personality...<br>
Many extra-ordinary students were passed out from past decade.
Overwall, contribution of this school in student's life is Significant. <sup class="text-blue-600 fa fa-quote-right"></sup>
</p>
          <a class="flex items-center text-center justify-center">
            <img alt="KVS" src="../img/favicon.ico" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center justify-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font Gotu font-medium text-blue-700 dark:text-blue-300 bold"> - कौतुक विद्यालय</span>
              <span class="text-gray-500 text-sm text-red-400">-1998</span>
         </span>
        </a>
`],
        typeSpeed: 30,contentType:'html',backSpeed:10,showCursor:false })
}
