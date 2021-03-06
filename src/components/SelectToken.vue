<template>
  <dialog-base
    :visible.sync="isVisible"
    :title="t('selectToken.title')"
    custom-class="token-select"
  >
    <div class="token-select__search">
      <s-input
        ref="search"
        v-model="query"
        :placeholder="t('selectToken.searchPlaceholder')"
        class="token-search"
        prefix="el-icon-search"
        size="medium"
        border-radius="mini"
      >
        <template #suffix v-if="query">
          <s-button class="s-button--clear" icon="clear-X-16" @click="handleClearSearch" />
        </template>
      </s-input>
    </div>
    <div v-if="filteredTokens && filteredTokens.length > 0" class="token-list">
      <div v-for="token in filteredTokens" @click="selectToken(token)" :key="token.address" class="token-item">
        <s-col>
          <s-row flex justify="start" align="middle">
            <token-logo :token="token" />
            <div class="token-item__info s-flex">
              <div class="token-item__symbol">{{ token.symbol }}</div>
              <div class="token-item__details">{{ getTokenName(token) }}
                <s-tooltip :content="t('selectToken.copy')">
                  <span class="token-item__address" @click="handleCopy(token, $event)">({{ getFormattedAddress(token) }})</span>
                </s-tooltip>
              </div>
            </div>
          </s-row>
        </s-col>
        <div v-if="connected" class="token-item__amount-container">
          <span class="token-item__amount">{{ formatBalance(token) }}</span>
        </div>
      </div>
    </div>
    <div v-else class="token-list token-list__empty">
      <span class="empty-results-icon" />
      {{ t('selectToken.emptyListMessage') }}
    </div>
  </dialog-base>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Asset, AccountAsset } from '@sora-substrate/util'

import TranslationMixin from '@/components/mixins/TranslationMixin'
import DialogMixin from '@/components/mixins/DialogMixin'
import LoadingMixin from '@/components/mixins/LoadingMixin'
import NumberFormatterMixin from '@/components/mixins/NumberFormatterMixin'
import DialogBase from '@/components/DialogBase.vue'
import { Components } from '@/consts'
import { lazyComponent } from '@/router'
import { copyToClipboard, formatAddress, asZeroValue, getAssetBalance, formatAssetBalance } from '@/utils'

const namespace = 'assets'

@Component({
  components: {
    DialogBase,
    TokenLogo: lazyComponent(Components.TokenLogo)
  }
})
export default class SelectToken extends Mixins(TranslationMixin, DialogMixin, LoadingMixin, NumberFormatterMixin) {
  query = ''

  @Prop({ default: () => false, type: Boolean }) readonly connected!: boolean
  @Prop({ default: () => null, type: Object }) readonly asset!: Asset
  @Prop({ default: () => false, type: Boolean }) readonly accountAssetsOnly!: boolean
  @Prop({ default: () => false, type: Boolean }) readonly notNullBalanceOnly!: boolean

  @Getter('assets', { namespace }) assets!: Array<Asset>
  @Getter accountAssetsAddressTable // Wallet store

  @Watch('visible')
  async handleVisibleChangeToFocusSearch (value: boolean): Promise<void> {
    await this.$nextTick()

    if (!value) return

    const input = this.$refs.search as any

    if (input && typeof input.focus === 'function') {
      input.focus()
    }
  }

  get assetsList (): Array<AccountAsset> {
    const { asset, assets, accountAssetsAddressTable, notNullBalanceOnly, accountAssetsOnly } = this

    return assets.reduce((result: Array<AccountAsset>, item: Asset) => {
      if (!item || (asset && item.address === asset.address)) return result

      const accountAsset = accountAssetsAddressTable[item.address]

      if (accountAssetsOnly && !accountAsset) return result

      const balance = accountAsset?.balance

      if (notNullBalanceOnly && asZeroValue(getAssetBalance(accountAsset))) return result

      const prepared = {
        ...item,
        balance
      } as AccountAsset

      return [...result, prepared]
    }, [])
  }

  get filteredTokens (): Array<AccountAsset> {
    if (this.query) {
      const query = this.query.toLowerCase().trim()

      return this.assetsList.filter(t =>
        t.address?.toLowerCase?.() === query ||
        t.symbol?.toLowerCase?.()?.includes?.(query) ||
        t.name?.toLowerCase?.()?.includes?.(query)
      )
    }

    return this.assetsList
  }

  selectToken (token: AccountAsset): void {
    this.query = ''
    this.$emit('select', token)
    this.$emit('close')
    this.isVisible = false
  }

  async handleCopy (token: AccountAsset, event: Event): Promise<void> {
    event.stopImmediatePropagation()
    try {
      await copyToClipboard(token.address)
      this.$notify({
        message: this.t('selectToken.successCopy', { symbol: token.symbol }),
        type: 'success',
        title: ''
      })
    } catch (error) {
      this.$notify({
        message: `${this.t('warningText')} ${error}`,
        type: 'warning',
        title: ''
      })
    }
  }

  getFormattedAddress (token: AccountAsset): string {
    return formatAddress(token.address, 10)
  }

  getTokenName (token: AccountAsset): string {
    return `${token.name || token.symbol}`
  }

  formatBalance (token: AccountAsset): string {
    return formatAssetBalance(token, {
      showZeroBalance: false,
      formattedZero: '-'
    })
  }

  handleClearSearch (): void {
    this.query = ''
  }
}
</script>

<style lang="scss">
.token-select {
  .el-dialog {
    overflow: hidden;
    &__body {
      padding: $inner-spacing-mini 0 $inner-spacing-big !important;
    }
  }
}
</style>

<style lang="scss" scoped>
@include search-item('token-select__search');

$token-item-height: 71px;

.token-search {
  // TODO: Fix input styles (paddings and icon position)
  margin-left: $inner-spacing-big;
  margin-bottom: $inner-spacing-medium;
  width: calc(100% - 2 * #{$inner-spacing-big});
}
.token-item {
  height: $token-item-height;
  padding: 0 $inner-spacing-big;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--s-color-base-background-hover);
  }
  &__info {
    flex-direction: column;
  }
  &__info, &__amount {
    font-size: var(--s-font-size-small);
  }
  &__details {
    color: var(--s-color-base-content-tertiary);
    font-size: var(--s-font-size-mini);
  }
  &__address, &__symbol {
    white-space: nowrap;
  }
  &__address {
    outline: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &__symbol {
    font-size: var(--s-font-size-small);
    margin-bottom: $inner-spacing-mini;
    font-weight: 600;
  }
  &__amount {
    font-weight: 600;
    &-container {
      width: 45%;
      text-align: right;
    }
  }
  .s-col {
    padding-right: $inner-spacing-small;
  }
  .token-logo {
    margin-right: $inner-spacing-medium;
    flex-shrink: 0;
  }
}
.token-list {
  height: calc(#{$token-item-height} * 7);
  overflow: auto;
  &__empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: $inner-spacing-big;
    color: var(--s-color-base-content-tertiary);
    font-feature-settings: $s-font-feature-settings-common;
    line-height: $s-line-height-big;
  }
  .empty-results-icon {
    margin-bottom: $inner-spacing-medium;
    display: block;
    height: 70px;
    width: 70px;
    background: url("~@/assets/img/no-results.svg") center no-repeat;
  }
}
</style>
