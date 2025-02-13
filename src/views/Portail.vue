<template>
    <main id="mainPortail">
        <h1>Portail - IUT Orsay</h1>
    </main>
</template>

<style lang="css" scoped>
@import '@/styles/main.css';

#mainPortail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    padding-left: var(--main-padding);
    padding-right: var(--main-padding);
    padding-top: calc(var(--header-height) + 2 * var(--padding) + 15px);
    padding-bottom: calc(var(--header-height) + 2 * var(--padding) + 15px);
}
</style>
