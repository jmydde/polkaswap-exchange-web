<template>
  <dialog-base
    :visible.sync="isVisible"
    :title="t('confirmSupply.title')"
    v-if="firstToken && secondToken"
  >
    <div class="pool-tokens-amount">
      {{ minted }}
    </div>
    <s-row v-if="firstToken && secondToken" flex align="middle" class="pool-tokens">
      <pair-token-logo :first-token="firstToken" :second-token="secondToken" size="small" />
      {{ t('createPair.firstSecondPoolTokens', { first: firstToken.symbol, second: secondToken.symbol }) }}
    </s-row>
    <div class="output-description">
      {{ t('confirmSupply.outputDescription', { slippageTolerance }) }}
    </div>
    <s-divider />
    <info-line
      :label="`${firstToken.symbol} ${t('createPair.deposit')}`"
      :value="formattedFirstTokenValue"
    >
      <template #info-line-prefix>
        <token-logo :token="firstToken" size="small" />
      </template>
    </info-line>
    <info-line
      :label="`${secondToken.symbol} ${t('createPair.deposit')}`"
      :value="formattedSecondTokenValue"
    >
      <template #info-line-prefix>
        <token-logo :token="secondToken" size="small" />
      </template>
    </info-line>
    <info-line
      :label="t('confirmSupply.price')"
      :value="`1 ${firstToken.symbol} = ${priceReversed}`"
      :asset-symbol="secondToken.symbol"
    />
    <info-line :value="`1 ${secondToken.symbol} = ${price}`" :asset-symbol="firstToken.symbol" />
    <info-line :label="t('createPair.shareOfPool')" :value="`${shareOfPool}%`" />
    <template #footer>
      <s-button
        type="primary"
        :loading="parentLoading"
        @click="handleConfirm"
      >
        {{ t('exchange.confirm') }}
      </s-button>
    </template>
  </dialog-base>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'

import TranslationMixin from '@/components/mixins/TranslationMixin'
import DialogMixin from '@/components/mixins/DialogMixin'
import LoadingMixin from '@/components/mixins/LoadingMixin'
import NumberFormatterMixin from '@/components/mixins/NumberFormatterMixin'
import DialogBase from '@/components/DialogBase.vue'
import { lazyComponent } from '@/router'
import { Components } from '@/consts'

@Component({
  components: {
    DialogBase,
    TokenLogo: lazyComponent(Components.TokenLogo),
    InfoLine: lazyComponent(Components.InfoLine),
    PairTokenLogo: lazyComponent(Components.PairTokenLogo)
  }
})
export default class ConfirmTokenPairDialog extends Mixins(TranslationMixin, DialogMixin, LoadingMixin, NumberFormatterMixin) {
  @Prop({ type: String, default: '100' }) readonly shareOfPool!: string
  @Prop({ type: Object }) readonly firstToken!: any
  @Prop({ type: Object }) readonly secondToken!: any
  @Prop({ type: String }) readonly firstTokenValue!: string
  @Prop({ type: String }) readonly secondTokenValue!: string
  @Prop({ type: String }) readonly minted!: string
  @Prop({ type: String }) readonly price!: string
  @Prop({ type: String }) readonly priceReversed!: string
  @Prop({ type: [String, Number] }) readonly slippageTolerance!: string | number

  get formattedFirstTokenValue (): string {
    return this.formatStringValue(this.firstTokenValue, this.firstToken?.decimals)
  }

  get formattedSecondTokenValue (): string {
    return this.formatStringValue(this.secondTokenValue, this.secondToken?.decimals)
  }

  handleConfirm (): void {
    this.$emit('confirm', true)
  }
}
</script>

<style lang="scss" scoped>
.tokens {
  line-height: $s-line-height-big;
  .token {
    &-logo {
      display: inline-block;
      margin-right: $inner-spacing-mini;
    }
  }
  > .s-row:first-child {
    margin-bottom: $inner-spacing-mini;
  }
}

.tokens,
.pair-info {
  padding-left: $inner-spacing-mini;
  padding-right: $inner-spacing-mini;
}

.output-description {
  margin-top: $inner-spacing-mini;
  margin-bottom: $inner-spacing-mini;
  font-size: var(--s-font-size-mini);
  line-height: $s-line-height-big;
}

.pair-info {
  line-height: $s-line-height-big;
  color: var(--s-color-base-content-secondary);
  margin-top: $inner-spacing-big;
  &__line {
    margin-top: $inner-spacing-mini;
  }
}

.price {
  text-align: right;
  div:last-child {
    margin-top: $inner-spacing-mini;
  }
}

.supply-info {
  display: flex;
  justify-content: space-between;
}

.pool-tokens-amount {
  font-size: var(--s-heading1-font-size);
  line-height: $s-line-height-mini;
  letter-spacing: $s-letter-spacing-mini;
}

.pool-tokens {
  margin: $inner-spacing-mini 0;
  font-size: var(--s-heading4-font-size);
  line-height: $s-line-height-medium;
  letter-spacing: $s-letter-spacing-small;
}
</style>
