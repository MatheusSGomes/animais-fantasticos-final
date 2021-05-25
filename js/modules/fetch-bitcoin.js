export default function fetchBitcoin(url, target){
  fetch(url)
    .then(response => response.json())
    .then(bitcoinJSON => {
      const btcPreco = document.querySelector(target)
  
      btcPreco.innerText = ( 1000 / bitcoinJSON.BRL.sell).toFixed(4)
    }).catch((erro) => {
      console.log(Error(erro))
    })
}
