<template>
  <section>
    <div class="highlight-top" :class="bg" />
    <div class="py-xxl" :class="bg">
      <div class="mx-auto max-w-screen-lg" itemscope itemtype="https://schema.org/LocalBusiness">
        <div class="text-center mb-xl">
          <meta itemprop="legalName" content="Archibien" />
          <meta itemprop="name" content="Archibien" />
          <meta itemprop="url" content="https://archibien.com" />
          <!-- <meta itemprop="image" content="assets/logos/logo-archibien-inline.svg" > -->
          <meta itemprop="telephone" content="0188329915" />
          <meta itemprop="description" content="Consultant en construction à Nantes" />
          <meta
            itemprop="address"
            content="La Canopée, 10 bis Rue Sarrazin, 44000 Nantes, France" />
          <div
            class="mb-xs"
            itemprop="aggregateRating"
            itemtype="https://schema.org/AggregateRating"
            itemscope>
            <meta itemprop="reviewCount" content="71" />
            <span class="text-title-l text-darkblue"
              >Archibien est noté
              <span class="font-semibold" itemprop="ratingValue">4.9</span>/5</span
            >
          </div>
          <a
            href="https://share.google/2UUreY3oXjmr7CEXt"
            target="_blank"
            rel="noopener"
            class="justify-center flex items-center space-x-1">
            <span class="text-gray-600"> Moyenne des avis </span>
            <img
              src="/img/logo-google.png"
              fetch-priority="low"
              loading="lazy"
              alt="Logo Google"
              title="Logo Google" />
          </a>
        </div>
        <div class="flex flex-wrap justify-around items-start space-y-4 sm:space-y-0">
          <div
            v-for="rating in selectedRatings"
            :key="rating.name"
            itemprop="review"
            itemscope
            itemtype="https://schema.org/Review"
            class="flex flex-col items-center text-center w-full sm:w-auto"
            style="max-width: 280px">
            <span class="hidden" itemprop="name">Revue client</span>
            <blockquote cite="" class="text-gray-600 mb-4" itemprop="reviewBody">
              “{{ rating.comment }}”
            </blockquote>
            <div class="flex items-center mb-1">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                v-for="i in 5"
                :key="i"
                class="fill-current text-alert-yellow h-4 w-4">
                <path
                  d="M3.61212 15.443C3.22612 15.641 2.78812 15.294 2.86612 14.851L3.69612 10.121L0.173118 6.76501C-0.155882 6.45101 0.0151183 5.87701 0.456118 5.81501L5.35412 5.11901L7.53812 0.792012C7.73512 0.402012 8.26812 0.402012 8.46512 0.792012L10.6491 5.11901L15.5471 5.81501C15.9881 5.87701 16.1591 6.45101 15.8301 6.76501L12.3071 10.121L13.1371 14.851C13.2151 15.294 12.7771 15.641 12.3911 15.443L8.00012 13.187L3.61112 15.443H3.61212Z" />
              </svg>
            </div>
            <span itemprop="author" itemscope itemtype="https://schema.org/Person">
              <span class="text-gray-700 font-semibold" itemprop="name">{{ rating.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="highlight-bottom" :class="bg" />
  </section>
</template>

<script setup lang="ts">
import ratings from '~/data/ratings.json'
import { chooseRandom } from '~/assets/js/utils'

withDefaults(
  defineProps<{
    bg?: string
  }>(),
  {
    bg: 'bg-gray-200',
  }
)

const selectedRatings = useState('randomRatings', () => chooseRandom(ratings, 3))
</script>
