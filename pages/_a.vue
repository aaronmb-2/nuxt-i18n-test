<template>
  <main class="bg-gustorBeige bg-[url('/images/textures/paper-square.png')] bg-repeat">
    <section>
      <div class="pb-10">
        <!-- <img
					src="/images/hero-image.png"
					class="container aspect-[19/16] w-full rounded-md object-cover brightness-90 md:aspect-auto md:rounded-none lg:min-w-full lg:p-0"
				/> -->

        <!-- <the-home-video-player v-if="true" class="md:-mt-12 xl:-mt-24" /> -->

        <div>
          <div class="h-4 -translate-y-3 overflow-hidden">
            <base-icon name="edge" class="text-gustorBeige" />
          </div>
          <div class="container">
            <h1 class="mb-4 mt-4 font-tanker text-4xl md:mt-7 md:text-center md:text-6xl">
              {{ t("pages.index.heroTitle") }}
            </h1>
            <p class="text-sans text-left text-xl md:text-center">
              {{ t("pages.index.heroSubtitle") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <nuxt-link :to="localePath({ name: 'products' })" class="group/logo">{{localePath({ name: 'products' })}}</nuxt-link>
    <p>YO: {{ locale }}</p>
    <nuxt-link :to="localePath({ name: 'category/[_id]/[_category_name]', params: {'_id': '3', '_category_name': 'rund'} })" class="group/logo">-Testlink-</nuxt-link>
    <br/>
    {{ localePath({ name: 'tester/[id]', params: {id: '3'} }) }}
    <nuxt-link :to="localePath({ name: 'tester/[id]', params: {id: '3'} })" class="group/logo">-Testlinktester-</nuxt-link>
    <nuxt-link :to="localePath({ name: 'tester/1'})"> AAAAAAAAA </nuxt-link>

    <nuxt-link :to="localePath({ name: 'category/[_id]/[_category_name]/index', params: {id: '3', 'category_name': 'rund'} })" class="group/logo">-Cats-</nuxt-link>
    <!-- ----------------------promo's----------------- -->
    <section class="py-10">
      <div class="container">
        <h2 class="mb-4 text-left font-tanker text-3xl text-gustorRed md:mb-10 md:text-center md:text-5xl">
          {{ t("pages.index.promoTitle") }}
        </h2>
        <!-- <div class="grid grid-cols-2 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4">
          <product-card v-for="item in featuredProducts" :item="item" />
        </div> -->
        <div>
          <base-carousel :navigation="featuredProducts?.length > 3" :items-to-show="2.2" :breakpoints="{
            480: {
              itemsToShow: 2.5,
              snapAlign: 'start',
            },
            620: {
              itemsToShow: 3.2,
              snapAlign: 'start',
            },
            1020: {
              itemsToShow: 4,
              snapAlign: 'start',
            },
          }" :items="featuredProducts">
            <template #item="{ item, index }">
              <product-card :item="item" :index="index" class="mx-1 w-[20rem] md:mx-2" />
            </template>
          </base-carousel>
        </div>
        <div class="mt-4 flex justify-end">
          <base-button link="category/15/promo" type="secondary" color="red" icon="arrow">
            <span class="uppercase">
              {{ t("pages.index.promoButtonLabel") }}
            </span>
          </base-button>
        </div>
      </div>
    </section>

    <!-- ----------------------volledig aanbod----------------- -->
    <section class="bg-overlayPaper bg-[url('/images/textures/paper-square-alt.png')] text-gustorRed bg-blend-overlay">
      <div class="h-2 rotate-180 overflow-hidden">
        <base-icon name="edge" class="text-gustorBeige" />
      </div>
      <div class="py-10">
        <div class="container">
          <h2 class="mb-4 font-tanker text-3xl text-gustorRed md:mb-8 md:text-center md:text-5xl">
            {{ t("pages.index.allCategoriesTitle") }}
          </h2>
          <p class="mx-auto mb-8 md:mb-10  text-xl text-black md:w-4/5 md:text-center">
            {{ t("pages.index.allCategoriesSubtitle") }}
          </p>
          <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
            <category-card v-for="(category, i) in categoryMeat" :item="category" />
          </div>

          <div class="mb-20 flex justify-center md:justify-end">
            <base-button link="products" type="secondary" color="red" icon="arrow" class="mt-4 md:my-10">
              <span class="uppercase">
                {{ t("pages.index.allCategoriesButtonLabel") }}
              </span>
            </base-button>
          </div>

          <!-- <div class="flex flex-col gap-10">
						<nuxt-link :to="localePath('shopping-cart', locale)"
							>test - {{ locale }}
						</nuxt-link>
						<nuxt-link :to="localePath('products', locale)"
							>products- {{ locale }}
						</nuxt-link>
						<nuxt-link :to="localePath('privacy-policy', locale)"
							>privacy-policy - {{ locale }}
						</nuxt-link>
					</div> -->

          <!-- <div class="mb-10">
						<h4 class="mb-2 font-tanker text-lg md:text-center">
							Al iets specifiek in gedachte?
						</h4>
						<div class="relative mx-auto md:w-4/5">
							<base-input
								type="search"
								v-model="searchInGustor"
								placeholder="Zoeken naar..."
							/>
						</div>
					</div> -->
        </div>
      </div>
    </section>

    <!-- ----------------------season highlight----------------- -->
    <section>
      <div class="h-3 -translate-y-2 overflow-hidden">
        <base-icon name="edge" class="text-gustorBeige" />
      </div>
      <div class="container py-12">
        <h2 class="mb-4 font-tanker text-3xl text-gustorRed md:mb-8 md:text-center md:text-5xl">
          {{ t("pages.index.bbqTitle") }}
        </h2>
        <p class="mx-auto mb-8 md:mb-10 text-xl md:w-4/5 md:text-center">
          {{ t("pages.index.bbqSubTitle") }}
        </p>
        <div class="grid grid-cols-2 gap-2 overflow-hidden md:grid-cols-4">
          <product-card v-for="item in bbqProducts" :item="item" />
        </div>
        <div class="flex justify-end">
          <base-button link="products" type="secondary" color="red" icon="arrow" class="mt-4 md:my-10" :query="{
            tag: 4,
          }">
            <span class="uppercase">
              {{ t("pages.index.bbqButtonLabel") }}
            </span>
          </base-button>
        </div>
      </div>
    </section>
    <!-- ----------------------over ons----------------- -->
    <section id="about" class="relative z-10">
      <div class="bg-black text-white">
        <div class="bg-black">
          <div class="h-6 -translate-y-4 bg-[url('/images/wave.svg')]" />
        </div>
        <div class="container py-10">
          <h2 class="my-4 font-tanker text-3xl md:mb-10 md:text-center md:text-5xl xl:mb-14">
            {{ t("pages.index.aboutTitle") }}
          </h2>
          <div v-if="aboutUsItems?.length" class="mb-10 gap-8 md:mb-16 md:grid md:grid-cols-12 md:gap-10 lg:gap-12">
            <div class="gustor-api mb-4 md:order-1 md:col-span-5">
              <span v-html="aboutUsItems[0]" />
            </div>

            <nuxt-picture src="/images/about/gustor.jpg" alt="Trotse slagers van Gustor"
              class="col-span-7 mb-4 aspect-video rounded-sm object-cover md:order-2"
              sizes="sm:100vw md:vw lg:50vw xl:50vw xxl:50vw 2xl:1200px" :img-attrs="{ class: 'w-full' }"
              loading="lazy" />
          </div>
          <div v-if="aboutUsItems?.length > 1" class="mb-10 gap-8 md:mb-16 md:grid md:grid-cols-12 md:gap-10 lg:gap-12">
            <div class="gustor-api mb-4 md:col-span-5">
              <span v-html="aboutUsItems[1]" />
            </div>
            <nuxt-picture src="/images/about/rassen.jpg" alt="Varkens in een weide"
              class="col-span-7 mb-4 aspect-video rounded-sm object-cover md:order-first"
              sizes="sm:100vw md:vw lg:50vw xl:50vw xxl:50vw 2xl:1200px" :img-attrs="{ class: 'w-full' }"
              loading="lazy" />
          </div>
          <div v-if="aboutUsItems?.length > 2" class="mb-10 gap-8 md:grid md:grid-cols-12 md:gap-10 lg:gap-12">
            <div class="gustor-api mb-4 md:order-1 md:col-span-5">
              <span v-html="aboutUsItems[2]" />
            </div>
            <nuxt-picture src="/images/about/ambacht.jpg" alt="Varkens in een weide"
              class="col-span-7 mb-4 aspect-video rounded-sm object-cover md:order-2"
              sizes="sm:100vw md:vw lg:50vw xl:50vw xxl:50vw 2xl:1200px" :img-attrs="{ class: 'w-full' }"
              loading="lazy" />
          </div>
          <div>
            <base-video-embed class="mb-10 md:mb-16" />
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="h-4 translate-y-3 rotate-180 overflow-hidden">
          <div class="h-6  bg-[url('/images/wave.svg')]" />
        </div>
      </div>
    </section>
    <section class="relative h-fit bg-gustorRed bg-[url('/images/textures/paper-red-square.png')] bg-repeat text-white">
      <div class="container py-20 md:py-40">
        <h2 class="mb-10 text-center font-tanker text-3xl md:mb-20 md:text-5xl">
          {{ t("pages.index.approachTitle") }}
        </h2>
        <div class="grid gap-10 md:grid-cols-3 md:gap-20">
          <div v-for="(item, i) in approach"
            class="mx-auto flex w-full flex-col items-center justify-center text-center  md:w-full">
            <base-img :src="item?.media?.imageSrc" :sizes="item?.media?.sizes" :width="item?.media?.width"
              :height="item?.media?.height" :alt="`${t('pages.index.pictureRegarding')} ${item?.title}`" />
            <div class="my-4 font-tanker text-2xl md:mt-8">
              {{ i + 1 }}. {{ item?.title ?? "i18n" }}
            </div>
            <p class="break-all text-xl md:break-normal md:text-center">
              {{ item?.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="h-1 -translate-y-[4px] overflow-hidden">
        <base-icon name="edge" class="text-gustorBeige" />
      </div>
      <div class="container py-12">
        <h2 class="mb-4 font-tanker text-3xl text-gustorRed md:mb-8 md:text-center md:text-5xl">
          {{ t("pages.index.reviewsTitle") }}
        </h2>
        <p class="mb-10 text-xl md:mx-auto md:w-4/5 md:text-center">
          {{ t("pages.index.reviewsSubTitle") }}
        </p>
        <review-carousel :list="reviews" class="my-8" />
        <div class="mt-8 flex justify-end">
          <!-- <base-button
						type="secondary"
						color="red"
						icon="arrow"
						class=""
					>
						<span class="uppercase"> Bekijk alle reviews</span>
					</base-button> -->
        </div>
      </div>
    </section>
    <!-- ----------------------FAQ----------------- -->
    <section class="py-12">
      <div class="gustor-api container">
        <h2 class="mb-4 font-tanker text-3xl text-gustorRed md:mb-8 md:text-center md:text-5xl">
          {{ t("pages.index.faqTitle") }}
        </h2>
        <p class="mb-8 md:mb-10 text-xl md:mx-auto md:w-4/5 md:text-center">
          {{ t("pages.index.faqDescription") }}
        </p>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div v-if="faqGeneralItems?.length">
            <h3 class="font-tanker text-2xl text-gustorRed md:text-3xl">
              {{ faqGeneral?.title }}
            </h3>
            <home-section-expansion :items="faqGeneralItems" />
          </div>
          <div v-if="faqOrderDeliveryItems?.length">
            <h3 class="font-tanker text-2xl text-gustorRed md:text-3xl">
              {{ faqOrderDelivery?.title }}
            </h3>
            <home-section-expansion :items="faqOrderDeliveryItems" />

          </div>
          <div class="mt-4 flex justify-end md:my-10">
            <base-button type="secondary" color="red" icon="arrow" link="/faq">
              <span class="uppercase">
                {{ t("pages.index.faqButtonLabel") }}</span>
            </base-button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { normalize } from 'path';

const { locale } = useI18n();

const localePath = useLocalePath();

const { t } = useI18n();
const { signIn, data: sessionData } = useAuth();

try {
  if (!sessionData?.value?.user) {
    await signIn("credentials", {
      redirect: false,
      isGuest: true,
    });
    location.reload();
  }
} catch { }

const { data: categoryMeat } = useAsyncData("categoryMeat", async () => {
  const res = await useNopcommerceApi({
    path: "/api-frontend/Catalog/GetCategory/{categoryId}",
    method: "post",
    pathParams: {
      categoryId: 2,
    },
  });
  return res?.categoryModelDto?.subCategories;
});
const { data: featuredProducts } = useAsyncData("featuredProducts", async () => {
  return await useNopcommerceApi({
    path: "/api-frontend/Product/HomePageProducts",
    method: "get",
  });
});

const { data: bbqProducts } = useAsyncData("bbqProducts", async () => {
  const res = await useNopcommerceApi({
    path: "/api-frontend/Catalog/GetProductsByTag/{productTagId}",
    method: "post",
    pathParams: {
      productTagId: 2,
    },
  });
  return res?.catalogProductsModel?.products;
});

const aboutUs = ref();
const faqGeneral = ref();
const faqOrderDelivery = ref();
const aboutUsItems = computed(() => {
  return aboutUs.value?.body?.split(/(?=<h)/);
});
const faqGeneralItems = computed(() => {
  const topics = faqGeneral.value?.body?.split(/(?=<h)/gi);
  return topics
    ?.map((t) => {
      return {
        title: t?.match(/<h[1-6][^>]*>(.+?)<\/h[1-6]>/gi)?.[0],
        description: t?.replace(/<h[1-6][^>]*>(.+?)<\/h[1-6]>/gi, ""),
      };
    })
    ?.slice(0, 5);
});
const faqOrderDeliveryItems = computed(() => {
  const topics = faqOrderDelivery.value?.body
    ?.split(/(?=<h)/)
    ?.filter((t) => t);
  return topics
    ?.map((t) => {
      return {
        title: t?.match(/<h[1-6][^>]*>(.+?)<\/h[1-6]>/gi)?.[0],
        description: t?.replace(/<h[1-6][^>]*>(.+?)<\/h[1-6]>/gi, ""),
      };
    })
    ?.slice(0, 5);
});

// watchEffect(async () => {
//   if (locale?.value) {
//     aboutUs.value = await getTopic(1);
//     faqGeneral.value = await getTopic(21);
//     faqOrderDelivery.value = await getTopic(22);
//   }
// });
// async function getTopic(id: number) {
//   return await useNopcommerceApi({
//     path: "/api-frontend/Topic/GetTopicDetails/{id}",
//     method: "get",
//     pathParams: {
//       id,
//     },
//   });
// }

const approach = [
  {
    title: t("pages.index.approachStep1Title"),
    description: t("pages.index.approachStep3Description"),
    media: {
      imageSrc: "/images/approach/basket.png",
      sizes: "sm:250px md:192px lg:266px xl:250px xxl:250px 2xl:250px",
      width: "250px",
      height: "220px"
    }
  },
  {
    title: t("pages.index.approachStep2Title"),
    description: t("pages.index.approachStep2Description"),
    media: {
      imageSrc: "/images/approach/box.png",
      sizes: "sm:284px md:192px lg:266px xl:284px xxl:284px 2xl:284px",
      width: "284px",
      height: "220px"
    }
  },
  {
    title: t("pages.index.approachStep3Title"),
    description: t("pages.index.approachStep3Description"),
    media: {
      imageSrc: "/images/approach/truck.png",
      sizes: "sm:300px md:192px lg:266px xl:300px xxl:300px 2xl:300px",
      width: "300px",
      height: "160px"
    }
  },
];

useHead({
  title: t("pages.index.title"),
  meta: [{ name: "description", property: "og:title", content: `${t("pages.index.heroTitle")}` }],
  script: [
    {
      src: "https://player.vimeo.com/api/player.js", // Load vimeo video script for base-video-embed & the-home-video-player component
      type: "text/javascript",
      async: true,
    },
  ],
});

// const { data: promohomepage } = useAsyncData("promohomepage", async () => {
//   const res = await useNopcommerceApi({
//     path: "/api-frontend/Catalog/GetProductsByTag/{productTagId}",
//     method: "post",
//     pathParams: {
//       productTagId: 6,
//     },
//   });

//   return res?.catalogProductsModel?.products;
// });

const reviews = [
  {
    id: 1,
    customerId: 1,
    title: "Heerlijke burgers",
    reviewText: "Sappige,smaakvolle hamburgers, zeker proberen 😀!",
    rating: 4,
    customerName: "Dirk",
    writtenOnStr: "15/05/2023 12:06",
  },
  {
    id: 2,
    customerId: 2,
    title: "Iberico koteletjes",
    reviewText: "Super mals en wat een smaakervaring!!! Kan niet vergeleken worden met een gewone kotelet",
    rating: 5,
    customerName: "Danny",
    writtenOnStr: "10/05/2023",
  },
  {
    id: 3,
    customerId: 3,
    title: "Top van de top.",
    reviewText: "Zonder twijfel dé beste stuk ribeye te krijgen. Jammer dat het zo duur is , 52,50 euro voor een halve kilo. Het is zo lekker dat ik het wil stelen :p ik vergelijk deze ribeye met goud. Zelfs het kijken naar is leuk.!",
    rating: 5,
    customerName: "Kose",
    writtenOnStr: "6/05/2023",
  },
  {
    id: 4,
    customerId: 3,
    title: "Toscane 500 gram",
    reviewText: "Heb voor het eerst een stuk van 500 gram toscane op de bbq getest , reverse sear techniek met een kerntemperatuur van 54 graden , en moet zeggen dat dit wel een van de betere steaks betreft gezamenlijk met butter dry aged holstein ribeye.",
    rating: 5,
    customerName: "Kose",
    writtenOnStr: "29/04/2023",
  },
  {
    id: 5,
    customerId: 5,
    title: "Supper kwaliteit supper lekker",
    reviewText: "Deze bavette is gewoon van top kwaliteit, supper mals en eveneens een karakter volle smaak heerlijk gewoon top Black Agnus vlees van bij een top slager ...Gustor !",
    rating: 4,
    customerName: "Bruno Boghe",
    writtenOnStr: "28/04/2023",
  },
  {
    id: 6,
    customerId: 1,
    title: "Top Vlees van de bovenste plank!",
    reviewText: "Gustor Meat is voor mij de beste, en vooral de service van Rik bij bestellingen Top Vlees Top Service zeer zeer lekker! nog nooit iets beter gevonden!",
    rating: 5,
    customerName: "Mario",
    writtenOnStr: "23/05/2023",
  },

];

defineI18nRoute({
  paths: {
    en: '/en',
    fr: '/fr',
    nl: '/nl'
  }
})

</script>

<style>
.review-swiper {
  overflow-x: scroll;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
}

.review-swiper::-webkit-scrollbar {
  display: none;
}
</style>

