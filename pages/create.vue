<script setup lang="ts">
import type { TRecipe } from '~/types/recipe';

const { data: measures } = await useFetch('/api/measures')
const categoryStore = useCategoryStore()

const recipe = reactive<TRecipe>({
    category: "",
    title: "",
    ingridients: [],
    description: "",
    images: []
});

const isDisabled = ref(true)

const ingridient = ref({
    name: "",
    quantity: 0,
    measure: null
})

function addIngridient() {
    recipe.ingridients.push({
        ...ingridient.value
    })
    clearIngridientFields()
}

function clearIngridientFields() {
    ingridient.value.name = ""
    ingridient.value.quantity = 0
    ingridient.value.measure = null
}

function removeIngridient(index: number) {
    recipe.ingridients.splice(index, 1)
}

function handleChange() {
    if (!ingridient.value.name || !ingridient.value.quantity || !ingridient.value.measure) {
        isDisabled.value = true
    } else {
        isDisabled.value = false
    }
}

async function handleSubmit(evt: Event) {
    evt.preventDefault()

    const body: TRecipe = {
        ...recipe
    }

    try {
        const response = await $fetch("/api/recipes", {
            method: "POST",
            body
        })
        navigateTo('/')
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div class="container">
        <CommonTitle title="Добавить рецепт" class="create__title" />

        <form class="form" @submit.prevent="handleSubmit">
            <div class="form__item">
                <h3>Категория</h3>
                <CommonVSelect :options="categoryStore.categories" v-model="recipe.category" select-name="categories" />

            </div>

            <div class="form__item">
                <h3>Заголовок</h3>
                <CommonVInput v-model="recipe.title" type="text" placeholder="Введите заголовок">
                </CommonVInput>
            </div>

            <div class="form__item ingridients">
                <h3>Инргидиенты</h3>

                <div class="ingridients__list" v-if="recipe.ingridients.length">

                    <div class="ingridients__item" v-for="(item, index) in recipe.ingridients"
                        :key="`ingridient-${index}`">
                        <p class="ingridients__text">{{ item.name }} - {{ item.quantity }} {{ item.measure }}</p>
                        <span class="ingridients__remove"><nuxt-icon name="close"
                                @click="removeIngridient(index)"></nuxt-icon></span>
                    </div>
                </div>
                <div class="ingridients__fields" @change="handleChange">
                    <CommonVInput v-model:model="ingridient.name" type="text" placeholder="Введите ингридиент" />
                    <CommonVInput v-model:model="ingridient.quantity" type="number" placeholder="Введите количество" />
                    <CommonVSelect :options="measures" v-model="ingridient.measure" select-name="measures"
                        class="ingridients__select" />
                </div>
            </div>

            <CommonVButton small @click="addIngridient" :disabled="isDisabled">Добавить Инргидиент</CommonVButton>

            <div class="form__item">
                <h3>Способ приготовления</h3>
                <CommonVTextarea placeholder="Введите текст" id="steps" v-model="recipe.description"></CommonVTextarea>
            </div>

            <!-- <div class="form__item">
                <span>+</span>
                <p>Добавить фото</p>
            </div> -->


            <CommonVButton small type="submit">Сохранить</CommonVButton>

        </form>
    </div>
</template>

<style lang="scss">
.create {
    &__title {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}

.form {
    &__item {
        margin-bottom: 1rem;
    }
}

h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 600;
}

.ingridients {
    width: 100%;

    &__list {
        font-size: 1.4rem;
        color: var(--main-2);
    }

    &__item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    &__text {
        width: 100%;
        padding: .6rem;
        background-color: bisque;
        border-radius: 5px;
    }

    &__remove {
        margin-left: 1rem;
        margin-right: 1rem;
        transition: scale .4s;

        svg {
            width: 3rem;
        }

        &:hover {
            cursor: pointer;
            scale: 1.2;
        }
    }

    &__fields {
        display: flex;
        gap: .5rem;
        width: 100%;
    }

    &__select {
        flex: 1;
    }
}
</style>