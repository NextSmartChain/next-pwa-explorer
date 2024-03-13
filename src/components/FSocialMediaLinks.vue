<template>
    <ul class="f-social-media-links no-markers">
        <li>
            <a href="#" target="_blank" rel="nofollow" title="NEXT on Discord">
                <icon data="@/assets/svg/social-media/discord.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/nextsmartchain" target="_blank" rel="nofollow" title="NEXT on Twitter">
                <icon data="@/assets/svg/social-media/twitter.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://www.reddit.com/r/nextsmartchain/" target="_blank" rel="nofollow" title="NEXT on Reddit">
                <icon data="@/assets/svg/social-media/reddit.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://github.com/NextSmartChain" target="_blank" rel="nofollow" title="NEXT on Github">
                <icon data="@/assets/svg/social-media/github.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://nextsmartchain.medium.com" target="_blank" rel="nofollow" title="NEXT on Medium">
                <icon data="@/assets/svg/social-media/medium.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/company/nextsmartchain/" target="_blank" rel="nofollow" title="NEXT on Linkedin" class="linkedin">
                <icon data="@/assets/svg/social-media/linkedin.svg" width="24" height="24"></icon>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .f-social-media-links {
        --f-social-media-links-color: #{$secondary-color-lighter};

        color: var(--f-social-media-links-color);

        li {
            display: inline-block;
            vertical-align: middle;

            &:not(:last-child) {
                padding-inline-end: 24px;
            }

            @include links() {
                color: inherit;
                transition: color $transition-length ease;
            }

            a:not(.btn):hover {
                color: #fff;
            }
        }

        .linkedin {
            position: relative;
            top: -3px;
        }
    }
</style>
