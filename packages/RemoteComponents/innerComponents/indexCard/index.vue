<template>
    <div
            :class="`bs-indexCard-${customTheme}`"
            style="width: 100%;height: 100%;position: relative;"
    >

    </div>
</template>
<script>
    import commonMixins from '../../../js/mixins/commonMixins'
    import paramsMixins from '../../../js/mixins/paramsMixins'

    export default {
        name: 'Card',
        components: {},
        mixins: [paramsMixins, commonMixins],
        props: {
            // 卡片的属性
            config: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                customClass: {}
            }
        },
        watch: {},
        computed: {
            customize() {
                return this.config.option.customize
            }
        },
        methods: {
            buildOption(config, data) {
                // 文本数据配置原则：选择数据集则以后端返回的数据为主，否则以设置面板中标题设置为准
                if (config.dataSource.businessKey) {
                    config.customize.title = data && data.data && data.data.length ? data.data[0][config.dataSource.metricField] : '暂无数据'
                }
                return config
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
