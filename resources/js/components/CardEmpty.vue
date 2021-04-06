<template>
    <div :class="{ 'card card-inactive': card }">
        <div class="card-body text-center">
            <img :src="illustrationSource" alt="" class="img-fluid" style="max-width: 182px;">

            <h1>
                {{title}}
            </h1>

            <slot name="description">
                {{description}}
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch, Vue } from "vue-property-decorator";

    @Component({})
    export default class CardEmpty extends Vue {

        @Prop({ required: false, type: String, default: 'There is nothing to see' })
        title: String|null;

        @Prop({ required: false, type: String, default: '' })
        description: String|null;

        @Prop({required: false, type: Boolean, default: true})
        card: Boolean;

        @Prop({required: false, type: String, default: 'scale'})
        img: string;

        get illustrationSource(): string {
            return `/img/illustrations/${this.img}.svg`;
        }
    }
</script>
