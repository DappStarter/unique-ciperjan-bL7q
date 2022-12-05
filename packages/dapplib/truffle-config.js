require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan random place arrow include fantasy fortune gaze'; 
let testAccounts = [
"0xe68430e37e7353055bcbf6e92c321c3388daf1ea7876b98972578598d6a39a36",
"0xe595203386ff117ca1f3bf7038191e9b6353ee11b1b4b0651dc14811b1792df5",
"0x999d789d89f724648d4fb946292c1b12a88d041a63703f0e1efb632f77fd80b3",
"0x90cdb1c62eba2994cd30d7a2a609b7a0e6d820019b720f06f262c0dd3cdcfefe",
"0x04ab47b7ec3e503ec8ce363d83f37f8d8f97a465628bbe71fd081c8051937ef0",
"0x52e159e4a0aecf9f4fd74028edb125b7c617a26821b1f39b04f075efaac3cc77",
"0x3a3f33eff8af8eada3c8689a5393503acbd0190813636fe044e1173a26dc6f8a",
"0xefe9ae80129eb7b70dfddaa4c4fa8df21884cce9e925cde22ddf3989a3e1c873",
"0x620dde55ccaacd765aedcb5dcc9949d61d1d8ee0d594aa1905f30054944d0894",
"0x568e6fd4733ab1bc425a204e92f71372a5d3db17f5f3a8a98bf4728980fe9231"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

