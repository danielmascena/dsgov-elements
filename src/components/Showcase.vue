<template>
    <div>
        <div>
      <AppButton label='Hello' />
      <AppButton label="Primary" type="filled" />
      <AppButton label="Secondary" type="outlined" />
      <app-button>
        <span slot="button-icon">&#8855;</span>
        </app-button>
    </div>
    <div>
      <AppAvatar />
      <AppAvatar iconic />
      <AppAvatar imgSrc="https://picsum.photos/id/823/400" />
    </div>
    <div class="centered">
        <AppCard>
            <h1 slot="header">
                <AppAvatar imgSrc="https://picsum.photos/id/823/400/400" />
                <p>Daniel Mascena</p>
                <span>Frontend Developer</span>
            </h1>
            <div slot="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus quod? Cupiditate saepe dignissimos ab nam id expedita vero cum ea similique labore, architecto voluptates quas! Voluptatum dolorem quibusdam pariatur!</p>
            </div>
            <div slot="footer">
                <AppButton label="Button" />
            </div>
        </AppCard>
    </div>
    </div>
</template>

<script>
import AppButton from './AppButton';
import AppAvatar from './AppAvatar';
import AppCard from './AppCard';

export default {
    name: 'Showcase',
    components: {
        AppButton,
        AppAvatar,
        AppCard,
    }
}
</script>

<style>
.centered {
max-width: 50%;
margin: auto;
}
</style>
