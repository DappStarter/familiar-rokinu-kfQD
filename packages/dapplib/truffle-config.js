require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind evil hidden enter outer gesture'; 
let testAccounts = [
"0x6f859ba0ccafb4705292dd3abdaddc97ad7f9e25ddbb4bf29b2d7857ba183578",
"0x584c81b594acde85c4aae49ee863e0a3cb35ee7933dccdd1487fa75e37c64484",
"0x806d2d492ac7e00ceeeaa4c3f2bf043bea919338eaf42521802442df7041d24b",
"0xe6fb7d401b1ef9c80f01ce0d5d6a9c28ee8153d5aa92e6e5856899a40e38a99e",
"0xc49a031cfa840c7829a0b2e3e545ba20c3ff72c76b49783a43d032326884e80c",
"0x85206781f4190334e592a90006a41d48a3df2f220e816034d25e9e1b7f2ba293",
"0xe20eaa0c1b7c6e46194495c919bd9ecb1f57410f7cf9af7983a3889fe578da81",
"0xe26d04eeb10b0970d868edd587e04ec45cb3f03a675de18942b45b7b8fc79eed",
"0xb1ae7fe345cb36aa805fe95434e069eebfcf322de5d698c2e946071d153da0d3",
"0xf0dbee091f0a6d3ad668a308aeb5522989dce3cb332245fc5f7f37cb9684d818"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

