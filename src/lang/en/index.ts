import { Operation, TransactionStatus } from '@sora-substrate/util'

import { PageNames, NetworkTypes } from '@/consts'
import { EthNetwork } from '@/utils/web3-util'

export default {
  appName: 'Polkaswap',
  soraText: 'SORA',
  ethereumText: 'Ethereum',
  changeNetworkText: 'Change network in Metamask',
  transactionSubmittedText: 'Transaction was submitted',
  unknownErrorText: 'ERROR Something went wrong...',
  connectWalletText: 'Connect account',
  changeAccountText: 'Change account',
  connectedText: 'Connected',
  connectWalletTextTooltip: 'Connect to @:soraText Network with polkadot{.js}',
  selectNodeText: 'Select node',
  bridgeText: 'Bridge',
  comingSoonText: 'Coming Soon',
  disclaimer: 'Disclaimer: This website is maintained by the @:soraText community. Before continuing to use this website, please review the @:polkaswapFaqLink and documentation, which includes a detailed explanation on how Polkaswap works, as well as the Polkaswap Memorandum and Terms of Services, and Privacy Policy. These documents are crucial to a secure and positive user experience. By using Polkaswap, you acknowledge that you have read and understand these documents. You also acknowledge the following: 1) your sole responsibility for compliance with all laws that may apply to your particular use of Polkaswap in your legal jurisdiction; 2) your understanding that the current version of Polkaswap is an alpha version: it has not been fully tested, and some functions may not perform as designed; and 3) your understanding and voluntary acceptance of the risks involved in using Polkaswap, including, but not limited to, the risk of losing tokens. Once more, please do not continue without reading the FAQ, Polkaswap Memorandum and Terms of Services, and Privacy Policy!',
  polkaswapFaqLink: '<a class="link" href="https://wiki.sora.org/polkaswap/polkaswap-faq" target="_blank" rel="nofollow noopener" title="Polkaswap FAQ">Polkaswap FAQ</a>',
  poweredBy: 'Powered by',
  confirmText: 'Confirm',
  confirmTransactionText: 'Confirm transaction in {direction}',
  retryText: 'Retry',
  networkFeeText: 'Network Fee',
  networkFeeTooltipText: 'Network fee is used to ensure @:soraText system\'s growth and stable performance.',
  marketText: 'Market',
  marketAlgorithmText: 'Market algorithm',
  insufficientBalanceText: 'Insufficient {tokenSymbol} balance',
  firstPerSecond: '{first} per {second}',
  pairIsNotCreated: 'Token pair isn\'t created',
  nameText: 'Name',
  addressText: 'Address',
  pageTitle: {
    [PageNames.Swap]: 'Swap',
    [PageNames.Pool]: 'Pool',
    [PageNames.Bridge]: '@:bridgeText',
    [PageNames.About]: 'About',
    [PageNames.Stats]: 'Stats',
    [PageNames.Support]: 'Support',
    [PageNames.Wallet]: 'Wallet',
    [PageNames.CreatePair]: 'Create Pair',
    [PageNames.AddLiquidity]: 'Add Liquidity',
    [PageNames.AddLiquidityId]: 'Add Liquidity',
    [PageNames.RemoveLiquidity]: 'Remove Liquidity',
    [PageNames.PageNotFound]: 'Page Not Found'
  },
  mainMenu: {
    [PageNames.Swap]: 'Swap',
    [PageNames.Pool]: 'Pool',
    [PageNames.Bridge]: '@:bridgeText',
    [PageNames.Farming]: 'Farming',
    [PageNames.Wallet]: 'Account',
    [PageNames.Rewards]: 'Rewards',
    [PageNames.About]: 'About',
    [PageNames.Stats]: 'Stats',
    [PageNames.Support]: 'Support',
    [PageNames.CreatePair]: 'Create Pair'
  },
  networkStatus: {
    online: 'online',
    offline: 'offline',
    checking: 'check'
  },
  social: {
    twitter: 'Twitter',
    telegram: 'Telegram',
    medium: 'Medium',
    reddit: 'Reddit',
    github: 'GitHub'
  },
  footerMenu: {
    faucet: 'Faucet',
    github: 'GitHub',
    sorawiki: '@:soraText Wiki',
    memorandum: 'Polkaswap Memorandum and Terms of Services',
    privacy: 'Privacy Policy'
  },
  helpDialog: {
    title: 'Help',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    termsOfServiceLink: 'https://www.notion.so/Polkaswap-Memorandum-and-Terms-of-Services-dc7f815a6d0a497a924832cc9bda17b8', // 'https://polkaswap.io/terms',
    privacyPolicyLink: 'https://www.notion.so/Polkaswap-Privacy-Policy-d0f26456f2974f0d94734b19f6e5fc70', // 'https://polkaswap.io/privacy',
    appVersion: '@:appName version',
    contactUs: 'Contact us'
  },
  aboutNetworkDialog: {
    title: 'About',
    learnMore: 'Learn more',
    network: {
      title: 'What is @:soraText?',
      description: 'Polkaswap is built on top of the @:soraText Network, and the @:soraText token (XOR) is used for gas/fees and liquidity provision on Polkaswap. @:soraText Network allows for reduced fees, faster transactions and simpler consensus finalization and is focused on delivering interoperability across other blockchain ecosystems like @:(ethereumText).'
    },
    polkadot: {
      title: 'What is polkadot{.js}?',
      description: 'Polkadot{.js} extension is a browser extension available for Firefox and Chrome dedicated to managing accounts for Substrate-based chains, including @:soraText, Polkadot and Kusama. You can add, import, and export accounts and sign transactions or extrinsics that you have initiated from websites you have authorized.'
    }
  },
  node: {
    errors: {
      connection: 'An error occurred while connecting to the node',
      network: 'You selected the node from the different network',
      existing: 'This node is already added: \'{title}\''
    }
  },
  selectNodeDialog: {
    title: '@:soraText Network node selection',
    addNode: 'Add custom node',
    customNode: 'Custom node',
    howToSetupOwnNode: 'How to setup your own @:soraText node',
    select: 'Select',
    connected: 'Connected',
    selectNodeForEnvironment: 'Select a node for {environment} environment:',
    nodeTitle: '{name} hosted by {chain}',
    messages: {
      emptyName: 'Please input the name of the node',
      emptyAddress: 'Please input the address of the node',
      incorrectProtocol: 'Address should starts from ws:// or wss://',
      incorrectAddress: 'Incorrect address'
    }
  },
  buttons: {
    max: 'MAX',
    chooseToken: 'Choose token',
    chooseAToken: 'Choose a token',
    chooseTokens: 'Choose tokens',
    enterAmount: 'Enter amount'
  },
  transfers: {
    from: 'From',
    to: 'To'
  },
  operations: {
    [Operation.Swap]: 'Swap',
    [Operation.Transfer]: 'Transfer',
    [Operation.AddLiquidity]: 'Add Liquidity',
    [Operation.RemoveLiquidity]: 'Remove Liquidity',
    [Operation.CreatePair]: 'Create Pair',
    [Operation.RegisterAsset]: 'Register Asset',
    [Operation.ClaimRewards]: 'Claim Rewards',
    andText: 'and',
    [TransactionStatus.Finalized]: {
      [Operation.Transfer]: 'Sent {amount} {symbol} to {address}',
      [Operation.Swap]: 'Swapped {amount} {symbol} for {amount2} {symbol2}',
      [Operation.AddLiquidity]: 'Supplied {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RemoveLiquidity]: 'Removed {amount} {symbol} and {amount2} {symbol2}',
      [Operation.CreatePair]: 'Supplied {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RegisterAsset]: 'Registered {symbol} asset',
      [Operation.ClaimRewards]: 'Reward claimed successfully {rewards}'
    },
    [TransactionStatus.Error]: {
      [Operation.Transfer]: 'Failed to send {amount} {symbol} to {address}',
      [Operation.Swap]: 'Failed to swap {amount} {symbol} for {amount2} {symbol2}',
      [Operation.AddLiquidity]: 'Failed to supply {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RemoveLiquidity]: 'Failed to remove {amount} {symbol} and {amount2} {symbol2}',
      [Operation.CreatePair]: 'Failed to supply {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RegisterAsset]: 'Failed to register {symbol} asset',
      [Operation.ClaimRewards]: 'Failed to claim rewards {rewards}'
    }
  },
  pageNotFound: {
    title: 'Page not found',
    body: '404'
  },
  metamask: 'MetaMask',
  sora: {
    [NetworkTypes.Devnet]: '@:soraText Devnet',
    [NetworkTypes.Testnet]: '@:soraText Testnet',
    [NetworkTypes.Mainnet]: '@:soraText Mainnet'
  },
  ethereum: {
    [EthNetwork.Mainnet]: 'Ethereum Mainnet',
    [EthNetwork.Ropsten]: 'Ethereum Ropsten',
    [EthNetwork.Rinkeby]: 'Ethereum Rinkeby',
    [EthNetwork.Kovan]: 'Ethereum Kovan',
    [EthNetwork.Goerli]: 'Ethereum Goerli'
  },
  about: {
    title: 'The DEX for the Interoperable Future.',
    description: 'Cross-chain exchange of assets, simple creation and listing of new assets, and the easiest swaps ever. The interoperable future of Polkadot is here and we are at the forefront!',
    trading: {
      title: 'Faster Trading',
      first: 'Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens based on Polkadot and Kusama relay chains, Polkadot and Kusama parachains, and blockchains directly connected via bridges.',
      second: 'Polkaswap removes trusted intermediaries and provides the opportunity for faster trading',
      third: 'Polkaswap is a community project and devs collaborate on the open source code using the'
    },
    liquidity: {
      title: 'Boundless Liquidity',
      first: 'Polkaswap combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.',
      second: 'When traders call the swap function, the liquidity aggregation algorithm will fill orders using the best offers across all liquidity sources. Liquidity sources can be other DEXs, order books, or other API-driven sources.',
      third: 'Because Polkaswap is an open-source project, anyone can add more liquidity sources by making contributions to the Polkaswap codebase.'
    },
    swap: {
      title: 'Swap Any Token',
      first: 'Go beyond the limits of current DEXs by adding tokens from the Polkadot ecosystem as well as other blockchains.',
      second: 'Create, list and trade your own tokens on the SORA network.',
      third: 'Our core infrastructure uses Parity Substrate, which is more scalable than Ethereum, and does not use expensive mining for consensus.'
    },
    pswap: {
      title: 'PSWAP Tokens',
      first: 'PSWAP was created by community governance by voting on its release. It is a utility and governance token used to reward liquidity providers on Polkaswap. Unlike most other reward tokens, PSWAP is burned with transactions and decreases in supply over time.',
      second: 'The 0.3% fee for every swap on the Polkaswap DEX is used to buy back PSWAP tokens, which are then burned. At first, 90% of burned PSWAP tokens are reminted to allocate to liquidity providers, but with time this percentage will decrease to 35% after 4 years.'
    },
    links: {
      first: {
        title: 'Become a SORA Validator',
        desc: 'Secure the future of the SORA network and decentralized apps like Polkaswap, and earn rewards along the way by becoming a SORA validator.'
      },
      second: {
        title: 'Connect a Chain to SORA',
        desc: 'Grow the decentralized world economy by connecting more chains to SORA and Polkaswap using the HASHI bridge protocol.'
      }
    },
    network: 'Polkaswap is built on the SORA Network, focusing on interoperability to connect the rest of the crypto ecosystem to Polkadot.'
  },
  exchange: {
    [PageNames.Swap]: 'Swap',
    [PageNames.Pool]: 'Pool',
    balance: 'Balance',
    insufficientBalance: '@:insufficientBalanceText',
    price: 'Price',
    transactionSubmitted: 'Transaction submitted',
    transactionMessage: '{firstToken} and {secondToken}',
    confirm: 'Confirm',
    ok: 'OK'
  },
  swap: {
    connectWallet: '@:connectWalletText',
    estimated: 'estimated',
    slippageTolerance: 'Slippage Tolerance',
    minReceived: 'Minimum Received',
    maxSold: 'Maximum Sold',
    minReceivedTooltip: 'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.',
    priceImpact: 'Price Impact',
    priceImpactTooltip: 'The difference between the market price and estimated price due to trade size.',
    liquidityProviderFee: 'Liquidity Provider Fee',
    liquidityProviderFeeTooltip: 'A portion of each trade ({liquidityProviderFee}%) goes to liquidity providers as a protocol incentive.',
    networkFee: '@:networkFeeText',
    pairIsNotCreated: '@:pairIsNotCreated',
    networkFeeTooltip: '@:networkFeeTooltipText',
    firstPerSecond: '@:firstPerSecond',
    insufficientAmount: 'Insufficient {tokenSymbol} amount',
    insufficientLiquidity: 'Insufficient liquidity',
    confirmSwap: 'Confirm swap',
    swapOutputMessage: 'Output is estimated. You will receive <span class="min-received-label">at least</span> {transactionValue} or the transaction will revert.',
    rewardsForSwap: 'PSWAP Strategic Rewards'
  },
  pool: {
    connectWallet: '@:connectWalletText',
    connectToWallet: 'Connect to a wallet to add and view your liquidity.',
    liquidityNotFound: 'No liquidity found.',
    addLiquidity: 'Add liquidity',
    removeLiquidity: 'Remove liquidity',
    createPair: 'Create a pair',
    pooledToken: '{tokenSymbol} Pooled',
    pairTokens: '{pair} Pool Tokens',
    poolShare: 'Your pool share',
    unknownAsset: 'Unknown asset',
    description: 'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
  },
  bridge: {
    title: 'HASHI Bridge',
    info: 'Convert tokens between the @:soraText and @:ethereumText networks.',
    balance: 'Balance',
    connectWallet: '@:connectWalletText',
    connected: '@:connectedText',
    changeAccount: '@:changeAccountText',
    changeNetwork: '@:changeNetworkText',
    next: 'Next',
    connectWallets: 'Connect wallets to view respective transaction history.',
    soraNetworkFee: '@:soraText Network Fee',
    ethereumNetworkFee: '@:ethereumText Network Fee',
    tooltipValue: '@:comingSoonText',
    total: 'Total',
    viewHistory: 'View transactions history',
    transactionSubmitted: 'Transaction submitted',
    transactionMessage: '{assetA} for {assetB}',
    notRegisteredAsset: 'Asset {assetSymbol} is not registered'
  },
  selectRegisteredAsset: {
    title: 'Select a token',
    search: {
      title: 'Tokens',
      placeholder: 'Filter by Asset ID, Name or Ticker Symbol',
      networkLabelSora: '@:soraText network tokens',
      networkLabelEthereum: '@:ethereumText network mirror tokens',
      emptyListMessage: 'No results'
    },
    customAsset: {
      title: 'Custom',
      customInfo: 'Important! Custom tokens must be registered in @:(soraText).',
      registerToken: 'Register token',
      addressPlaceholder: 'Asset ID',
      symbolPlaceholder: 'Token symbol',
      empty: 'No tokens found',
      alreadyAttached: 'Token was already attached'
    }
  },
  confirmBridgeTransactionDialog: {
    confirmTransaction: 'Confirm transaction',
    insufficientBalance: '@:insufficientBalanceText',
    changeNetwork: '@:changeNetworkText',
    metamask: '@:metamask',
    sora: '@:soraText',
    confirm: '@:confirmTransactionText',
    buttonConfirm: '@:confirmText'
  },
  bridgeTransaction: {
    viewHistory: 'View transaction in transactions history',
    details: '{from} for {to}',
    for: ' for ',
    steps: {
      step: '{step} of 2',
      step1: '1st',
      step2: '2nd'
    },
    status: {
      pending: '{step} transactions pending...',
      failed: '{step} transactions failed. @:(retryText).',
      confirm: 'Confirm 2nd of 2 transactions...',
      complete: 'Complete',
      convertionComplete: 'Conversion complete'
    },
    statuses: {
      waiting: 'Waiting',
      ready: 'Ready',
      pending: 'Pending',
      frozen: 'Frozen',
      failed: 'Transaction failed',
      done: 'Complete',
      waitingForConfirmation: 'Waiting for confirmation...'
    },
    wait30Block: 'Please wait 30 block confirmations',
    viewInEtherscan: 'View in Etherscan',
    networkTitle: '{network} transaction',
    transactionHash: 'Transaction hash',
    networkInfo: {
      status: 'Status',
      date: 'Date',
      amount: 'Amount',
      transactionFee: 'Transaction Fee',
      total: 'Total'
    },
    successCopy: 'Transaction hash is copied to the clipboard',
    ethereum: '@:ethereumText',
    sora: '@:soraText',
    pending: '<span class="network-title">{network}</span> transaction pending...',
    retry: '@:retryText',
    metamask: '@:metamask',
    confirm: '@:confirmTransactionText',
    newTransaction: 'Create new transaction',
    changeNetwork: '@:changeNetworkText',
    connectWallet: '@:connectWalletText'
  },
  // TODO: Add moment.js (it has translation and formatting)
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  bridgeHistory: {
    title: 'History',
    showHistory: 'Show history',
    clearHistory: 'Clear history',
    empty: 'Your transactions will appear here.',
    filterPlaceholder: 'Filter by Asset ID or Ticker Symbol',
    restoreHistory: 'Restore history'
  },
  selectToken: {
    title: 'Select a token',
    searchPlaceholder: 'Filter by Asset ID, Name or Ticker Symbol',
    emptyListMessage: 'No results',
    copy: 'Copy Asset ID',
    successCopy: '{symbol} Asset ID is copied to the clipboard'
  },
  createPair: {
    title: 'Create a pair',
    deposit: 'Deposit',
    balance: 'Balance',
    pricePool: 'Prices and pool share',
    shareOfPool: 'Share of pool',
    firstPerSecond: '@:firstPerSecond',
    firstSecondPoolTokens: '{first}-{second} Pool tokens',
    connect: 'Connect wallet',
    supply: 'Supply',
    yourPosition: 'Your position',
    yourPositionEstimated: 'Your position (estimated)',
    youWillReceive: 'You will receive',
    remove: 'remove',
    add: 'ADD',
    ok: 'OK',
    networkFee: 'Network fee',
    alreadyCreated: 'Token pair is already created',
    firstLiquidityProvider: 'You are the first liquidity provider',
    firstLiquidityProviderInfo: 'The ratio of tokens you add will set the price of this pool.<br/>Once you are happy with the rate click supply to review.'
  },
  confirmSupply: {
    title: 'You will receive',
    outputDescription: 'Output is estimated. If the price changes more than {slippageTolerance}% your transaction will revert.',
    poolTokensBurned: '{first}-{second} Pool Tokens Burned',
    price: 'Price'
  },
  addLiquidity: {
    title: 'Add liquidity',
    pairIsNotCreated: '@:pairIsNotCreated',
    firstPerSecond: '@:firstPerSecond'
  },
  removeLiquidity: {
    title: 'Remove liquidity',
    liquidity: 'liquidity',
    balance: 'Balance',
    amount: 'Amount',
    input: 'Input',
    output: 'Output',
    price: 'Price',
    remove: 'Remove',
    description: 'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.',
    outputMessage: 'Output is estimated. If the price changes more than {slippageTolerance}% your transaction will revert.',
    confirmTitle: 'You will receive'
  },
  dexSettings: {
    title: 'Transaction settings',
    marketAlgorithm: '@.upper:marketAlgorithmText',
    marketAlgorithmTooltip: {
      main: ' - option to choose between Primary Market (TBC), Secondary Market (XYK) or a combined smart algorithm for guaranteed best price for any given transaction.'
    },
    slippageTolerance: 'SLIPPAGE TOLERANCE',
    slippageToleranceHint: 'Your transaction will revert if the price changes unfavorably by more than this percentage.',
    slippageToleranceValidation: {
      warning: 'Your transaction may fail',
      frontrun: 'Your transaction may be frontrun',
      error: 'Enter a valid slippage percentage'
    },
    custom: 'CUSTOM',
    transactionDeadline: 'TRANSACTION DEADLINE',
    transactionDeadlineHint: 'Transaction will be cancelled if it is pending for more than this long.',
    nodeAddress: 'NODE ADDRESS',
    ip: 'IP',
    port: 'PORT',
    min: 'MIN'
  },
  resultDialog: {
    title: 'Transaction submitted',
    ok: 'OK'
  },
  rewards: {
    title: 'Claim Rewards',
    changeAccount: '@:changeAccountText',
    connected: '@:connectedText',
    networkFee: '@:networkFeeText',
    networkFeeTooltip: '@:networkFeeTooltipText',
    andText: 'and',
    claiming: {
      pending: 'Claiming...',
      success: 'Claimed successfully'
    },
    transactions: {
      confimation: 'Confirm {order} of {total} transactions...',
      success: 'You will receive your rewards shortly',
      failed: '{order} of {total} transactions failed. @:retryText'
    },
    hint: {
      connectAccounts: 'To claim your PSWAP and VAL rewards you need to connect both your @:soraText and @:ethereumText accounts.',
      connectAnotherAccount: 'Connect another @:ethereumText account to check for available PSWAP and VAL rewards.',
      howToClaimRewards: 'To claim your PSWAP and VAL rewards you need to sign 2 transactions in your @:soraText and @:ethereumText accounts respectively. Rewards will be deposited to your @:soraText account.'
    },
    action: {
      connectWallet: '@:connectWalletText',
      connectExternalWallet: 'Connect @:ethereumText account',
      signAndClaim: 'Sign and claim',
      pendingInternal: '@:soraText transaction pending...',
      pendingExternal: '@:ethereumText transaction pending...',
      retry: '@:retryText',
      checkRewards: 'Check',
      insufficientBalance: '@:insufficientBalanceText'
    },
    notification: {
      empty: 'No available claims for this account'
    }
  },
  provider: {
    default: '@:ethereumText provider',
    metamask: '@:metamask',
    messages: {
      checkExtension: '{name} extension is busy, please check it',
      extensionLogin: 'Please login to your {name} extension',
      installExtension: '{name} extension is not found. Please install it!'
    }
  }
}
