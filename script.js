// Function to update Bitcoin data dynamically
function updateBitcoinData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/bitcoin')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('bitcoin-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('bitcoin-change').textContent = data.percentageChange + '%';
            document.getElementById('bitcoin-market-cap').textContent = '$' + data.marketCap.toFixed(2);
            
            document.getElementById('btcmain').textContent = '$' + data.lastPrice.toFixed(2);

        })
        .catch(error => console.error('Error fetching Bitcoin data:', error));
}
function updateEthereumData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/eth')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('eth-price').textContent = '$' + data.lastPrice.toFixed(2);
            var ethChangeElement = document.getElementById('eth-change');
            ethChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                ethChangeElement.style.color = 'red';
            }
            document.getElementById('eth-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            document.getElementById('ethmain').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('ethopen').textContent = '$' + data.openPrice.toFixed(2);
            var ethDelta = document.getElementById('ethdelta');
            ethDelta.textContent = data.percentageChange.toFixed(2) + '%';
            if (data.percentageChange < 0) {
                ethDelta.style.color = 'red';
            }else{
                ethDelta.style.color='green';
            }
        })
        .catch(error => console.error('Error fetching ETH data:', error));
}
function updateTetherData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/tether')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('Tether-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('Tether-change').textContent = data.percentageChange + '%';
            document.getElementById('Tether-market-cap').textContent = '$' + data.marketCap.toFixed(2);

            document.getElementById('tethmain').textContent = '$' + data.lastPrice.toFixed(2);
        })
        .catch(error => console.error('Error fetching Tether data:', error));
}

function updateBNBData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/bnb')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('BNB-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('BNB-change').textContent = data.percentageChange + '%';
            document.getElementById('BNB-market-cap').textContent = '$' + data.marketCap.toFixed(2);

            document.getElementById('bnbmain').textContent = '$' + data.lastPrice.toFixed(2);
        })
        .catch(error => console.error('Error fetching BNB data:', error));
}
function updateSolanaData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/solana')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('Solana-price').textContent = '$' + data.lastPrice.toFixed(2);//console.log(1);
            document.getElementById('Solana-change').textContent = data.percentageChange + '%';//console.log(2);
            document.getElementById('Solana-market-cap').textContent = '$' + data.marketCap.toFixed(2);//console.log(3);
        })
        .catch(error => console.error('Error fetching Solana data:', error));
}

function updateLitecoinData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/litecoin')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('Litecoin-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('Litecoin-change').textContent = data.percentageChange + '%';
            document.getElementById('Litecoin-market-cap').textContent = '$' + data.marketCap.toFixed(2);
        })
        .catch(error => console.error('Error fetching Litecoin data:', error));
}

function updateCardanoData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/cardano')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('Cardano-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('Cardano-change').textContent = data.percentageChange + '%';
            document.getElementById('Cardano-market-cap').textContent = '$' + data.marketCap.toFixed(2);
        })
        .catch(error => console.error('Error fetching Cardano data:', error));
}

function updateAvalancheData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/avalanche')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('Avalanche-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('Avalanche-change').textContent = data.percentageChange + '%';
            document.getElementById('Avalanche-market-cap').textContent = '$' + data.marketCap.toFixed(2);
        })
        .catch(error => console.error('Error fetching Avalanche data:', error));
}


// Call the updateBitcoinData function to initially populate the data
updateBitcoinData();
updateEthereumData();
updateTetherData();
updateBNBData();
updateSolanaData();
updateLitecoinData();
updateCardanoData();
updateAvalancheData();
// Example of updating data every 30 seconds (adjust as needed)
setInterval(updateBitcoinData, 30000);  // Update data every 30 seconds
setInterval(updateEthereumData, 30000); 
setInterval(updateTetherData, 30000); 
setInterval(updateBNBData(), 30000); 
setInterval(updateSolanaData(), 30000);
setInterval(updateLitecoinData(), 30000);
setInterval(updateCardanoData(), 30000);
setInterval(updateAvalancheData() , 30000);
