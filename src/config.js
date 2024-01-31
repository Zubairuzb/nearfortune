export const NetworkId = 'mainnet';

export const HelloNearContract = {
  mainnet: 'hello.near-examples.near',
  testnet: 'hello.near-examples.testnet',
}

export const ComponentMap = {
  mainnet: {
    socialDB: 'social.near',
    nearFortune: 'nearfortuneraffle.near/widget/nearfortuneraffle.home',
    nearFortuneRaffle: 'nearfortuneraffle.near/widget/nearfortuneraffle.raffle',
    nearFortuneCollection: 'nearfortuneraffle.near/widget/nearfortuneraffle.collection',
    nearFortunePost: 'nearfortuneraffle.near/widget/nearfortuneraffle.post',
    nearFortuneFooter: 'nearfortuneraffle.near/widget/nearfortuneraffle.footer',
  },
  testnet: {
    socialDB: 'v1.social08.testnet',
    Lido: 'influencer.testnet/widget/Lido',
    HelloNear: 'influencer.testnet/widget/HelloNear',
    LoveNear: 'influencer.testnet/widget/LoveNear',
  }
} 