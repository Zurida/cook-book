<script setup lang="ts">
import { formatDate } from '~/assets/js/utils';
import type { TTag } from '~/types/tag';

type Card = {
  id: number,
  title: string;
  created_at: string;
  tags: TTag[];
  img: string;
}

defineProps<{
  card: Card,
  to: string,
}>()



</script>

<template>
  <NuxtLink :to="to" class="card">
    <div class="card__image" :style="{ backgroundImage: card.img ? `url(${card.img})` : 'none' }"></div>
    <div class="card__description">
      <div class="card__date">Добавлено: {{ formatDate(card.created_at) }}</div>
      <h3 class="card__title" :title="card.title">{{ card.title }}</h3>
      <div class="card__tags">
        <CommonTag v-for="tag in card.tags" :key="tag.title" :tag="tag" />
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card {
  display: inline-block;
  background-color: var(--white);
  border-radius: var(--border-radius);
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(150, 150, 150, 0.623);
  }

  &__image {
    width: 100%;
    aspect-ratio: 1.5;
    background-color: #9ea4a7;
    background-size: cover;
    background-position: center;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  &__date {
    margin-bottom: 1rem;
    font-size: var(--fs-micro);
    color: #797979;
  }

  &__description {
    padding: var(--gap);
  }

  &__title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__tags {
    display: flex;
    align-items: center;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0.1rem;
      height: 5px;
      /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(150, 150, 150, 0.623);
      border-radius: 20px;
      border: 3px solid transparent;
    }
  }
}

.tag {
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
}
</style>